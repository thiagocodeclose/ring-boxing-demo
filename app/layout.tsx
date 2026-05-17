// @ts-nocheck
import type { Metadata } from 'next';
import { Bebas_Neue, Barlow } from 'next/font/google';
import { getGarrison365Config, buildCssVars } from '@/lib/garrison365-config';
import './globals.css';

import { Garrison365LivePreview } from '@/components/Garrison365LivePreview';
const heading = Bebas_Neue({ subsets: ['latin'], weight: ['400'], variable: '--font-heading' });
const body    = Barlow({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-body' });

export async function generateMetadata(): Promise<Metadata> {
  const cfg = await getGarrison365Config();
  return {
    title: cfg?.seo?.title ?? 'The Ring — Philadelphia, PA',
    description: cfg?.seo?.description ?? "Philadelphia's original boxing gym since 1987. Old school training, real coaches, champions.",
    openGraph: { title: cfg?.seo?.title ?? 'The Ring Boxing Gym' },
  };
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const cfg  = await getGarrison365Config();
  const vars = buildCssVars(cfg?.brand);
  return (
    <html lang="en" style={vars as React.CSSProperties}>
      <body className={`${heading.variable} ${body.variable} bg-rg-bg text-rg-text antialiased vintage-overlay`}>
        {children}
        <Garrison365LivePreview />
      </body>
    </html>
  );
}
