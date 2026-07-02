import Container from "../components/common/Container";
import TestimonialCard from "../components/cards/TestimonialCard";
import { testimonials } from "../data/testimonials";
import AnimatedReveal from "../components/ui/AnimatedReveal";

const Testimonials = () => {
  return (
    <section className="py-32 lg:py-40 bg-[#fbfaf8] border-t border-[#eee8e2]">

      <Container>

        {/* Header */}
        <div className="max-w-3xl mb-14">

          <p className="text-xs tracking-[0.3em] uppercase text-[#8B6B3F] mb-4">
            Trust Layer
          </p>

          <h2 className="text-4xl lg:text-5xl font-light leading-tight mb-6">
            What professionals say after going digital
          </h2>

          <p className="text-gray-600 text-lg leading-8">
            A digital practice is not just a website. It is a shift in how clients perceive your credibility.
          </p>

        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-3 gap-10">

          {testimonials.map((t, i) => (
            <AnimatedReveal key={i} delay={i * 0.1}>
              <TestimonialCard {...t} />
            </AnimatedReveal>
          ))}

        </div>

      </Container>

    </section>
  );
};

export default Testimonials;