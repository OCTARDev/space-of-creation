"use client";
import HomeHeroSection from '@/app/[locale]/sections/header';
import { useTranslations } from 'next-intl';
import PerfectSolution from '@/app/[locale]/sections/perfect-solution';
import SolutionsPortfolio from '../sections/our-solution';



export default function Homepage() {

  let t = useTranslations('');
  
  return (
    <div>
      <div className="">
      <HomeHeroSection />
</div>
      <PerfectSolution></PerfectSolution>
      <SolutionsPortfolio></SolutionsPortfolio>
      
       
    </div>
  )
}
