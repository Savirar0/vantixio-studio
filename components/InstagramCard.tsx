
import React from 'react';
import InstagramPost from './InstagramPost';

const InstagramCard: React.FC = () => {
  const post1 = `<blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/reel/DR4nseuAXdX/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14"></blockquote>`;
  const post2 = `<blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/DRjXODzD0WL/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14"></blockquote>`;
  const post3 = `<blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/DReNXK8D_n4/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14"></blockquote>`;
  const post4 = `<blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/DRpKUs-Dwio/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14"></blockquote>`;


  return (
    <div className="bg-gray-100 dark:bg-gray-800 p-8">
      <h2 className="text-2xl font-bold text-center mb-8">Follow us on Instagram</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-start">
        <div className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden border border-gray-200 dark:border-white/10">
          <InstagramPost embedCode={post1} />
        </div>
        <div className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden border border-gray-200 dark:border-white/10">
          <InstagramPost embedCode={post2} />
        </div>
        <div className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden border border-gray-200 dark:border-white/10">
          <InstagramPost embedCode={post3} />
        </div>
        <div className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden border border-gray-200 dark:border-white/10">
          <InstagramPost embedCode={post4} />
        </div>
      </div>
    </div>
  );
};

export default InstagramCard;
