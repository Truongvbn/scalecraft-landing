import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Scalecraft | Performance Design Outsourcing für E-Commerce',
  description: 'Scalecraft liefert dir ein eingespieltes Performance-Designteam – optimiert für Amazon / E-Commerce Agenturen und Freelancer. Mehr Umsatz, weniger Aufwand, konstante Qualität.',
  keywords: ['E-Commerce Design', 'Amazon Design', 'Performance Design', 'Design Outsourcing', 'Scalecraft'],
  authors: [{ name: 'Scalecraft' }],
  creator: 'Scalecraft',
  publisher: 'Scalecraft',
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
    url: 'https://scalecraft.com',
    title: 'Scalecraft | Performance Design Outsourcing',
    description: 'Performance Design Outsourcing für E-Commerce Agenturen & DTC Brands',
    siteName: 'Scalecraft',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Scalecraft | Performance Design Outsourcing',
    description: 'Performance Design Outsourcing für E-Commerce Agenturen & DTC Brands',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  icons: {
    icon: '/favicon.ico',
  },
};
