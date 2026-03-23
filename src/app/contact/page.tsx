export const metadata = {
  title: 'Get in Touch',
  description: "Contact Nicolas Gomes for collaboration, freelance opportunities, or a technical discussion.",
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
