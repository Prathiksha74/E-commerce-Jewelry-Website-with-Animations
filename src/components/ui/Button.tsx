import React from 'react';
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
}
const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick
}: ButtonProps) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2';
  const variantStyles = {
    primary: 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white shadow-md hover:shadow-lg focus:ring-amber-500',
    secondary: 'bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white shadow-md hover:shadow-lg focus:ring-pink-500',
    outline: 'border-2 border-amber-500 text-amber-600 hover:bg-amber-50 focus:ring-amber-500'
  };
  const sizeStyles = {
    sm: 'text-sm py-1.5 px-3',
    md: 'text-base py-2.5 px-5',
    lg: 'text-lg py-3 px-6'
  };
  return <button className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`} onClick={onClick}>
      {children}
    </button>;
};
export default Button;