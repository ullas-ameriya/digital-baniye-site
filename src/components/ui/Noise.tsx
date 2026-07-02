const Noise = () => {
  return (
    <div className="pointer-events-none fixed inset-0 opacity-[0.03] z-[999] mix-blend-multiply">
      <img
        src="https://grainy-gradients.vercel.app/noise.svg"
        className="w-full h-full"
      />
    </div>
  );
};

export default Noise;