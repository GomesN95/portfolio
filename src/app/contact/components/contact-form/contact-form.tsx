'use client';
import Link from 'next/link';
import { FormEvent, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruckFast } from '@fortawesome/free-solid-svg-icons';

import { InputForm } from '@/components/input-form/input-form';
import { NgButton } from '@/components/button/button';

import styles from './contact-form.module.scss';

export default function ContactForm() {
  const [loading, setLoading] = useState<boolean>(false);
  const [responseMessage, setResponseMessage] = useState<string>('');

  const submitForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setResponseMessage('');

    const formData = new FormData(event.currentTarget);
    const data = {
      firstName: formData.get('firstName'),
      lastName: formData.get('LastName'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (result.success) {
        setResponseMessage(result.message);
      } else {
        setResponseMessage('Failed to submit the message.');
      }
    } catch (error) {
      console.error('Error submitting message:', error);
      setResponseMessage('An error occurred while submitting the message.');
    } finally {
      setLoading(false);
    }
    setLoading(false);
  }

  return (
    <section>
      {
        !responseMessage
          ? (
            <form className={styles.contactForm} onSubmit={submitForm}>
              <div className={styles.name}>
                <InputForm inputType='input' name="firstName" label='First Name' placeholder='Nicolas' />
                <InputForm inputType='input' name="LastName" label='Last Name' placeholder='Gomes' />
              </div>
              <InputForm inputType='input' name="email" label='Email' placeholder='xxx@xxxx.xx' />
              <InputForm inputType='input' name="subject" label='Subject' placeholder='Opportunity: ...' />
              <InputForm inputType='textarea' name="message" label='Message' placeholder='Hello, ....' />
              <NgButton content='Submit' type="submit" loading={loading} disabled={loading} />
            </form>
          )
          : (
            <section className={styles.response}>
              <p>{responseMessage} <FontAwesomeIcon icon={faTruckFast} /></p>
              <Link href="/">
                <NgButton content='Back to Home' type="button" />
              </Link>
            </section>
          )
      }

    </section>
  );
}