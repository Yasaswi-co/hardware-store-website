// hire: six hire rows; each tag turns over from the buy-new price to the weekend price (animation: scene:hire)
export default function Hire() {
  return (
    <section id="hire" data-8b-section="hire" aria-labelledby="hire-title">
      <div className="wrap hire__grid">
        <div className="hire__intro">
          <h2 className="m-text-3" id="hire-title">Borrow it for the weekend</h2>
          <p className="m-text">A tile cutter you will use once costs more than the tiles. Collect on Friday from three, bring it back by ten on Monday; a deposit and photo ID at the counter.</p>
          <figure className="hire__photo"><img style={{ background: "#73400c" }} src={"https://images.unsplash.com/photo-1683115099191-51e617fc5ff1?ixid=M3w0Mzc5fDB8MXxzZWFyY2h8MTJ8fGNhcnBlbnRlciUyMHdvcmtiZW5jaCUyMHRvb2xzfGVufDF8MHx8fDE3OTE0NDAyNjd8MA&ixlib=rb-4.1.0&auto=format&fit=crop&w=690&q=60"} width="4928" height="3264" alt="Drills, saws and sanders hung on the hire wall" loading="lazy" /></figure>
        </div>
        <div>
          <ul className="hire__list">
            <li className="hire__row" data-8b-motion="rule">
              <span className="m-text-5 hire__tool">Tile cutter</span>
              {" "}
              <span className="m-text-8 hire__deposit">£40 deposit</span>
              {" "}
              <span className="hire__tag"><span className="hire__flip"><span className="hire__face hire__face--front"><span className="m-text-7">£12</span><span className="m-text-6">a weekend<span className="sr-only">, £180 to buy new</span></span></span><span className="hire__face hire__face--back" aria-hidden="true"><span className="m-text-7">£180</span><span className="m-text-6">to buy new</span></span></span></span>
            </li>
            <li className="hire__row" data-8b-motion="rule">
              <span className="m-text-5 hire__tool">Wallpaper steamer</span>
              {" "}
              <span className="m-text-8 hire__deposit">£30 deposit</span>
              {" "}
              <span className="hire__tag"><span className="hire__flip"><span className="hire__face hire__face--front"><span className="m-text-7">£10</span><span className="m-text-6">a weekend<span className="sr-only">, £70 to buy new</span></span></span><span className="hire__face hire__face--back" aria-hidden="true"><span className="m-text-7">£70</span><span className="m-text-6">to buy new</span></span></span></span>
            </li>
            <li className="hire__row" data-8b-motion="rule">
              <span className="m-text-5 hire__tool">Hammer drill</span>
              {" "}
              <span className="m-text-8 hire__deposit">£50 deposit</span>
              {" "}
              <span className="hire__tag"><span className="hire__flip"><span className="hire__face hire__face--front"><span className="m-text-7">£15</span><span className="m-text-6">a weekend<span className="sr-only">, £160 to buy new</span></span></span><span className="hire__face hire__face--back" aria-hidden="true"><span className="m-text-7">£160</span><span className="m-text-6">to buy new</span></span></span></span>
            </li>
            <li className="hire__row" data-8b-motion="rule">
              <span className="m-text-5 hire__tool">Carpet cleaner</span>
              {" "}
              <span className="m-text-8 hire__deposit">£60 deposit</span>
              {" "}
              <span className="hire__tag"><span className="hire__flip"><span className="hire__face hire__face--front"><span className="m-text-7">£18</span><span className="m-text-6">a weekend<span className="sr-only">, £240 to buy new</span></span></span><span className="hire__face hire__face--back" aria-hidden="true"><span className="m-text-7">£240</span><span className="m-text-6">to buy new</span></span></span></span>
            </li>
            <li className="hire__row" data-8b-motion="rule">
              <span className="m-text-5 hire__tool">Ladder, 3.5 metres</span>
              {" "}
              <span className="m-text-8 hire__deposit">£30 deposit</span>
              {" "}
              <span className="hire__tag"><span className="hire__flip"><span className="hire__face hire__face--front"><span className="m-text-7">£9</span><span className="m-text-6">a weekend<span className="sr-only">, £130 to buy new</span></span></span><span className="hire__face hire__face--back" aria-hidden="true"><span className="m-text-7">£130</span><span className="m-text-6">to buy new</span></span></span></span>
            </li>
            <li className="hire__row" data-8b-motion="rule">
              <span className="m-text-5 hire__tool">Hedge trimmer</span>
              {" "}
              <span className="m-text-8 hire__deposit">£40 deposit</span>
              {" "}
              <span className="hire__tag"><span className="hire__flip"><span className="hire__face hire__face--front"><span className="m-text-7">£12</span><span className="m-text-6">a weekend<span className="sr-only">, £110 to buy new</span></span></span><span className="hire__face hire__face--back" aria-hidden="true"><span className="m-text-7">£110</span><span className="m-text-6">to buy new</span></span></span></span>
            </li>
          </ul>
          <a data-8b-placeholder="phone" className="m-btn-2 hire__note" href="tel:01130000000"><span className="m-btn__dot" aria-hidden="true"></span><span className="m-btn__label">Reserve by phone</span></a>
        </div>
      </div>
    </section>
  );
}
