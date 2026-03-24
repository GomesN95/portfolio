"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruckFast } from "@fortawesome/free-solid-svg-icons";

import { InputForm } from "@/components/input-form/input-form";
import { NgButton } from "@/components/button/button";
import { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { ContactPayload, getContactErrorMessage, validateContactPayload } from "@/lib/contact";

import styles from "./contact-form.module.scss";

export default function ContactForm(props: { locale: Locale }) {
  const [loading, setLoading] = useState<boolean>(false);
  const [responseMessage, setResponseMessage] = useState<string>("");
  const [errors, setErrors] = useState<Partial<Record<keyof ContactPayload, string>>>({});

  const dictionary = getDictionary(props.locale);

  const submitForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setResponseMessage("");
    setErrors({});

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    const validation = validateContactPayload(payload);

    if (!validation.data) {
      const nextErrors: Partial<Record<keyof ContactPayload, string>> = {};

      validation.errors.forEach((error) => {
        const message = getContactErrorMessage(error, props.locale);

        if (error === "firstNameMin") nextErrors.firstName = message;
        if (error === "lastNameMin") nextErrors.lastName = message;
        if (error === "invalidEmail") nextErrors.email = message;
        if (error === "subjectMin") nextErrors.subject = message;
        if (error === "messageMin") nextErrors.message = message;
      });

      setErrors(nextErrors);
      setLoading(false);
      return;
    }

    try {
      const res = await fetch(`/api/contact?locale=${props.locale}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(validation.data),
      });

      const result = await res.json();

      if (res.ok && result.success) {
        setResponseMessage(result.message);
        form.reset();
      } else {
        setResponseMessage(result.message ?? dictionary.contact.fallbackSubmitError);
      }
    } catch (error) {
      console.error("Error submitting message:", error);
      setResponseMessage(dictionary.contact.fallbackError);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section aria-live="polite">
      {!responseMessage ? (
        <form className={styles.contactForm} onSubmit={submitForm}>
          <div className={styles.name}>
            <InputForm inputType="input" name="firstName" label={dictionary.contact.firstName} placeholder="Nicolas" autoComplete="given-name" required disabled={loading} error={errors.firstName} />
            <InputForm inputType="input" name="lastName" label={dictionary.contact.lastName} placeholder="Gomes" autoComplete="family-name" required disabled={loading} error={errors.lastName} />
          </div>
          <InputForm inputType="input" name="email" label={dictionary.contact.email} placeholder="xxx@xxxx.xx" type="email" autoComplete="email" required disabled={loading} error={errors.email} />
          <InputForm inputType="input" name="subject" label={dictionary.contact.subject} placeholder="Opportunity: ..." autoComplete="off" required disabled={loading} error={errors.subject} />
          <InputForm inputType="textarea" name="message" label={dictionary.contact.message} placeholder="Hello, ...." autoComplete="off" required disabled={loading} error={errors.message} />
          <NgButton content={dictionary.contact.submit} type="submit" loading={loading} disabled={loading} ariaLabel={dictionary.contact.submitAria} />
        </form>
      ) : (
        <section className={styles.response} aria-live="polite">
          <p>
            {responseMessage} <FontAwesomeIcon icon={faTruckFast} />
          </p>
          <Link href={`/${props.locale}`}>
            <NgButton content={dictionary.contact.backHome} type="button" ariaLabel={dictionary.contact.backHomeAria} />
          </Link>
        </section>
      )}
    </section>
  );
}
