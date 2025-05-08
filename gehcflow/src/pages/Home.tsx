// pages/Home.tsx
import { useTranslation } from 'react-i18next';
import { useParams, Link } from 'react-router-dom';
import LanguageSwitcher from '../components/LanguageSwitcher';

const Home = () => {
  const { t } = useTranslation();
  const { lang } = useParams();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 gap-4">
      <h1 className="text-4xl font-bold">{t('welcome')}</h1>
      <div className="flex gap-4">
        <Link to={`/${lang}/about`} className="text-blue-600 underline">{t('about')}</Link>
        <Link to={`/${lang}/contact`} className="text-blue-600 underline">{t('contact')}</Link>
      </div>
      <LanguageSwitcher />
    </div>
  );
};

export default Home;
