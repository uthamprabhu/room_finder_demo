import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useNavigate, useParams } from 'react-router-dom';
import LanguageSwitcher from '../components/LanguageSwitcher';

// Define the schema using Zod for validation
const loginSchema = z.object({
  userId: z.string().min(1, 'User ID is required'),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
});

// Types for the form data
type LoginData = {
  userId: string;
  password: string;
};

const Home = () => {
  const { t } = useTranslation();
  const { lang } = useParams()
  const navigate = useNavigate();

  // Set up react-hook-form with Zod resolver for validation
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
  });

  // Handle form submission
  const onSubmit = (data: LoginData) => {
    const { userId, password } = data;

    // For simplicity, hardcoding login credentials
    if (userId === 'admin' && password === 'admin123') {
      navigate(`/${lang}/admin-dashboard`);
    } else if (userId === 'agent' && password === 'agent123') {
      navigate(`/${lang}/agent-dashboard`);
    } else {
      navigate(`/${lang}/external-user-dashboard`);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4">{t('login')}</h1>

        <form onSubmit={handleSubmit(onSubmit)}>

          <div className="relative mb-4">
            <input
              type="text"
              id="userId"
              placeholder=" "
              {...register('userId')}
              className="peer h-12 w-full border border-gray-300 rounded-md px-3 pt-5 pb-1 text-sm placeholder-transparent focus:outline-none focus:border-blue-500"
            />
            <label
              htmlFor="userId"
              className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-600 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-500"
            >
              {t('userId')}
            </label>
            {errors.userId && (
              <p className="text-red-500 text-sm mt-1">{errors.userId.message}</p>
            )}
          </div>


          <div className="relative mb-4">
            <input
              type="password"
              id="password"
              {...register('password')}
              placeholder=" "
              className="peer h-12 w-full border border-gray-300 rounded-md px-3 pt-4 pb-1 text-sm placeholder-transparent focus:outline-none focus:border-blue-500"
            />
            <label
              htmlFor="password"
              className="absolute left-3 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-blue-500"
            >
              {t('password')}
            </label>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
            )}
          </div>


          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
          >
            {t('login')}
          </button>
        </form>
        <div>
          <h1>hheleeo</h1>
        </div>
      </div>
      <LanguageSwitcher />
    </div>
  );
};

export default Home;
