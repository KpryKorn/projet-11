export default function Carousel({ image }: { image: string }) {
  return (
    <div className="max-h-[415px] h-full mb-[30px]">
      <img
        className="max-h-[415px] w-full rounded-lg object-cover"
        src={image}
        alt=""
      />
    </div>
  );
}
