export function titleFromSegment(segment: string) {
  return segment
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export function createBreadcrumbSchema(pathname: string, labels: Record<string, string> = {}) {
  const cleanPath = pathname === '/' ? '/' : pathname.replace(/\/$/, '');
  const segments = cleanPath.split('/').filter(Boolean);
  const itemListElement = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://conextsol.co.za/',
    },
    ...segments.map((segment, index) => {
      const path = `/${segments.slice(0, index + 1).join('/')}`;
      return {
        '@type': 'ListItem',
        position: index + 2,
        name: labels[path] || titleFromSegment(segment),
        item: `https://conextsol.co.za${path}`,
      };
    }),
  ];

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement,
  };
}
