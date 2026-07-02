// import Button from "../components/common/Button";
import Container from "../components/common/Container";
import HeroVisual from "../components/ui/HeroVisual";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-32 lg:pt-20">
      <Container>

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          <div>

            <p className="uppercase tracking-[0.3em] text-xs text-[#8B6B3F] mb-6">
              Digital Practice Architects
            </p>

            <h1 className="text-5xl lg:text-7xl font-light leading-tight mb-8 font-serif">
            

              Become Digital.
              <br />
              Remain Unforgettable.

            </h1>

            <p className="text-lg leading-9 text-gray-600 max-w-xl mb-10">

              From premium websites and intelligent analytics to social media strategy, we help high-value professionals build a digital presence that earns trust long before the first conversation.

            </p>

            <div className="flex gap-5 flex-wrap">

                <a
                  href="#CTA"
                  className="inline-flex items-center justify-center bg-[#1F2937] text-white px-7 py-4 rounded-full text-sm font-medium hover:bg-black transition"
                >
                  Build My Digital Presence
                </a>

                <a
                  href="#work"
                  className="inline-flex items-center justify-center border border-[#1F2937] text-[#1F2937] px-7 py-4 rounded-full text-sm font-medium hover:bg-[#1F2937] hover:text-white transition"
                >
                  View Digital Practices
                </a>
            </div>

          </div>

          <div>

            <HeroVisual />

          </div>

        </div>

      </Container>

    </section>
  );
};

export default Hero;