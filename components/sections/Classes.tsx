// classes: four Saturday workshop cards dealt out of a stack, each with date, price, places left and a phone link (animation: scene:classes)
export default function Classes() {
  return (
    <section id="classes" data-8b-section="classes" aria-labelledby="classes-title">
      <div className="wrap classes__head">
        <h2 className="m-text-3" id="classes-title">Fix-it Saturdays</h2>
        <p className="m-text classes__lead">Ninety minutes, one job, eight people round the big bench at the back. The tools and parts are ours, the tea is free, and you take home what you made.</p>
      </div>
      <ul className="wrap classes__deck">
        <li className="m-surface classes__card" data-tone="5">
          <div className="classes__photo"><img style={{ background: "#f3f3f3" }} src={"https://images.unsplash.com/photo-1553265381-674034b34554?ixid=M3w0Mzc5fDB8MXxzZWFyY2h8Mnx8Zml4aW5nJTIwbGVha2luZyUyMHRhcHxlbnwxfDB8fHwxNzkxNDQwMzE2fDA&ixlib=rb-4.1.0&auto=format&fit=crop&w=670&q=60"} width="6932" height="4104" alt="Hands working on a running chrome tap over a white basin" loading="lazy" /></div>
          <span className="m-badge"><span className="m-badge__chip" aria-hidden="true"></span><span className="m-badge__label">Plumbing</span></span>
          <p className="m-text-6">Saturday 18 October · 10:00–11:30</p>
          <h3 className="m-text-7">Stop a dripping tap</h3>
          <p className="m-text-8">£15 with the washers · 3 places left</p>
          <a data-8b-placeholder="phone" className="m-link m-text-6" href="tel:01130000000">Book by phone</a>
        </li>
        <li className="m-surface classes__card" data-tone="2">
          <div className="classes__photo"><img style={{ background: "#d9d9d9" }} src={"https://images.unsplash.com/photo-1602516793068-35b73edf3368?ixid=M3w0Mzc5fDB8MXxzZWFyY2h8M3x8ZHJpbGxpbmclMjB3YWxsJTIwc2hlbGZ8ZW58MXwwfHx8MTc5MTQ0MDMxN3ww&ixlib=rb-4.1.0&auto=format&fit=crop&w=570&q=60"} width="5717" height="4000" alt="A white shelf on wooden brackets holding a plant and a framed print" loading="lazy" /></div>
          <span className="m-badge"><span className="m-badge__chip" aria-hidden="true"></span><span className="m-badge__label">Fixings</span></span>
          <p className="m-text-6">Saturday 25 October · 10:00–11:30</p>
          <h3 className="m-text-7">Hang a shelf that stays up</h3>
          <p className="m-text-8">£15 with plugs and screws · 5 places left</p>
          <a data-8b-placeholder="phone" className="m-link m-text-6" href="tel:01130000000">Book by phone</a>
        </li>
        <li className="m-surface classes__card" data-tone="3">
          <div className="classes__photo"><img style={{ background: "#d9d9d9" }} src={"https://images.unsplash.com/photo-1693985120993-e9b203ce7631?ixid=M3w0Mzc5fDB8MXxzZWFyY2h8Mnx8cGFpbnQlMjByb2xsZXIlMjB3YWxsfGVufDF8MHx8fDE3OTE0NDAzMTh8MA&ixlib=rb-4.1.0&auto=format&fit=crop&w=530&q=60"} width="4032" height="3024" alt="A paint roller on a pole laying a fresh coat on a wall" loading="lazy" /></div>
          <span className="m-badge"><span className="m-badge__chip" aria-hidden="true"></span><span className="m-badge__label">Paint</span></span>
          <p className="m-text-6">Saturday 1 November · 10:00–12:00</p>
          <h3 className="m-text-7">Fill, sand and paint a wall</h3>
          <p className="m-text-8">£20 with filler and paint · 6 places left</p>
          <a data-8b-placeholder="phone" className="m-link m-text-6" href="tel:01130000000">Book by phone</a>
        </li>
        <li className="m-surface classes__card" data-tone="4">
          <div className="classes__photo"><img style={{ background: "#26260c" }} src={"https://images.unsplash.com/photo-1679797878543-66c1e502d413?ixid=M3w0Mzc5fDB8MXxzZWFyY2h8MTV8fHNhbmRpbmclMjB3b29kJTIwd29ya3Nob3B8ZW58MXwwfHx8MTc5MTQ0MDMwOHww&ixlib=rb-4.1.0&auto=format&fit=crop&w=590&q=60"} width="4240" height="2832" alt="A man smoothing a block of timber with a power sander" loading="lazy" /></div>
          <span className="m-badge"><span className="m-badge__chip" aria-hidden="true"></span><span className="m-badge__label">Tools</span></span>
          <p className="m-text-6">Saturday 8 November · 10:00–11:30</p>
          <h3 className="m-text-7">Sand and oil a tabletop</h3>
          <p className="m-text-8">£18 with the oil · 4 places left</p>
          <a data-8b-placeholder="phone" className="m-link m-text-6" href="tel:01130000000">Book by phone</a>
        </li>
      </ul>
      <p className="wrap m-text-8 classes__foot">Under-16s come with a grown-up. Places are held for a week after you call.</p>
    </section>
  );
}
