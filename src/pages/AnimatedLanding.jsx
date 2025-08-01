// AnimatedLanding.jsx
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function AnimatedLanding() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <motion.div
        className="text-center space-y-6 text-4xl font-semibold"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.h1 variants={item}>Welcome to My Website</motion.h1>
        <motion.h2 variants={item}>Creative Solutions. Bold Design.</motion.h2>
        <motion.p variants={item} className="text-lg text-gray-300 mt-4">
          Scroll down to explore more.
        </motion.p>
      </motion.div>
    </div>
  );
}
