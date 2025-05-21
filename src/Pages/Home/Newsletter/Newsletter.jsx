import { motion } from "framer-motion";
import { FiMail } from "react-icons/fi";

const Newsletter = () => {
  return (
    <section className="bg-gradient-to-r from-yellow-400 to-[#101135] dark:from-gray-800 dark:to-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center items-center mb-4">
            <FiMail className="text-[#562615] dark:text-red-400 text-4xl" />
          </div>

          <h2 className="text-4xl font-extrabold text-[#b29990] dark:text-white mb-3">
            Join Our Foodie Newsletter
          </h2>
          <p className="text-lg text-gray-300 dark:text-gray-300 mb-8">
            Be the first to hear about special offers, delicious recipes, and
            exclusive events.
          </p>

          <form className="sm:flex items-center justify-center gap-4">
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="w-full sm:w-96 px-5 py-3 rounded-full border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400 dark:bg-gray-800 dark:text-white"
            />
            <button
              type="submit"
              className="mt-4 sm:mt-0 px-6 py-3 rounded-full bg-yellow-400 text-white font-semibold hover:bg-[#101135] transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
