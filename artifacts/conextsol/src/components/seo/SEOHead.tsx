import { Helmet } from 'react-helmet-async';
import organizationSchema from '@/data/schema.json';

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  type?: 'website' | 'article' | 'product';
  image?: string;
  schema?: object;
}

export function SEOHead({
  title,
  description,
  canonicalUrl,
  type = 'website',
  image = 'https://conextsol.co.za/og-image.jpg',
  schema
}: SEOHeadProps) {
  const fullTitle = `${title} | Conextsol`;
  const url = canonicalUrl ? `https://conextsol.co.za${canonicalUrl}` : 'https://conextsol.co.za';

  // Always include the organization schema, plus any specific schema passed
  const jsonLd = schema ? [organizationSchema, schema] : [organizationSchema];

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Conextsol" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
    </Helmet>
  );
}
