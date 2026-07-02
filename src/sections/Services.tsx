import Container from "../components/common/Container";

const services = [
  {
    title: "Digital Practice Architecture",
    desc: "End-to-end website systems designed to build trust, authority, and patient/client conversion.",
  },
  {
    title: "Analytics & Growth Intelligence",
    desc: "Understand where your clients come from, what converts, and how to optimize revenue streams.",
  },
  {
    title: "Content & Social Strategy",
    desc: "High-trust content frameworks for Instagram, YouTube, and LinkedIn without losing professional credibility.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-32 lg:py-40 bg-[#fbfaf8] border-t border-[#eee8e2]">
      <Container>
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <p className="text-xs tracking-[0.3em] uppercase text-[#8B6B3F] mb-4">
            What We Do
          </p>

          <h2 className="text-4xl lg:text-5xl font-light leading-tight mb-6">
            A complete system for building and growing your digital practice
          </h2>

          <p className="text-gray-600 text-lg leading-8">
            We don’t build isolated websites. We build connected systems that
            help professionals attract, convert, and retain high-value clients.
          </p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div
              key={i}
              className="bg-white border border-[#eee8e2] shadow-[0_10px_30px_rgba(0,0,0,0.04)] rounded-3xl p-8 shadow-sm hover:shadow-md transition hover-lift card-hover"
            >
              <p className="text-xs text-[#8B6B3F] mb-3 tracking-wide">
                0{i + 1}
              </p>

              <h3 className="text-xl font-medium mb-4">
                {s.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div className="mt-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 border-t border-[#eee8e2] pt-10">
          <p className="text-gray-600 max-w-xl">
            Every system is tailored to your profession — whether you are a doctor,
            CA, lawyer, or clinic owner.
          </p>
          
          <a
            href="#CTA"
            className="inline-flex items-center justify-center bg-[#1F2937] text-white px-7 py-4 rounded-full text-sm font-medium hover:bg-black transition"
          >
            Discuss Your Requirement
          </a>
        </div>
      </Container>
    </section>
  );
};

export default Services;