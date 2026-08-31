import { Helmet } from "react-helmet-async";
import { useLocation } from "wouter";
import organizationSchema from "@/data/schema.json";
import { createBreadcrumbSchema } from "@/lib/breadcrumbSchema";

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  type?: "website" | "article" | "product";
  image?: string;
  schema?: object | object[];
  breadcrumbLabels?: Record<string, string>;
}

export function SEOHead({
  title,
  description,
  canonicalUrl,
  type = "website",
  image = "https://conextsol.co.za/og-image.jpg",
  schema,
  breadcrumbLabels = {},
}: SEOHeadProps) {
  const [location] = useLocation();
  const fullTitle = title.includes("Conextsol")
    ? title
    : `${title} | Conextsol`;
  const path = canonicalUrl || location || "/";
  const url = `https://conextsol.co.za${path === "/" ? "" : path}`;
  const breadcrumbSchema = createBreadcrumbSchema(path, breadcrumbLabels);

  // Include Organization schema plus breadcrumbs and any specific schema passed
  const extraSchemas = schema
    ? Array.isArray(schema)
      ? schema
      : [schema]
    : [];
  const jsonLd = [organizationSchema, breadcrumbSchema, ...extraSchemas];

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
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  );
}
