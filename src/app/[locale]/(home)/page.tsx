"use client";
import HomeHeroSection from '@/app/[locale]/(home)/_sections/header';
import { useTranslations } from 'next-intl';
import PerfectSolution from '@/app/[locale]/(home)/_sections/perfect-solution';
import SolutionsPortfolio from './_sections/our-solution';
import OctarEducationalOffering from './_sections/octar-ed';
import WhatOurClientsSay from './_sections/reveiws';
import BookDemoSection from './_sections/book-demo';





export default function Homepage() {

  let t = useTranslations('');



  
  return (
    <div>
        <HomeHeroSection />
      <PerfectSolution></PerfectSolution>
      <SolutionsPortfolio></SolutionsPortfolio>
        <OctarEducationalOffering></OctarEducationalOffering>
    
      
       <WhatOurClientsSay></WhatOurClientsSay>
       <BookDemoSection></BookDemoSection>
    </div>
  )
}
