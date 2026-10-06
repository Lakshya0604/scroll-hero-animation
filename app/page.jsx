import Hero from "../components/Hero";

export default function Page() {
  return (
    <main id="top">
      <Hero />
      <section className="outro">
        <span className="eyebrow">THE ROAD DOESN'T END HERE</span>
        <h2>Move with purpose.<br />Make an impression.</h2>
        <p>A scroll-driven experiment in motion, rhythm and interaction.<br />Original artwork. Small details. One smooth journey.</p>
        <a href="#top">BACK TO THE START ↑</a>
      </section>
    </main>
  );
}
