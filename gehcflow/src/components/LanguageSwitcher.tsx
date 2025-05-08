// components/LanguageSwitcher.tsx
import { useNavigate, useParams } from 'react-router-dom';

const LanguageSwitcher = () => {
  const navigate = useNavigate();
  const { lang } = useParams();
  const switchTo = lang === 'en' ? 'fr' : 'en';

  const handleSwitch = () => {
    const newPath = window.location.pathname.replace(`/${lang}`, `/${switchTo}`);
    navigate(newPath);
  };

  return (
    <div className="absolute top-4 right-4">
      <button
        onClick={handleSwitch}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        Switch to {switchTo.toUpperCase()}
      </button>
    </div>
  );
};

export default LanguageSwitcher;
