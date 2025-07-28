import type { Metadata } from "next";
import { montserrat } from "@/src/app/fonts";
import "@/src/app/globals.css";
import { CartProvider, QueryProvider } from "@/src/app/providers";
import ClipPaths from "@/src/shared/components/clipPaths/ClipPaths";
import { Header } from "@/src/widgets/header";
import { Footer } from "@/src/widgets/footer";
import { Suspense } from "react";
import { FormSuccess } from "@/src/shared/ui/form";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={montserrat.variable}>
        <QueryProvider>
          <CartProvider>
            <Header />
            {children}
            <Footer />
          </CartProvider>
        </QueryProvider>
        <ClipPaths />
        <Suspense>
          <FormSuccess />
        </Suspense>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "Климов Климат",
  description: "",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL + "/"),
};
