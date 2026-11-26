export default function HeroSection() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-12 pt-8 md:px-12 md:py-20 lg:px-[72px]">
      <div className="flex flex-col items-center gap-6 md:grid md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-10 lg:gap-16">

        <div className="text-center md:text-right">
          <h1 className="text-[32px] font-semibold leading-tight text-brown-600 sm:text-4xl md:text-[40px] lg:text-5xl">
            Stay Informed,
            <br className="md:hidden" /> Stay Inspired
          </h1>
          <p className="mx-auto mt-4 max-w-xs text-sm leading-relaxed text-brown-400 md:ml-auto md:mr-0 md:mt-6 md:max-w-[220px] md:text-xs lg:max-w-[260px] lg:text-sm">
            Discover a World of Knowledge at Your Fingertips. Your Daily Dose of
            Inspiration and Information.
          </p>
        </div>


        <div className="w-full md:order-none md:w-[236px] lg:w-[300px]">
          <img
            src="https://res.cloudinary.com/dcbpjtd1r/image/upload/v1728449784/my-blog-post/xgfy0xnvyemkklcqodkg.jpg"
            alt="Thompson P. hiking with a cat on his shoulder"
            className="aspect-[3/4] w-full rounded-2xl object-cover md:aspect-[236/323]"
          />
        </div>


        <div className="w-full text-left md:w-auto">
          <p className="text-xs text-brown-400 md:text-[10px]">-Author</p>
          <h2 className="mt-1 text-xl font-semibold text-brown-600 md:text-lg md:font-medium">
            Thompson P.
          </h2>
          <p className="mt-3 text-base leading-relaxed text-brown-400 md:max-w-[260px] md:text-xs lg:max-w-[300px] lg:text-sm">
            I am a pet enthusiast and freelance writer who specializes in animal
            behavior and care. With a deep love for cats, I enjoy sharing
            insights on feline companionship and wellness.
          </p>
          <p className="mt-6 text-base leading-relaxed text-brown-400 md:mt-5 md:max-w-[260px] md:text-xs lg:max-w-[300px] lg:text-sm">
            When i&apos;m not writing, I spends time volunteering at my local
            animal shelter, helping cats find loving homes.
          </p>
        </div>
      </div>
    </section>
  );
}