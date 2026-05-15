import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { RouterProvider } from 'react-router';
import { LoadingScreen } from './components/LoadingScreen';
import { router } from './routes';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && <RouterProvider router={router} />}
    </>
  );
}