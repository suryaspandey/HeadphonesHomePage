import React from "react";
import { featuredProducts } from "./constants";
import { AnimatePresence, motion } from "framer-motion";

const FeaturedProducts = () => {
  return (
    <section className="bg-white dark:bg-black py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
          Featured Headphones
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 text-lg max-w-2xl mx-auto">
          Discover our premium collection of headphones designed for exceptional
          audio quality and lasting comfort.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {featuredProducts.map((product) => {
            const {
              feature1Icon: Icon1,
              feature2Icon: Icon2,
              feature3Icon: Icon3,
            } = product;

            return (
              <motion.div
                key={product.id}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="bg-gray-100 dark:bg-zinc-700 rounded-2xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl"
                transition={{ duration: 0.2, ease: "easeInOut" }}
              >
                <motion.img
                  src={product.image}
                  alt={product.name}
                  className="rounded-xl mb-6 w-full h-56 object-cover shadow-sm"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                />

                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {product.name}
                  </h2>
                  <span className="text-lg font-bold text-gray-800 dark:text-gray-100">
                    {product.price}
                  </span>
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  {product.description}
                </p>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-3">
                    <Icon1 className="h-5 w-5 text-black dark:text-white" />
                    <span className="text-gray-700 dark:text-gray-300">
                      {product.feature1}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon2 className="h-5 w-5 text-black dark:text-white" />
                    <span className="text-gray-700 dark:text-gray-300">
                      {product.feature2}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon3 className="h-5 w-5 text-black dark:text-white" />
                    <span className="text-gray-700 dark:text-gray-300">
                      {product.feature3}
                    </span>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <motion.button
                    whileHover={{
                      backgroundColor: "#ffffff",
                      color: "#000000",
                      border: "1px solid #000000",
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className="bg-black dark:bg-white dark:text-black text-white px-6 py-2 rounded-full text-sm font-medium border border-transparent shadow-sm"
                  >
                    Add to Cart
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
