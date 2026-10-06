import Hero from "../components/Hero";
export default function Page() {
  return (
    <main>
      <Hero />
      <section className="flex h-screen items-center justify-center text-2xl text-white/60">
        Keep scrolling - the car follows you.
      </section>
    </main>
  );
}
