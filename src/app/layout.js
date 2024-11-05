"use client"

import store from "@/store/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import './globals.css'

export default function RootLayout({ 
  children 
}) {
  const queryClient = new QueryClient();

  return (
    <html lang="en" dir="rtl">
      <body className={` bg-bgmain`}>
        <QueryClientProvider client={queryClient}>
          <Provider store={store}>
            {children}
          </Provider>
        </QueryClientProvider>
      </body>
    </html>
  );
}

