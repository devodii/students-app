import { Link } from "react-router-dom";

export function Hero() {
  return (
    <section className="h- flex flex-col space-y-4">
      <h1 className="text-4xl lg:text-5xl font-extrabold">
        Welcome to the Students App
      </h1>
      <p className="text-xl">Seamlessly attend your classes with our app.</p>

      <Link to="courses" className="underline underline-offset-2">
        Explore today courses
      </Link>
    </section>
  );
}
