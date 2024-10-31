export default function Details({
  text,
  children,
}: {
  text: string;
  children?: React.ReactNode;
}) {
  return (
    <details className="flex-1 bg-red-kasa p-2 rounded-lg text-white">
      <summary className="font-medium">{text}</summary>
      {children}
    </details>
  );
}
