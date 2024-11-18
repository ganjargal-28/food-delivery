type CardProps = {
  imageSrc?: string;
  title?: string;
  price?: string;
  oldPrice?: string;
  description?: string;
};
const FoodCard = (Props: CardProps) => {
  return (
    <div className="w-[264px] h-[155px] flex flex-col rounded-2xl justify-around">
      <div className="flex justify-start p-2">
        <img src={Props.imageSrc} alt="" />
      </div>
      <div className="p-2">
        <p className="text-[18px]">{Props.title}</p>
        {Props.description && (
          <p className="text-[14px] text-[#272727]">{Props.description}</p>
        )}
        <div className="flex gap-1">
          <p className="text-[14px] text-[#272727]">{Props.price}₮</p>
          {Props.oldPrice && <p>{Props.oldPrice}₮</p>}
        </div>
      </div>
    </div>
  );
};
export default FoodCard;
