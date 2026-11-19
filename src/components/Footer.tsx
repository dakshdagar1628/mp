export default function Footer() {
  return (
    <>
      <section className="contact-section" id="contact" aria-labelledby="contact-title">
        <div className="section-shell contact-inner" data-reveal>
          <div>
            <p className="eyebrow eyebrow-light">Contact</p>
            <h2 id="contact-title">Discuss a project.</h2>
            <p className="contact-intro">For project enquiries, contact Mahesh directly.</p>
          </div>
          <div className="contact-details">
            <a href="mailto:mahesh61909@gmail.com">mahesh61909@gmail.com <span aria-hidden="true">↗</span></a>
            <a href="tel:+919599512632">+91 9599512632</a>
            <a href="https://www.linkedin.com/in/mahesh-rawat-b70b1a54" target="_blank" rel="noreferrer">
              LinkedIn profile <span aria-hidden="true">↗</span>
            </a>
            <address>Faridabad, Haryana (NCR)</address>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="section-shell footer-inner">
          <span>Mahesh Rawat</span>
          <span>Senior Architect · Design Lead</span>
          <span>© {new Date().getFullYear()} Mahesh Rawat</span>
        </div>
      </footer>
    </>
  );
}
