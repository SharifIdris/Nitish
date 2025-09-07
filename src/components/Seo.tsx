import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SeoProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  tags?: string[];
  noIndex?: boolean;
}

const Seo: React.FC<SeoProps> = ({
  title = 'CrissCross Esports - Championship Gaming Organization',
  description = 'CrissCross Esports is a leading professional gaming organization competing in Valorant, Apex Legends, League of Legends, and Counter-Strike. Join our community of champions.',
  image = 'https://images.pexels.com/photos/3419736/pexels-photo-3419736.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop',
  url = 'https://crisscross.gg',
  type = 'website',
  publishedTime,
  modifiedTime,
  author,
  tags = ['esports', 'gaming', 'valorant', 'apex legends', 'league of legends', 'counter-strike', 'professional gaming', 'tournaments'],
  noIndex = false
}) => {
  const siteTitle = 'CrissCross Esports';
  const fullTitle = title.includes(siteTitle) ? title : `${title} | ${siteTitle}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={tags.join(', ')} />
      
      {/* Robots */}
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={siteTitle} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@CrissCrossGG" />
      <meta name="twitter:creator" content="@CrissCrossGG" />
      
      {/* Article specific tags */}
      {type === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {type === 'article' && author && (
        <meta property="article:author" content={author} />
      )}
      {type === 'article' && tags.map((tag, index) => (
        <meta key={index} property="article:tag" content={tag} />
      ))}
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#00C2FF" />
      <meta name="msapplication-TileColor" content="#00C2FF" />
      
      {/* Structured Data for Organization */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SportsOrganization",
          "name": "CrissCross Esports",
          "description": description,
          "url": "https://crisscross.gg",
          "logo": "https://crisscross.gg/logo.png",
          "sameAs": [
            "https://twitter.com/CrissCrossGG",
            "https://instagram.com/crisscrossesports",
            "https://youtube.com/crisscrossesports",
            "https://twitch.tv/crisscrossesports"
          ],
          "sport": "Esports",
          "foundingDate": "2018",
          "location": {
            "@type": "Place",
            "name": "Los Angeles, CA"
          }
        })}
      </script>
    </Helmet>
  );
};

export default Seo;