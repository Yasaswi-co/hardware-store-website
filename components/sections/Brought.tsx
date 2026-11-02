// brought: three pairs: a part brought in and the match, sliding together as they rise (animation: scene:brought)
export default function Brought() {
  return (
    <section id="brought" data-8b-section="brought" aria-labelledby="brought-title">
      <div className="wrap brought__head">
        <h2 className="m-text-3" id="brought-title">Bring the old one in</h2>
        <p className="m-text brought__lead">Half a hinge, a washer worn flat, a key snapped in the lock: put it on the counter and we will find its match, or tell you who still makes it.</p>
      </div>
      <ol className="wrap brought__list">
        <li className="brought__pair">
          <figure className="brought__item brought__item--in">
            <div className="brought__photo"><img style={{ background: "#262626" }} src={"https://images.unsplash.com/photo-1560673429-b9b9338a360a?ixid=M3w0Mzc5fDB8MXxzZWFyY2h8NHx8Zml4aW5nJTIwbGVha2luZyUyMHRhcHxlbnwxfDB8fHwxNzkxNDQwMzE2fDA&ixlib=rb-4.1.0&auto=format&fit=crop&w=900&q=60"} width="4444" height="2963" alt="A chrome tap with a drop of water hanging from it" loading="lazy" /></div>
            <figcaption className="brought__caption"><span className="m-text-6">Brought in</span><span className="m-text-7">An outside tap that would not stop dripping</span></figcaption>
          </figure>
          <figure className="brought__item brought__item--out">
            <div className="brought__photo"><img style={{ background: "#f3f3f3" }} src={"https://images.unsplash.com/photo-1589870446935-ce8bc41685b8?ixid=M3w0Mzc5fDB8MXxzZWFyY2h8Mnx8Y29wcGVyJTIwcGlwZSUyMGZpdHRpbmdzfGVufDF8MHx8fDE3OTE0NDAzMTR8MA&ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=60"} width="4032" height="3024" alt="Brass tap fittings standing on a white ground" loading="lazy" /></div>
            <figcaption className="brought__caption"><span className="m-text-6">Matched</span><span className="m-text-7">A half-inch washer and a new brass jumper, £3.40</span></figcaption>
          </figure>
        </li>
        <li className="brought__pair">
          <figure className="brought__item brought__item--in">
            <div className="brought__photo"><img style={{ background: "#260c0c" }} src={"https://images.unsplash.com/photo-1590280986931-d675a2cf9b2e?ixid=M3w0Mzc5fDB8MXxzZWFyY2h8MTF8fGJyb2tlbiUyMGtleXxlbnwxfDB8fHwxNzkxNDQwMzEyfDA&ixlib=rb-4.1.0&auto=format&fit=crop&w=900&q=60"} width="3872" height="2592" alt="An old brass key in the lock of a wooden door" loading="lazy" /></div>
            <figcaption className="brought__caption"><span className="m-text-6">Brought in</span><span className="m-text-7">Half a shed key, the other half still in the lock</span></figcaption>
          </figure>
          <figure className="brought__item brought__item--out">
            <div className="brought__photo"><img style={{ background: "#a68c73" }} src={"https://images.unsplash.com/photo-1643804926339-e94f0a655185?ixid=M3w0Mzc5fDB8MXxzZWFyY2h8MXx8a2V5JTIwY3V0dGluZ3xlbnwxfDB8fHwxNzkxNDQwMjczfDA&ixlib=rb-4.1.0&auto=format&fit=crop&w=900&q=60"} width="6000" height="3376" alt="A bunch of newly cut keys on a wooden table" loading="lazy" /></div>
            <figcaption className="brought__caption"><span className="m-text-6">Matched</span><span className="m-text-7">Two new keys cut from the half, six minutes</span></figcaption>
          </figure>
        </li>
        <li className="brought__pair">
          <figure className="brought__item brought__item--in">
            <div className="brought__photo"><img style={{ background: "#8c7373" }} src={"https://images.unsplash.com/photo-1648804740396-378a48bd01a3?ixid=M3w0Mzc5fDB8MXxzZWFyY2h8NHx8bmV3JTIwaGluZ2VzJTIwaGFyZHdhcmV8ZW58MXwwfHx8MTc5MTQ0MDM2MXww&ixlib=rb-4.1.0&auto=format&fit=crop&w=900&q=60"} width="6000" height="4000" alt="A strap hinge rusted into the boards of a gate" loading="lazy" /></div>
            <figcaption className="brought__caption"><span className="m-text-6">Brought in</span><span className="m-text-7">A gate hinge rusted through at the knuckle</span></figcaption>
          </figure>
          <figure className="brought__item brought__item--out">
            <div className="brought__photo"><img style={{ background: "#a6c0c0" }} src={"https://images.unsplash.com/photo-1593801626871-246f5957620a?ixid=M3w0Mzc5fDB8MXxzZWFyY2h8Nnx8c3RhaW5sZXNzJTIwc3RlZWwlMjBoaW5nZXxlbnwxfDB8fHwxNzkxNDQwMzU5fDA&ixlib=rb-4.1.0&auto=format&fit=crop&w=900&q=60"} width="6000" height="4000" alt="A small galvanised hinge fitted to a pale grey door" loading="lazy" /></div>
            <figcaption className="brought__caption"><span className="m-text-6">Matched</span><span className="m-text-7">A galvanised one with the same screw holes, £6.80</span></figcaption>
          </figure>
        </li>
      </ol>
    </section>
  );
}
