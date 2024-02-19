import { useEffect } from 'react';
import { useRouter } from 'next/router';

const NEUROLEAD_ID = process.env.NEXT_PUBLIC_NEUROLEAD_ID;

const Chatbot = ()  => {
  const router = useRouter();

  useEffect(() => {
    if (router.pathname === '/' || router.pathname === '/support-plans') { 
      const script = document.createElement('script');
      script.defer = true;
      script.type = 'text/javascript';
      script.src = 'https://cdn.leadster.com.br/neurolead/neurolead.min.js';
      document.head.appendChild(script);

      window.neuroleadId = NEUROLEAD_ID;
    }
  }, [router.pathname]);

  return null; 
}


export default Chatbot;