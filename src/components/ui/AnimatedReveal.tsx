import type { ReactNode, CSSProperties } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

const AnimatedReveal = ({
  children,
  className = "",
  delay = 0,
}: Props) => {
  return (
    <div
      className={`opacity-0 animate-[fadeIn_0.5s_ease-out_forwards] ${className}`}
      style={{
        animationDelay: `${delay}s`,
      } as CSSProperties}
    >
      {children}
    </div>
  );
};

export default AnimatedReveal;