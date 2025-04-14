
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";

const products = [
  {
    title: "FX Cruiser SVHO",
    price: 400,
    brand: "Yamaha",
    image: "/images/jet-ski-1.jpg"
  },
  {
    title: "Waverunner VX",
    price: 400,
    brand: "Yamaha",
    image: "/images/jet-ski-2.jpg"
  },
  {
    title: "GTR X 230(Gold)",
    price: 650,
    brand: "Sea-Doo",
    image: "/images/jet-ski-3.jpg"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0B0B0F] text-white">
      <Navbar />
      <Hero />
      
      {/* Products Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-playfair text-center mb-4">Our Fleet</h2>
        <p className="text-center text-white/70 mb-12 max-w-2xl mx-auto">
          Choose from our selection of premium water sports equipment for an unforgettable experience
        </p>

        {/* Category Filter */}
        <div className="flex justify-center gap-4 mb-12">
          {["JET SKIS", "YACHTS", "WATER ACTIVITIES"].map((category) => (
            <button
              key={category}
              className="px-6 py-2 rounded-full border border-gold/30 text-gold hover:bg-gold/10 transition-colors duration-200"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.title} {...product} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
