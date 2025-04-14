
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <header className="relative h-screen flex items-center justify-center text-center bg-cover bg-center" style={{
      backgroundImage: "url('/lovable-uploads/jet-ski-1.jpg')"
    }}>
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 text-white px-4">
        <h1 className="text-5xl font-playfair mb-6">Luxury Jet Ski Adventures</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Experience the ultimate thrill on the water with our premium jet ski rentals. Unleash your adventure in Dubai.
        </p>
        <Button 
          size="lg" 
          className="bg-gold text-black hover:bg-gold/90 transition-colors duration-300"
        >
          Book Your Ride
        </Button>
      </div>
    </header>
  );
};

export default Hero;
