// departments: five departments held on one screen, each next panel wiping up over the last, with a guide link and a big letter (animation: scene:departments)
export default function Departments() {
  return (
    <section id="departments" data-8b-section="departments" data-ground="dark" aria-labelledby="departments-title">
      <h2 className="sr-only" id="departments-title">Departments</h2>
      <div className="departments__stage">
        <article className="dept" data-tone="1" aria-labelledby="dept-fixings">
          <img loading="lazy" style={{ background: "#404040" }} className="dept__photo" src={"https://images.unsplash.com/photo-1562936291-bfe45093d49c?ixid=M3w0Mzc5fDB8MXxzZWFyY2h8MXx8c2NyZXdzJTIwaW4lMjBkcmF3ZXJ8ZW58MXwwfHx8MTc5MTQ0MDI2NHww&ixlib=rb-4.1.0&auto=format&fit=crop&w=1920&q=60"} width="8256" height="5504" alt="A heap of zinc-plated wood screws" />
          <div className="dept__body wrap">
            <div className="dept__rule" aria-hidden="true"></div>
            <p className="m-text-6 dept__aisle">Aisles 1–3</p>
            <div className="dept__copy">
              <span className="m-badge"><span className="m-badge__chip" aria-hidden="true"></span><span className="m-badge__label">Fixings</span></span>
              <h3 className="m-text-3 dept__title" id="dept-fixings">Screws, plugs, nails and bolts, sold by the one or by the box.</h3>
              <a className="m-btn" href="#aisles"><span className="m-btn__dot" aria-hidden="true"></span><span className="m-btn__label">See fixings</span></a>
            </div>
          </div>
          <aside className="m-surface dept__guide" aria-label="Fixings guide">
            <div className="dept__guide-text">
              <p className="m-text-7 dept__guide-title">Which fixing for which wall?</p>
              <a className="m-link m-text-6" href="#faq">Read the guide</a>
            </div>
            <span className="dept__cover" aria-hidden="true">F</span>
          </aside>
        </article>
        <article className="dept" data-tone="2" aria-labelledby="dept-tools">
          <img loading="lazy" style={{ background: "#a67326" }} className="dept__photo" src={"https://images.unsplash.com/photo-1669582389450-67a661bccde0?ixid=M3w0Mzc5fDB8MXxzZWFyY2h8MTR8fGNhcnBlbnRlciUyMHdvcmtiZW5jaCUyMHRvb2xzfGVufDF8MHx8fDE3OTE0NDAyNjd8MA&ixlib=rb-4.1.0&auto=format&fit=crop&w=1920&q=60"} width="6000" height="4000" alt="Hand tools hung in rows on a pine wall above a workbench" />
          <div className="dept__body wrap">
            <div className="dept__rule" aria-hidden="true"></div>
            <p className="m-text-6 dept__aisle">Aisles 4–6</p>
            <div className="dept__copy">
              <span className="m-badge"><span className="m-badge__chip" aria-hidden="true"></span><span className="m-badge__label">Tools</span></span>
              <h3 className="m-text-3 dept__title" id="dept-tools">Hand tools that outlast the job, power tools you can try at the counter.</h3>
              <a className="m-btn" href="#hire"><span className="m-btn__dot" aria-hidden="true"></span><span className="m-btn__label">See tools</span></a>
            </div>
          </div>
          <aside className="m-surface dept__guide" aria-label="Tools guide">
            <div className="dept__guide-text">
              <p className="m-text-7 dept__guide-title">The twelve tools every flat needs</p>
              <a className="m-link m-text-6" href="#faq">Read the list</a>
            </div>
            <span className="dept__cover" aria-hidden="true">T</span>
          </aside>
        </article>
        <article className="dept" data-tone="3" aria-labelledby="dept-paint">
          <img loading="lazy" style={{ background: "#d9d9d9" }} className="dept__photo" src={"https://images.unsplash.com/photo-1631127887321-0a2cf902a002?ixid=M3w0Mzc5fDB8MXxzZWFyY2h8NHx8cGFpbnQlMjBjb2xvciUyMHN3YXRjaGVzfGVufDF8MHx8fDE3OTE0NDAyNjh8MA&ixlib=rb-4.1.0&auto=format&fit=crop&w=1920&q=60"} width="5472" height="3648" alt="Hands spreading fans of paint colour cards across a table" />
          <div className="dept__body wrap">
            <div className="dept__rule" aria-hidden="true"></div>
            <p className="m-text-6 dept__aisle">Aisles 7–8</p>
            <div className="dept__copy">
              <span className="m-badge"><span className="m-badge__chip" aria-hidden="true"></span><span className="m-badge__label">Paint</span></span>
              <h3 className="m-text-3 dept__title" id="dept-paint">Mixed to any chip, fan deck or flake of old wall you bring in.</h3>
              <a className="m-btn" href="#counter"><span className="m-btn__dot" aria-hidden="true"></span><span className="m-btn__label">See paint</span></a>
            </div>
          </div>
          <aside className="m-surface dept__guide" aria-label="Paint guide">
            <div className="dept__guide-text">
              <p className="m-text-7 dept__guide-title">How much paint for one room?</p>
              <a className="m-link m-text-6" href="#faq">Work it out</a>
            </div>
            <span className="dept__cover" aria-hidden="true">P</span>
          </aside>
        </article>
        <article className="dept" data-tone="4" aria-labelledby="dept-garden">
          <img loading="lazy" style={{ background: "#260c0c" }} className="dept__photo" src={"https://images.unsplash.com/photo-1573561368183-fd88bdb4503d?ixid=M3w0Mzc5fDB8MXxzZWFyY2h8Mnx8Z2FyZGVuJTIwdG9vbHMlMjBzaGVkfGVufDF8MHx8fDE3OTE0NDAyNjl8MA&ixlib=rb-4.1.0&auto=format&fit=crop&w=1920&q=60"} width="2928" height="2024" alt="A yellow shovel, rakes and a fork lined up against a dark wall" />
          <div className="dept__body wrap">
            <div className="dept__rule" aria-hidden="true"></div>
            <p className="m-text-6 dept__aisle">The yard and aisle 9</p>
            <div className="dept__copy">
              <span className="m-badge"><span className="m-badge__chip" aria-hidden="true"></span><span className="m-badge__label">Garden</span></span>
              <h3 className="m-text-3 dept__title" id="dept-garden">Seeds, compost, hose fittings and the small parts sheds are made of.</h3>
              <a className="m-btn" href="#aisles"><span className="m-btn__dot" aria-hidden="true"></span><span className="m-btn__label">See garden</span></a>
            </div>
          </div>
          <aside className="m-surface dept__guide" aria-label="Garden guide">
            <div className="dept__guide-text">
              <p className="m-text-7 dept__guide-title">What to sow this month</p>
              <a className="m-link m-text-6" href="#faq">See the list</a>
            </div>
            <span className="dept__cover" aria-hidden="true">G</span>
          </aside>
        </article>
        <article className="dept" data-tone="5" aria-labelledby="dept-keys">
          <img loading="lazy" style={{ background: "#262626" }} className="dept__photo" src={"https://images.unsplash.com/photo-1635237393049-55046279ebb8?ixid=M3w0Mzc5fDB8MXxzZWFyY2h8MTF8fGtleSUyMGN1dHRpbmd8ZW58MXwwfHx8MTc5MTQ0MDI3M3ww&ixlib=rb-4.1.0&auto=format&fit=crop&w=1920&q=60"} width="4784" height="3194" alt="Rows of uncut key blanks on a dark blue ground" />
          <div className="dept__body wrap">
            <div className="dept__rule" aria-hidden="true"></div>
            <p className="m-text-6 dept__aisle">At the counter</p>
            <div className="dept__copy">
              <span className="m-badge"><span className="m-badge__chip" aria-hidden="true"></span><span className="m-badge__label">Keys and locks</span></span>
              <h3 className="m-text-3 dept__title" id="dept-keys">Keys cut while you wait, locks fitted to the doors you already have.</h3>
              <a className="m-btn" href="#counter"><span className="m-btn__dot" aria-hidden="true"></span><span className="m-btn__label">See keys</span></a>
            </div>
          </div>
          <aside className="m-surface dept__guide" aria-label="Keys guide">
            <div className="dept__guide-text">
              <p className="m-text-7 dept__guide-title">Which keys we cut on the spot</p>
              <a className="m-link m-text-6" href="#faq">Check yours</a>
            </div>
            <span className="dept__cover" aria-hidden="true">K</span>
          </aside>
        </article>
      </div>
    </section>
  );
}
