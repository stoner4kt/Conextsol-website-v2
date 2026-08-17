declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(eventName: string, parameters: Record<string, unknown> = {}) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') {
    return;
  }

  window.gtag('event', eventName, parameters);
}

export const trackWhatsAppClick = (location: string) => trackEvent('whatsapp_click', { location });
export const trackPhoneClick = (location: string) => trackEvent('phone_click', { location });
export const trackEmailClick = (location: string) => trackEvent('email_click', { location });
export const trackFormSubmit = () => trackEvent('form_submit', { form_name: 'contact_inquiry' });
