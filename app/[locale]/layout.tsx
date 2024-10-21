import '../globals.css'
import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { notFound } from 'next/navigation';
import Footer from './components/Footer';
import Header from './components/Header';

export const metadata: Metadata = {
  title: 'BEST Lviv',
  icons: {
    icon: "/logo.png"
  }
}

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export default async function RootLayout({ children, params }: RootLayoutProps) {
  let messages;
  try {
    messages = (await import(`../../messages/${params.locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={params.locale} suppressHydrationWarning={true}>
      <head>
        <meta name="google-site-verification" content="JNS6t3-KidakRhhnB8X61npK3VZkpGGvTsFH_zkoMow" />
      </head>
      <NextIntlClientProvider locale={params.locale} messages={messages}>
        <body suppressHydrationWarning={true}>
          <Header />
          {children}
          <Footer />
        </body>
      </NextIntlClientProvider>
    </html >
  )
}
