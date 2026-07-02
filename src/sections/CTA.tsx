import Container from "../components/common/Container";

const CTA = () => {
  return (
    <section id="CTA" className="py-32 lg:py-40 bg-[#0f172a] text-white relative overflow-hidden">

      {/* background glow */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute w-[600px] h-[600px] bg-amber-400 blur-[150px] -top-40 -left-40 rounded-full" />
        <div className="absolute w-[500px] h-[500px] bg-blue-400 blur-[150px] bottom-[-200px] right-[-100px] rounded-full" />
      </div>

      <Container className="relative">

        <div className="max-w-3xl">

          <p className="text-xs tracking-[0.3em] uppercase text-amber-300 mb-4">
            Let’s Build Something Serious
          </p>

          <h2 className="text-4xl lg:text-5xl font-light leading-tight mb-6">
            Your reputation is already being searched.
            <br />
            Let’s make sure it’s impressive.
          </h2>

          <p className="text-white/70 text-lg leading-8 mb-10">
            We work with select doctors, lawyers, chartered accountants, and founders
            who want to build a long-term digital practice — not just a website.
          </p>

          {/* buttons */}
          <div className="flex flex-col sm:flex-row gap-5">

            <a
              href="https://wa.me/917046014680?text=Hi%20Ullas,%20I%20visited%20Digital%20Baniye.%20I%20would%20like%20to%20discuss%20my%20digital%20presence."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-400 text-black px-7 py-4 rounded-full text-sm font-medium hover:bg-amber-300 transition text-center"
            >
              Chat on WhatsApp
            </a>

            {/* <button className="border border-white/30 px-7 py-4 rounded-full text-sm hover:bg-white hover:text-black transition">
              Book Strategy Call
            </button> */}

          </div>

          {/* small trust line */}
          <p className="text-white/50 text-sm mt-8">
            Limited onboarding capacity each month to ensure quality delivery.
          </p>

        </div>

      </Container>

    </section>
  );
};

export default CTA;