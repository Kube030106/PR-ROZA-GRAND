import Script from 'next/script';
import { GUEST_HOUSE_DATA } from '@/data/guestHouseData';

export function GoogleAnalytics() {
  const gaId = GUEST_HOUSE_DATA.analytics.googleAnalyticsId;

  // If gaId is empty or default placeholder, we can safely render the placeholder script
  if (!gaId) return null;

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
      />
      <Script
        id="google-analytics-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}
