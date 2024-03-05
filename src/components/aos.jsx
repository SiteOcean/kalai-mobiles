import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AosFunction = ({ children }) => {
  useEffect(() => {
    AOS.init({
      // Customize AOS settings here
      duration: 800,
      easing: 'ease-in-out',
    });
  }, []);

  return <div>{children}</div>;
};

export default AosFunction;
