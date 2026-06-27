import React from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const Button = React.forwardRef(({ 
  className, 
  variant = 'primary', 
  size = 'md', 
  children, 
  ...props 
}, ref) => {
  const baseStyles = "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-glow focus:ring-offset-2 focus:ring-offset-pure-black disabled:opacity-50 disabled:pointer-events-none";
  
  const variants = {
    primary: "bg-white text-pure-black hover:bg-gray-200 hover:scale-[1.02] active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.15)]",
    secondary: "bg-titanium-dark text-white hover:bg-gray-700 hover:scale-[1.02] active:scale-95 border border-white/10",
    outline: "border border-white/20 text-white hover:bg-white/10 hover:border-white/40",
    ghost: "text-white hover:bg-white/10",
    glass: "glassmorphism text-white hover:bg-white/10 border-white/20 hover:border-white/40 shadow-lg"
  };

  const sizes = {
    sm: "h-9 px-4 text-sm",
    md: "h-11 px-6 text-base",
    lg: "h-14 px-8 text-lg font-semibold"
  };

  return (
    <motion.button
      ref={ref}
      whileTap={{ scale: 0.95 }}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </motion.button>
  );
});

Button.displayName = "Button";

export { Button };
