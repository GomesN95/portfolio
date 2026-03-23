'use client';

import Link from 'next/link';
import { FormEvent, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruckFast } from '@fortawesome/free-solid-svg-icons';

import { InputForm } from '@/components/input-form/input-form';
import { NgButton } from '@/components/button/button';
import { ContactPayload, validateContactPayload } from '@/lib/contact';

import styles from './contact-form.module.scss';

export default function ContactForm() {
  const [loading, setLoading] = useState<boolean>(false);
  const [responseMessage, setResponseMessage] = useState<string>('');
  const [errors, setErrors] = useState<Partial<Record<keyof ContactPayload, string>>>({});

  const submitForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setResponseMessage('');
    setErrors({});

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    };

    const validation = validateContactPayload(payload);

    if (!validation.data) {
      const nextErrors: Partial<Record<keyof ContactPayload, string>> = {};

      validation.errors.forEach((error) => {
        if (error.startsWith('First name')) nextErrors.firstName = error;
        if (error.startsWith('Last name')) nextErrors.lastName = error;
        if (error.startsWith('Please provide')) nextErrors.email = error;
        if (error.startsWith('Subject')) nextErrors.subject = error;
        if (error.startsWith('Message')) nextErrors.message = error;
      });

      setErrors(nextErrors);
      setLoading(false);
      return;
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(validation.data),
      });

      const result = await res.json();

      if (res.ok && result.success) {
        setResponseMessage(result.message);
        form.reset();
      } else {
        setResponseMessage(result.message ?? 'Failed to submit the message.');
      }
    } catch (error) {
      console.error('Error submitting message:', error);
      setResponseMessage('An error occurred while submitting the message.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <section aria-live="polite">
      {
        !responseMessage
          ? (
            <form className={styles.contactForm} onSubmit={submitForm}>
              <div className={styles.name}>
                <InputForm inputType='input' name="firstName" label='First Name' placeholder='Nicolas' autoComplete="given-name" required disabled={loading} error={errors.firstName} />
                <InputForm inputType='input' name="lastName" label='Last Name' placeholder='Gomes' autoComplete="family-name" required disabled={loading} error={errors.lastName} />
              </div>
              <InputForm inputType='input' name="email" label='Email' placeholder='xxx@xxxx.xx' type="email" autoComplete="email" required disabled={loading} error={errors.email} />
              <InputForm inputType='input' name="subject" label='Subject' placeholder='Opportunity: ...' autoComplete="off" required disabled={loading} error={errors.subject} />
              <InputForm inputType='textarea' name="message" label='Message' placeholder='Hello, ....' autoComplete="off" required disabled={loading} error={errors.message} />
              <NgButton content='Submit' type="submit" loading={loading} disabled={loading} ariaLabel="Submit contact form" />
            </form>
          )
          : (
            <section className={styles.response} aria-live="polite">
              <p>{responseMessage} <FontAwesomeIcon icon={faTruckFast} /></p>
              <Link href="/">
                <NgButton content='Back to Home' type="button" ariaLabel="Go back to the home page" />
              </Link>
            </section>
          )
      }

    </section>
  );
}
