import NavBar from '@/components/NavBar';
import HeroSection from '@/components/HeroSection';
import Categories from '@/components/Categories';
import ComponentsSection from '@/components/ComponentsSection';
import PricingSection from '@/components/PricingSection';
import ReviewsSection from '@/components/ReviewsSection';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';

const Home = () => {
  const { toast } = useToast();
  
  const showToast = () => {
    toast({
      title: "Success!",
      description: "Your test notification appears correctly now.",
      variant: "default",
    });
  };

  return (
    <div className="min-h-screen bg-background dark:bg-slate-950">
      <div className="absolute inset-0 bg-grid-slate-200/50 dark:bg-grid-slate-800/20 bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000,transparent)] pointer-events-none"></div>
      <NavBar />
      <HeroSection />
      <div className="container mx-auto p-4 flex justify-center">
        <Button 
          onClick={showToast}
          className="bg-primary hover:bg-primary/90 text-white"
        >
          Test Toast Notification
        </Button>
      </div>
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
