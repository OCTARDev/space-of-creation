import React from 'react'
import Hero from './_sections/hero';
import VideoSection from './_sections/video';
import Features from './_sections/features';
import Key_features from './_sections/key-features';
import WhatOurClientsSay from './_sections/reveiws';
import BookOctarSection from './_sections/book-vr';

export default function Vcalb() {
  return (
    <div>
      <Hero />
      <VideoSection />
      <Features />
      <Key_features />
      <WhatOurClientsSay/>
      <BookOctarSection />
    </div>
  )
}
