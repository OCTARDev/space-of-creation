import React from 'react'
import Hero from './_sections/hero'
import OurJourney from './_sections/OurJourney'
import Team from './_sections/teams'
import CredentialsSection from './_sections/Credentials'
import BookSection from './_sections/book-demo'

export default function about() {
  return (
    <>
       <Hero />
    <OurJourney />
      <Team />
      <CredentialsSection />
      <BookSection />
    </>
    
 
  )
}
