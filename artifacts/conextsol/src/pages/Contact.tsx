import { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { SEOHead } from '@/components/seo/SEOHead';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Mail, MapPin, Phone, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';

function WhatsAppIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

const WORKER_URL = import.meta.env.VITE_WORKER_URL || "https://contact-form-worker.reeqieric41.workers.dev";

const formSchema = z.object({
  fullName: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(9, "Phone number is required"),
  companyName: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  budget: z.string().min(1, "Please select a budget range"),
  message: z.string().min(10, "Please provide more details about your project")
});

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState<string>('');

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      companyName: "",
      service: "",
      budget: "",
      message: ""
    }
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setStatusMessage('');

    try {
      const response = await fetch(WORKER_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok && data.success !== false) {
        setSubmitStatus('success');
        const successMsg = "Message sent! We will get back to you shortly.";
        setStatusMessage(successMsg);
        toast({
          title: "Thank you!",
          description: successMsg,
        });
        form.reset();
      } else {
        throw new Error(data.error || "Failed to send message");
      }
    } catch (err) {
      setSubmitStatus('error');
      const errorMsg = "Something went wrong. Please try again or contact us directly.";
      setStatusMessage(errorMsg);
      toast({
        title: "Submission Error",
        description: errorMsg,
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Layout>
      <SEOHead
        title="Contact Us | Let's Build Something Great"
        description="Get in touch with Conextsol for professional web design and custom software development in South Africa."
      />

      <section className="pt-24 pb-24">
        <div className="container mx-auto px-4 max-w-6xl">

          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
            >
              Let's Build Something Great Together
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-muted-foreground"
            >
              Fill out the form below or message us directly on WhatsApp. We typically respond within a few hours.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12 lg:gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-primary/5 p-8 rounded-3xl border border-primary/10 h-full">
                <h3 className="text-2xl font-bold text-foreground mb-8">Contact Information</h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground font-medium mb-1">Email Us</div>
                      <a href="mailto:info@conextsol.co.za" className="text-foreground font-bold hover:text-primary transition-colors text-lg">
                        info@conextsol.co.za
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground font-medium mb-1">Call Us</div>
                      <a href="tel:+27661192498" className="text-foreground font-bold hover:text-primary transition-colors text-lg">
                        066 119 2498
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground font-medium mb-1">Office</div>
                      <div className="text-foreground font-bold text-lg">
                        Cape Town, SA<br />
                        <span className="text-base font-normal text-muted-foreground">(Remote-first nationwide)</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-primary/10">
                  <h4 className="text-lg font-bold text-foreground mb-4">Need a faster response?</h4>
                  <a
                    href="https://wa.me/27661192498?text=Hi%20Conextsol%2C%20I%27m%20interested%20in%20a%20website%20quote"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-xl transition-colors shadow-lg"
                  >
                    <WhatsAppIcon size={24} />
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-card p-8 md:p-10 rounded-3xl border border-border shadow-sm">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="fullName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground">Full Name *</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" className="h-12 bg-background" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground">Email Address *</FormLabel>
                            <FormControl>
                              <Input placeholder="john@company.co.za" className="h-12 bg-background" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground">Phone Number *</FormLabel>
                            <FormControl>
                              <Input placeholder="066 119 2498" className="h-12 bg-background" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="companyName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground">Company Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Acme Corp" className="h-12 bg-background" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="service"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground">Service Interest *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="h-12 bg-background">
                                  <SelectValue placeholder="Select a service" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="website-design">Website Design</SelectItem>
                                <SelectItem value="web-development">Web Development</SelectItem>
                                <SelectItem value="custom-software">Custom Software</SelectItem>
                                <SelectItem value="ecommerce">E-commerce</SelectItem>
                                <SelectItem value="ui-ux">UI/UX Design</SelectItem>
                                <SelectItem value="other">Other / Unsure</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="budget"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground">Project Budget Range *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="h-12 bg-background">
                                  <SelectValue placeholder="Select a range" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="15k-30k">R15,000 - R30,000</SelectItem>
                                <SelectItem value="30k-60k">R30,000 - R60,000</SelectItem>
                                <SelectItem value="60k-150k">R60,000 - R150,000</SelectItem>
                                <SelectItem value="150k+">R150,000+</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground">Project Details *</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell us about your project, your timeline, and your main goals..."
                              className="min-h-[150px] resize-none bg-background"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {submitStatus === 'success' && (
                      <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-500" />
                        <span className="font-medium text-sm">{statusMessage}</span>
                      </div>
                    )}

                    {submitStatus === 'error' && (
                      <div className="p-4 rounded-xl bg-destructive/10 border border-destructive/30 text-destructive flex items-center gap-3">
                        <AlertCircle className="w-5 h-5 shrink-0 text-destructive" />
                        <span className="font-medium text-sm">{statusMessage}</span>
                      </div>
                    )}

                    <Button 
                      type="submit" 
                      size="lg" 
                      disabled={isSubmitting} 
                      className="w-full h-14 text-lg font-bold"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center gap-2">
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Sending...
                        </span>
                      ) : (
                        "Submit Inquiry"
                      )}
                    </Button>
                    <p className="text-xs text-center text-muted-foreground mt-4">
                      By submitting this form, you agree to our Privacy Policy and consent to us contacting you.
                    </p>
                  </form>
                </Form>
              </div>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
}
