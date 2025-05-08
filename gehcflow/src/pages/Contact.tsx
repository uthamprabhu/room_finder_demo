// pages/Contact.tsx
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../components/LanguageSwitcher';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-yellow-100">
      <h1 className="text-4xl font-bold mb-4">{t('contact')}</h1>
      <LanguageSwitcher />
    </div>
  );
};

export default Contact;
