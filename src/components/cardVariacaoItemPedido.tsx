
type PizzaCardProps = {
  imageUrl: string;
  title: string;
  description: string;
  price: number;
  selected?: boolean;
  onSelect?: () => void;
};

export const VariacaoItem = ({
  imageUrl,
  title,
  description,
  price,
  selected = false,
  onSelect,
}: PizzaCardProps) => {
  return (
    <div
      className={`flex items-center justify-between border rounded-lg p-4 w-full max-w-md shadow-sm hover:shadow-md transition ${
        selected ? "border-blue-500" : "border-gray-300"
      }`}
      onClick={onSelect}
      style={{ cursor: "pointer" }}
    >
      <div className="flex items-center gap-4">
        <img
          src={imageUrl}
          alt={title}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h3 className="font-semibold text-lg">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
          <p className="mt-1 font-medium">R$ {price}</p>
        </div>
      </div>
      <div className="ml-4">
        <div
          className={`w-5 h-5 border-2 rounded-full flex items-center justify-center ${
            selected ? "border-blue-500" : "border-gray-400"
          }`}
        >
          {selected && <div className="w-3 h-3 bg-blue-500 rounded-full" />}
        </div>
      </div>
    </div>
  );
};
