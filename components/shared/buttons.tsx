import { ReactNode } from 'react';

interface PrimaryButtonProps {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
}

export function PrimaryButton({
  children,
  onClick,
  disabled = false,
  className = '',
  href,
  target,
  rel,
}: PrimaryButtonProps) {
  const baseClass =
    'bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed inline-block';

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={`${baseClass} ${className}`}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} disabled={disabled} className={`${baseClass} ${className}`}>
      {children}
    </button>
  );
}

export function SecondaryButton({
  children,
  onClick,
  disabled = false,
  className = '',
  href,
  target,
  rel,
}: PrimaryButtonProps) {
  const baseClass =
    'bg-white hover:bg-slate-50 text-blue-600 font-medium py-2 px-6 rounded-lg transition-colors duration-200 border border-blue-600 disabled:opacity-50 disabled:cursor-not-allowed inline-block';

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={`${baseClass} ${className}`}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} disabled={disabled} className={`${baseClass} ${className}`}>
      {children}
    </button>
  );
}

export function OutlineButton({
  children,
  onClick,
  disabled = false,
  className = '',
  href,
  target,
  rel,
}: PrimaryButtonProps) {
  const baseClass =
    'bg-transparent hover:bg-slate-50 text-slate-700 font-medium py-2 px-6 rounded-lg transition-colors duration-200 border border-slate-300 disabled:opacity-50 disabled:cursor-not-allowed inline-block';

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={`${baseClass} ${className}`}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} disabled={disabled} className={`${baseClass} ${className}`}>
      {children}
    </button>
  );
}
