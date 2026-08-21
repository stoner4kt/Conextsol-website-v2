import { Card, CardContent } from '@/components/ui/card';
import { AlertCircle } from 'lucide-react';
import { SEOHead } from '@/components/seo/SEOHead';

export default function NotFound() {
  return (
    <>
      <SEOHead
        title="404 Page Not Found | Conextsol"
        description="The page you requested could not be found on the Conextsol website."
        canonicalUrl="/404"
      />
      <div className="min-h-screen w-full flex items-center justify-center bg-background">
      <Card className="w-full max-w-md mx-4">
        <CardContent className="pt-6">
          <div className="flex mb-4 gap-2">
            <AlertCircle className="h-8 w-8 text-red-500" />
            <h1 className="text-2xl font-bold text-foreground">
              404 Page Not Found
            </h1>
          </div>

          <p className="mt-4 text-sm text-muted-foreground">
            Did you forget to add the page to the router?
          </p>
        </CardContent>
      </Card>
      </div>
    </>
  );
}
