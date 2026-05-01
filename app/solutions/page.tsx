import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

export default function Solutions() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Header */}
      <header className="relative overflow-hidden pt-36 pb-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 text-left z-10">
            <AnimatedSection>
              <span className="inline-block py-1.5 px-4 bg-secondary-fixed text-on-secondary-fixed-variant rounded-full text-xs font-bold mb-6 tracking-widest uppercase shadow-sm">
                The Architectural Ledger
              </span>
            </AnimatedSection>
            
            <AnimatedSection delay={0.1}>
              <h1 className="text-5xl md:text-7xl font-headline font-extrabold text-primary mb-6 leading-[1.1] tracking-tighter shadow-sm">
                Our ERP Solutions
              </h1>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl leading-relaxed">
                Precision engineering for global enterprise. Transform chaotic data into architectural order with modules designed for technical clarity and operational excellence.
              </p>
            </AnimatedSection>
          </div>
          
          <div className="flex-1 w-full h-[450px] rounded-2xl relative overflow-hidden shadow-2xl card-hover">
            <AnimatedSection delay={0.3} direction="none" className="h-full">
              <Image 
                alt="Financial Dashboard" 
                className="w-full h-full object-cover opacity-90 transition-transform duration-700 hover:scale-105"
                width={800}
                height={600}
                unoptimized
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnY_RqJI1uiHvjfnoWW1XOm4Jin8mYEpPCnezjcu8JVRYGRwQNTFsyz3sJnWfGREEb6YBpfyBu2Phxp8JFKXN3qMDyLzVKSnu4ll3ykge0_EnJbV8eKfM-IvakXg9yGmatdu5XQQr8Xok9c-60Y5LRgcl_Q_xbkl53H43VMj1-WVuk9leB8moGlwXZ9DFlxlp1G-hNMeBSbR7B2dgNtWFw00M8Ned-tJmWv_WFnTeIfIzY10W3o9rqZNoOHD3KzS5myeS2VHh87p73"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent mix-blend-multiply"></div>
            </AnimatedSection>
          </div>
        </div>
      </header>

      {/* Module Breakdowns */}
      <section className="py-24 space-y-32">
        {/* Finance & Accounting */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <AnimatedSection direction="left">
                <div className="bg-surface-container-lowest rounded-2xl p-10 shadow-lg border border-outline-variant/10 card-hover relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1.5 h-full architectural-gradient"></div>
                  <div className="flex items-center gap-4 mb-10">
                    <span className="material-symbols-outlined text-primary text-4xl material-icons-fill">account_balance_wallet</span>
                    <h3 className="text-3xl font-headline font-bold text-on-surface">Finance &amp; Accounting</h3>
                  </div>
                  <div className="space-y-4">
                    {[
                      { title: "General Ledger", desc: "Automated reconciliation and real-time balance sheets." },
                      { title: "Tax Compliance", desc: "Multi-region VAT support and automated filing logic." },
                      { title: "Cash Flow Forecasting", desc: "Predictive AI modeling for 12-month liquidity analysis." }
                    ].map((item, i) => (
                      <div key={i} className="bg-surface-container/50 hover:bg-surface-container transition-colors p-5 rounded-xl border border-outline-variant/5">
                        <p className="text-sm font-bold text-primary mb-1 tracking-tight">{item.title}</p>
                        <p className="text-sm text-on-surface-variant leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>
            
            <div className="w-full md:w-1/2 order-1 md:order-2">
              <AnimatedSection delay={0.2} direction="right">
                <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary mb-6 tracking-tight">Financial Integrity</h2>
                <p className="text-on-surface-variant text-lg leading-relaxed mb-10">
                  Every cent accounted for. Our Finance module provides an immutable audit trail and instant visibility into your organization{"'"}s fiscal health, ensuring zero ambiguity in reporting.
                </p>
                <ul className="grid grid-cols-2 gap-y-6 gap-x-4">
                  {["Audit Ready", "Multi-Currency", "AI Reconciliation", "Instant Reporting"].map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm font-bold text-secondary">
                      <span className="material-symbols-outlined text-primary material-icons-fill">check_circle</span> 
                      {feature}
                    </li>
                  ))}
                </ul>
              </AnimatedSection>
            </div>
          </div>
        </div>

        {/* Inventory & Logistics */}
        <div className="bg-surface-container-low py-32 rounded-3xl mx-4 lg:mx-12 overflow-hidden shadow-inner relative">
          <div className="max-w-[70rem] mx-auto px-6 relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-16">
              <div className="w-full md:w-1/2">
                <AnimatedSection direction="left">
                  <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary mb-6 tracking-tight">Global Logistics Engine</h2>
                  <p className="text-on-surface-variant text-lg leading-relaxed mb-10">
                    Seamlessly track assets across continents. From raw material procurement to last-mile delivery, our logistics module synchronizes your supply chain in real-time.
                  </p>
                  <div className="grid grid-cols-1 gap-6">
                    <div className="flex items-start gap-5 p-6 bg-surface-container-lowest rounded-2xl shadow-sm border border-outline-variant/10 hover:-translate-y-1 transition-transform">
                      <span className="material-symbols-outlined text-primary text-3xl material-icons-fill">inventory_2</span>
                      <div>
                        <h4 className="font-bold text-on-surface text-sm uppercase tracking-wider mb-1">Smart Warehousing</h4>
                        <p className="text-sm text-on-surface-variant leading-relaxed">Optimized picking paths and automated stock replenishment.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-5 p-6 bg-surface-container-lowest rounded-2xl shadow-sm border border-outline-variant/10 hover:-translate-y-1 transition-transform">
                      <span className="material-symbols-outlined text-primary text-3xl material-icons-fill">local_shipping</span>
                      <div>
                        <h4 className="font-bold text-on-surface text-sm uppercase tracking-wider mb-1">Freight Monitoring</h4>
                        <p className="text-sm text-on-surface-variant leading-relaxed">Real-time GPS tracking and customs documentation management.</p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
              
              <div className="w-full md:w-1/2">
                <AnimatedSection delay={0.2} direction="right">
                  <div className="relative group">
                    <Image 
                      alt="Logistics Center" 
                      className="rounded-2xl shadow-2xl object-cover w-full h-[500px]" 
                      width={600}
                      height={500}
                      unoptimized
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCc_Xro-XaDjDX61QsIv0BaHoK3IzjWW9208zu6fx8zI09FaaotNz1PGMLGEVyLJp3dh29lEhSGYQ28q2uo-Scw4C5XYwEglg35RF8QqjHye4X6alr4PXmY3DIEjAxGhNVawkhDJ3aF0rsKCmTGXQPLnpSrZ2LnuwTYxM7hScoaR306sc1mQcfC-C5NvZf8TWsl3Y2yT9Ndprn4E45oNLCuA8R6T032Bxwntfdq0iZ8BKIoSm-crq0ltznqLtzZxzNXJ8QJ-4k0p6JM" 
                    />
                    <div className="absolute -bottom-8 -right-8 architectural-gradient p-8 rounded-2xl text-white max-w-[240px] shadow-2xl animate-float">
                      <p className="text-4xl font-extrabold mb-1">99.9%</p>
                      <p className="text-xs font-bold opacity-90 uppercase tracking-widest">Inventory Accuracy Rate</p>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </div>

        {/* Employee Management */}
        <div className="max-w-7xl mx-auto px-6 pb-12">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <AnimatedSection direction="left">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { icon: "badge", title: "Talent Lifecycle", desc: "Manage everything from onboarding to retirement.", color: "text-tertiary" },
                    { icon: "payments", title: "Payroll Engine", desc: "Automated tax withholding & multi-state compliance.", color: "text-primary" }
                  ].map((card, idx) => (
                    <div key={card.title} className={`bg-white p-8 rounded-2xl shadow-sm border border-outline-variant/10 card-hover ${idx === 1 ? 'mt-12' : ''}`}>
                      <span className={`material-symbols-outlined ${card.color} text-3xl mb-5 material-icons-fill`}>{card.icon}</span>
                      <h4 className="font-bold text-on-surface mb-3 text-lg">{card.title}</h4>
                      <p className="text-sm text-on-surface-variant leading-relaxed">{card.desc}</p>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
            
            <div className="w-full md:w-1/2 order-1 md:order-2">
              <AnimatedSection delay={0.2} direction="right">
                <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary mb-6 tracking-tight">Employee Management</h2>
                <p className="text-on-surface-variant text-lg leading-relaxed mb-10">
                  Empower your workforce with tools that simplify complexity. Our HR module reduces administrative burden, allowing your team to focus on culture and growth rather than spreadsheets.
                </p>
                <div className="p-8 bg-surface-container rounded-2xl border border-outline-variant/10 shadow-sm relative">
                  <div className="absolute top-6 left-6 text-primary/20">
                    <span className="material-symbols-outlined text-6xl material-icons-fill">format_quote</span>
                  </div>
                  <blockquote className="relative z-10 italic text-on-surface font-medium text-lg border-l-4 border-primary pl-6 ml-4">
                    "CTC Solutions redefined how we manage our global team of 4,000. The interface is clean, the data is accurate, and the reporting is instantaneous."
                  </blockquote>
                  <p className="mt-6 text-sm font-bold text-primary ml-10 uppercase tracking-wider">— VP of HR, Global Enterprise</p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Why CTC? */}
      <section className="py-32 bg-on-background text-surface relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 rounded-l-[100px] blur-3xl -z-10"></div>
        <div className="max-w-7xl mx-auto px-6 z-10">
          <AnimatedSection>
            <div className="mb-16">
              <h2 className="text-5xl font-headline font-extrabold mb-6 tracking-tighter">Why CTC?</h2>
              <div className="h-1.5 w-24 architectural-gradient rounded-full"></div>
            </div>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: "analytics", title: "Real-time Analytics", desc: "Stop waiting for end-of-month reports. Our streaming data architecture ensures your dashboard is always current to the millisecond." },
              { icon: "encrypted", title: "Secure Data", desc: "Bank-grade encryption at rest and in transit. Our SOC-2 Type II compliant infrastructure keeps your enterprise data safe." },
              { icon: "layers", title: "Scalable Architecture", desc: "Built on modular microservices. Whether you have 50 or 50,000 employees, CTC scales horizontally without downtime." }
            ].map((feature, i) => (
              <AnimatedSection key={feature.title} delay={i * 0.1}>
                <div className="bg-surface-container-lowest/5 backdrop-blur-md border border-white/10 p-10 rounded-2xl hover:bg-surface-container-lowest/10 transition-colors group card-hover h-full">
                  <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center mb-8 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <span className="material-symbols-outlined text-primary-container group-hover:text-white text-3xl material-icons-fill">{feature.icon}</span>
                  </div>
                  <h3 className="text-2xl font-headline font-bold mb-4 text-white">{feature.title}</h3>
                  <p className="text-slate-400 leading-relaxed text-sm">
                    {feature.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
