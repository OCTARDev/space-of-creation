"use client";
import HomeHeroSection from '@/app/[locale]/sections/header';
import { useTranslations } from 'next-intl';
import PerfectSolution from '@/app/[locale]/sections/perfect-solution';
import SolutionsPortfolio from '../sections/our-solution';
import OctarEducationalOffering from '../sections/octar-ed';
import WhatOurClientsSay from '../sections/reveiws';
import BookDemoSection from '../sections/book-demo';






export default function Homepage() {

  let t = useTranslations('');
  
  return (
    <div>
      <div className="">
      <HomeHeroSection />
</div>
      <PerfectSolution></PerfectSolution>
      <SolutionsPortfolio></SolutionsPortfolio>
      <div className="mt-20">
        <OctarEducationalOffering></OctarEducationalOffering>
      </div>
    
      
       <WhatOurClientsSay></WhatOurClientsSay>
       <BookDemoSection></BookDemoSection>
    </div>
  )
}
