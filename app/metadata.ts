import type { Metadata } from 'next';

const siteUrl = 'https://scalecraft.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Scalecraft | Performance Design Outsourcing für E-Commerce',
    template: '%s | Scalecraft',
  },
  description: 'Scalecraft liefert dir ein eingespieltes Performance-Designteam – optimiert für Amazon / E-Commerce Agenturen und Freelancer. Mehr Umsatz, weniger Aufwand, konstante Qualität.',
  keywords: [
    'E-Commerce Design',
    'Amazon Design',
    'Performance Design',
    'Design Outsourcing',
    'Scalecraft',
    'DTC Brands Design',
    'Creative Design Agency',
    'BAT-Methode',
    'Design System',
    'Amazon Agentur',
    'E-Commerce Agentur',
  ],
  authors: [{ name: 'Scalecraft', url: siteUrl }],
  creator: 'Scalecraft',
  publisher: 'Scalecraft',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: siteUrl,
    title: 'Scalecraft | Performance Design Outsourcing für E-Commerce',
    description: 'Performance Design Outsourcing für E-Commerce Agenturen & DTC Brands. Wir liefern dir ein eingespieltes Performance-Designteam.',
    siteName: 'Scalecraft',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Scalecraft - Performance Design Outsourcing',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Scalecraft | Performance Design Outsourcing',
    description: 'Performance Design Outsourcing für E-Commerce Agenturen & DTC Brands',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/scalecraft-logo.png',
  },
  verification: {
    // Add your verification codes when available
    // google: 'your-google-site-verification',
    // yandex: 'your-yandex-verification',
  },
};
