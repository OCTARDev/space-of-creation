import React from 'react'
import Hero from './_sections/hero';
import VideoSection from './_sections/video';
import Features from './_sections/features';
import HowItWorks from './_sections/howItsWork';
import Key_features from './_sections/key-features';
import WhatOurClientsSay from './_sections/reveiws';
import BookvclabSection from './_sections/book-octar';

export default function vclab() {
  return (
    <div>
      <Hero />
      <VideoSection />
      <Features />
      <HowItWorks />
      <Key_features />
      <WhatOurClientsSay/>
      <BookvclabSection />
    </div>
  )
}
