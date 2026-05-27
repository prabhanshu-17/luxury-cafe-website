'use client';

import { useState } from 'react';

export default function LuxuryCafeWebsite() {
  const [activeCategory, setActiveCategory] = useState('Coffee');

  const menu = [
    {
      category: 'Coffee',
      name: 'Spanish Latte',
      desc: 'Velvety espresso layered with caramel sweetness.',
      price: '$8',
      image:
        'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop',
    },

    {
      category: 'Coffee',
      name: 'Cappuccino',
      desc: 'Smooth creamy texture with rich espresso aroma.',
      price: '$7',
      image:
        'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1200&auto=format&fit=crop',
    },

    {
      category: 'Desserts',
      name: 'Tiramisu',
      desc: 'Soft mascarpone layers infused with espresso warmth.',
      price: '$11',
      image:
        'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=1200&auto=format&fit=crop',
    },

    {
      category: 'Matcha',
      name: 'Iced Matcha',
      desc: 'Premium ceremonial matcha with smooth cold milk.',
      price: '$9',
      image:
        'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?q=80&w=1200&auto=format&fit=crop',
    },

    {
      category: 'Cold Brews',
      name: 'Cold Brew',
      desc: 'Slow steeped overnight for deep smooth flavor.',
      price: '$6',
      image:
        'https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=1200&auto=format&fit=crop',
    },

    {
      category: 'Pastries',
      name: 'Butter Croissant',
      desc: 'Flaky artisan pastry baked fresh every morning.',
      price: '$5',
      image:
        'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=1200&auto=format&fit=crop',
    },
  ];

  const categories = [
    'Coffee',
    'Cold Brews',
    'Matcha',
    'Desserts',
    'Pastries',
  ];

  const filteredMenu = menu.filter(
    (item) => item.category === activeCategory
  );

  const gallery = [
    'https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1494314671902-399b18174975?q=80&w=1200&auto=format&fit=crop',
  ];

  return (
    <div className="bg-[#0d0b09] text-[#f8f3ed] overflow-hidden font-sans scroll-smooth">
      {/* Background Glow */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange-500/20 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-amber-400/10 blur-3xl rounded-full" />
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <h1 className="text-3xl font-black tracking-[0.3em]">
            AURELIA
          </h1>

          <div className="hidden md:flex items-center gap-10 uppercase text-sm tracking-[0.25em] text-white/70">
            <a href="#home" className="hover:text-white transition">
              Home
            </a>

            <a href="#menu" className="hover:text-white transition">
              Menu
            </a>

            <a href="#story" className="hover:text-white transition">
              Story
            </a>

            <a href="#gallery" className="hover:text-white transition">
              Gallery
            </a>

            <a href="#contact" className="hover:text-white transition">
              Visit
            </a>
          </div>

          <a
            href="#contact"
            className="px-7 py-4 rounded-full bg-[#f5e6d3] text-black font-bold hover:scale-105 transition duration-300"
          >
            Reserve Table
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center px-6"
      >
        <img
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1800&auto=format&fit=crop"
          alt="Cafe"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 max-w-5xl text-center">
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-xl">
            <span className="text-[#f0c48a]">★ 4.9 ★</span>

            <span className="uppercase tracking-[0.25em] text-white/70 text-sm">
              Loved By Coffee Lovers
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black leading-[0.95] mb-8">
            Crafted Coffee.
            <br />

            <span className="text-[#f0c48a]">
              Slow Moments.
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-lg md:text-2xl text-white/70 leading-relaxed mb-12">
            Experience handcrafted brews, cinematic café vibes,
            and warm emotional moments.
          </p>

          <div className="flex justify-center">
            <a
              href="#menu"
              className="px-10 py-5 rounded-full bg-[#f5e6d3] text-black font-bold text-xl hover:scale-105 transition duration-300"
            >
              Explore Menu
            </a>
          </div>
        </div>
      </section>

      {/* MENU */}
      <section id="menu" className="py-32 px-6 bg-[#120f0c]">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-14">
            <p className="uppercase tracking-[0.4em] text-orange-300 text-sm mb-5">
              Signature Selection
            </p>

            <h2 className="text-5xl md:text-7xl font-black mb-6">
              Crafted Menu
            </h2>

            <p className="text-white/60 max-w-2xl mx-auto text-lg">
              Luxury coffee and desserts designed for cinematic café experiences.
            </p>
          </div>

          {/* CATEGORY BUTTONS */}
          <div className="flex flex-wrap justify-center gap-4 mb-20">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-8 py-4 rounded-full border transition duration-300 font-medium

                ${
                  activeCategory === category
                    ? 'bg-[#f5e6d3] text-black border-[#f5e6d3]'
                    : 'bg-white/5 text-white border-white/10 hover:bg-white/10'
                }
                `}
              >
                {category}
              </button>
            ))}
          </div>

          {/* MENU GRID */}
          <div className="grid md:grid-cols-3 gap-10">
            {filteredMenu.map((item, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.03] backdrop-blur-xl hover:-translate-y-3 transition duration-500 hover:shadow-[0_20px_80px_rgba(255,170,80,0.15)]"
              >
                <div className="overflow-hidden h-80">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />
                </div>

                <div className="p-8">
                  <div className="flex justify-between items-start mb-5">
                    <h3 className="text-4xl font-black">
                      {item.name}
                    </h3>

                    <span className="text-[#f0c48a] text-3xl font-bold">
                      {item.price}
                    </span>
                  </div>

                  <p className="text-white/60 text-lg leading-relaxed mb-8">
                    {item.desc}
                  </p>

                  <button
                    onClick={() =>
                      alert(`${item.name} added to order!`)
                    }
                    className="w-full py-5 rounded-full bg-[#f5e6d3] text-black font-bold text-xl hover:scale-[1.02] hover:bg-white transition duration-300"
                  >
                    Add to Order
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

     {/* Story Section */}
<section
  id="story"
  className="relative py-36 px-6 overflow-hidden"
>
  {/* Background Glow */}
  <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-orange-500/10 blur-3xl rounded-full" />

  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">

    {/* LEFT */}
    <div>
      <p className="uppercase tracking-[0.5em] text-orange-300 text-sm mb-6">
        Our Story
      </p>

      <h2 className="text-5xl md:text-7xl font-black leading-[1.05] mb-8">
        Coffee
        <br />
        Crafted Like
        <br />
        Cinema.
      </h2>

      <p className="text-white/60 text-lg leading-relaxed mb-8">
        Aurelia began as a dream to create a café that feels emotional,
        slow, warm, and unforgettable.
      </p>

      <p className="text-white/50 text-lg leading-relaxed mb-10">
        Every coffee bean, every dessert, every light inside the café
        is carefully chosen to create cinematic moments people remember.
      </p>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-6">

        <div className="rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl p-8">
          <h3 className="text-5xl font-black text-[#f0c48a] mb-3">
            8+
          </h3>

          <p className="text-white/60">
            Years Of Experience
          </p>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl p-8">
          <h3 className="text-5xl font-black text-[#f0c48a] mb-3">
            12K+
          </h3>

          <p className="text-white/60">
            Monthly Visitors
          </p>
        </div>

      </div>
    </div>

    {/* RIGHT IMAGE */}
    <div className="relative group">

      <div className="absolute inset-0 bg-orange-500/10 blur-3xl rounded-[3rem]" />

      <img
        src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=1200&auto=format&fit=crop"
        alt="Cafe Interior"
        className="relative rounded-[3rem] h-[750px] w-full object-cover border border-white/10 group-hover:scale-[1.02] transition duration-700"
      />

      {/* Floating Card */}
      <div className="absolute bottom-8 left-8 right-8 rounded-[2rem] bg-black/40 backdrop-blur-2xl border border-white/10 p-8">

        <p className="text-2xl italic text-white/80 leading-relaxed">
          “Coffee should feel like a slow beautiful evening.”
        </p>

        <div className="mt-6 flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-300 to-amber-500" />

          <div>
            <h4 className="font-semibold text-lg">
              Aurelia Philosophy
            </h4>

            <p className="text-white/50 text-sm">
              Crafted with emotion
            </p>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>
      {/* GALLERY */}
      <section id="gallery" className="py-32 px-6 bg-[#120f0c]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black mb-6">
              Atmosphere & Moments
            </h2>

            <p className="text-white/60 text-lg">
              A luxury café experience designed for aesthetic storytelling.
            </p>
          </div>

          <div className="columns-1 md:columns-2 gap-6 space-y-6">
            {gallery.map((image, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-[2rem] border border-white/10"
              >
                <img
                  src={image}
                  alt="Gallery"
                  className="w-full hover:scale-105 transition duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto rounded-[3rem] overflow-hidden relative border border-white/10">
          <img
            src="https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1800&auto=format&fit=crop"
            alt="Special Brew"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/70" />

          <div className="relative z-10 py-28 px-10 md:px-20 text-center">
            <p className="uppercase tracking-[0.4em] text-orange-300 text-sm mb-6">
              Today’s Signature Brew
            </p>

            <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
              Ethiopian
              <br />
              Midnight Roast
            </h2>

            <p className="max-w-2xl mx-auto text-lg text-white/70 leading-relaxed mb-10">
              Bright floral aroma with smooth caramel finish.
            </p>

            <button className="px-8 py-4 rounded-full bg-[#f5e6d3] text-black font-bold hover:scale-105 transition duration-300">
              Try Signature Brew
            </button>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="py-32 px-6 bg-[#120f0c]"
      >
        <div className="max-w-5xl mx-auto rounded-[3rem] border border-white/10 bg-white/5 backdrop-blur-xl p-14 text-center">

          <h2 className="text-6xl font-black tracking-[0.3em] mb-5">
            AURELIA
          </h2>

          <p className="text-white/50 text-2xl mb-16">
            Luxury Coffee • Slow Evenings • Warm Experiences
          </p>

          <div className="grid md:grid-cols-2 gap-12 mb-14">

            <div>
              <div className="text-[#f0c48a] text-4xl mb-4">
                📍
              </div>

              <p className="text-3xl text-white/70">
                123 Luxury Street, Melbourne
              </p>
            </div>

            <div>
              <div className="text-[#f0c48a] text-4xl mb-4">
                🕒
              </div>

              <p className="text-3xl text-white/70">
                7 AM – 11 PM Daily
              </p>
            </div>
          </div>

          <button className="px-12 py-5 rounded-full bg-[#f5e6d3] text-black text-2xl font-bold hover:scale-105 transition duration-300">
            Reserve Your Table
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 border-t border-white/10 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5 px-6">

          <h2 className="text-2xl font-black tracking-[0.3em]">
            AURELIA
          </h2>

          <div className="flex gap-8 uppercase text-sm tracking-[0.2em] text-white/50">
            <a href="#">Instagram</a>
            <a href="#">Pinterest</a>
            <a href="#">Behance</a>
          </div>

          <p className="text-white/40 text-sm">
            © 2026 Aurelia Café
          </p>
        </div>
      </footer>
    </div>
  );
}