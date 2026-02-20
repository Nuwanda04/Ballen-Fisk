import React from 'react';

/**
 * Parses a string containing <strong> tags and renders it with actual strong elements.
 * @param {string} text The text to parse.
 * @returns {React.ReactNode} The parsed text with strong elements.
 */
export const renderWithStrong = (text) => {
  if (!text) return null;
  const parts = text.split(/(<strong>.*?<\/strong>|<br class="mobile-only" \/>)/g);
  return parts.map((part, index) => {
    if (part.startsWith('<strong>') && part.endsWith('</strong>')) {
      return <strong key={index} className="font-bold text-white">{part.replace(/<\/?strong>/g, '')}</strong>;
    }
    if (part === '<br class="mobile-only" />') {
      return <br key={index} className="block md:hidden" />;
    }
    return part;
  });
};

/**
 * Same as above but for dark text contexts where strong should be dark.
 */
export const renderWithStrongDark = (text) => {
  if (!text) return null;
  const parts = text.split(/(<strong>.*?<\/strong>)/g);
  return parts.map((part, index) => {
    if (part.startsWith('<strong>') && part.endsWith('</strong>')) {
      return <strong key={index} className="font-bold text-[#0B132B]">{part.replace(/<\/?strong>/g, '')}</strong>;
    }
    return part;
  });
};
