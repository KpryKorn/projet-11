export default function Tag({ tag }: { tag: string }) {
  return (
    <li className="inline font-medium bg-red-kasa px-6 py-[2px] text-white rounded-xl">
      {tag}
    </li>
  );
}
