import Link from "next/link";

const footerLinks: Record<string, { label: string; href: string }[]> = {
  Platform: [
    { label: "Solutions", href: "/solutions" },
    { label: "API Documentation", href: "#" },
    { label: "Security", href: "#" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "#" },
    { label: "Press", href: "#" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Settings", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-outline-variant/30">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="text-lg font-extrabold text-primary font-headline mb-3">
              CTC Solutions
            </div>
            <p className="text-[13px] text-secondary leading-relaxed mb-6">
              Architectural Order for Global Enterprise.
            </p>
            <div className="flex gap-2">
              {["language", "hub", "dns"].map((icon) => (
                <div
                  key={icon}
                  className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-200 cursor-pointer"
                >
                  <span
                    className="material-symbols-outlined text-[18px]"
                    style={{
                      fontVariationSettings:
                        "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 20",
                    }}
                  >
                    {icon}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h5 className="text-[10px] font-bold uppercase tracking-[0.15em] text-primary mb-4">
                {section}
              </h5>
              <ul className="space-y-2.5">
                {links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-[13px] text-secondary hover:text-primary transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-outline-variant/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[11px] text-outline">
            © 2024 CTC Solutions. Architectural Order for Global Enterprise.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[11px] font-semibold text-primary">
              System Status: Operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
