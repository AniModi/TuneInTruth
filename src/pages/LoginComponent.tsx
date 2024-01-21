import { useEffect } from 'react';
import './LoginComponent.css';

interface MainPageProps {
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const LoginComponent: React.FC<MainPageProps> = ({ setPage }) => {
  useEffect(() => {
    const checkStorage = async () => {
      const [token, email] = await Promise.all([
        chrome.storage.sync.get(['token']),
        chrome.storage.sync.get(['email']),
      ]);

      if (token && email && token.token && email.email) {
        setPage(0);        
      }
    };

    checkStorage();

    const interval = setInterval(checkStorage, 2000);

    return () => clearInterval(interval);
  }, [setPage]);

  return (
    <div className="login-container">
      <a
        href="https://tuneintruth-2.vercel.app/api/auth/signin"
        target="_blank"
        className="google-connect-button"
        rel="noreferrer"
      >
        Connect with Google
      </a>
    </div>
  );
};

export default LoginComponent;
