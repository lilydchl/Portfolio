import { Header } from "@/app/components/Header";
import { ScrollToTop } from "@/app/components/ScrollToTop";
import { Footer } from "@/app/components/Footer";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#F5F3F0] relative" style={{ cursor: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'24\' height=\'24\' viewBox=\'0 0 24 24\'%3E%3Cpath d=\'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z\' fill=\'%23E8469E\' opacity=\'0.8\'/%3E%3C/svg%3E") 12 12, auto' }}>
      <ScrollToTop />
      <Header />
      <main className="pt-20 md:pt-24">{children}</main>
      
      {/* Grain de papier global */}
      <div 
        className="fixed inset-0 pointer-events-none z-[9999]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='5' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)' opacity='0.03'/%3E%3C/svg%3E")`,
          opacity: 0.4,
          mixBlendMode: 'multiply',
        }}
      />
      
      {/* Footer */}
      <Footer />
    </div>
  );
}