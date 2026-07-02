import Container from "../components/common/Container";

const OwnYourPractice = () => {
  return (
    <section className="py-32 lg:py-40 bg-[#0f172a] text-white relative overflow-hidden">

      {/* soft glow background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute w-[600px] h-[600px] bg-amber-400 rounded-full blur-[140px] -top-40 -left-40" />
        <div className="absolute w-[500px] h-[500px] bg-blue-400 rounded-full blur-[140px] bottom-[-200px] right-[-100px]" />
      </div>

      <Container className="relative">

        {/* Header */}
        <div className="max-w-3xl mb-16">

          <p className="text-xs tracking-[0.3em] uppercase text-amber-300 mb-4">
            The Shift
          </p>

          <h2 className="text-4xl lg:text-5xl font-light leading-tight mb-6">
            Own your digital practice.
            <br />
            Don’t rent attention.
          </h2>

          <p className="text-white/70 text-lg leading-8">
            Social platforms help people discover you.
            But only a digital practice ensures they trust you, remember you, and choose you.
          </p>

        </div>

        {/* Pyramid */}
        <div className="grid lg:grid-cols-5 gap-6">

          <div className="lg:col-span-1 bg-white/5 border border-white/10 rounded-2xl p-6">
            <p className="text-xs text-white/60 mb-2">Level 1</p>
            <h3 className="font-medium mb-2">Visibility</h3>
            <p className="text-sm text-white/60">
              Being discoverable on search and social platforms.
            </p>
          </div>

          <div className="lg:col-span-1 bg-white/5 border border-white/10 rounded-2xl p-6">
            <p className="text-xs text-white/60 mb-2">Level 2</p>
            <h3 className="font-medium mb-2">Trust</h3>
            <p className="text-sm text-white/60">
              Clear positioning, credibility, and professional presence.
            </p>
          </div>

          <div className="lg:col-span-1 bg-white/5 border border-white/10 rounded-2xl p-6">
            <p className="text-xs text-white/60 mb-2">Level 3</p>
            <h3 className="font-medium mb-2">Authority</h3>
            <p className="text-sm text-white/60">
              Case studies, content, and proof of expertise.
            </p>
          </div>

          <div className="lg:col-span-1 bg-white/5 border border-white/10 rounded-2xl p-6">
            <p className="text-xs text-white/60 mb-2">Level 4</p>
            <h3 className="font-medium mb-2">Conversion</h3>
            <p className="text-sm text-white/60">
              Turning interest into consultations or business.
            </p>
          </div>

          <div className="lg:col-span-1 bg-white/5 border border-white/10 rounded-2xl p-6">
            <p className="text-xs text-white/60 mb-2">Level 5</p>
            <h3 className="font-medium mb-2">Retention</h3>
            <p className="text-sm text-white/60">
              Staying top-of-mind through structured digital systems.
            </p>
          </div>

        </div>

        {/* CTA */}
        <div className="mt-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">

          <p className="text-white/70 max-w-xl">
            We design systems that take you from visibility to authority — not just websites.
          </p>

          <a
            href="#CTA"
            className="inline-flex items-center justify-center bg-amber-400 text-black px-7 py-4 rounded-full text-sm font-medium hover:bg-amber-300 transition"
          >
            Build My Digital Presence
          </a>

        </div>

      </Container>

    </section>
  );
};

export default OwnYourPractice;