import { Helmet } from 'react-helmet-async';

export default function SEO({ 
  title, 
  description, 
  keywords,
  type = 'website',
  name = 'Ronna AI',
  url = 'https://ronna.ai/',
  image = '/logo.svg' // Fallback image
}) {
  const siteTitle = title ? `${title} | ${name}` : name;
  const metaDescription = description || "Unleashing the potential of AI for a smarter future.";
  const metaKeywords = keywords || "AI, Artificial Intelligence, Automation, Innovation, Technology";

  // Structured Data (JSON-LD)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Ronna AI",
    "url": "https://ronna.ai",
    "logo": "https://ronna.ai/logo.svg",
    "description": metaDescription,
    "sameAs": [
        "https://twitter.com/ronnaai",
        "https://linkedin.com/company/ronna-ai"
    ]
  };

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{siteTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={name} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={image} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
}
