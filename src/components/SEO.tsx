import React from "react";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
  canonical?: string;
  schema?: Record<string, any>;
  structuredData?: any[];
  children?: React.ReactNode;
}

/**
 * Современный SEO компонент с расширенными метатегами
 * Включает Open Graph, Twitter Cards, Schema.org разметку
 */
const SEO: React.FC<SEOProps> = ({
  title = "Оформление карты АТЭС (APEC) для бизнеса | Безвизовый въезд в 21 страну",
  description = "Профессиональное оформление карты АТЭС (APEC) для бизнесменов и руководителей. Безвизовый въезд в 21 страну Азиатско-Тихоокеанского региона.",
  keywords = "карта АТЭС, APEC, бизнес карта, безвизовый въезд, деловые поездки, международный бизнес",
  ogImage = "https://apec-cards.ru/images/og-apec-card.jpg",
  ogUrl = "https://apec-cards.ru/",
  canonical = "https://apec-cards.ru/",
  schema,
  structuredData,
}) => {
  React.useEffect(() => {
    // Обновляем заголовок страницы
    document.title = title;

    // Основные метатеги
    updateOrCreateMetaTag("description", description);
    updateOrCreateMetaTag("keywords", keywords);
    updateOrCreateMetaTag(
      "robots",
      "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    );
    updateOrCreateMetaTag("author", "APEC Cards Professional Service");
    updateOrCreateMetaTag("theme-color", "#8B5CF6");

    // Open Graph теги
    updateOrCreateMetaTag("og:title", title, "property");
    updateOrCreateMetaTag("og:description", description, "property");
    updateOrCreateMetaTag("og:image", ogImage, "property");
    updateOrCreateMetaTag("og:image:width", "1200", "property");
    updateOrCreateMetaTag("og:image:height", "630", "property");
    updateOrCreateMetaTag(
      "og:image:alt",
      "Карта АТЭС - безвизовый въезд в 21 страну",
      "property",
    );
    updateOrCreateMetaTag("og:url", ogUrl, "property");
    updateOrCreateMetaTag("og:type", "website", "property");
    updateOrCreateMetaTag("og:locale", "ru_RU", "property");
    updateOrCreateMetaTag("og:site_name", "APEC Cards", "property");

    // Twitter Card теги
    updateOrCreateMetaTag("twitter:card", "summary_large_image");
    updateOrCreateMetaTag("twitter:title", title);
    updateOrCreateMetaTag("twitter:description", description);
    updateOrCreateMetaTag("twitter:image", ogImage);
    updateOrCreateMetaTag("twitter:site", "@apeccards");
    updateOrCreateMetaTag("twitter:creator", "@apeccards");

    // Дополнительные SEO метатеги
    updateOrCreateMetaTag("format-detection", "telephone=no");
    updateOrCreateMetaTag("mobile-web-app-capable", "yes");
    updateOrCreateMetaTag("apple-mobile-web-app-capable", "yes");
    updateOrCreateMetaTag("apple-mobile-web-app-status-bar-style", "default");

    // Канонический URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", canonical);

    // Preconnect для производительности
    createLinkTag("preconnect", "https://fonts.googleapis.com");
    createLinkTag("preconnect", "https://fonts.gstatic.com", true);

    // Schema.org JSON-LD
    if (schema || structuredData) {
      // Удаляем старые скрипты JSON-LD
      const existingScripts = document.querySelectorAll(
        'script[type="application/ld+json"]',
      );
      existingScripts.forEach((script) => script.remove());

      // Добавляем основную схему
      if (schema) {
        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.textContent = JSON.stringify(schema);
        document.head.appendChild(script);
      }

      // Добавляем дополнительные структурированные данные
      if (structuredData && Array.isArray(structuredData)) {
        structuredData.forEach((data) => {
          const script = document.createElement("script");
          script.type = "application/ld+json";
          script.textContent = JSON.stringify(data);
          document.head.appendChild(script);
        });
      }
    }

    // Очистка при размонтировании
    return () => {
      const jsonLdScripts = document.querySelectorAll(
        'script[type="application/ld+json"]',
      );
      jsonLdScripts.forEach((script) => script.remove());
    };
  }, [
    title,
    description,
    keywords,
    ogImage,
    ogUrl,
    canonical,
    schema,
    structuredData,
  ]);

  // Служебная функция для обновления или создания метатегов
  function updateOrCreateMetaTag(
    name: string,
    content: string,
    nameAttr: string = "name",
  ) {
    let metaTag = document.querySelector(`meta[${nameAttr}="${name}"]`);

    if (!metaTag) {
      metaTag = document.createElement("meta");
      metaTag.setAttribute(nameAttr, name);
      document.head.appendChild(metaTag);
    }

    metaTag.setAttribute("content", content);
  }

  // Функция для создания link тегов
  function createLinkTag(rel: string, href: string, crossorigin?: boolean) {
    let linkTag = document.querySelector(`link[rel="${rel}"][href="${href}"]`);
    if (!linkTag) {
      linkTag = document.createElement("link");
      linkTag.setAttribute("rel", rel);
      linkTag.setAttribute("href", href);
      if (crossorigin) {
        linkTag.setAttribute("crossorigin", "");
      }
      document.head.appendChild(linkTag);
    }
  }

  return null;
};

export default SEO;
