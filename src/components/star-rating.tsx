export default function StarRating({ rating }: { rating: number }) {
  const nberOfStars = Math.floor(rating);
  const stars = Array.from({ length: 5 }, (_, idx) => {
    const star = idx + 1;
    return (
      <svg
        key={idx}
        className={`h-6 w-6 fill-current ${
          star <= nberOfStars ? "text-red-kasa" : "text-gray-300"
        }`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
    );
  });

  return <div className="flex gap-1">{stars}</div>;
}
