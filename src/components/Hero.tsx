import { Button } from "./ui/button";
const Hero = () => {
  return <div className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0" style={{
      backgroundImage: "url('/lovable-uploads/af84cbba-c81a-48c4-a803-f2d7571d3325.png')",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat"
    }}>
        <div className="absolute inset-0 bg-black/50 py-0" />
      </div>

      {/* Content */}
      <div className="relative z- text-center px-0">
        <h1 className="font-playfair text-5xl md:text-7xl text-white mb-6 font-bold">
          Choose Your Adventure
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
          Experience the Thrill in Style
        </p>
        <Button className="bg-gold hover:bg-gold/90 text-black text-lg px-8 py-6">
          Book Now
        </Button>
      </div>
    </div>;
};
export default Hero;