const ItemCard = ({
  title,
  price,
  onClick,
}: {
  title: string;
  price: number;
  onClick: () => void;
}) => {
  return (
    <div className="border rounded-xl p-5 space-y-1 w-39">
      <div className="flex space-x-2">
        <div>
          <h1>{title}</h1>
        </div>
        <div>${price}</div>
      </div>
      <div>
        <button
          className="border p-1 text-sm hover:bg-slate-200"
          onClick={onClick}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ItemCard;
