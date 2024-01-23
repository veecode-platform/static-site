import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Chatbot = ()  => {
  const router = useRouter();

  useEffect(() => {
    if (router.pathname === '/') { 
      const script = document.createElement('script');
      script.defer = true;
      script.type = 'text/javascript';
      script.src = 'https://cdn.leadster.com.br/neurolead/neurolead.min.js';
      document.head.appendChild(script);

      window.neuroleadId = '0sZSqQ97JALqVniW4NtoeFhKu';
    }
  }, [router.pathname]);

  return null; 
}


export default Chatbot;