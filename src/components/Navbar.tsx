import { Button } from "./ui/button";
import { Link } from "react-router-dom";
const Navbar = () => {
  return <nav className="fixed w-full z-50 bg-black/10 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src="/lovable-uploads/c7dbe9e1-4988-4f5c-a3ee-e79aacd8214c.png" alt="Luxury Jet Ski Rentals" className="h-12 w-auto object-contain" />
          </Link>
          
          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            {["Home", "Jet Skis", "Yachts", "Activities", "About", "Contact"].map(item => {})}
          </div>

          {/* Contact Button */}
          <Button className="bg-gold hover:bg-gold/90 text-black">
            Book Now
          </Button>
        </div>
      </div>
    </nav>;
};
export default Navbar;