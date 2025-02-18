export const metadata = {
  title: 'Get in Touch | Nicolas Gomes',
  description: "Let's connect! Contact me for collaboration, freelance work, or any development inquiries.",
}

import ContactForm from './components/contact-form/contact-form';

import styles from './contact.module.scss';

export default function ContactPage() {

  return (
    <div className={styles.contactPage}>
      <ContactForm />
    </div>
  );
}
