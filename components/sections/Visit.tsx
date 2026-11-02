// visit: a shop-front photo that steps back into its half while hours, address, phone, email and a newsletter form come in (animation: scene:visit)
export default function Visit() {
  return (
    <section id="visit" data-8b-section="visit" aria-labelledby="visit-title">
      <figure className="visit__photo">
        <img style={{ background: "#0c2626" }} src={"https://images.unsplash.com/photo-1768180316485-2c7306ab38ff?ixid=M3w0Mzc5fDB8MXxzZWFyY2h8Mnx8c2hvcCUyMGRvb3J3YXklMjBvcGVufGVufDF8MHx8fDE3OTE0NDE2OTR8MA&ixlib=rb-4.1.0&auto=format&fit=crop&w=1610&q=60"} width="5541" height="3694" alt="The open shop door on Example Road, plants on the step and the window full of stock" loading="lazy" />
        <figcaption className="m-text-6 visit__caption">1 Example Road, Northfield</figcaption>
      </figure>
      <div className="visit__info">
        <h2 className="m-text-3" id="visit-title">Come in, the kettle is on</h2>
        <dl className="visit__hours">
          <div>
            <dt className="m-text-6">Monday to Friday</dt>
            <dd className="m-text-7">8:00–18:00</dd>
          </div>
          <div>
            <dt className="m-text-6">Saturday</dt>
            <dd className="m-text-7">8:00–17:00</dd>
          </div>
          <div>
            <dt className="m-text-6">Sunday</dt>
            <dd className="m-text-7">10:00–16:00</dd>
          </div>
        </dl>
        <p className="m-text">1 Example Road, Northfield NF4 0ZZ. Two loading bays at the back for timber and sheets; the 14 and 22 buses stop outside the door.</p>
        <div className="visit__contact m-text">
          <a data-8b-placeholder="phone" className="m-link" href="tel:01130000000">0113 000 0000</a>
          {" "}
          <a data-8b-placeholder="email" className="m-link" href="mailto:counter@sixpenny.example">counter@sixpenny.example</a>
        </div>
        <form data-8b-placeholder="form" className="visit__form" action="#visit" method="post">
          <p className="m-text-7">The Saturday note</p>
          <p className="m-text-8">One email a month: what came in, what is on at the bench, nothing else.</p>
          <div className="visit__fields">
            <label className="m-field"><span className="m-field__label">Your email</span><input className="m-field__input" type="email" name="email" autoComplete="email" required /></label>
            {" "}
            <button className="m-btn-2" type="submit"><span className="m-btn__dot" aria-hidden="true"></span><span className="m-btn__label">Sign me up</span></button>
          </div>
          <p className="m-text visit__done" role="status" hidden>Thank you. The next note goes out on the first Saturday of the month.</p>
        </form>
      </div>
    </section>
  );
}
