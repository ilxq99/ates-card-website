
import React from 'react';

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
 * Упрощенный компонент SEO, который добавляет метаданные в head документа
 * без использования внешних библиотек
 */
const SEO: React.FC<SEOProps> = ({ 
  title = 'Оформление карты АТЭС (APEC) для бизнеса | Безвизовый въезд в 21 страну',
  description = 'Профессиональное оформление карты АТЭС (APEC) для бизнесменов и руководителей. Безвизовый въезд в 21 страну Азиатско-Тихоокеанского региона.',
  keywords = 'карта АТЭС, APEC, бизнес карта, безвизовый въезд, деловые поездки, международный бизнес',
  ogImage = 'https://ваш-сайт.ru/og-image.jpg',
  ogUrl = 'https://ваш-сайт.ru/',
  canonical = 'https://ваш-сайт.ru/',
  schema
}) => {
  // Обновляем title при монтировании компонента
  React.useEffect(() => {
    // Обновляем заголовок страницы
    document.title = title;
    
    // Обновляем или создаем метатеги если они не существуют
    updateOrCreateMetaTag('description', description);
    updateOrCreateMetaTag('keywords', keywords);
    
    // Open Graph теги
    updateOrCreateMetaTag('og:title', title, 'property');
    updateOrCreateMetaTag('og:description', description, 'property');
    updateOrCreateMetaTag('og:image', ogImage, 'property');
    updateOrCreateMetaTag('og:url', ogUrl, 'property');
    updateOrCreateMetaTag('og:type', 'website', 'property');
    
    // Twitter Card теги
    updateOrCreateMetaTag('twitter:card', 'summary_large_image');
    updateOrCreateMetaTag('twitter:title', title);
    updateOrCreateMetaTag('twitter:description', description);
    updateOrCreateMetaTag('twitter:image', ogImage);
    
    // Канонический URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonical);
    
    // Schema.org JSON-LD
    if (schema) {
      // Удаляем старый скрипт JSON-LD если он существует
      const existingScript = document.querySelector('script[type="application/ld+json"]');
      if (existingScript) {
        existingScript.remove();
      }
      
      // Создаем новый скрипт JSON-LD
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    }
    
    // Очистка при размонтировании
    return () => {
      // Удаляем скрипт Schema.org при необходимости
      if (schema) {
        const jsonLdScript = document.querySelector('script[type="application/ld+json"]');
        if (jsonLdScript) {
          jsonLdScript.remove();
        }
      }
    };
  }, [title, description, keywords, ogImage, ogUrl, canonical, schema]);
  
  // Служебная функция для обновления или создания метатегов
  function updateOrCreateMetaTag(name: string, content: string, nameAttr: string = 'name') {
    let metaTag = document.querySelector(`meta[${nameAttr}="${name}"]`);
    
    if (!metaTag) {
      metaTag = document.createElement('meta');
      metaTag.setAttribute(nameAttr, name);
      document.head.appendChild(metaTag);
    }
    
    metaTag.setAttribute('content', content);
  }
  
  // Компонент не рендерит ничего в DOM
  return null;
};

export default SEO;
