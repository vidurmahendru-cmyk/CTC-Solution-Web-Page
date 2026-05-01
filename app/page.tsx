import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-36 pb-32">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] animate-blob bg-primary-fixed/30 rounded-full blur-3xl -z-10 mix-blend-multiply"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] animate-blob bg-secondary-fixed/30 rounded-full blur-3xl -z-10 mix-blend-multiply" style={{ animationDelay: '2s' }}></div>
        
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 z-10">
            <AnimatedSection>
              <span className="inline-block py-1.5 px-4 mb-6 rounded-full bg-surface-container-highest text-primary font-bold text-xs tracking-widest uppercase shadow-sm">
                Enterprise Resource Planning
              </span>
            </AnimatedSection>
            
            <AnimatedSection delay={0.1}>
              <h1 className="font-headline font-extrabold text-5xl lg:text-7xl leading-[1.1] text-on-background mb-8 tracking-tight">
                Enterprise Excellence with <span className="text-primary gradient-text">CTC Solutions</span>
              </h1>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <p className="text-secondary text-lg lg:text-xl mb-10 max-w-2xl leading-relaxed">
                Impose architectural order on your global enterprise. Our ERP ecosystem integrates disparate data streams into a singular, high-precision source of truth for modern business leaders.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <button className="architectural-gradient text-white px-8 py-4 rounded-lg font-bold text-base shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 transition-all w-full sm:w-auto flex items-center justify-center gap-2">
                    Request a Demo
                    <span className="material-symbols-outlined material-icons-fill text-xl">arrow_forward</span>
                  </button>
                </Link>
                <Link href="/solutions">
                  <button className="bg-secondary-container text-on-secondary-container px-8 py-4 rounded-lg font-bold text-base hover:bg-surface-container-highest transition-all w-full sm:w-auto">
                    View Platform Architecture
                  </button>
                </Link>
              </div>
            </AnimatedSection>
          </div>
          
          <div className="lg:col-span-5 relative">
            <AnimatedSection delay={0.4} direction="left">
              <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
              <div className="bg-surface-container-lowest rounded-xl shadow-2xl p-4 border border-outline-variant/20 relative z-10 animate-float card-hover">
                <Image 
                  alt="Software Interface" 
                  className="rounded-lg w-full h-auto" 
                  width={800}
                  height={600}
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCp9smIjLHn36JqMCGZI4OlSCMX5YlDEt_lFiHD0-ymaEL5TREImK7_sqOCOu9eLNzTqTp8q426-UDQKgrU0sN5pGyDX-zfq2KyaT8uS1Y6aW6puAUpJmG-WPWc3OqIwkX_-zoroj9U9Hlm2SQbvob17Gx8Y70qTukka12AHJzaWCfX7GrQCcbefle1y-Jt8i2U0ui53g5mHPSnoPttZlxkE1M1HOpgvL6HwcHpgMRGjHmnBYjDKZhV1HFABcGwA3OQtxA9_HaW6-II"
                  unoptimized
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-surface-container-low py-16 overflow-hidden">
        <AnimatedSection>
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-center font-label text-xs font-bold uppercase tracking-[0.2em] text-outline mb-10">
              Trusted by Global Industry Leaders
            </p>
            <div className="relative w-full overflow-hidden flex items-center">
              <div className="flex w-[200%] animate-marquee">
                {/* First set of logos */}
                <div className="flex w-1/2 justify-around items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500 gap-12 px-6">
                  <Image alt="Client 1" className="h-8 md:h-10 w-auto" width={120} height={40} unoptimized src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfffzm0vFY1IniQilfY9UbnuRIc0o_Df_RWJCkxWEEL6oA6-k8M64lJ5fvAnWblcbPgUQRD9A-UxTgna9ZC4vQe3FCbMt7jztkYYk5MWWXqZEHyt9Gtq-NOtnNzH8SMDqcMvyT-w87aW0WHQezwAoBf5Oce54cu3vT3SPs8O1lPzgJsUQuwkVMSrFof5wRo5DhOdIRoPdvD5B5jUlbh8GSnbIdg_qNe1GDORnMFWXd4JTmyk97XgD1OiQK9w1Bsy7jnHncFpR-0mCE" />
                  <Image alt="Client 2" className="h-8 md:h-10 w-auto" width={120} height={40} unoptimized src="https://lh3.googleusercontent.com/aida-public/AB6AXuClknLR-J06IOAKu8klHEws7GPktOHSzu71wXpTOD9j9Ref34hEUR1EpRGB0GV22QAKEp1p3_QebaWMggr9zBnuHuuXQnZCKn-HfKF0VsbunCCoYp6HqU3QBX1UAKWDudSTPf_oyIxqiU37s6kDedndgPEIu1mi_EJA3hacbC7cGTGuiKtYDMm1XZ8_OUxzJ7JgmwxJmFzX6Y4w6lXiUVv8imUNlWSHz_tMDoI2WEQzoURQkBrupCTpbQkvMRfPuAZFOMA7Rjecb_Rr" />
                  <Image alt="Client 3" className="h-8 md:h-10 w-auto" width={120} height={40} unoptimized src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlhxu_ESS4yHnvXHKNFWIgVP71WlWskyyajBlG2cPGyaXn3OPtzcIh-AI6ldBwk9QSTb6QdlpSOcDdAkQrJtLQ45AHzODCcPPKwKst11QyNc8nZHzMVPmGl1qExLTCoRUVawu4rkBOyInPQ25Daxzj8hbIVMvz9iqp9_LiWAA0V00skZeXj8cdCqDvwsgfa62-Wq6MGyQBIkmf4SK79ptpqJq9X0hUKod4iFHMTkKx27fP3BbzebaLQ4rHFoqfpGmB5lFe-7vjVGX7" />
                  <Image alt="Client 4" className="h-8 md:h-10 w-auto" width={120} height={40} unoptimized src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWQKgjDJdg7gRgNiWUndoXBVf5Pqn5Aw5Fwvjm2Kp2yN25908sYBKkVql7k0LKOHwEr9vheXg5avCxVVoBXs85LQQ00Ixav82kTo7TkLqAgppMNTojGEyXntkEcOfaawNbyhvnwUJiYgKifeDxRs_Q6LO7xc0QxNS28JfJLmZQSw0QwANVs8gYVY72AQPkF02cpBVQ5I47cbK5sBRd2odlVAxzFRJmPKILIFCGmXtH1pgFRfu9Z_NDD4VJuW1xIJXJUF8VAhSk8Jzh" />
                  <Image alt="Client 5" className="h-8 md:h-10 w-auto" width={120} height={40} unoptimized src="https://lh3.googleusercontent.com/aida-public/AB6AXuCe5nlbc4WDSQ1yzWRYbCsYSf5vD8wDW9fWNOsQHc76QyuDGGX7fmxuI0i91_bTTfNuNif50JW66F6YeoEuWC7CHFnbUC72dHEN-_rm6kZ-H8qbB6FrgtOizUZC25DLV-_vli0EvMyhyOuGKdriTLZmNbqJvU12tE-VgtQHEPqz9qFQj9yO6sl8PlEQNaYPG1sGg6ECZbO6umy_71JGQGI0JzYUH7ilHXiT2kwB8nwXPEDREaZuEO8QNi_34IpJSmehLZ6MH2e1GgSD" />
                </div>
                {/* Duplicate set for seamless scrolling */}
                <div className="flex w-1/2 justify-around items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500 gap-12 px-6">
                  <Image alt="Client 1" className="h-8 md:h-10 w-auto" width={120} height={40} unoptimized src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfffzm0vFY1IniQilfY9UbnuRIc0o_Df_RWJCkxWEEL6oA6-k8M64lJ5fvAnWblcbPgUQRD9A-UxTgna9ZC4vQe3FCbMt7jztkYYk5MWWXqZEHyt9Gtq-NOtnNzH8SMDqcMvyT-w87aW0WHQezwAoBf5Oce54cu3vT3SPs8O1lPzgJsUQuwkVMSrFof5wRo5DhOdIRoPdvD5B5jUlbh8GSnbIdg_qNe1GDORnMFWXd4JTmyk97XgD1OiQK9w1Bsy7jnHncFpR-0mCE" />
                  <Image alt="Client 2" className="h-8 md:h-10 w-auto" width={120} height={40} unoptimized src="https://lh3.googleusercontent.com/aida-public/AB6AXuClknLR-J06IOAKu8klHEws7GPktOHSzu71wXpTOD9j9Ref34hEUR1EpRGB0GV22QAKEp1p3_QebaWMggr9zBnuHuuXQnZCKn-HfKF0VsbunCCoYp6HqU3QBX1UAKWDudSTPf_oyIxqiU37s6kDedndgPEIu1mi_EJA3hacbC7cGTGuiKtYDMm1XZ8_OUxzJ7JgmwxJmFzX6Y4w6lXiUVv8imUNlWSHz_tMDoI2WEQzoURQkBrupCTpbQkvMRfPuAZFOMA7Rjecb_Rr" />
                  <Image alt="Client 3" className="h-8 md:h-10 w-auto" width={120} height={40} unoptimized src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlhxu_ESS4yHnvXHKNFWIgVP71WlWskyyajBlG2cPGyaXn3OPtzcIh-AI6ldBwk9QSTb6QdlpSOcDdAkQrJtLQ45AHzODCcPPKwKst11QyNc8nZHzMVPmGl1qExLTCoRUVawu4rkBOyInPQ25Daxzj8hbIVMvz9iqp9_LiWAA0V00skZeXj8cdCqDvwsgfa62-Wq6MGyQBIkmf4SK79ptpqJq9X0hUKod4iFHMTkKx27fP3BbzebaLQ4rHFoqfpGmB5lFe-7vjVGX7" />
                  <Image alt="Client 4" className="h-8 md:h-10 w-auto" width={120} height={40} unoptimized src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWQKgjDJdg7gRgNiWUndoXBVf5Pqn5Aw5Fwvjm2Kp2yN25908sYBKkVql7k0LKOHwEr9vheXg5avCxVVoBXs85LQQ00Ixav82kTo7TkLqAgppMNTojGEyXntkEcOfaawNbyhvnwUJiYgKifeDxRs_Q6LO7xc0QxNS28JfJLmZQSw0QwANVs8gYVY72AQPkF02cpBVQ5I47cbK5sBRd2odlVAxzFRJmPKILIFCGmXtH1pgFRfu9Z_NDD4VJuW1xIJXJUF8VAhSk8Jzh" />
                  <Image alt="Client 5" className="h-8 md:h-10 w-auto" width={120} height={40} unoptimized src="https://lh3.googleusercontent.com/aida-public/AB6AXuCe5nlbc4WDSQ1yzWRYbCsYSf5vD8wDW9fWNOsQHc76QyuDGGX7fmxuI0i91_bTTfNuNif50JW66F6YeoEuWC7CHFnbUC72dHEN-_rm6kZ-H8qbB6FrgtOizUZC25DLV-_vli0EvMyhyOuGKdriTLZmNbqJvU12tE-VgtQHEPqz9qFQj9yO6sl8PlEQNaYPG1sGg6ECZbO6umy_71JGQGI0JzYUH7ilHXiT2kwB8nwXPEDREaZuEO8QNi_34IpJSmehLZ6MH2e1GgSD" />
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Featured Modules */}
      <section className="py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="max-w-3xl mb-20">
              <h2 className="font-headline text-3xl md:text-5xl font-bold text-on-background mb-6 tracking-tight">Core Infrastructure Modules</h2>
              <p className="text-secondary text-lg">Every module is designed with editorial precision, ensuring data is not just stored, but intelligently organized for immediate decision-making.</p>
            </div>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection delay={0.1}>
              <div className="bg-surface-container-lowest p-8 rounded-xl border border-transparent hover:border-outline-variant/30 hover:shadow-xl transition-all duration-300 group h-full flex flex-col cursor-pointer card-hover">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <span className="material-symbols-outlined text-3xl">account_balance</span>
                </div>
                <h3 className="font-headline text-2xl font-bold mb-4">Financial Management</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-8 flex-grow">
                  Automate complex ledgers, global consolidations, and multi-currency transactions with millisecond accuracy and full compliance audit trails.
                </p>
                <Link href="/solutions" className="text-primary font-bold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all group/link">
                  Explore Module <span className="material-symbols-outlined material-icons-fill text-sm transition-transform group-hover/link:translate-x-1">chevron_right</span>
                </Link>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <div className="bg-surface-container-lowest p-8 rounded-xl border border-transparent hover:border-outline-variant/30 hover:shadow-xl transition-all duration-300 group h-full flex flex-col cursor-pointer card-hover">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <span className="material-symbols-outlined text-3xl">inventory_2</span>
                </div>
                <h3 className="font-headline text-2xl font-bold mb-4">Supply Chain Management</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-8 flex-grow">
                  Gain real-time visibility across your entire value chain. Predict disruptions and optimize inventory through AI-driven architectural forecasting.
                </p>
                <Link href="/solutions" className="text-primary font-bold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all group/link">
                  Explore Module <span className="material-symbols-outlined material-icons-fill text-sm transition-transform group-hover/link:translate-x-1">chevron_right</span>
                </Link>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.3}>
              <div className="bg-surface-container-lowest p-8 rounded-xl border border-transparent hover:border-outline-variant/30 hover:shadow-xl transition-all duration-300 group h-full flex flex-col cursor-pointer card-hover">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <span className="material-symbols-outlined text-3xl">groups</span>
                </div>
                <h3 className="font-headline text-2xl font-bold mb-4">Human Resources</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-8 flex-grow">
                  Scale your workforce with centralized talent management, payroll automation, and strategic workforce planning modules built for global scale.
                </p>
                <Link href="/solutions" className="text-primary font-bold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all group/link">
                  Explore Module <span className="material-symbols-outlined material-icons-fill text-sm transition-transform group-hover/link:translate-x-1">chevron_right</span>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 px-6 bg-surface">
        <AnimatedSection>
          <div className="max-w-6xl mx-auto architectural-gradient rounded-3xl p-12 md:p-20 relative overflow-hidden text-center text-white shadow-2xl card-hover">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full -mr-64 -mt-64 blur-3xl animate-pulse" style={{ animationDuration: '8s' }}></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-black/10 rounded-full -ml-64 -mb-64 blur-3xl animate-pulse" style={{ animationDuration: '6s' }}></div>
            
            <h2 className="font-headline text-4xl md:text-5xl font-extrabold mb-8 relative z-10 leading-tight">
              Transform Your Enterprise Architecture Today
            </h2>
            <p className="text-on-primary-container text-lg md:text-xl mb-12 max-w-2xl mx-auto relative z-10 font-body">
              Join the world's most efficient organizations. Deploy CTC Solutions and replace chaos with high-precision architectural order.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
              <Link href="/contact" className="w-full sm:w-auto">
                <button className="w-full bg-white text-primary px-10 py-5 rounded-xl font-bold text-lg hover:bg-surface-bright transition-all shadow-xl hover:shadow-white/20 hover:-translate-y-1">
                  Contact Sales
                </button>
              </Link>
              <Link href="/contact" className="w-full sm:w-auto">
                <button className="w-full bg-transparent border-2 border-white/30 text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-white/10 transition-all hover:-translate-y-1 backdrop-blur-sm">
                  Request a Demo
                </button>
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
