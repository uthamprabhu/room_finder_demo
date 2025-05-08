// pages/About.tsx
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../components/LanguageSwitcher';

const About = () => {
    const { t } = useTranslation();

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-green-100">
            <h1 className="text-4xl font-bold mb-4">{t('about')}</h1>
            <LanguageSwitcher />
        </div>
    );
};

export default About;
