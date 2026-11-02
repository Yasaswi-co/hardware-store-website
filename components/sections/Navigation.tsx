// navigation: a logo mark, five section links and an Open 7 days link; a menu button opens a full-screen menu
export default function Navigation() {
  return (
    <header id="navigation" data-8b-section="navigation">
      <a className="nav__logo" href="#opening" aria-label="Sixpenny Hardware, back to the top"><span className="nav__word">Sixpenny</span><span className="nav__mark" aria-hidden="true">6d</span></a>
      <nav aria-label="Main">
        <ul className="nav__links">
          <li><a className="m-btn-3" href="#departments"><span className="m-btn-3__label">Departments</span></a></li>
          <li><a className="m-btn-3" href="#counter"><span className="m-btn-3__label">Counter</span></a></li>
          <li><a className="m-btn-3" href="#classes"><span className="m-btn-3__label">Classes</span></a></li>
          <li><a className="m-btn-3" href="#hire"><span className="m-btn-3__label">Tool hire</span></a></li>
          <li><a className="m-btn-3" href="#visit"><span className="m-btn-3__label">Visit</span></a></li>
        </ul>
      </nav>
      <a className="m-btn-3 nav__status" href="#visit"><span className="m-btn-3__label">Open 7 days</span></a>
      {" "}
      <button className="m-btn-3 nav__menu" type="button" aria-expanded="false" aria-controls="menu"><span className="m-btn-3__label">Menu</span></button>
      <div id="menu" className="menu" hidden data-lenis-prevent="">
        <div className="menu__top">
          <span className="m-text-7">Sixpenny Hardware</span>
          {" "}
          <button className="m-round menu__close" type="button" aria-label="Close the menu"><span className="m-round__icon" aria-hidden="true"></span></button>
        </div>
        <ul className="menu__list m-text-3">
          <li><a href="#departments">Departments</a></li>
          <li><a href="#counter">At the counter</a></li>
          <li><a href="#classes">Saturday classes</a></li>
          <li><a href="#hire">Tool hire</a></li>
          <li><a href="#visit">Visit the shop</a></li>
        </ul>
        <div className="menu__foot m-text">
          <a data-8b-placeholder="phone" className="m-link" href="tel:01130000000">0113 000 0000</a>
          {" "}
          <span>1 Example Road, Northfield</span>
        </div>
      </div>
    </header>
  );
}
