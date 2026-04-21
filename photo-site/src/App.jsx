export default function PhotographyPortfolio() {
const portfolioItems = [

 { type: "image", src: "/images/portfolio-2.jpg" },

  { type: "block", text: "Zurich" },

  { type: "image", src: "/images/portfolio-4.jpg" },

  

  { type: "image", src: "/images/portfolio-6.jpg" },



  { type: "image", src: "/images/portfolio-1.jpg" },
    { type: "block", text: "" },

  { type: "image", src: "/images/portfolio-5.jpg" },

  { type: "image", src: "/images/portfolio-9.jpg" },

   { type: "image", src: "/images/portfolio-8.jpg" },
  

  { type: "image", src: "/images/portfolio-7.jpg" },

    { type: "block", text: "Aargau" },
 { type: "image", src: "/images/portfolio-3.jpg" },
  
];

  return (
    <div className="bg-[#f5efe6] text-[#3b3128]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500&family=Inter:wght@200;300;400;500&display=swap');

        .font-display {
          font-family: 'Cormorant Garamond', serif;
        }

        .font-body {
          font-family: 'Inter', sans-serif;
        }
      `}</style>

      <header className="absolute left-0 right-0 top-0 z-30">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10">
          <div className="font-body text-sm font-light uppercase tracking-[0.35em] text-[#f4eadf]">
            ...
          </div>

          <nav className="hidden gap-8 font-body text-[11px] font-light uppercase tracking-[0.3em] text-[#f4eadf] md:flex">
            <a href="#about" className="transition hover:opacity-70">About</a>
            <a href="#portfolio" className="transition hover:opacity-70">Portfolio</a>
            <a href="#services" className="transition hover:opacity-70">Services</a>
            <a href="#contact" className="transition hover:opacity-70">Contact</a>
          </nav>
        </div>
      </header>

      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <img
          src="/images/hero.jpg"
          alt="Photography hero"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-20 px-6 text-center text-[#eadfce]">
          <p className="font-body text-[10px] font-light uppercase tracking-[0.55em] md:text-xs">
            Capturing your moments, turning them into story
          </p>

          <h1 className="mt-8 font-display text-6xl font-light leading-[0.9] md:text-8xl lg:text-[9rem]">
            Polina Katkova
            <br />
            Photography
          </h1>
        </div>
      </section>

<section id="about" className="mx-auto max-w-7xl px-0 py-20 md:py-28">
  <div className="grid md:grid-cols-2 min-h-[500px]">

    {/* LEFT — IMAGE */}
    <div className="relative">
      <img
        src="/images/me.jpg"
        alt="Polina Katkova"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* dark overlay */}
      <div className="absolute inset-0 bg-black/40" />
    </div>

    {/* RIGHT — TEXT */}
    <div className="flex items-center px-6 md:px-16 py-10 bg-[#f5efe6]">
      <div>
        <p className="font-body text-[11px] uppercase tracking-[0.35em] text-[#8a7768]">
          About
        </p>

        <h2 className="mt-4 font-display text-4xl font-light md:text-6xl">
          Hi, I’m Polina
        </h2>

        <p className="mt-6 font-body text-base leading-8 text-[#66584d]">
        
With a background in art, I have a strong eye for light, composition, and detail.
I focus on capturing natural moments and real emotions in a simple and honest way.

I shoot in Aargau, Zurich, and Lucerne, and I’m happy to travel to other locations.

If you have any questions, feel free to <a
  href="#contact"
  className="mt-10 font-body text-sm underline underline-offset-4 text-[#d6c5b2] hover:opacity-70 transition"
> Reach out  🙂 </a>
        </p>
      </div>
    </div>

  </div>
</section>

    

      <section id="portfolio" className="mx-auto max-w-7xl px-0 pb-10 md:px-0 md:pb-10">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="font-body text-[11px] font-light uppercase tracking-[0.35em] text-[#8a7768]">
              Portfolio
            </p>
            <h2 className="mt-4 font-display text-4xl font-light md:text-6xl">
              Selected work
            </h2>
          </div>
        </div>

        <div className="grid gap-0 md:grid-cols-2 lg:grid-cols-3">
         {portfolioItems.map((item, index) => {

  if (item.type === "image") {

    return (

      <div key={index} className="overflow-hidden">

        <img

          src={item.src}

          alt={`Portfolio ${index}`}

          className="h-[420px] w-full object-cover"

        />

      </div>

    );

  }

  if (item.type === "block") {

   if (item.type === "block") {

  return (

    <div

      key={index}

      className="h-[420px] bg-[#e9ddd0] flex items-center justify-center"

    >

      <p className="font-body text-sm text-[#66584d] uppercase tracking-[0.3em]">

        {item.text}

      </p>

    </div>

  );

}

  }

})}
        </div>
      </section>

<section id="services" className="mx-auto max-w-6xl px-6 py-10 md:px-10 md:py-14">
  <div className="mb-12">
    <p className="font-body text-[11px] font-light uppercase tracking-[0.35em] text-[#8a7768]">
      Services
    </p>
    <h2 className="mt-4 font-display text-4xl font-light md:text-6xl">
      What I offer
    </h2>
  </div>

  <div className="grid gap-6 md:grid-cols-3">
    <div className="rounded-[1.75rem] bg-[#ece2d6] p-6">
      <h3 className="font-display text-2xl">Portraits</h3>
      <p className="mt-4 font-body text-sm leading-6 text-[#66584d]">
        Individual sessions in studio or outdoors, with soft natural light
      </p>
    </div>

    <div className="rounded-[1.75rem] bg-[#ece2d6] p-6">
      <h3 className="font-display text-2xl">Couples</h3>
      <p className="mt-4 font-body text-sm leading-6 text-[#66584d]">
        Warm and emotional Indoor or outdoor sessions
      </p>
    </div>

    <div className="rounded-[1.75rem] bg-[#ece2d6] p-6">
      <h3 className="font-display text-2xl">Events</h3>
      <p className="mt-4 font-body text-sm leading-6 text-[#66584d]">
        Small and large events, capturing real moments
      </p>
    </div>
  </div>

  <div className="mt-16">
    <h2 className="font-display text-4xl font-light md:text-5xl">
      Pricing
    </h2>

    <div className="mt-8 grid gap-6 md:grid-cols-2">
      <div className="rounded-[1.75rem] bg-[#ece2d6] p-6">
        <p className="mt-3 font-body text-sm text-[#66584d]">
          From 1 to 2 hours of shooting
        </p>
        <p className="font-body text-sm text-[#66584d]">
          Up to 10 retouched photos + color corrected gallery
        </p>
        <p className="mt-4 font-body text-sm font-medium">
          from 120 CHF
        </p>
      </div>

    </div>
  </div>
</section>


      <section id="contact" className="mx-auto max-w-6xl px-6 pb-24 md:px-10">
        <div className="rounded-[2rem] bg-[#e9ddd0] px-8 py-12 md:px-14 md:py-16">
          <p className="font-body text-[11px] font-light uppercase tracking-[0.35em] text-[#8a7768]">
            Contact
          </p>
          <h2 className="mt-4 font-display text-4xl font-light md:text-6xl">
            Book your session
          </h2>
          <p className="mt-5 max-w-2xl font-body text-base font-light leading-8 text-[#66584d]">
            For bookings and questions, write me on Instagram or by email.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="mailto:polinakatkova.pk@gmail.com"
              className="rounded-full border border-[#bda998] px-6 py-3 font-body text-[11px] font-light uppercase tracking-[0.3em] transition hover:bg-[#f5ede4]"
            >
              polinakatkova.pk@gmail.com
            </a>

            <a
              href={import.meta.env.VITE_INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[#bda998] px-6 py-3 font-body text-[11px] font-light uppercase tracking-[0.3em] transition hover:bg-[#f5ede4]"
            >
              Instagram
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

/*
WHAT TO DO IN YOUR CURRENT VITE STRUCTURE

You already have:
- src/App.jsx
- src/App.css
- src/index.css
- public/

Do this:

1) Put this whole code into src/App.jsx
2) In src/index.css keep only:
   @import "tailwindcss";
   html { scroll-behavior: smooth; }
   body { margin: 0; }
3) You can empty src/App.css completely, or delete everything inside it
4) Create folder:
   public/images/
5) Put your images there:
   public/images/hero.jpg
   public/images/portfolio-1.jpg
   public/images/portfolio-2.jpg
   public/images/portfolio-3.jpg
   public/images/portfolio-4.jpg
   public/images/portfolio-5.jpg
   public/images/portfolio-6.jpg

THEN RUN:

npm run dev

IMPORTANT
If Tailwind is not working yet, your project is not fully configured.
Then do:

npm install tailwindcss @tailwindcss/vite

In vite.config.js make it like this:

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})

In src/index.css:
@import "tailwindcss";

THAT'S IT.
*/