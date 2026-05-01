// @ts-nocheck
import type { Metadata } from 'next';
import { Bebas_Neue, Barlow } from 'next/font/google';
import { getKorivaConfig, buildCssVars } from '@/lib/koriva-config';
import './globals.css';

import { KorivaLivePreview } from '@/components/KorivaLivePreview';
const heading = Bebas_Neue({ subsets: ['latin'], weight: ['400'], variable: '--font-heading' });
const body    = Barlow({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-body' });

export async function generateMetadata(): Promise<Metadata> {
  const cfg = await getKorivaConfig();
  return {
    title: cfg?.seo?.title ?? 'The Ring — Philadelphia, PA',
    description: cfg?.seo?.description ?? "Philadelphia's original boxing gym since 1987. Old school training, real coaches, champions.",
    openGraph: { title: cfg?.seo?.title ?? 'The Ring Boxing Gym' },
  };
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const cfg  = await getKorivaConfig();
  const vars = buildCssVars(cfg?.brand);
  return (
    <html lang="en" style={vars as React.CSSProperties}>
      <body className={`${heading.variable} ${body.variable} bg-rg-bg text-rg-text antialiased vintage-overlay`}>
        {children}
        <KorivaLivePreview />
      </body>
    </html>
  );
}
