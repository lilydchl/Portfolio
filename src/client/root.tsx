import { Outlet } from 'react-router';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ScrollToTop } from '@/components/layout/ScrollToTop';
import { LenisProvider } from '@/lib/lenis';
import { setupGsap } from '@/lib/gsap';

setupGsap();

export function RootLayout() {
  return (
    <LenisProvider>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col bg-brand-cream text-brand-ink">
        <Header />
        <main className="flex-1 pt-[88px] md:pt-[112px]">
          <Outlet />
        </main>
        <Footer />
      </div>
    </LenisProvider>
  );
}
