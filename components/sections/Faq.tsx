// faq: six questions as native <details> beside a photo of the parts cabinet
export default function Faq() {
  return (
    <section id="faq" data-8b-section="faq" aria-labelledby="faq-title">
      <div className="wrap faq__grid">
        <div className="faq__main">
          <h2 className="m-text-3" id="faq-title" data-8b-motion="rise">Asked at the counter</h2>
          <div className="faq__list">
            <details className="faq__item" data-8b-motion="rule">
              <summary className="faq__q"><span className="m-text-7">Do you really sell screws one at a time?</span><span className="faq__mark" aria-hidden="true"></span></summary>
              <p className="m-text faq__a">Yes. Every drawer in aisle 2 is priced by the one, by the ten and by the box, so you buy what the job needs and not a tin of spares for the shed.</p>
            </details>
            <details className="faq__item" data-8b-motion="rule">
              <summary className="faq__q"><span className="m-text-7">Can you match a paint colour from a chip?</span><span className="faq__mark" aria-hidden="true"></span></summary>
              <p className="m-text faq__a">Bring a flake the size of a fingernail. The scanner reads it and we mix it in about ten minutes, in any finish from flat matt to full gloss.</p>
            </details>
            <details className="faq__item" data-8b-motion="rule">
              <summary className="faq__q"><span className="m-text-7">Do you deliver?</span><span className="faq__mark" aria-hidden="true"></span></summary>
              <p className="m-text faq__a">Within three miles on Tuesdays and Fridays. It costs £5 and is free over £60, timber and sheet materials included.</p>
            </details>
            <details className="faq__item" data-8b-motion="rule">
              <summary className="faq__q"><span className="m-text-7">How does tool hire work?</span><span className="faq__mark" aria-hidden="true"></span></summary>
              <p className="m-text faq__a">Reserve by phone, collect from three on Friday and return by ten on Monday. We take a refundable deposit and photo ID, and show you how the tool works before it leaves.</p>
            </details>
            <details className="faq__item" data-8b-motion="rule">
              <summary className="faq__q"><span className="m-text-7">Can I bring things back?</span><span className="faq__mark" aria-hidden="true"></span></summary>
              <p className="m-text faq__a">Unused and in its packet, within 30 days, with the receipt. Cut keys, mixed paint and cut timber are made for you, so they stay with you.</p>
            </details>
            <details className="faq__item" data-8b-motion="rule">
              <summary className="faq__q"><span className="m-text-7">Which keys can you cut?</span><span className="faq__mark" aria-hidden="true"></span></summary>
              <p className="m-text faq__a">Most house, shed and padlock keys while you wait. Security and car keys are ordered in and take three to five days.</p>
            </details>
          </div>
        </div>
        <figure className="faq__photo" data-tone="1" data-8b-motion="tint"><img style={{ background: "#595959" }} src={"https://images.unsplash.com/photo-1573870360817-6099745b491d?ixid=M3w0Mzc5fDB8MXxzZWFyY2h8M3x8c2NyZXdzJTIwaW4lMjBkcmF3ZXJ8ZW58MXwwfHx8MTc5MTQ0MDI2NHww&ixlib=rb-4.1.0&auto=format&fit=crop&w=810&q=60"} width="5184" height="3456" alt="Clear plastic drawers of nails in the parts cabinet" loading="lazy" /></figure>
      </div>
    </section>
  );
}
