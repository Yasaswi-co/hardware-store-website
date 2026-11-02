// The page scripts from the original index.html, in the same order, run once in the browser.
// Each block keeps its data-8b-part name; see AGENTS.md for the selectors they rely on.
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import Lenis from 'lenis';

let started = false;

export function initSite() {
  if (started) return;
  started = true;
  window.gsap = gsap;
  window.ScrollTrigger = ScrollTrigger;
  sectionNavigation();
  sectionOpening();
  sectionVisit();
  motionQueue();
  pageInit();
  motion();
  sceneOpening();
  sceneDepartments();
  sceneAisles();
  sceneBrought();
  sceneClasses();
  sceneHire();
  sceneVisit();
}

// section-script:navigation
function sectionNavigation() {
  const nav = document.getElementById('navigation');
  const menu = document.getElementById('menu');
  const openButton = nav.querySelector('.nav__menu');
  const closeButton = menu.querySelector('.menu__close');
  let last = scrollY, ticking = false;
  const update = () => {
    ticking = false;
    const y = scrollY, delta = y - last;
    if (Math.abs(delta) > 3) {
      nav.classList.toggle('is-hidden', delta > 0 && y > 160);
      last = y;
    }
    const probe = nav.getBoundingClientRect().height / 2;
    const dark = [...document.querySelectorAll('[data-ground="dark"]')].some(el => {
      const r = el.getBoundingClientRect();
      return r.top <= probe && r.bottom >= probe;
    });
    nav.classList.toggle('is-on-dark', dark);
  };
  addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
  update();
  const setMenu = open => {
    menu.hidden = !open;
    openButton.setAttribute('aria-expanded', String(open));
    if (open) { window.lenis?.stop(); closeButton.focus(); } else { window.lenis?.start(); openButton.focus(); }
  };
  openButton.addEventListener('click', () => setMenu(true));
  closeButton.addEventListener('click', () => setMenu(false));
  menu.addEventListener('click', event => { if (event.target.closest('a')) setMenu(false); });
  addEventListener('keydown', event => { if (event.key === 'Escape' && !menu.hidden) setMenu(false); });
}

// section-script:opening
function sectionOpening() {
  const stage = document.querySelector('#opening .opening__stage');
  if (!('IntersectionObserver' in window)) return;
  new IntersectionObserver(([entry]) => stage.classList.toggle('is-paused', !entry.isIntersecting)).observe(stage);
}

// section-script:visit
function sectionVisit() {
  const form = document.querySelector('#visit .visit__form');
  if (!form) return;
  const fields = form.querySelector('.visit__fields');
  const done = form.querySelector('.visit__done');
  form.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.checkValidity()) { form.reportValidity(); return; }
    fields.hidden = true;
    done.hidden = false;
  });
}

// motion-queue
let queueMotion = () => {};
function motionQueue() {
  const fonts = document.fonts ? document.fonts.ready : Promise.resolve();
  const parsed = document.readyState === 'loading' ? new Promise(resolve => document.addEventListener('DOMContentLoaded', resolve, { once: true })) : Promise.resolve();
  const ready = () => Promise.all([fonts, parsed]).then(() => firsts);
  const nextTask = () => window.scheduler?.yield?.() ?? new Promise(resolve => setTimeout(resolve));
  const refresh = () => {
    if (typeof window.refreshScroll === 'function') return window.refreshScroll();
    ScrollTrigger.sort(); ScrollTrigger.refresh();
  };
  const run = (setup, name) => {
    for (const trigger of ScrollTrigger.getAll()) if (!trigger.end && ScrollTrigger.getAll().includes(trigger)) trigger.refresh(0, 1);
    const context = gsap.context(() => {});
    const log = new MutationObserver(() => {});
    log.observe(document.documentElement, { attributes: true, attributeOldValue: true, subtree: true });
    let failure = null, records;
    try { context.add(() => { try { setup(); } catch (error) { failure = error; } }); }
    finally { records = log.takeRecords(); log.disconnect(); }
    if (!failure) return true;
    try { context.revert(); } catch (error) { console.error(name, 'revert failed', error); }
    for (const { target, attributeName, oldValue } of records.reverse()) {
      const now = target.getAttribute(attributeName);
      if (oldValue == null) { if (now != null) target.removeAttribute(attributeName); }
      else if (now !== oldValue) target.setAttribute(attributeName, oldValue);
    }
    console.error(name, failure);
    return false;
  };
  let firsts = Promise.resolve(), tail = null, pending = 0, lazy = null, building = 0, firstCount = 0;
  window.motionReady = ready();
  parsed.then(() => { if (firstCount && !tail) firsts.then(refresh); });
  queueMotion = (setup, { first = false, near, id } = {}) => {
    if (typeof setup !== 'function') return;
    const name = id || 'motion';
    if (near instanceof Element && window.IntersectionObserver) {
      const watch = new IntersectionObserver(entries => {
        if (!entries.some(entry => entry.isIntersecting)) return;
        watch.disconnect();
        building++;
        lazy = (lazy || ready()).then(nextTask).then(() => run(setup, name)).finally(() => { if (!--building) refresh(); });
      }, { rootMargin: '100% 0px' });
      watch.observe(near);
      return;
    }
    if (first) { firstCount++; firsts = firsts.then(() => fonts).then(() => { if (!run(setup, name)) refresh(); }); }
    else {
      pending++;
      tail = (tail || ready()).then(nextTask).then(() => run(setup, name))
        .finally(() => { if (!--pending) refresh(); });
    }
    window.motionReady = Promise.all([firsts, tail]);
  };
  window.queueMotion = queueMotion;
}

// page-init
function pageInit() {
  gsap.registerPlugin(ScrollTrigger, SplitText);
  window.refreshScroll = () => {
    ScrollTrigger.sort();
    ScrollTrigger.refresh();
  };
  gsap.matchMedia().add('(prefers-reduced-motion: no-preference)', () => {
    const lenis = window.lenis = new Lenis({ lerp: 0.09, anchors: { offset: 0 } });
    const tick = time => lenis.raf(time * 1000);
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    return () => { gsap.ticker.remove(tick); gsap.ticker.lagSmoothing(500, 33); lenis.destroy(); window.lenis = null; };
  });
}

// motion
function motion() {
  const effects = {
    rise(element, vars = {}) {
      return gsap.timeline(vars).fromTo(element,
        { yPercent: 28, clipPath: 'inset(0% 0% 100% 0%)' },
        { yPercent: 0, clipPath: 'inset(0% 0% -25% 0%)', duration: 1, ease: 'power3.out', clearProps: 'clipPath,transform' });
    },
    rule(element, vars = {}) {
      return gsap.timeline(vars)
        .fromTo(element, { backgroundSize: '0% 1px' }, { backgroundSize: '100% 1px', duration: 1, ease: 'power2.inOut', clearProps: 'backgroundSize' }, 0)
        .fromTo(element.children, { y: 22, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'power2.out', stagger: 0.07, clearProps: 'transform,opacity' }, 0.25);
    },
    tint(element, vars = {}) {
      const image = element.querySelector('img');
      return gsap.timeline(vars).fromTo(image,
        { clipPath: 'inset(100% 0% 0% 0%)', scale: 1.16 },
        { clipPath: 'inset(0% 0% 0% 0%)', scale: 1, duration: 1.2, ease: 'power3.out', clearProps: 'clipPath,transform' });
    }
  };
  const effectStarts = { rise: 'top 88%', rule: 'top 92%', tint: 'top 86%' };
  document.querySelectorAll('[data-8b-section]').forEach(section => {
    Object.keys(effects).forEach(name => {
      const elements = section.querySelectorAll(`[data-8b-motion~="${name}"]`);
      if (!elements.length) return;
      const id = `effect:${name}:${section.id}`;
      queueMotion(() => gsap.matchMedia().add('(prefers-reduced-motion: no-preference)', () => {
        elements.forEach((element, index) => {
          ScrollTrigger.create({ id: `${id}:${index}`, trigger: element, start: effectStarts[name], once: true, animation: effects[name](element, { paused: true }) });
        });
      }), section.getBoundingClientRect().top < innerHeight ? { first: true, id } : { near: section, id });
    });
  });
}

// scene:opening
function sceneOpening() {
  queueMotion(() => {
    gsap.matchMedia().add('(prefers-reduced-motion: no-preference)', () => {
      const section = document.getElementById('opening');
      const space = section.querySelector('.opening__space');
      const field = section.querySelector('.opening__field');
      const copy = section.querySelector('.opening__copy');
      const statement = section.querySelector('.opening__statement');
      const inline = section.querySelector('.opening__inline');
      section.classList.add('is-staged');
      const split = SplitText.create(statement, { type: 'words', wordsClass: 'opening__word' });
      const timeline = gsap.timeline({
        defaults: { ease: 'none' },
        scrollTrigger: { id: 'opening', trigger: section, start: 'top top', end: 'bottom bottom', scrub: 0.7, invalidateOnRefresh: true }
      });
      timeline
        .to(field, { z: () => (innerWidth < 760 ? 1700 : 2400), scale: 1.3, duration: 0.6, ease: 'power1.in' }, 0)
        .to(space, { opacity: 0, duration: 0.18 }, 0.42)
        .to(copy, { yPercent: -40, scale: 0.84, duration: 0.46, ease: 'power1.in' }, 0)
        .to(copy, { opacity: 0, duration: 0.3 }, 0.16)
        .fromTo(inline, { clipPath: 'inset(0% 50% 0% 50%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: 0.3 }, 0.32);
      const step = 0.5 / split.words.length;
      split.words.forEach((word, index) => timeline.fromTo(word, { opacity: 0.14 }, { opacity: 1, duration: 0.08 }, 0.36 + index * step));
      return () => { split.revert(); section.classList.remove('is-staged'); };
    });
  }, { first: true, id: 'scene:opening' });
}

// scene:departments
function sceneDepartments() {
  queueMotion(() => {
    gsap.matchMedia().add('(prefers-reduced-motion: no-preference)', () => {
      const section = document.getElementById('departments');
      const panels = gsap.utils.toArray(section.querySelectorAll('.dept'));
      if (panels.length < 2) return;
      section.style.setProperty('--departments-count', panels.length);
      section.classList.add('is-stacked');
      const timeline = gsap.timeline({
        defaults: { ease: 'none' },
        scrollTrigger: { id: 'departments', trigger: section, start: 'top top', end: 'bottom bottom', scrub: 0.6 }
      });
      panels.forEach((panel, index) => {
        if (!index) return;
        const previous = panels[index - 1];
        const at = index - 1 + 0.12;
        timeline
          .fromTo(panel, { visibility: 'hidden' }, { visibility: 'visible', duration: 0.001 }, at)
          .fromTo(previous, { visibility: 'visible' }, { visibility: 'hidden', duration: 0.001, immediateRender: false }, at + 0.72)
          .fromTo(panel, { clipPath: 'inset(100% 0% 0% 0%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: 0.72, ease: 'power1.inOut' }, at)
          .fromTo(panel.querySelector('.dept__photo'), { yPercent: 14, scale: 1.14 }, { yPercent: 0, scale: 1, duration: 0.72, ease: 'power1.out' }, at)
          .to(previous.querySelector('.dept__photo'), { yPercent: -7, duration: 0.72, ease: 'power1.inOut' }, at)
          .to(previous.querySelectorAll('.dept__copy, .dept__aisle'), { y: -56, opacity: 0, duration: 0.32, ease: 'power1.in' }, at)
          .fromTo(panel.querySelectorAll('.dept__copy, .dept__aisle'), { y: 80 }, { y: 0, duration: 0.5, ease: 'power2.out' }, at + 0.26);
      });
      timeline.to({}, { duration: 0.16 });
      return () => { section.classList.remove('is-stacked'); section.style.removeProperty('--departments-count'); };
    });
  }, { id: 'scene:departments' });
}

// scene:aisles
function sceneAisles() {
  queueMotion(() => {
    gsap.matchMedia().add('(prefers-reduced-motion: no-preference)', () => {
      const section = document.getElementById('aisles');
      section.querySelectorAll('.aisles__row').forEach((row, index) => {
        const tile = row.querySelector('.aisles__tile');
        const timeline = gsap.timeline({
          defaults: { ease: 'none' },
          scrollTrigger: { id: `aisles:row-${index}`, trigger: row, start: 'top bottom', end: 'bottom top', scrub: 0.4 }
        });
        timeline
          .fromTo(row, { scale: 0.7, opacity: 0.3 }, { scale: 1, opacity: 1, duration: 0.36, ease: 'power1.out' }, 0)
          .to(row, { scale: 1, duration: 0.28 }, 0.36)
          .to(row, { scale: 0.7, opacity: 0.3, duration: 0.36, ease: 'power1.in' }, 0.64);
        if (tile) {
          timeline
            .fromTo(tile, { scale: 0.15, rotation: -10 }, { scale: 1, rotation: 0, duration: 0.36, ease: 'power1.out' }, 0)
            .to(tile, { scale: 0.15, rotation: 10, duration: 0.36, ease: 'power1.in' }, 0.64);
        }
      });
    });
  }, { near: document.getElementById('aisles'), id: 'scene:aisles' });
}

// scene:brought
function sceneBrought() {
  queueMotion(() => {
    gsap.matchMedia().add({ wide: '(min-width: 760px) and (prefers-reduced-motion: no-preference)', narrow: '(max-width: 759px) and (prefers-reduced-motion: no-preference)' }, context => {
      const wide = context.conditions.wide;
      const section = document.getElementById('brought');
      const travel = () => (wide ? Math.min(innerWidth * 0.26, 380) : innerWidth * 0.6);
      section.querySelectorAll('.brought__pair').forEach((pair, index) => {
        const brought = pair.querySelector('.brought__item--in');
        const matched = pair.querySelector('.brought__item--out');
        gsap.timeline({
          defaults: { ease: 'power2.out' },
          scrollTrigger: { id: `brought:pair-${index}`, trigger: pair, start: 'top bottom', end: wide ? 'center 58%' : 'center 64%', scrub: 0.5, invalidateOnRefresh: true }
        })
          .fromTo(brought, { x: () => -travel(), rotation: -7 }, { x: 0, rotation: 0 }, 0)
          .fromTo(matched, { x: () => travel(), rotation: 7 }, { x: 0, rotation: 0 }, 0);
      });
    });
  }, { near: document.getElementById('brought'), id: 'scene:brought' });
}

// scene:classes
function sceneClasses() {
  queueMotion(() => {
    gsap.matchMedia().add({ wide: '(min-width: 600px) and (prefers-reduced-motion: no-preference)', narrow: '(max-width: 599px) and (prefers-reduced-motion: no-preference)' }, context => {
      const section = document.getElementById('classes');
      const deck = section.querySelector('.classes__deck');
      const cards = gsap.utils.toArray(deck.querySelectorAll('.classes__card'));
      const turns = [-8, 5, -3, 7, -5, 3];
      if (context.conditions.wide) {
        const dx = card => deck.clientWidth / 2 - (card.offsetLeft + card.offsetWidth / 2);
        const dy = card => deck.clientHeight / 2 - (card.offsetTop + card.offsetHeight / 2);
        const timeline = gsap.timeline({
          defaults: { ease: 'power2.inOut' },
          scrollTrigger: { id: 'classes', trigger: deck, start: 'top 88%', end: 'center 52%', scrub: 0.6, invalidateOnRefresh: true }
        });
        cards.forEach((card, index) => {
          gsap.set(card, { zIndex: cards.length - index });
          timeline.fromTo(card, { x: () => dx(card), y: () => dy(card) - index * 8, rotation: turns[index % turns.length] }, { x: 0, y: 0, rotation: 0, duration: 1 }, index * 0.14);
        });
      } else {
        cards.forEach((card, index) => {
          const side = index % 2 ? 1 : -1;
          gsap.fromTo(card, { x: () => side * innerWidth * 0.55, rotation: side * 7 }, {
            x: 0, rotation: 0, ease: 'power2.out',
            scrollTrigger: { id: `classes:card-${index}`, trigger: card, start: 'top bottom', end: 'top 58%', scrub: 0.5, invalidateOnRefresh: true }
          });
        });
      }
    });
  }, { near: document.getElementById('classes'), id: 'scene:classes' });
}

// scene:hire
function sceneHire() {
  queueMotion(() => {
    gsap.matchMedia().add('(prefers-reduced-motion: no-preference)', () => {
      const section = document.getElementById('hire');
      section.querySelectorAll('.hire__row').forEach((row, index) => {
        const flip = row.querySelector('.hire__flip');
        const back = row.querySelector('.hire__face--back');
        if (!flip || !back) return;
        gsap.timeline({ scrollTrigger: { id: `hire:row-${index}`, trigger: row, start: 'top 78%', end: 'top 46%', scrub: 0.5 } })
          .fromTo(flip, { rotationX: -180 }, { rotationX: 0, ease: 'power2.inOut', duration: 1 }, 0)
          .fromTo(back, { visibility: 'visible' }, { visibility: 'hidden', duration: 0.001 }, 0.999);
      });
    });
  }, { near: document.getElementById('hire'), id: 'scene:hire' });
}

// scene:visit
function sceneVisit() {
  queueMotion(() => {
    gsap.matchMedia().add({ wide: '(min-width: 900px) and (prefers-reduced-motion: no-preference)', narrow: '(max-width: 899px) and (prefers-reduced-motion: no-preference)' }, context => {
      const section = document.getElementById('visit');
      const photo = section.querySelector('.visit__photo');
      const image = photo.querySelector('img');
      const info = section.querySelector('.visit__info');
      const timeline = gsap.timeline({
        defaults: { ease: 'none' },
        scrollTrigger: { id: 'visit', trigger: section, start: 'top 80%', end: 'top 2%', scrub: 0.6 }
      });
      if (context.conditions.wide) {
        timeline
          .fromTo(photo, { clipPath: 'inset(0% 0% 0% 0%)' }, { clipPath: 'inset(0% 50% 0% 0%)', duration: 0.9, ease: 'power1.inOut' }, 0.1)
          .fromTo(image, { scale: 1.12 }, { scale: 1, duration: 1.15 }, 0)
          .fromTo(info, { x: 90, opacity: 0 }, { x: 0, opacity: 1, duration: 0.45, ease: 'power2.out' }, 0.85);
      } else {
        timeline
          .fromTo(image, { scale: 1.35 }, { scale: 1, duration: 1 }, 0)
          .fromTo(info, { y: 70 }, { y: 0, duration: 0.8, ease: 'power2.out' }, 0.2);
      }
    });
  }, { near: document.getElementById('visit'), id: 'scene:visit' });
}
