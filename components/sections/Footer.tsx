// footer: a huge wordmark, the shop's address and hours, contact links, page links and small print
export default function Footer() {
  return (
    <footer id="footer" data-8b-section="footer">
      <div className="wrap">
        <span className="footer__word" style={{ "--len": "8" }} aria-hidden="true" data-8b-motion="rise">Sixpenny</span>
        <div className="footer__grid">
          <div className="footer__col">
            <p className="m-text-6">The shop</p>
            <p className="m-text">1 Example Road<br />Northfield NF4 0ZZ</p>
          </div>
          <div className="footer__col">
            <p className="m-text-6">Hours</p>
            <p className="m-text">Mon–Fri 8:00–18:00<br />Saturday 8:00–17:00<br />Sunday 10:00–16:00</p>
          </div>
          <div className="footer__col">
            <p className="m-text-6">Ask us</p>
            <ul className="footer__list m-text">
              <li><a data-8b-placeholder="phone" className="m-link" href="tel:01130000000">0113 000 0000</a></li>
              <li><a data-8b-placeholder="email" className="m-link" href="mailto:counter@sixpenny.example">counter@sixpenny.example</a></li>
            </ul>
          </div>
          <nav className="footer__col" aria-label="Footer">
            <p className="m-text-6">On this page</p>
            <ul className="footer__list m-text">
              <li><a className="m-link" href="#departments">Departments</a></li>
              <li><a className="m-link" href="#counter">At the counter</a></li>
              <li><a className="m-link" href="#classes">Saturday classes</a></li>
              <li><a className="m-link" href="#hire">Tool hire</a></li>
              <li><a className="m-link" href="#faq">Questions</a></li>
            </ul>
          </nav>
        </div>
        <div className="footer__base m-text-8">
          <span>© 2026 Sixpenny Hardware Ltd. Northfield. · Design:{" "}<a href="https://8b.com/" style={{ color: "inherit" }} data-8b-credit="">8B</a></span>
          {" "}
          <span>Prices include VAT. Hire terms at the counter.</span>
        </div>
      </div>
    </footer>
  );
}
