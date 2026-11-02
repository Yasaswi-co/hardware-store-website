import Navigation from '@/components/sections/Navigation';
import Opening from '@/components/sections/Opening';
import Departments from '@/components/sections/Departments';
import Counter from '@/components/sections/Counter';
import Aisles from '@/components/sections/Aisles';
import Brought from '@/components/sections/Brought';
import Owner from '@/components/sections/Owner';
import Classes from '@/components/sections/Classes';
import Hire from '@/components/sections/Hire';
import Visit from '@/components/sections/Visit';
import Faq from '@/components/sections/Faq';
import Footer from '@/components/sections/Footer';
import SiteScripts from '@/components/SiteScripts';

export default function Home() {
  return (
    <>
      <a className="sr-only" href="#main">Skip to the content</a>
      <Navigation />
      <main id="main">
        <Opening />
        <Departments />
        <Counter />
        <Aisles />
        <Brought />
        <Owner />
        <Classes />
        <Hire />
        <Visit />
        <Faq />
      </main>
      <Footer />
      <SiteScripts />
    </>
  );
}
