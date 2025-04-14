
const Footer = () => {
  return (
    <footer className="bg-black/95 text-white/80 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-gold font-playfair text-xl mb-4">Contact Us</h3>
            <p>Dubai Marina</p>
            <p>United Arab Emirates</p>
            <p>+971 50 123 4567</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gold font-playfair text-xl mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["About Us", "Services", "Book Now", "Terms & Conditions"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-gold transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-gold font-playfair text-xl mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {["Facebook", "Instagram", "Twitter"].map((platform) => (
                <a 
                  key={platform}
                  href="#"
                  className="hover:text-gold transition-colors duration-200"
                >
                  {platform}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm">
          <p>&copy; 2024 Luxury Water Sports. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
