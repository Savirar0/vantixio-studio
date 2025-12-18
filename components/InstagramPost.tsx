
import React, { useEffect } from 'react';

interface InstagramPostProps {
  embedCode: string;
}

const InstagramPost: React.FC<InstagramPostProps> = ({ embedCode }) => {
  useEffect(() => {
    const processInstagramEmbed = () => {
      if ((window as any).instgrm) {
        (window as any).instgrm.Embeds.process();
      }
    };

    if (document.querySelector('script[src="//www.instagram.com/embed.js"]')) {
      processInstagramEmbed();
    } else {
      const script = document.createElement('script');
      script.src = "//www.instagram.com/embed.js";
      script.async = true;
      script.onload = processInstagramEmbed;
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, [embedCode]);

  const style = `
    .instagram-media {
      width: 100% !important;
    }
  `;

  return (
    <div>
      <style>{style}</style>
      <div dangerouslySetInnerHTML={{ __html: embedCode }} />
    </div>
  );
};

export default InstagramPost;
