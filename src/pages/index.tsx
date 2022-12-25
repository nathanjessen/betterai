import Head from 'next/head';

import { CallToAction } from '@/components/CallToAction/CallToAction';
import { Faqs } from '@/components/Faqs/Faqs';
import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';
import { Hero } from '@/components/Hero/Hero';
import { Pricing } from '@/components/Pricing/Pricing';
import { PrimaryFeatures } from '@/components/PrimaryFeatures/PrimaryFeatures';
import { SecondaryFeatures } from '@/components/SecondaryFeatures/SecondaryFeatures';
import { Testimonials } from '@/components/Testimonials/Testimonials';

export default function Home() {
  return (
    <>
      <Head>
        <title>Better AI</title>
        <meta name="description" content="AI tools to improve your workflow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <Hero />
        <PrimaryFeatures />
        <SecondaryFeatures />
        <CallToAction />
        <Testimonials />
        <Pricing />
        <Faqs />
      </main>
      <Footer />
    </>
  );
}
