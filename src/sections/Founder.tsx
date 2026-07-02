import Container from "../components/common/Container";

const highlights = [
  "19+ years in Tech & Product",
  "Microsoft • Accenture",
  "MBA, IIM Ahmedabad",
  "9 years working in the USA",
  "Scaled Zayka Ka Tadka to 10M+ followers",
  "Host of Zindagee Ka Tadka podcast",
  "Built digital platforms across Healthcare, Legal & Commerce",
  "Data Analytics & Business Strategy expert",
];

const Founder = () => {
  return (
    <section
      id="founder"
      className="py-32 lg:py-40 bg-white border-t border-[#eee8e2]"
    >
      <Container>

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Photo */}

          <div className="max-w-md mx-auto">

            <img
              src="../images/ullas.jpg"
              alt="Ullas Ameriya"
              className="rounded-3xl border border-[#eee8e2] shadow-sm"
            />

          </div>

          {/* Content */}

          <div>

            <p className="text-xs tracking-[0.35em] uppercase text-[#8B6B3F] mb-4">
              Founder
            </p>

            <h2 className="text-5xl font-light leading-tight mb-8">
              Technology experience.
              <br />
              Business thinking.
              <br />
              Digital execution.
            </h2>

            <p className="text-gray-600 text-lg leading-8 mb-8">
              I'm <strong>Ullas Ameriya</strong>, founder of Digital Baniye.
              My career has taken me from building technology at Microsoft and
              Accenture to creating digital businesses, analytics platforms and
              media brands reaching millions of people.
            </p>

            <p className="text-gray-600 text-lg leading-8 mb-10">
              Today, I help professionals build digital practices that inspire
              trust, communicate authority and create measurable business
              impact.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">

              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex gap-3 items-start"
                >
                  <div className="mt-2 h-2 w-2 rounded-full bg-[#8B6B3F]" />

                  <p className="text-gray-700">
                    {item}
                  </p>

                </div>
              ))}

            </div>

          </div>

        </div>

      </Container>
    </section>
  );
};

export default Founder;