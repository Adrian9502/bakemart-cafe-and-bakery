import { useState, useEffect } from 'react';
import menu from '../utils/menu';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import { useCart } from '../context/CartContext';
import { motion } from 'framer-motion';

// Define types for product and category
interface Product {
  name: string;
  description: string;
  sizes?: { [size: string]: number };
  image: string;
}

interface Category {
  name: string;
  items: Product[];
}
interface SelectedSize {
  [key: string]: string; // Assuming productName is a string, and size is a string as well.
}
interface PriceInfo {
  [size: string]: string; // Mapping size to price (e.g., 'M': '150', 'L': '180')
}
interface CartItem {
  name: string;
  prices?: PriceInfo; // Optional if different sizes have different prices
  price?: string; // Can be a string for cases like "Soon"
}
interface Props {
  item: CartItem;
  selectedSize: SelectedSize;
  handleCartAction: (item: CartItem) => void;
  isInCart: (itemName: string) => boolean;
}
interface Item {
  name: string;
  sizes?: string[];  // Sizes are optional
  prices?: { [key: string]: string };  // Example of price per size
  price?: string;  // Fallback price (if sizes don't exist)
  image?: string;  // Image property
}

const Menu = () => {
  const [selectedSize, setSelectedSize] = useState<SelectedSize>({});
  const { addToCart, removeFromCart, isInCart } = useCart();

  useEffect(() => {
    const defaultSizes = {};
    menu.forEach(category => {
      category.items.forEach(item => {
        if (item.sizes && item.sizes.length > 0) {
          defaultSizes[item.name] = item.sizes[0];
        }
      });
    });
    setSelectedSize(defaultSizes);
  }, []);

  // Simple fade animation for container with stagger effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  // Simple fade animation for individual items
  const itemVariants = {
    hidden: { 
      opacity: 0
    },
    visible: { 
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  // Simple fade for headings
  const fadeInVariants = {
    hidden: { 
      opacity: 0
    },
    visible: { 
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const handleSizeSelect = (productName: string, size: string): void => {
  setSelectedSize((prev) => ({
    ...prev,
    [productName]: size,
  }));
};

  const handleCartAction = (item: CartItem): void => {
  if (isInCart(item.name)) {
    removeFromCart(item.name);
  } else {
    addToCart(item.name);
  }
  };

  const renderPrice = ({
    item,
    selectedSize,
    handleCartAction,
    isInCart,
  }: {
    item: CartItem;  // Ensure item is treated as a CartItem
    selectedSize: { [key: string]: string };
    handleCartAction: (item: CartItem) => void;
    isInCart: (name: string) => boolean;
  }): JSX.Element | null => {
    const renderCartButton = () => (
      <button onClick={() => handleCartAction(item)}>
        {isInCart(item.name) ? (
          <RemoveShoppingCartIcon size={30} className="text-red-600" />
        ) : (
          <ShoppingCartIcon size={30} className="text-emerald-600" />
        )}
      </button>
    );

    if (item.prices && selectedSize[item.name]) {
      return (
        <div className="flex justify-between items-center p-2 rounded-md mt-2">
          <p className="text-amber-700 sm:text-xl font-bold">
            ₱{item.prices[selectedSize[item.name]]}
          </p>
          {renderCartButton()}
        </div>
      );
    } else if (item.price) {
      return (
        <div className="flex justify-between items-center p-2 rounded-md mt-2">
          <p className="text-amber-700 sm:text-xl font-bold">
            {item.price === "Soon" ? "Coming Soon" : `₱${item.price}`}
          </p>
          {item.price !== "Soon" && renderCartButton()}
        </div>
      );
    }
    return null;
  };


  const renderSizeOptions = (item: MenuItem): JSX.Element | null => {
    if (item.sizes) {
      return (
        <div className="mb-4">
          <p className="text-sm text-amber-700 font-bold delius-font mb-2">Select Size:</p>
          <div className="flex flex-wrap gap-2">
            {item.sizes.map((size) => (
              <button
                key={size}
                onClick={() => handleSizeSelect(item.name, size)}
                className={`px-3 py-1 delius-font text-sm rounded-md transition-colors ${
                  selectedSize[item.name] === size
                    ? 'bg-amber-600 text-white'
                    : 'bg-gray-300 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      );
    }
    return null;
  };


  return (
    <div id="menu" className="py-16 pattern-topography bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2 
          variants={fadeInVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl sm:text-5xl font-bold text-center mb-8 font-serif text-amber-800"
        >
          Our Menu
        </motion.h2>
        
        {menu.map((category) => (
          <div key={category.category} className="mb-16">
            <motion.h3 
              variants={fadeInVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="sm:text-3xl text-2xl delius-font font-bold mb-8 text-amber-700 border-b-2 border-amber-500 pb-2"
            >
              {category.category}
            </motion.h3>
            
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {category.items.map((item, itemIndex) => (
              <motion.div
                key={`${category.category}-${itemIndex}`}
                variants={itemVariants}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>      
                <div className="p-4">
                  <h4 className="font-bold delius-font text-lg mb-2 text-gray-800">
                    {item.name} 
                  </h4>                
                  {renderSizeOptions(item as MenuItem)} {/* Cast item to MenuItem */}
                  {renderPrice({
                    item: item as CartItem,  // Cast item to CartItem
                    selectedSize,
                    handleCartAction,
                    isInCart
                  })}

                </div>
              </motion.div>
            ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;