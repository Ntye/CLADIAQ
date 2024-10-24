
import React, { useEffect } from 'react';

const Chatbot = () => {
  useEffect(() => {
    // Create and append the Botpress webchat script
    const webchatScript = document.createElement('script');
    webchatScript.src = 'https://cdn.botpress.cloud/webchat/v2/inject.js';
    webchatScript.async = true;
    document.body.appendChild(webchatScript);

    // Create and append the Botpress configuration script
    const configScript = document.createElement('script');
    configScript.src = 'https://mediafiles.botpress.cloud/47440e41-a87b-4b64-acab-b911008f6e8b/webchat/v2/config.js';
    configScript.async = true;
    document.body.appendChild(configScript);

    // Initialize the bot when the Botpress webchat script is loaded
    webchatScript.onload = () => {
      if (window.botpressWebChat) {
        window.botpressWebChat.init({
          botId: 'd61d77b6-3913-4892-8bc6-f39396a4c3ce',
          hostUrl: 'https://cdn.botpress.cloud/webchat/v2',
          // messagingUrl: 'https://messaging.botpress.cloud',
          // clientId: '12'
        });
      } else {
        console.error('Botpress WebChat script failed to load.');
      }
    };

    // Clean up the script elements when the component unmounts
    return () => {
      document.body.removeChild(webchatScript);
      document.body.removeChild(configScript);
    };
  }, []);

  return <div id="webchat" />;
};

export default Chatbot;