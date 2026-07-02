type Props = {
  title: string;
  subtitle: string;
  description: string;
  metric1: string;
  metric2: string;
  image: string;
  url?: string;
};

const PortfolioCard = ({
  title,
  subtitle,
  description,
  metric1,
  metric2,
  image,
  url,
}: Props) => {
  return (
    <div className="group bg-white border border-[#eee8e2] shadow-[0_10px_30px_rgba(0,0,0,0.04)] rounded-3xl overflow-hidden hover:shadow-xl transition-all hover-lift card-hover">

      {/* Image */}
      <div className="h-56 overflow-hidden">
        <img
          src={image}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
        />
      </div>

      {/* Content */}
      <div className="p-7">

        <h3 className="text-xl font-medium mb-1">
          {title}
        </h3>

        <p className="text-sm text-[#8B6B3F] mb-4">
          {subtitle}
        </p>

        <p className="text-gray-600 leading-7 mb-5">
          {description}
        </p>

        {/* Metrics */}
        <div className="space-y-2 mb-6">
          <p className="text-sm text-gray-700">✓ {metric1}</p>
          <p className="text-sm text-gray-700">✓ {metric2}</p>
        </div>

        {url && (
          <a
            href={url}
            target="_blank"
            className="text-sm font-medium text-[#1F2937] underline"
          >
            View Live Site →
          </a>
        )}

      </div>

    </div>
  );
};

export default PortfolioCard;