import { Button } from "./ui/button";
const Navbar = () => {
  return <nav className="fixed w-full z-50 bg-black/10 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          
          
          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            {["Home", "Jet Skis", "Yachts", "Activities", "About", "Contact"].map(item => <a key={item} href={`#${item.toLowerCase()}`} className="text-white/90 hover:text-gold transition-colors duration-200">
                {item}
              </a>)}
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