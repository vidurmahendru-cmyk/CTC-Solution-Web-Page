import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Header Section */}
      <header className="relative overflow-hidden pt-36 pb-20">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <AnimatedSection>
              <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl font-extrabold text-primary tracking-tighter leading-tight mb-8">
                Get Started with <br className="hidden md:block" /><span className="gradient-text">CTC Solutions</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <p className="text-secondary text-lg md:text-xl font-medium max-w-xl leading-relaxed">
                Experience the precision of architectural order in enterprise management. Request a personalized consultation and see our platform in action.
              </p>
            </AnimatedSection>
          </div>
        </div>

        {/* Decorative Background Element */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-surface-container-low -skew-x-12 translate-x-1/3 z-0"></div>
      </header>

      <main className="max-w-7xl mx-auto px-6 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Column: Form Section */}
          <div className="lg:col-span-7">
            <AnimatedSection delay={0.2} direction="up">
              <div className="bg-surface-container-lowest p-8 md:p-12 rounded-2xl shadow-xl border border-outline-variant/10 relative z-10 card-hover">
                <form className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Name Field */}
                    <div className="space-y-2 group">
                      <label htmlFor="name" className="block text-xs font-bold text-on-surface-variant uppercase tracking-widest transition-colors group-hover:text-primary">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        placeholder="John Doe"
                        className="w-full bg-surface-container-low border-b-2 border-outline-variant/30 focus:border-primary px-4 py-4 text-on-surface placeholder:text-outline/50 transition-all outline-none rounded-t-xl hover:bg-surface-container shadow-inner"
                      />
                    </div>
                    {/* Email Field */}
                    <div className="space-y-2 group">
                      <label htmlFor="email" className="block text-xs font-bold text-on-surface-variant uppercase tracking-widest transition-colors group-hover:text-primary">Work Email</label>
                      <input
                        type="email"
                        id="email"
                        placeholder="john@company.com"
                        className="w-full bg-surface-container-low border-b-2 border-outline-variant/30 focus:border-primary px-4 py-4 text-on-surface placeholder:text-outline/50 transition-all outline-none rounded-t-xl hover:bg-surface-container shadow-inner"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Company Field */}
                    <div className="space-y-2 group">
                      <label htmlFor="company" className="block text-xs font-bold text-on-surface-variant uppercase tracking-widest transition-colors group-hover:text-primary">Company Name</label>
                      <input
                        type="text"
                        id="company"
                        placeholder="Enterprise Corp"
                        className="w-full bg-surface-container-low border-b-2 border-outline-variant/30 focus:border-primary px-4 py-4 text-on-surface placeholder:text-outline/50 transition-all outline-none rounded-t-xl hover:bg-surface-container shadow-inner"
                      />
                    </div>
                    {/* Dropdown Field */}
                    <div className="space-y-2 group">
                      <label htmlFor="interest" className="block text-xs font-bold text-on-surface-variant uppercase tracking-widest transition-colors group-hover:text-primary">Interested In</label>
                      <div className="relative">
                        <select
                          id="interest"
                          className="w-full bg-surface-container-low border-b-2 border-outline-variant/30 focus:border-primary px-4 py-4 text-on-surface appearance-none transition-all outline-none rounded-t-xl hover:bg-surface-container cursor-pointer shadow-inner"
                        >
                          <option value="">Select a solution</option>
                          <option value="erp">Enterprise Resource Planning</option>
                          <option value="supply">Supply Chain Optimization</option>
                          <option value="financial">Financial Integrity Suite</option>
                          <option value="analytics">Global Data Analytics</option>
                        </select>
                        <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-primary">
                          <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">expand_more</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Message Field */}
                  <div className="space-y-2 group">
                    <label htmlFor="message" className="block text-xs font-bold text-on-surface-variant uppercase tracking-widest transition-colors group-hover:text-primary">How can we help?</label>
                    <textarea
                      id="message"
                      rows={5}
                      placeholder="Briefly describe your enterprise needs..."
                      className="w-full bg-surface-container-low border-b-2 border-outline-variant/30 focus:border-primary px-4 py-4 text-on-surface placeholder:text-outline/50 transition-all outline-none rounded-t-xl hover:bg-surface-container resize-none shadow-inner"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-6">
                    <button
                      type="submit"
                      className="architectural-gradient w-full md:w-auto px-12 py-5 text-white font-extrabold rounded-xl shadow-xl hover:shadow-primary/40 hover:-translate-y-1 transition-all flex items-center justify-center gap-3 text-lg group"
                    >
                      <span>Submit Request</span>
                      <span className="material-symbols-outlined transition-transform group-hover:translate-x-1 material-icons-fill">arrow_forward</span>
                    </button>
                    <p className="mt-6 text-xs text-outline leading-relaxed max-w-lg">
                      By clicking submit, you agree to our Terms of Service and Privacy Policy. Our enterprise team typically responds within 4 business hours.
                    </p>
                  </div>
                </form>
              </div>
            </AnimatedSection>
          </div>

          {/* Right Column: Sidebar info & Trust Signals */}
          <div className="lg:col-span-5 space-y-12 pt-8">
            {/* Contact Info Section */}
            <AnimatedSection direction="left" delay={0.3}>
              <section className="space-y-10">
                <h3 className="font-headline text-3xl font-bold text-primary tracking-tight">Direct Contact</h3>

                <div className="space-y-8">
                  {/* Offices */}
                  <div className="flex gap-5 group">
                    <div className="w-14 h-14 rounded-xl bg-surface-container-highest flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-300 shadow-sm">
                      <span className="material-symbols-outlined text-primary group-hover:text-white transition-colors material-icons-fill text-2xl">location_on</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-on-surface text-lg">Global Headquarters</h4>
                      <p className="text-secondary text-sm leading-relaxed mt-2">
                        CTC Solutions, Industrial Area Phase 1,<br />
                        Chandigarh, India
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 group">
                    <div className="w-14 h-14 rounded-xl bg-surface-container-highest flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-300 shadow-sm">
                      <span className="material-symbols-outlined text-primary group-hover:text-white transition-colors material-icons-fill text-2xl">map</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-on-surface text-lg">Chandigarh Division</h4>
                      <p className="text-secondary text-sm leading-relaxed mt-2">
                        Strategic operations &amp; IT bookkeeping services,<br />
                        Chandigarh, India
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex gap-5 group">
                    <div className="w-14 h-14 rounded-xl bg-surface-container-highest flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-300 shadow-sm">
                      <span className="material-symbols-outlined text-primary group-hover:text-white transition-colors material-icons-fill text-2xl">call</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-on-surface text-lg">Enterprise Sales</h4>
                      <p className="text-secondary text-lg mt-1 font-semibold">+91 98555-56863</p>
                      <p className="text-outline text-xs mt-1 font-medium tracking-wide">MON–FRI, 9AM–6PM EST</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex gap-5 group">
                    <div className="w-14 h-14 rounded-xl bg-surface-container-highest flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-300 shadow-sm">
                      <span className="material-symbols-outlined text-primary group-hover:text-white transition-colors material-icons-fill text-2xl">mail</span>
                    </div>
                    <div className="flex flex-col justify-center">
                      <h4 className="font-bold text-on-surface text-lg">Support &amp; Inquiries</h4>
                      <a href="mailto:vidur.mahendru@ctcsolution.in" className="text-primary hover:underline text-sm font-semibold mt-1">vidur.mahendru@ctcsolution.in</a>
                    </div>
                  </div>
                </div>
              </section>
            </AnimatedSection>

            {/* Trust Signals / Testimonial */}
            <AnimatedSection direction="left" delay={0.4}>
              <section className="bg-surface-container-low p-10 rounded-2xl relative overflow-hidden border border-outline-variant/10 shadow-inner group">
                <div className="absolute -top-10 -right-10 opacity-[0.03] group-hover:opacity-5 transition-opacity duration-500 group-hover:scale-110">
                  <span className="material-symbols-outlined text-[200px] material-icons-fill">verified</span>
                </div>

                <div className="flex items-center gap-3 mb-6 relative z-10">
                  <div className="flex text-tertiary">
                    {[1, 2, 3, 4, 5].map(i => <span key={i} className="material-symbols-outlined text-lg material-icons-fill">star</span>)}
                  </div>
                  <span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Industry Standard</span>
                </div>

                <blockquote className="text-on-surface font-medium leading-relaxed italic mb-8 relative z-10 text-lg">
                  "The demo was surprisingly efficient. CTC didn{"'"}t just show us features; they mapped the solution directly to our global infrastructure challenges."
                </blockquote>

                <div className="flex items-center gap-5 relative z-10">
                  <div className="w-12 h-12 rounded-full bg-surface-container-highest border-2 border-white shadow-md overflow-hidden shrink-0">
                    <Image
                      alt="CTO profile"
                      className="w-full h-full object-cover"
                      width={48} height={48} unoptimized
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsdtEMqLxEw1xjFHNVSVz09wGb21XCec1oUnp1DucxIiqzBPol0CkoBgnN5-eWRMVvhmds75Utn8evo46SqTm1DmGvnedh6sdICcR4bEzGBdhi6UgYWl9TBi2fVT-QgfKn35VEC-GBs01bRmmGGlw87vB5ECRZw4ET7xGk_at7OQZMG9khoKYnSJdJ3yP0woI0SXoK8pQQxrrC8kn_zzm1ZAlebOXrl_ov1V0tWlK5ZZL1VUSjXwl-mkruCQIA2vmeUYSO9j3IgNVi"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-extrabold text-on-surface">Elena Rodriguez</p>
                    <p className="text-xs font-semibold text-primary tracking-tight">CTO, Global Logistics Group</p>
                  </div>
                </div>

                {/* Quality Badge */}
                <div className="mt-10 pt-6 border-t border-outline-variant/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 relative z-10">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-2xl material-icons-fill">verified_user</span>
                    <span className="text-xs font-extrabold text-primary">Certified Demo Partner</span>
                  </div>
                  <div className="text-[10px] text-outline font-bold tracking-widest bg-white px-3 py-1.5 rounded-md shadow-sm border border-outline-variant/10">
                    ISO 27001 COMPLIANT
                  </div>
                </div>
              </section>
            </AnimatedSection>

          </div>
        </div>
      </main>
    </div>
  );
}
