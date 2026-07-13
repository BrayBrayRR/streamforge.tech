const SITE_URL = "https://streamforge.tech";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "StreamForge",
    url: SITE_URL,
    logo: `${SITE_URL}/og-image.png`,
    sameAs: [
      "https://www.linkedin.com/in/brayden-jarrell-457740328/",
      "https://www.linkedin.com/in/joseph-belcher-88833b41a/",
    ],
  };
}

export function faqPageSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function productSchema({
  name,
  description,
  url,
  priceLabel,
}: {
  name: string;
  description: string;
  url: string;
  priceLabel: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    url,
    brand: { "@type": "Brand", name: "StreamForge" },
    offers: {
      "@type": "Offer",
      url,
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      description: priceLabel,
    },
  };
}

export function articleSchema({
  title,
  description,
  url,
}: {
  title: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url,
    publisher: {
      "@type": "Organization",
      name: "StreamForge",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/og-image.png` },
    },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}
