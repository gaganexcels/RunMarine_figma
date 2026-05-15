import { Outlet } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { CustomCursor } from '../components/CustomCursor';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { Toaster } from 'sonner';

export function Root() {
  return (
    <div className="min-h-screen bg-white">
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: '#FFFFFF',
            color: '#1A1A1A',
            border: '1px solid #0B2545',
          },
        }}
      />
      <CustomCursor />
      <WhatsAppButton />
      <Navigation />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
