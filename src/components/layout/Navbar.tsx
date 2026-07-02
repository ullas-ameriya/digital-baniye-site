import { useState } from "react";
import { Menu, X } from "lucide-react";
import Container from "../common/Container";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 backdrop-blur-xl bg-[#faf8f5]/70 border-b border-[#ebe7e2]">      <Container>

        <div className="h-20 flex items-center justify-between text-sm">

          <div>
            <a href="#" className="flex flex-col items-start">
            <div className="text-sm tracking-[0.5em] text-[#8B6B3F] uppercase">
              Digital
            </div>
            <div className="text-xs tracking-[0.7em] font-light text-[#111827] uppercase">
              Baniye
            </div>
            </a>
          </div>

          <nav className="hidden lg:flex gap-10 text-sm">
            <a href="#" className="hover:text-[#8B6B3F] transition">Home</a>
            <a href="#services" className="hover:text-[#8B6B3F] transition">Solutions</a>
            <a href="#work" className="hover:text-[#8B6B3F] transition">Work</a>
            <a href="#founder" className="hover:text-[#8B6B3F] transition">About</a>
          </nav>

          <div className="hidden lg:block">
            <a
              href="#CTA"
              className="inline-flex items-center justify-center bg-[#1F2937] text-white px-7 py-4 rounded-full text-sm font-medium hover:bg-black transition"
            >
              Build My Digital Presence
            </a>
          </div>

          <button
            className="lg:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>

        </div>

      </Container>

      {open && (
        <div className="lg:hidden bg-white border-t border-[#ebe7e2]">

          <Container>

            <div className="flex flex-col py-8 gap-6">

              <a href="#">Home</a>
              <a href="#">Solutions</a>
              <a href="#">Work</a>
              <a href="#">About</a>

              <a
                href="#CTA"
                className="inline-flex items-center justify-center bg-[#1F2937] text-white px-7 py-4 rounded-full text-sm font-medium hover:bg-black transition"
              >
                Build My Digital Presence
              </a>

            </div>

          </Container>

        </div>
      )}
    </header>
  );
};

export default Navbar;