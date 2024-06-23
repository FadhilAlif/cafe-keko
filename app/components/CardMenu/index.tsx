import Image from "next/image";

interface CardMenuProps {
  imageSrc: string;
  title: string;
  description: string;
  price: string;
}

const CardMenu: React.FC<CardMenuProps> = ({
  imageSrc,
  title,
  description,
  price,
}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="relative w-full h-64">
        <Image
          src={imageSrc}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-gray-700 mb-4">{description}</p>
        <div className="text-lg font-semibold">{price}</div>
      </div>
    </div>
  );
};

export default CardMenu;
