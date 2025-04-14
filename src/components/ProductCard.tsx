
import { Button } from "./ui/button";

interface ProductCardProps {
  title: string;
  price: number;
  image: string;
  brand: string;
}

const ProductCard = ({ title, price, image, brand }: ProductCardProps) => {
  return (
    <div className="group relative bg-black/20 backdrop-blur-sm rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
      <img 
        src={image} 
        alt={title}
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <span className="text-gold/80 text-sm">{brand}</span>
        <h3 className="text-white text-xl font-semibold mt-2">{title}</h3>
        <div className="flex justify-between items-center mt-4">
          <span className="text-gold text-2xl font-playfair">
            AED {price}
          </span>
          <Button 
            className="border border-gold text-gold hover:bg-gold hover:text-black transition-colors duration-200"
            variant="outline"
          >
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
