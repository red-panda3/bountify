import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { ClerkProvider,useAuth } from '@clerk/clerk-react';
import { ConvexReactClient } from "convex/react";
import { ConvexProviderWithClerk } from 'convex/react-clerk';
import { Provider } from "react-redux";
import { store } from './component/Context/store.ts';
const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL as string);
// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

// Create the root element and render the application
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
    <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
      <Provider store={store}>
        <App />
      </Provider>
     </ConvexProviderWithClerk>   
      </ClerkProvider>
  </StrictMode>
);