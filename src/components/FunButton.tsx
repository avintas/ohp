import { motion } from 'framer-motion';

interface FunButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export function FunButton({ children, onClick, className = '' }: FunButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`
        bg-[#2c2c2c] text-white px-8 py-3 rounded-lg font-semibold text-lg
        shadow-lg hover:shadow-xl transition-all duration-200
        focus:outline-none focus:ring-2 focus:ring-[#2c2c2c] focus:ring-opacity-50
        ${className}
      `}
    >
      {children}
    </motion.button>
  );
}
