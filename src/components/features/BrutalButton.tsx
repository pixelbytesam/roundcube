import { Link } from 'react-router-dom';

interface BrutalButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'dark';
  to?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  className?: string;
}

const variantStyles = {
  primary:
    'bg-brand-primary text-white border-brand-dark hover:bg-brand-primary-hover',
  outline:
    'bg-white text-brand-dark border-brand-dark hover:bg-brand-cream',
  dark:
    'bg-brand-dark text-white border-brand-dark hover:bg-[#1C2430]',
};

export default function BrutalButton({
  children,
  variant = 'primary',
  to,
  onClick,
  type = 'button',
  className = '',
}: BrutalButtonProps) {
  const base = `inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold text-[15px] border-2 rounded-xl shadow-brutal transition-all duration-150 active:translate-x-[2px] active:translate-y-[2px] active:shadow-brutal-pressed cursor-pointer select-none ${variantStyles[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={base}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={base}>
      {children}
    </button>
  );
}
