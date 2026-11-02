// aisles: an index of six aisle names that grow to full size as each reaches the middle of the screen, each with a photo tile and a stock count (animation: scene:aisles)
export default function Aisles() {
  return (
    <section id="aisles" data-8b-section="aisles" aria-labelledby="aisles-title">
      <div className="wrap">
        <h2 className="m-text-6 aisles__title" id="aisles-title">Every aisle, front to back</h2>
        <ul className="aisles__list">
          <li className="aisles__row" data-tone="1">
            <span className="aisles__chip" aria-hidden="true"></span>
            {" "}
            <span className="m-text-5 aisles__name">Fixings</span>
            {" "}
            <span className="m-tile aisles__tile"><img style={{ background: "#f3f3f3" }} className="m-tile__img" src={"https://images.unsplash.com/photo-1641937725629-2adda0f55251?ixid=M3w0Mzc5fDB8MXxzZWFyY2h8MXx8YXNzb3J0ZWQlMjBzY3Jld3MlMjBhbmQlMjBib2x0c3xlbnwxfDB8fHwxNzkxNDQwMjY1fDA&ixlib=rb-4.1.0&auto=format&fit=crop&w=90&q=60"} alt="Screws, bolts and washers on white" loading="lazy" /></span>
            {" "}
            <span className="m-text-5 aisles__count">(1,240<span className="sr-only">lines in stock</span>)</span>
          </li>
          <li className="aisles__row" data-tone="2">
            <span className="aisles__chip" aria-hidden="true"></span>
            {" "}
            <span className="m-text-5 aisles__name">Tools</span>
            {" "}
            <span className="m-tile aisles__tile"><img style={{ background: "#8c7340" }} className="m-tile__img" src={"https://images.unsplash.com/photo-1617048530929-0edab8608369?ixid=M3w0Mzc5fDB8MXxzZWFyY2h8MTB8fGNhcnBlbnRlciUyMHdvcmtiZW5jaCUyMHRvb2xzfGVufDF8MHx8fDE3OTE0NDAyNjd8MA&ixlib=rb-4.1.0&auto=format&fit=crop&w=90&q=60"} alt="Pliers, a square and drill bits on a wooden bench" loading="lazy" /></span>
            {" "}
            <span className="m-text-5 aisles__count">(860<span className="sr-only">lines in stock</span>)</span>
          </li>
          <li className="aisles__row" data-tone="3">
            <span className="aisles__chip" aria-hidden="true"></span>
            {" "}
            <span className="m-text-5 aisles__name">Paint</span>
            {" "}
            <span className="m-tile aisles__tile"><img style={{ background: "#c0a673" }} className="m-tile__img" src={"https://images.unsplash.com/photo-1622250544703-997d69d856e3?ixid=M3w0Mzc5fDB8MXxzZWFyY2h8MTF8fHBhaW50JTIwY29sb3IlMjBzd2F0Y2hlc3xlbnwxfDB8fHwxNzkxNDQwMjY4fDA&ixlib=rb-4.1.0&auto=format&fit=crop&w=90&q=60"} alt="A paintbrush resting on a fan of colour cards" loading="lazy" /></span>
            {" "}
            <span className="m-text-5 aisles__count">(410<span className="sr-only">lines in stock</span>)</span>
          </li>
          <li className="aisles__row" data-tone="5">
            <span className="aisles__chip" aria-hidden="true"></span>
            {" "}
            <span className="m-text-5 aisles__name">Electrical</span>
            {" "}
            <span className="m-tile aisles__tile"><img style={{ background: "#d9d9d9" }} className="m-tile__img" src={"https://images.unsplash.com/photo-1761507321319-2d59343016f6?ixid=M3w0Mzc5fDB8MXxzZWFyY2h8OXx8ZWxlY3RyaWNhbCUyMHdpcmVzJTIwY2FibGV8ZW58MXwwfHx8MTc5MTQ0MDMxNXww&ixlib=rb-4.1.0&auto=format&fit=crop&w=90&q=60"} alt="A loose bundle of coloured wires on white" loading="lazy" /></span>
            {" "}
            <span className="m-text-5 aisles__count">(330<span className="sr-only">lines in stock</span>)</span>
          </li>
          <li className="aisles__row" data-tone="2">
            <span className="aisles__chip" aria-hidden="true"></span>
            {" "}
            <span className="m-text-5 aisles__name">Plumbing</span>
            {" "}
            <span className="m-tile aisles__tile"><img style={{ background: "#a6a6a6" }} className="m-tile__img" src={"https://images.unsplash.com/photo-1560883123-04646fef95df?ixid=M3w0Mzc5fDB8MXxzZWFyY2h8NXx8Y29wcGVyJTIwcGlwZSUyMGZpdHRpbmdzfGVufDF8MHx8fDE3OTE0NDAzMTR8MA&ixlib=rb-4.1.0&auto=format&fit=crop&w=90&q=60"} alt="A copper pipe with a joint running down a stone wall" loading="lazy" /></span>
            {" "}
            <span className="m-text-5 aisles__count">(290<span className="sr-only">lines in stock</span>)</span>
          </li>
          <li className="aisles__row" data-tone="4">
            <span className="aisles__chip" aria-hidden="true"></span>
            {" "}
            <span className="m-text-5 aisles__name">Garden</span>
            {" "}
            <span className="m-tile aisles__tile"><img style={{ background: "#8c400c" }} className="m-tile__img" src={"https://images.unsplash.com/photo-1647553756926-21a62021b9d2?ixid=M3w0Mzc5fDB8MXxzZWFyY2h8M3x8cG90dGluZyUyMHNoZWQlMjBzZWVkc3xlbnwxfDB8fHwxNzkxNDQwMjcwfDA&ixlib=rb-4.1.0&auto=format&fit=crop&w=90&q=60"} alt="Packets of vegetable seeds laid out in rows" loading="lazy" /></span>
            {" "}
            <span className="m-text-5 aisles__count">(520<span className="sr-only">lines in stock</span>)</span>
          </li>
        </ul>
        <div className="aisles__foot">
          <p className="m-text aisles__note">Not on the shelf? If it is still made, we can usually have it here by Thursday.</p>
          <a data-8b-placeholder="phone" className="m-btn-2" href="tel:01130000000"><span className="m-btn__dot" aria-hidden="true"></span><span className="m-btn__label">Call the counter</span></a>
        </div>
      </div>
    </section>
  );
}
