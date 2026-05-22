import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative px-6 py-32 md:py-40 overflow-hidden">
        <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] animate-blob bg-primary-fixed/20 rounded-full blur-3xl -z-10 mix-blend-multiply"></div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 z-10">
            <AnimatedSection>
              <span className="inline-block px-4 py-1.5 mb-6 text-primary font-bold tracking-widest text-[10px] uppercase bg-primary-fixed rounded-full shadow-sm">
                Over 35 Years of Excellence
              </span>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h1 className="text-5xl md:text-7xl font-headline font-extrabold text-on-background tracking-tighter leading-none mb-8">
                Over Three Decades of <br /><span className="text-primary gradient-text">ERP Expertise.</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl leading-relaxed mb-10">
                With over 35 years of expertise, CTC Solutions has earned a reputation for delivering best-in-class ERP solutions, fostering trust among our clients and partners, and driving collective success.
              </p>
            </AnimatedSection>
          </div>

          <div className="lg:col-span-5 relative">
            <AnimatedSection delay={0.3} direction="left">
              <div className="aspect-square bg-surface-container-low rounded-xl overflow-hidden relative shadow-2xl card-hover animate-float">
                <Image
                  alt="Modern architectural glass building reflecting a clear blue sky"
                  className="w-full h-full object-cover"
                  width={800}
                  height={800}
                  unoptimized
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdzHb-2h1swwLn_9a1a0ZBaBt6IvprOKgmT2wgD5yWJRYDcMcQCL5X5IOuU_5vnimpGaXUFJFZ4_90zzQ6dRdhXTHcOzbJFI11y2I5F66fV5Nxp2FnKcQ6cfv9vRn2bJqbW_X99D6ZM0Xs2C2A07zlwAFnPNQBaqnF0P26ZB2c1UgFKwFSBuJifCiXBhOR11TRZJXk0MNS1HHG4WiWG2k0DKeJ3l4sNW3jtpbe36-zqwaqWZ9E0xvDU8_qqGYPNGXgOokRk0yHgcGN"
                />
                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 architectural-gradient rounded-lg -z-10 opacity-40 blur-xl"></div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-surface-container-low py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
            <AnimatedSection>
              <div className="space-y-8 h-full bg-surface-container-lowest p-10 rounded-2xl shadow-sm border border-outline-variant/10">
                <div className="w-16 h-1.5 architectural-gradient rounded-full"></div>
                <h2 className="text-4xl font-headline font-bold text-on-background tracking-tight">Our Core Mission</h2>
                <p className="text-base text-on-surface-variant leading-relaxed">
                  At CTC Solutions, we specialize in delivering integrated ERP software tailored for Retail, Distribution, and Manufacturing businesses. Over the years, we have empowered thousands of customers—from small companies to large enterprises—to achieve their business goals with our flexible and scalable ERP solutions, designed to support growth and adaptability in an ever-evolving market.
                </p>
                <p className="text-base text-on-surface-variant leading-relaxed">
                  Our cost-effective, industry-specific solutions help businesses of all sizes overcome operational challenges, analyze performance metrics, and make strategic decisions with confidence. Instead of a generic, one-size-fits-all approach, our portfolio includes industry-specific, vertical-specific, and module-specific ERP applications under our CTC Solutions ERP suite.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="space-y-8 h-full bg-surface-container-lowest p-10 rounded-2xl shadow-sm border border-outline-variant/10 lg:mt-12">
                <div className="w-16 h-1.5 architectural-gradient rounded-full"></div>
                <h2 className="text-4xl font-headline font-bold text-on-background tracking-tight">Global Infrastructure</h2>
                <p className="text-base text-on-surface-variant leading-relaxed">
                  Headquartered in Chandigarh, we maintain a robust operational infrastructure with branch offices and trusted partners across all major metropolitan cities in India. Backed by a team of highly skilled professionals, our systems bridge the gap between stores and headquarters, ensuring seamless access to real-time business data across multiple touchpoints.
                </p>
                <p className="text-base text-on-surface-variant leading-relaxed">
                  From 2024 onwards, with the addition of Vidur Mahendru, CTC Solutions has strategically expanded its services to North America. This growth allows us to provide comprehensive IT solutions, including data entry, bookkeeping, software solutions for retail shops and industries, and advanced accounting solutions, ensuring efficiency, accuracy, and seamless operations.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Corporate Values */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="mb-16">
              <h2 className="text-4xl md:text-5xl font-headline font-bold text-on-background tracking-tight mb-4">Core Principles</h2>
              <p className="text-lg text-on-surface-variant">The architectural pillars of our corporate identity.</p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection delay={0.1}>
              <div className="bg-surface-container-lowest p-10 rounded-2xl shadow-sm border border-outline-variant/20 hover:shadow-xl transition-all duration-300 card-hover h-full">
                <div className="w-16 h-16 rounded-xl bg-surface-container text-primary flex items-center justify-center mb-8">
                  <span className="material-symbols-outlined text-4xl material-icons-fill">verified_user</span>
                </div>
                <h3 className="text-2xl font-headline font-bold text-on-background mb-4">Integrity</h3>
                <p className="text-on-surface-variant leading-relaxed">
                  Truth is our foundational data point. We operate with radical transparency, ensuring that every handshake and every line of code is built on trust.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-surface-container-lowest p-10 rounded-2xl shadow-sm border border-outline-variant/20 hover:shadow-xl transition-all duration-300 card-hover h-full">
                <div className="w-16 h-16 rounded-xl bg-surface-container text-primary flex items-center justify-center mb-8">
                  <span className="material-symbols-outlined text-4xl material-icons-fill">lightbulb</span>
                </div>
                <h3 className="text-2xl font-headline font-bold text-on-background mb-4">Innovation</h3>
                <p className="text-on-surface-variant leading-relaxed">
                  Static systems fail. We cultivate a culture of relentless iteration, pushing the boundaries of what enterprise intelligence can achieve.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="bg-surface-container-lowest p-10 rounded-2xl shadow-sm border border-outline-variant/20 hover:shadow-xl transition-all duration-300 card-hover h-full">
                <div className="w-16 h-16 rounded-xl bg-surface-container text-primary flex items-center justify-center mb-8">
                  <span className="material-symbols-outlined text-4xl material-icons-fill">hub</span>
                </div>
                <h3 className="text-2xl font-headline font-bold text-on-background mb-4">Client-Centricity</h3>
                <p className="text-on-surface-variant leading-relaxed">
                  Your success is our single source of truth. We build solutions around the human workflow, not just the technical requirement.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 md:py-32 px-6 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <h2 className="text-4xl md:text-5xl font-headline font-bold text-on-background tracking-tight mb-4">Leadership</h2>
                <p className="text-lg text-on-surface-variant max-w-md">Driven by veterans of enterprise technology and strategic operations.</p>
              </div>
              <div className="h-px flex-1 bg-outline-variant/30 mx-8 hidden md:block mb-4"></div>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Sanjeev Kumar",
                role: "Founder & CEO",
                img: "/images/sanjeev.jpg",
                bio: "Founded the company 35 years ago. With an illustrious career spanning four decades, he leads with a deep understanding of business operations and an unwavering passion for technology-driven systems."
              },
              {
                name: "Vidur Mahendru",
                role: "Director of Operations",
                img: "/images/vidur.jpg",
                bio: "Accomplished business leader with a strong background in data analysis, SQL, sales operations, and advanced analytics. Holds an MBA in Business Analytics from Hofstra University, New York."
              },
              {
                name: "Dheeraj Kumar",
                role: "Chief Technology Officer",
                img: "/images/dheeraj.jpg",
                bio: "Spearheads our technical vision. Develops integrated ERP applications and store-to-headquarters data infrastructures that guarantee operational continuity and real-time connectivity."
              }
              // {
              //   name: "Sarah Jenkins",
              //   role: "VP of Client Success",
              //   img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA2e_uWwN5wHRvV2F0_pIIkJSEPv9M96GFIPX31bysxgzpN5G-MEcuCZLkOl65iRBUKqhO98glQsu9osR2z7rR5bs6P3FoSLRX4PHngNujiV6UtXWL5YtIFSr_tS8qxWL7_Rmovg9LIfbdDglyK7IMmkDjkx55jxbSA6QUNi5zrLkczu1rYQwSpWJxoYO9m2eB9ayY-lgxnXYkSzztyV_ikISEazVUJYCwdZ7N1f6B7PjCi_7CEJiieemGTwkpV6A9EGtqju94dex8t"
              // }
            ].map((leader, idx) => (
              <AnimatedSection key={leader.name} delay={idx * 0.1}>
                <div className="group cursor-pointer">
                  <div className="aspect-[4/5] bg-surface-container mb-6 rounded-2xl overflow-hidden relative border border-outline-variant/20 shadow-sm card-hover">
                    <Image
                      alt={`Portrait of ${leader.name}`}
                      className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-[0.25,0.46,0.45,0.94]"
                      width={400}
                      height={500}
                      unoptimized
                      src={leader.img}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <h4 className="text-xl font-headline font-bold text-on-background">{leader.name}</h4>
                  <p className="text-sm font-semibold tracking-tight gradient-text">{leader.role}</p>
                  <p className="text-xs text-on-surface-variant mt-3 leading-relaxed border-t border-outline-variant/20 pt-3">{leader.bio}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
