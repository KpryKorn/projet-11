import { useState } from "react";

export default function Details({
  text,
  children,
}: {
  text: string;
  children?: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex-1 rounded-lg mb-4">
      <div
        className="rounded-lg bg-red-kasa flex p-2 justify-between items-center cursor-pointer"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span className="text-white font-medium text-lg">{text}</span>
        <span className={`transition-transform ${isOpen ? "rotate-180" : ""}`}>
          <svg
            width="25"
            height="14"
            viewBox="0 0 25 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.2897 0.789661C11.9591 0.120242 13.0462 0.120242 13.7157 0.789661L23.9979 11.0719C24.6674 11.7414 24.6674 12.8285 23.9979 13.4979C23.3285 14.1673 22.2414 14.1673 21.572 13.4979L12.5 4.42595L3.42804 13.4926C2.75862 14.162 1.67148 14.162 1.00206 13.4926C0.332646 12.8231 0.332646 11.736 1.00206 11.0666L11.2843 0.784306L11.2897 0.789661Z"
              fill="white"
            />
          </svg>
        </span>
      </div>

      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="p-2 text-black bg-slate-50 rounded-lg">{children}</div>
      </div>
    </div>
  );
}
