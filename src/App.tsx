import Navigation from './components/Navigation';
import Header from './components/Header';
import Partners from './components/Partners';
import HeadlineWithIcons from './components/HeadlineWithIcons';
import HeroImageSection from './components/HeroImageSection';
import Hero3 from './components/Hero3';
import Quote from './components/Quote';
import AboutUsCards from './components/AboutUsCards';
import Testimonials from './components/Testimonials';
import CTASection from './components/CTASection';
import SocialIcons from './components/SocialIcons';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-eco-bg text-eco-headline">
      <Navigation />
      <main className="flex flex-col items-center gap-0">
        <Header />
        <Partners />
        <HeadlineWithIcons />
        <HeroImageSection />
        <Hero3 />
        <Quote />
        <AboutUsCards />
        <Testimonials />
        <CTASection />
        <SocialIcons />
      </main>
      <Footer />
    </div>
  );
}

export default App;
