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
    <div className="min-h-screen bg-gray-50">
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
