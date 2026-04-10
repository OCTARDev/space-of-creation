import {NextIntlClientProvider, hasLocale } from 'next-intl';
import {notFound} from 'next/navigation';
import { routing , directions } from '@/i18n/routing';
import en from '@/messages/en/en.json';
import ar from '@/messages/ar/ar.json';
import { ToastContainer } from 'react-toastify';
import Header from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollToTopButton from '@/components/ui/ScrollToTopButton';
import { LocaleSync } from '@/components/LocaleSync/LocaleSync'  // add this


type Props = {
    children: React.ReactNode;
    params: Promise<{locale: string}>
}

export default async function LocaleLayout({ children , params }: Props) {

  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  const messages = { en, ar }[locale];
  const direction = directions[locale] || "ltr";

  return (
      <div lang={locale} dir={direction} className={`font-cairo overflow-x-hidden`}>
        <NextIntlClientProvider locale={locale} messages={messages} key={locale}>
                <LocaleSync locale={locale} />  {/* add this — locale comes from server */}

            <ToastContainer position="top-right" autoClose={3000} /> 
              <div className='min-h-screen flex flex-col'>
                <Header />
                <main className='flex flex-col grow'>
                    {children}
                    <ScrollToTopButton />
                </main>
                <Footer />
            </div>
        </NextIntlClientProvider>
      </div>
  );
}