import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

const AnimatedReveal = ({ children, className = "" }: Props) => {
  return (
    <div className={`opacity-0 animate-[fadeIn_0.5s_ease-out_forwards] ${className}`}>
      {children}
    </div>
  );
};

export default AnimatedReveal;