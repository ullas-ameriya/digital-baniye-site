import Container from "../common/Container";

const Footer = () => {
  return (
    <footer className="bg-[#faf8f5] border-t border-[#eee8e2] py-16">

      <Container>

        <div className="grid lg:grid-cols-3 gap-12">

          {/* Brand */}
          <div>
            <h3 className="text-xl font-medium mb-4">
              Digital Baniye
            </h3>

            <p className="text-gray-600 leading-7">
              Building digital practices for doctors, lawyers, chartered accountants,
              and high-trust professionals.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-3 text-gray-600 text-sm">
            <p className="font-medium text-[#1F2937] mb-2">Navigation</p>
            <p>Home</p>
            <p>Services</p>
            <p>Work</p>
            <p>About</p>
          </div>

          {/* Contact */}
          <div className="space-y-3 text-gray-600 text-sm">
            <p className="font-medium text-[#1F2937] mb-2">Contact</p>

            <p>WhatsApp: +91 70460 14680</p>
            <p>Email: hello@digitalbaniye.com</p>
            <p>India</p>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-[#eee8e2] text-sm text-gray-500 flex flex-col lg:flex-row justify-between gap-4">

          <p>© {new Date().getFullYear()} Digital Baniye. All rights reserved.</p>

          <p>Designed & built with intent.</p>

        </div>

      </Container>

    </footer>
  );
};

export default Footer;