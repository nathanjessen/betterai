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
