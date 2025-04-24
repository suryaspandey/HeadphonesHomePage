import React from "react";
import { featuredProducts } from "./constants";
import { AnimatePresence, motion } from "framer-motion";

const FeaturedProducts = () => {
  return (
    <section className="bg-white py-10 dark:bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gray-50 rounded-xl shadow-md p-4 hover:shadow-lg transition"
            //   transition={{ type: "spring", stiffness: 300 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              <motion.img
                src={product.image}
                alt={product.name}
                className=" h-3/5 xl:h-3/4 object-cover rounded-lg mb-4"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <h3 className="text-xl font-semibold dark:text-black">{product.name}</h3>
              <p className="text-gray-600 text-sm mb-2">
                {product.description}
              </p>
              <p className="text-lg font-bold text-black">{product.price}</p>
              <div className="flex justify-between items-center mt-4">
                <motion.button
                  whileHover={{
                    backgroundColor: "#ffffff",
                    color: "#000000",
                    border: "1px solid #000000",
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className="bg-black text-white px-4 py-1 rounded text-sm border border-transparent"
                >
                  Add to Cart
                </motion.button>
                {!product.inStock && (
                  <span className="text-red-500 text-sm">Out of stock</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
