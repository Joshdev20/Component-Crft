import NavBar from '@/components/NavBar';
import HeroSection from '@/components/HeroSection';
import Categories from '@/components/Categories';
import ComponentsSection from '@/components/ComponentsSection';
import PricingSection from '@/components/PricingSection';
import ReviewsSection from '@/components/ReviewsSection';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-background dark:bg-slate-950">
      <div className="absolute inset-0 bg-grid-slate-200/50 dark:bg-grid-slate-800/20 bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000,transparent)] pointer-events-none"></div>
      <NavBar />
      <HeroSection />
      <Categories />
      <ComponentsSection />
      <PricingSection />
      <ReviewsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Home;
