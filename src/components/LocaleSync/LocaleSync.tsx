// src/components/LocaleSync.tsx
'use client'
import { useEffect } from 'react'
import { setApiLocale } from '@/lib/axios'

export function LocaleSync({ locale }: { locale: string }) {
  // Run immediately (not just in effect) so first requests also get the right locale
  setApiLocale(locale)

  useEffect(() => {
    setApiLocale(locale)
  }, [locale])

  return null
}