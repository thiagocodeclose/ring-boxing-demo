// @ts-nocheck
'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import {
  Menu, X, Star, MapPin, Phone, Mail, Clock,
  Instagram, Facebook, CheckCircle, ArrowRight, ChevronDown
} from 'lucide-react';
import { studioInfo, stats, programs, coaches, heritage, testimonials, pricing } from '@/lib/site-data';

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.12 }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);
  const links = ['Programs', 'Heritage', 'Coaches', 'Pricing', 'Contact'];
  return (
    <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#1A1A1A]/96 backdrop-blur border-b border-[#333]' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <div className="w-10 h-10 border-2 border-rg-crimson flex items-center justify-center">
            <span className="font-heading text-rg-crimson text-lg tracking-tight">R</span>
          </div>
          <div>
            <span className="font-heading text-xl tracking-widest text-white uppercase leading-none block">The Ring</span>
            <span className="text-rg-muted text-[10px] uppercase tracking-[0.3em]">Est. 1987 · Philadelphia</span>
          </div>
        </a>
        <ul className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`}
                className="text-sm font-body font-semibold text-rg-muted hover:text-rg-cream transition-colors tracking-wide uppercase">
                {l}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="hidden md:inline-flex items-center gap-2 bg-rg-crimson hover:bg-[#B01030] text-white font-body font-semibold text-sm uppercase tracking-widest px-5 py-2.5 transition-colors">
          Free Trial
        </a>
        <button onClick={() => setOpen(!open)} className="md:hidden text-white p-1">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-[#222] border-t border-[#333] px-6 py-4 flex flex-col gap-4">
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}
              className="text-sm font-body font-semibold text-rg-muted uppercase tracking-wide">{l}</a>
          ))}
          <a href="#contact" className="bg-rg-crimson text-white font-body font-semibold text-sm uppercase tracking-widest px-5 py-3 text-center">Start Free Trial</a>
        </div>
      )}
    </nav>
  );
}

/* ─── Hero ─── */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1521138054413-5a47d349b7af?w=1600&q=85"
          alt="Boxing ring vintage"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Vintage dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A]/97 via-[#1A1A1A]/80 to-[#1A1A1A]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-[#1A1A1A]/40" />
        {/* Sepia tint */}
        <div className="absolute inset-0 opacity-20" style={{ background: 'rgba(139, 90, 43, 0.3)' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 w-full">
        <div className="max-w-2xl">
          {/* Heritage banner */}
          <div className="inline-flex items-center gap-2 border border-rg-crimson/50 px-4 py-1.5 mb-8">
            <div className="w-1.5 h-1.5 bg-rg-crimson rounded-full" />
            <span data-cg-el="hero_eyebrow" className="text-rg-cream font-body font-semibold text-xs uppercase tracking-[0.3em]">Est. 1987 · Philadelphia, PA</span>
          </div>

          <h1 data-cg-el="hero_headline_1" className="font-heading text-8xl sm:text-9xl lg:text-[120px] text-white leading-none mb-4">
            THE<br />
            <span className="text-rg-crimson">RING</span>
          </h1>

          <p data-cg-el="hero_subtitle" className="text-rg-muted text-lg mb-4 font-body font-semibold uppercase tracking-widest">Old School. No Excuses.</p>
          <p className="text-rg-muted leading-relaxed mb-8 max-w-lg font-body">{studioInfo.subheadline}</p>

          <div className="flex flex-wrap gap-3">
            <a data-cg-el="hero_cta_primary" href="#contact" className="inline-flex items-center gap-2 bg-rg-crimson hover:bg-[#B01030] text-white font-body font-semibold text-sm uppercase tracking-widest px-8 py-4 transition-colors">
              Free Trial Class <ArrowRight size={15} />
            </a>
            <a data-cg-el="hero_cta_secondary" href="#heritage" className="inline-flex items-center gap-2 border border-[#444] hover:border-rg-cream text-rg-cream font-body font-semibold text-sm uppercase tracking-widest px-8 py-4 transition-colors">
              Our Heritage
            </a>
          </div>

          <div className="flex flex-wrap gap-8 mt-10 pt-10 border-t border-[#333]">
            {stats.map(s => (
              <div key={s.label}>
                <div className="font-heading text-4xl text-white">{s.value}</div>
                <div className="text-rg-muted text-xs uppercase tracking-widest mt-0.5 font-body">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <ChevronDown size={20} className="text-white/30" />
      </div>
    </section>
  );
}

/* ─── Programs ─── */
function Programs() {
  const levelColors = { 'Beginner': 'text-green-400', 'Intermediate': 'text-yellow-400', 'Advanced': 'text-orange-400', 'Competition': 'text-rg-crimson', 'All Levels': 'text-blue-400', 'Ages 8–17': 'text-purple-400' };
  return (
    <section id="programs" className="py-24 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-8 bg-rg-crimson" />
            <p className="text-rg-crimson font-body font-semibold text-sm uppercase tracking-[0.3em]">Training Programs</p>
            <div className="h-px w-8 bg-rg-crimson" />
          </div>
          <h2 className="font-heading text-6xl md:text-7xl text-white">PROGRAMS</h2>
          <p className="text-rg-muted mt-3 max-w-xl mx-auto font-body">From first timers to Golden Gloves — we have a program for everyone.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {programs.map((p, i) => (
            <div key={p.name}
              className="reveal bg-[#222] border border-[#333] hover:border-rg-crimson/40 p-6 transition-colors"
              style={{ animationDelay: `${i * 0.08}s` }}>
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-heading text-2xl text-white">{p.name}</h3>
                <span className={`text-xs font-body font-semibold uppercase tracking-wide ${levelColors[p.level] || 'text-rg-muted'}`}>{p.level}</span>
              </div>
              <p className="text-rg-muted text-sm leading-relaxed font-body">{p.description}</p>
              <div className="mt-4 pt-4 border-t border-[#333]">
                <a href="#contact" className="text-rg-crimson text-sm font-body font-semibold uppercase tracking-wide hover:text-red-400 transition-colors flex items-center gap-1.5">
                  Learn More <ArrowRight size={13} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Heritage Timeline ─── */
function Heritage() {
  return (
    <section id="heritage" className="py-24 bg-[#141414]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-8 bg-rg-crimson" />
            <p className="text-rg-crimson font-body font-semibold text-sm uppercase tracking-[0.3em]">37 Years of Champions</p>
            <div className="h-px w-8 bg-rg-crimson" />
          </div>
          <h2 className="font-heading text-6xl md:text-7xl text-white">OUR HERITAGE</h2>
          <p className="text-rg-muted mt-3 max-w-lg mx-auto font-body">A legacy built one champion at a time, since 1987.</p>
        </div>
        <div className="max-w-2xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-16 top-0 bottom-0 w-px bg-[#333]" />
          <div className="space-y-8">
            {heritage.map((h, i) => (
              <div key={h.year}
                className="reveal flex items-start gap-8"
                style={{ animationDelay: `${i * 0.08}s` }}>
                <div className="flex-shrink-0 w-16 text-right">
                  <span className="font-heading text-2xl text-rg-crimson">{h.year}</span>
                </div>
                {/* Dot */}
                <div className="flex-shrink-0 w-3 h-3 bg-rg-crimson rounded-full mt-2 relative z-10" />
                <div className="flex-1 pb-2">
                  <p className="text-rg-text font-body leading-relaxed">{h.milestone}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Coaches ─── */
function Coaches() {
  return (
    <section id="coaches" className="py-24 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-8 bg-rg-crimson" />
            <p className="text-rg-crimson font-body font-semibold text-sm uppercase tracking-[0.3em]">The Cornermen</p>
            <div className="h-px w-8 bg-rg-crimson" />
          </div>
          <h2 className="font-heading text-6xl md:text-7xl text-white">COACHES</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {coaches.map((c, i) => (
            <div key={c.name} className="reveal group" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="relative overflow-hidden aspect-[3/4] mb-5">
                <Image src={c.image} alt={c.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="h-px w-8 bg-rg-crimson mb-2" />
                  <h3 className="font-heading text-xl text-white">{c.name}</h3>
                  <p className="text-rg-crimson font-body text-xs uppercase tracking-wide mt-1">{c.title}</p>
                </div>
              </div>
              <p className="text-rg-muted text-sm leading-relaxed font-body">{c.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Testimonials ─── */
function Testimonials() {
  return (
    <section className="py-24 bg-[#141414]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-8 bg-rg-crimson" />
            <p className="text-rg-crimson font-body font-semibold text-sm uppercase tracking-[0.3em]">The Faithful</p>
            <div className="h-px w-8 bg-rg-crimson" />
          </div>
          <h2 className="font-heading text-6xl md:text-7xl text-white">WHAT THEY SAY</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <div key={t.name}
              className="reveal bg-[#222] border border-[#333] p-8"
              style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, j) => <Star key={j} size={13} className="fill-yellow-400 text-yellow-400" />)}
              </div>
              <p className="text-rg-text text-sm leading-relaxed mb-6 font-body">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-rg-crimson flex items-center justify-center font-heading text-white">{t.name[0]}</div>
                <span className="font-heading text-xl text-white">{t.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Pricing ─── */
function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-8 bg-rg-crimson" />
            <p className="text-rg-crimson font-body font-semibold text-sm uppercase tracking-[0.3em]">Membership</p>
            <div className="h-px w-8 bg-rg-crimson" />
          </div>
          <h2 className="font-heading text-6xl md:text-7xl text-white">PRICING</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {pricing.map((p, i) => (
            <div key={p.name}
              className={`reveal relative p-8 ${p.highlight ? 'bg-rg-crimson border-2 border-rg-crimson' : 'bg-[#222] border border-[#333]'}`}
              style={{ animationDelay: `${i * 0.1}s` }}>
              {p.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-rg-cream text-rg-crimson font-body font-bold text-xs uppercase tracking-wider px-4 py-1">
                  Most Popular
                </div>
              )}
              <h3 className="font-heading text-3xl text-white mb-1">{p.name}</h3>
              <div className="mb-6">
                <span className="font-heading text-5xl text-white">{p.price}</span>
                <span className={`text-sm ml-1 font-body ${p.highlight ? 'text-red-200' : 'text-rg-muted'}`}>{p.period}</span>
              </div>
              <ul className="space-y-2.5 mb-8">
                {p.features.map(f => (
                  <li key={f} className="flex items-center gap-2.5">
                    <CheckCircle size={13} className={p.highlight ? 'text-red-200' : 'text-rg-crimson'} />
                    <span className={`text-sm font-body ${p.highlight ? 'text-red-100' : 'text-rg-muted'}`}>{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact"
                className={`block text-center font-body font-semibold text-sm uppercase tracking-widest py-3 transition-colors ${p.highlight ? 'bg-white text-rg-crimson hover:bg-red-50' : 'bg-rg-crimson text-white hover:bg-[#B01030]'}`}>
                {p.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Contact ─── */
function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#141414]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="reveal">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px w-8 bg-rg-crimson" />
              <p className="text-rg-crimson font-body font-semibold text-sm uppercase tracking-[0.3em]">Step Through The Ropes</p>
            </div>
            <h2 className="font-heading text-6xl md:text-7xl text-white mb-6">YOUR FREE TRIAL AWAITS</h2>
            <p className="text-rg-muted leading-relaxed mb-8 max-w-md font-body">
              Come in, lace up, and see what 37 years of boxing knowledge can do for you.
            </p>
            <div className="space-y-4 mb-8">
              {[{ icon: MapPin, label: studioInfo.address }, { icon: Phone, label: studioInfo.phone }, { icon: Mail, label: studioInfo.email }].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3">
                  <Icon size={15} className="text-rg-crimson flex-shrink-0" />
                  <span className="text-rg-muted text-sm font-body">{label}</span>
                </div>
              ))}
            </div>
            {Object.entries(studioInfo.hours).map(([day, hrs]) => (
              <div key={day} className="flex items-center gap-3 mb-2">
                <Clock size={13} className="text-rg-muted flex-shrink-0" />
                <span className="text-rg-muted text-sm font-body"><strong className="text-rg-text">{day}:</strong> {hrs}</span>
              </div>
            ))}
          </div>
          <div className="reveal bg-[#222] border border-[#333] p-8">
            <h3 className="font-heading text-3xl text-white mb-6">REQUEST FREE TRIAL</h3>
            <form className="space-y-4" onSubmit={e => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-4">
                {[['First Name', 'Rocky'], ['Last Name', 'Balboa']].map(([label, ph]) => (
                  <div key={label}>
                    <label className="block text-rg-muted text-xs uppercase tracking-wide mb-1.5 font-body">{label}</label>
                    <input type="text" placeholder={ph} className="w-full bg-[#141414] border border-[#333] focus:border-rg-crimson text-white text-sm px-4 py-3 outline-none transition-colors placeholder-[#444] font-body" />
                  </div>
                ))}
              </div>
              {[['Email', 'email', 'you@email.com'], ['Phone', 'tel', '(215) 555-0000']].map(([label, type, ph]) => (
                <div key={label}>
                  <label className="block text-rg-muted text-xs uppercase tracking-wide mb-1.5 font-body">{label}</label>
                  <input type={type} placeholder={ph} className="w-full bg-[#141414] border border-[#333] focus:border-rg-crimson text-white text-sm px-4 py-3 outline-none transition-colors placeholder-[#444] font-body" />
                </div>
              ))}
              <div>
                <label className="block text-rg-muted text-xs uppercase tracking-wide mb-1.5 font-body">Program Interest</label>
                <select className="w-full bg-[#141414] border border-[#333] focus:border-rg-crimson text-white text-sm px-4 py-3 outline-none transition-colors font-body">
                  <option>Select a program...</option>
                  {programs.map(p => <option key={p.name} value={p.name}>{p.name}</option>)}
                </select>
              </div>
              <button type="submit" className="w-full bg-rg-crimson hover:bg-[#B01030] text-white font-body font-semibold text-sm uppercase tracking-widest py-4 transition-colors flex items-center justify-center gap-2">
                Start My Free Trial <ArrowRight size={15} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer className="bg-[#111] border-t border-[#333] py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 border-2 border-rg-crimson flex items-center justify-center">
            <span className="font-heading text-rg-crimson">R</span>
          </div>
          <div>
            <span className="font-heading text-white">THE RING</span>
            <span className="text-rg-muted text-[10px] block uppercase tracking-widest">Est. 1987 · Philadelphia</span>
          </div>
        </div>
        <p className="text-[#555] text-xs font-body">© 2026 The Ring Boxing Gym. All rights reserved.</p>
        <div className="flex gap-3">
          <a href={studioInfo.instagram} className="w-9 h-9 bg-[#222] border border-[#333] hover:border-rg-crimson flex items-center justify-center transition-colors">
            <Instagram size={14} className="text-rg-muted" />
          </a>
          <a href={studioInfo.facebook} className="w-9 h-9 bg-[#222] border border-[#333] hover:border-rg-crimson flex items-center justify-center transition-colors">
            <Facebook size={14} className="text-rg-muted" />
          </a>
        </div>
        <p className="text-[#555] text-xs font-body">Powered by <span className="text-rg-crimson">Koriva Sites</span></p>
      </div>
    </footer>
  );
}

export default function Page() {
  useReveal();
  return (
    <>
      <Nav />
      <Hero />
      <Programs />
      <Heritage />
      <Coaches />
      <Testimonials />
      <Pricing />
      <Contact />
      <Footer />
    </>
  );
}
