
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
  canonical?: string;
  schema?: Record<string, any>;
  children?: React.ReactNode;
}

/**
 * Компонент для управления SEO-метаданными страниц
 * Использует react-helmet-async для вставки мета-тегов
 */
const SEO = ({
  title = 'Оформление карты АТЭС (APEC) для бизнеса | Безвизовый въезд в 21 страну',
  description = 'Профессиональное оформление карты АТЭС (APEC) для бизнесменов и руководителей. Безвизовый въезд в 21 страну Азиатско-Тихоокеанского региона.',
  keywords = 'карта АТЭС, APEC, бизнес карта, безвизовый въезд, деловые поездки, международный бизнес',
  ogImage = 'https://ваш-сайт.ru/og-image.jpg',
  ogUrl = 'https://ваш-сайт.ru/',
  canonical = 'https://ваш-сайт.ru/',
  schema,
  children,
}: SEOProps) => {
  // Формируем JSON-LD разметку для Schema.org
  const schemaOrgJSONLD = schema || {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description,
    url: canonical,
  };

  return (
    <Helmet>
      {/* Основные мета-теги */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Канонический URL */}
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph мета-теги */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="ru_RU" />
      
      {/* Twitter Card мета-теги */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Schema.org разметка */}
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>
      
      {/* Любые дополнительные мета-теги, переданные как дочерние элементы */}
      {children}
    </Helmet>
  );
};

export default SEO;
