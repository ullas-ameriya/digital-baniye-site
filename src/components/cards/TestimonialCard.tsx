type Props = {
  name: string;
  role: string;
  text: string;
};

const TestimonialCard = ({ name, role, text }: Props) => {
  return (
    <div className="bg-white border border-[#eee8e2] shadow-[0_10px_30px_rgba(0,0,0,0.04)] rounded-3xl p-8 hover:shadow-md transition hover-lift card-hover">

      {/* Quote */}
      <p className="text-gray-600 leading-7 mb-6">
        “{text}”
      </p>

      {/* Author */}
      <div>
        <p className="font-medium text-[#1F2937]">
          {name}
        </p>

        <p className="text-sm text-[#8B6B3F]">
          {role}
        </p>
      </div>

    </div>
  );
};

export default TestimonialCard;