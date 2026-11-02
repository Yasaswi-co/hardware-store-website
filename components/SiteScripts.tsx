'use client';

import { useEffect } from 'react';
import { initSite } from '@/lib/site';

// Runs the template's menu, form and GSAP/Lenis motion scripts once the page has hydrated.
export default function SiteScripts() {
  useEffect(() => { initSite(); }, []);
  return null;
}
