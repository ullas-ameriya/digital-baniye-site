import Container from "../components/common/Container";
import PortfolioCard from "../components/cards/PortfolioCard";
import { portfolio } from "../data/portfolio";
import AnimatedReveal from "../components/ui/AnimatedReveal";

const Portfolio = () => {
  return (
    <section id="work" className="py-32 lg:py-40 bg-[#faf8f5] border-t border-[#eee8e2]">

      <Container>

        {/* Header */}
        <div className="max-w-3xl mb-14">

          <p className="text-xs tracking-[0.3em] uppercase text-[#8B6B3F] mb-4">
            Selected Work
          </p>

          <h2 className="text-4xl lg:text-5xl font-light leading-tight mb-6">
            Digital practices we’ve built for leading professionals
          </h2>

          <p className="text-gray-600 text-lg leading-8">
            Every project is designed to improve trust, clarity, and conversion —
            not just aesthetics.
          </p>

        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-3 gap-10">

          {portfolio.map((item, i) => (
            <AnimatedReveal key={i} delay={i * 0.1}>
              <PortfolioCard {...item} />
            </AnimatedReveal>
          ))}

        </div>

      </Container>

    </section>
  );
};

export default Portfolio;