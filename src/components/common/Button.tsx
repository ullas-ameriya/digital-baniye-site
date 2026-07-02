type Props = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

const Button = ({
  children,
  variant = "primary",
}: Props) => {
  const base =
    "px-7 py-4 rounded-full transition-all duration-300 text-sm tracking-wide";

  const styles =
    variant === "primary"
      ? "bg-[#1F2937] text-white hover:-translate-y-0.5 hover:shadow-xl"
      : "border border-[#1F2937] hover:bg-[#1F2937] hover:text-white";

  return (
    <button className={`${base} ${styles}`}>
      {children}
    </button>
  );
};

export default Button;