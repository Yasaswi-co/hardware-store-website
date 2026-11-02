// counter: six jobs done while you wait, each with a price and a time, beside two photos
export default function Counter() {
  return (
    <section id="counter" data-8b-section="counter" aria-labelledby="counter-title">
      <div className="wrap counter__grid">
        <div className="counter__head">
          <h2 className="m-text-3" id="counter-title" data-8b-motion="rise">Done while you wait</h2>
          <p className="m-text counter__lead" data-8b-motion="rise">Bring the job to the counter. Most of it is finished before a cup of tea would have gone cold, and you see every cut being made.</p>
        </div>
        <ul className="counter__list">
          <li className="counter__row" data-8b-motion="rule">
            <span className="m-text-5 counter__name">Keys cut</span>
            {" "}
            <span className="m-text-7 counter__price">from £4.50</span>
            {" "}
            <span className="m-text-8 counter__time">about 3 minutes</span>
          </li>
          <li className="counter__row" data-8b-motion="rule">
            <span className="m-text-5 counter__name">Paint mixed to a sample</span>
            {" "}
            <span className="m-text-7 counter__price">from £14 a litre</span>
            {" "}
            <span className="m-text-8 counter__time">about 10 minutes</span>
          </li>
          <li className="counter__row" data-8b-motion="rule">
            <span className="m-text-5 counter__name">Timber cut to size</span>
            {" "}
            <span className="m-text-7 counter__price">50p a cut</span>
            {" "}
            <span className="m-text-8 counter__time">about 5 minutes</span>
          </li>
          <li className="counter__row" data-8b-motion="rule">
            <span className="m-text-5 counter__name">Glass and acrylic cut</span>
            {" "}
            <span className="m-text-7 counter__price">by the sheet</span>
            {" "}
            <span className="m-text-8 counter__time">about 15 minutes</span>
          </li>
          <li className="counter__row" data-8b-motion="rule">
            <span className="m-text-5 counter__name">Blades and chisels sharpened</span>
            {" "}
            <span className="m-text-7 counter__price">from £5</span>
            {" "}
            <span className="m-text-8 counter__time">ready next morning</span>
          </li>
          <li className="counter__row" data-8b-motion="rule">
            <span className="m-text-5 counter__name">Lamps rewired</span>
            {" "}
            <span className="m-text-7 counter__price">from £18</span>
            {" "}
            <span className="m-text-8 counter__time">ready in two days</span>
          </li>
        </ul>
        <div className="counter__photos">
          <figure className="counter__photo" data-tone="5" data-8b-motion="tint"><img style={{ background: "#260c0c" }} src={"https://images.unsplash.com/photo-1710129477453-6de47269341b?ixid=M3w0Mzc5fDB8MXxzZWFyY2h8Mnx8a2V5JTIwZHVwbGljYXRpbmclMjBtYWNoaW5lfGVufDF8MHx8fDE3OTE0NDAzMDd8MA&ixlib=rb-4.1.0&auto=format&fit=crop&w=810&q=60"} width="4192" height="2795" alt="The red key-cutting machine behind the counter, its guide wheel close up" loading="lazy" /></figure>
          <figure className="counter__photo counter__photo--b" data-tone="2" data-8b-motion="tint"><img style={{ background: "#262626" }} src={"https://images.unsplash.com/photo-1685022515804-af2e8b3b75e0?ixid=M3w0Mzc5fDB8MXxzZWFyY2h8MTd8fHNhbmRpbmclMjB3b29kJTIwd29ya3Nob3B8ZW58MXwwfHx8MTc5MTQ0MDMwOHww&ixlib=rb-4.1.0&auto=format&fit=crop&w=610&q=60"} width="4365" height="2905" alt="A length of timber being cut to size on the saw at the back" loading="lazy" /></figure>
        </div>
      </div>
    </section>
  );
}
