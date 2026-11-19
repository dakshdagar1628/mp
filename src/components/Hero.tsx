import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero section-shell" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow">Senior Architect · Design Lead</p>
        <h1 id="hero-title">Mahesh{" "}<br />Rawat<span className="title-period">.</span></h1>
        <p className="hero-description">
          Architecture and interiors for commercial, office, retail, institutional,
          hospitality, and luxury residential projects. Focused on biophilic design,
          sensory experience, and wayfinding.
        </p>

        <div className="hero-specialisms" aria-label="Areas of focus">
          <span>Biophilic design</span>
          <span>Sensory experience</span>
          <span>Wayfinding</span>
        </div>

        <div className="hero-actions">
          <a className="button button-primary" href="#work">
            Explore selected work <span aria-hidden="true">↘</span>
          </a>
          <a className="text-link" href="#contact">Get in touch</a>
        </div>

        <div className="hero-facts" aria-label="Practice overview">
          <div>
            <span className="hero-fact-value">14 years</span>
            <span className="hero-fact-label">architecture & interiors</span>
          </div>
          <div>
            <span className="hero-fact-value">₹1,200+ Cr</span>
            <span className="hero-fact-label">listed project budgets</span>
          </div>
          <div>
            <span className="hero-fact-value">300 acres</span>
            <span className="hero-fact-label">campus project</span>
          </div>
          <div>
            <span className="hero-fact-value">2,00,000 sq ft</span>
            <span className="hero-fact-label">retail project</span>
          </div>
        </div>
      </div>

      <figure className="hero-visual">
        <div className="hero-image-wrap">
          <Image
            src="/extracted/hailey-road-aerial-view.jpg"
            alt="Aerial rendering of a contemporary villa at 7 Hailey Road"
            fill
            priority
            loading="eager"
            sizes="(max-width: 800px) 100vw, 48vw"
            className="hero-image"
          />
        </div>
        <figcaption>
          <span>Villas at 7 Hailey Road</span>
          <span>Residential architecture</span>
        </figcaption>
      </figure>
    </section>
  );
}
