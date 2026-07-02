import Container from "../components/common/Container";
import AnimatedReveal from "../components/ui/AnimatedReveal";

const WhyWebsite = () => {
  return (
    <section className="py-32 lg:py-40 bg-[#fbfaf8] border-t border-[#eee8e2]">

      <Container>

        {/* Header */}
        <AnimatedReveal>
            <div className="max-w-3xl mb-16">
                <p className="text-xs tracking-[0.3em] uppercase text-[#8B6B3F] mb-4">
                The Reality
                </p>

                <h2 className="text-4xl lg:text-5xl font-light leading-tight mb-6">
                Why every serious professional needs a digital practice
                </h2>

                <p className="text-gray-600 text-lg leading-8">
                Today, your reputation is not built only in your clinic, chamber, or office.
                It is formed the moment someone searches your name online.
                </p>
            </div>
        </AnimatedReveal>

        {/* Grid */}
        <div className="grid lg:grid-cols-3 gap-10">

          {/* Card 1 */}
          <AnimatedReveal delay={0.1}>
            <div className="bg-white border border-[#eee8e2] shadow-[0_10px_30px_rgba(0,0,0,0.04)] rounded-3xl p-8 shadow-sm">

            <h3 className="text-xl font-medium mb-4">
              First impressions happen online
            </h3>

            <p className="text-gray-600 leading-7">
              Patients, clients, and stakeholders don’t meet you first in person anymore.
              They Google you. What they see determines whether they trust you or move on.
            </p>

            </div>
            </AnimatedReveal>

          {/* Card 2 */}
          <AnimatedReveal delay={0.2}>
            <div className="bg-white border border-[#eee8e2] shadow-[0_10px_30px_rgba(0,0,0,0.04)] rounded-3xl p-8 shadow-sm">

            <h3 className="text-xl font-medium mb-4">
              Social media is not enough
            </h3>

            <p className="text-gray-600 leading-7">
              Instagram, LinkedIn, and directories are rented platforms.
              You don’t control visibility, structure, or how your reputation is presented.
            </p>

            </div>
            </AnimatedReveal>

          {/* Card 3 */}
          <AnimatedReveal delay={0.3}>
            <div className="bg-white border border-[#eee8e2] shadow-[0_10px_30px_rgba(0,0,0,0.04)] rounded-3xl p-8 shadow-sm">
            <h3 className="text-xl font-medium mb-4">
              Trust is now a digital asset
            </h3>

            <p className="text-gray-600 leading-7">
              A well-structured website acts as your permanent credibility layer,
              validating your expertise before the first call or appointment.
            </p>

          </div>
          </AnimatedReveal>
        </div>

      </Container>

    </section>
  );
};

export default WhyWebsite;