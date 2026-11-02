// owner: a portrait of the owner with a short history, a quote and a photo of the small-parts shelves, on a dark ground
export default function Owner() {
  return (
    <section id="owner" data-8b-section="owner" data-ground="dark" aria-labelledby="owner-title">
      <div className="wrap owner__grid">
        <div className="owner__person">
          <img style={{ background: "#8c8c8c" }} className="owner__portrait" src={"https://images.unsplash.com/photo-1772470091578-534d72103823?ixid=M3w0Mzc5fDB8MXxzZWFyY2h8NHx8b2xkZXIlMjBtYW4lMjBhcHJvbiUyMHBvcnRyYWl0JTIwd29ya3Nob3B8ZW58MXwwfHx8MTc5MTQ0MDMxOXww&ixlib=rb-4.1.0&auto=format&fit=crop&w=280&q=60"} width="3984" height="2656" alt="Len Hollis in his apron, magnifying glasses pushed up on his forehead" loading="lazy" />
          <div className="owner__who">
            <h2 className="m-text-7" id="owner-title">Len Hollis</h2>
            <p className="m-text-6 owner__role">Third owner, behind the counter since 2004</p>
          </div>
        </div>
        <div className="owner__text">
          <p className="m-text">Len bought Sixpenny from the Ashworths, who had it from the man who named it after the two-inch nail he sold most of in 1968.</p>
          <p className="m-text">Nothing has been moved much since. The drawers still run from small to large, and someone who knows what is in them is always on the floor.</p>
        </div>
        <blockquote className="owner__quote">
          <p className="m-text-4" data-8b-motion="rise">“I would rather sell you one screw that fits than a box of fifty that don’t.”</p>
          <a className="m-link" href="#visit">Come and say hello</a>
        </blockquote>
        <figure className="owner__shop">
          <div className="owner__frame" data-tone="3" data-8b-motion="tint"><img style={{ background: "#737359" }} src={"https://images.unsplash.com/photo-1631856954913-c751a44490ec?ixid=M3w0Mzc5fDB8MXxzZWFyY2h8NXx8aGFyZHdhcmUlMjBzaG9wJTIwc2hlbHZlc3xlbnwxfDB8fHwxNzkxNDQwMjc0fDA&ixlib=rb-4.1.0&auto=format&fit=crop&w=1000&q=60"} width="7571" height="5050" alt="Shelves of small parts in packets, priced and labelled, running down an aisle" loading="lazy" /></div>
          <figcaption className="m-text-6">Aisle 2, small parts from floor to ceiling</figcaption>
        </figure>
      </div>
    </section>
  );
}
