import { SalatProps } from "./SalatProps";

export const Salat = () => {
  const cards = [
    {
      imageSrc: "/foods.png",
      title: "Өглөөний хоол",
      price: "14,800",
      oldPrice: "16,800",
    },
    {
      imageSrc: "/foods.png",
      title: "Шуурхай хүргэлт",
      description: "Захиалга бэлтгэлийн явцыг хянах",
    },
    {
      imageSrc: "/foods.png",
      title: "Эрүүл, баталгаат орц",
      description: "Захиалга бэлтгэлийн явцыг хянах",
    },
    {
      imageSrc: "/foods.png",
      title: "Хоолны өргөн сонголт",
      description: "Захиалга бэлтгэлийн явцыг хянах",
    },
  ];
  return (
    <div>
      <div className="flex justify-between">
        <div className="flex gap-1">
          <img src="/Star.png" alt="" />
          <p> Салад ба зууш</p>
        </div>
        <p>Бүгдийг харах</p>
      </div>
      <div className="flex justify-between">
        {cards.map((card, index) => (
          <SalatProps key={index} {...card} />
        ))}
      </div>
    </div>
  );
};