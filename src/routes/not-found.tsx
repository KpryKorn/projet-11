import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="min-h-screen text-red-kasa text-center flex flex-col gap-[139px] items-center justify-center">
      <h1 className="font-bold text-[288px]">404</h1>
      <p className="font-medium text-4xl">Oups! La page que vous demandez n'existe pas.</p>
      <Link to={"/"} className="text-black text-lg underline underline-offset-4">
        Retourner sur la page d'accueil
      </Link>
    </main>
  );
}
