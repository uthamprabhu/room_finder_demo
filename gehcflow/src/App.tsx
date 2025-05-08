// App.tsx
import { Routes, Route, Navigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

// App.tsx
const LanguageWrapper = ({ children }: { children: React.ReactNode }) => {
  const { lang } = useParams();
  const { i18n } = useTranslation();

  useEffect(() => {
    if (lang && i18n.language !== lang) {
      i18n.changeLanguage(lang);  // This updates language based on URL
    }
  }, [lang, i18n]);

  return <>{children}</>;
};


const App = () => {
  const { lang } = useParams();
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/en" />} />
      <Route path="/:lang/*" element={
        <LanguageWrapper>
          <div key={lang}>
            <Routes>
              <Route path="" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
            </Routes>
          </div>
        </LanguageWrapper>
      } />
    </Routes>
  );
};

export default App;
