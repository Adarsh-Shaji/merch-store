import { motion } from 'framer-motion';

export default function ProductCard({ product }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md hover:scale-[1.02] transition-transform duration-300 cursor-pointer"
    >
      <img src={product.image} alt={product.name} className="h-60 w-full object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-500">{product.category}</p>
        <p className="text-xl font-bold mt-2">₹{product.price}</p>
        <button className="mt-3 w-full bg-black text-white py-2 rounded">Add to Cart</button>
      </div>
    </motion.div>
  );
}
