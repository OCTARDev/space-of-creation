import React from 'react'
import Hero from './_sections/hero';
import VideoSection from './_sections/video';
import Features from './_sections/features';
import Key_features from './_sections/key-features';
import WhatOurClientsSay from './_sections/reveiws';
import BookOctarSection from './_sections/book-life';
import EngagingSection from './_sections/Engaging';

export default function Life() {
  return (
    <div>
      <Hero />
      <VideoSection />
      <Features />
      <Key_features />
      <WhatOurClientsSay/>
      <EngagingSection />
      <BookOctarSection />

    </div>
  )
}
