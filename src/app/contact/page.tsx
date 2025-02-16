import Form from 'next/form'

import styles from './page.module.scss';

export const metadata = {
  title: 'Get in Touch |  Nicolas Gomes',
  description: "Let's connect! Contact me for collaboration, freelance work, or any development inquiries.",
}

export default function ContactPage() {
  return (
    <div className={styles.contact}>
      <Form className={styles.form} action="">
        <div>
          <input name="First Name" />
          <input name="Last Name" />
        </div>
        <input className={styles.classic} name="Email" />
        <input name="Subject" />
        <input name="Question" />
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
}