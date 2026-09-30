import type { Metadata, Viewport } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { CookieNotice } from "@/components/CookieNotice";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { GUEST_HOUSE_DATA } from "@/data/guestHouseData";

const fraunces = Fraunces({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAF7F2" },
    { media: "(prefers-color-scheme: dark)", color: "#0E1317" },
  ],
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://prrozagrand.com"),
  title: {
    default: "PR ROZA GRAND | Guest House in Auroville, ECR Tamil Nadu",
    template: "%s | PR ROZA GRAND Auroville",
  },
  description:
    "PR ROZA GRAND is a premier guest house located opposite McDonald's on ECR Main Road, Auroville. Spotless AC & Non-AC couple & family rooms, 24/7 hot water, free Wi-Fi, safe parking, and rental bike assistance.",
  keywords: [
    "PR Roza Grand",
    "PR Roza Grand Guest House",
    "Guest House in Auroville",
    "ECR Auroville Hotel",
    "Rooms near Auroville Beach",
    "Stay opposite McDonalds ECR",
    "Pondicherry Auroville couple rooms",
    "Family guest house Auroville ECR",
    "Budget stay in Auroville",
    "Auroville bike rental rooms"
  ],
  authors: [{ name: "PR ROZA GRAND Guest House" }],
  creator: "PR ROZA GRAND",
  publisher: "PR ROZA GRAND",
  formatDetection: {
    telephone: true,
    address: true,
  },
  openGraph: {
    title: "PR ROZA GRAND | Guest House in Auroville, ECR",
    description:
      "Comfortable Stay, Memorable Moments. Spotless couple & family rooms directly on ECR opposite McDonald's, 3 mins from Auroville Beach.",
    url: "https://prrozagrand.com",
    siteName: "PR ROZA GRAND Guest House",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/building-facade.jpg",
        width: 1200,
        height: 800,
        alt: "PR ROZA GRAND Guest House Building Facade on ECR Auroville",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PR ROZA GRAND | Guest House in Auroville, ECR",
    description:
      "Spotless AC & Non-AC rooms on ECR opposite McDonald's, 3 mins to Auroville Beach. 24x7 hot water, parking & bike rentals.",
    images: ["/images/building-facade.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    "name": GUEST_HOUSE_DATA.legalName,
    "alternateName": GUEST_HOUSE_DATA.name,
    "description": GUEST_HOUSE_DATA.about,
    "image": "https://prrozagrand.com/images/building-facade.jpg",
    "@id": "https://prrozagrand.com",
    "url": "https://prrozagrand.com",
    "telephone": GUEST_HOUSE_DATA.contact.phoneRaw,
    "priceRange": "₹999 - ₹2399",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": GUEST_HOUSE_DATA.contact.address.fullAddress,
      "addressLocality": GUEST_HOUSE_DATA.contact.address.city,
      "addressRegion": GUEST_HOUSE_DATA.contact.address.state,
      "postalCode": GUEST_HOUSE_DATA.contact.address.postalCode,
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": GUEST_HOUSE_DATA.contact.coordinates.latitude,
      "longitude": GUEST_HOUSE_DATA.contact.coordinates.longitude
    },
    "hasMap": GUEST_HOUSE_DATA.contact.googleMapsUrl,
    "checkinTime": "12:00:00",
    "checkoutTime": "11:30:00",
    "petsAllowed": false,
    "smokingAllowed": false,
    "amenityFeature": [
      { "@type": "LocationFeatureSpecification", "name": "Free High-Speed Wi-Fi", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "24x7 Hot Water", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Free On-Site Safe Parking", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Rental Bike Assistance", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Flat-Screen TV", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Air Conditioning", "value": true }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "120",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${dmSans.variable} font-body scroll-smooth`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[var(--bg-base)] text-[var(--text-primary)] antialiased selection:bg-[var(--accent-primary)] selection:text-white">
        <Header />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <CookieNotice />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
