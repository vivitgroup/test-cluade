"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "الرئيسية", href: "/" },
    {
      label: "الأقمشة",
      dropdown: ["أقمشة التنجيد", "أقمشة الستائر", "المخدات", "الإكسسوارات"],
    },
    {
      label: "الستائر",
      dropdown: ["مخمل", "شيفون", "بلاك أوت", "قطن"],
    },
    {
      label: "الخدمات",
      dropdown: ["استديو AI", "حاسبة الأقمشة", "مود بورد", "خدمة التنجيد"],
    },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <header
        className={`hidden md:flex fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
          scrolled
            ? "bg-white border-gray-100 shadow-sm"
            : "bg-transparent border-white/10"
        }`}
      >
        <div className="w-full px-6 lg:px-12 h-20 flex items-center gap-4 relative">
          {/* Logo */}
          <a href="/" className="flex items-center shrink-0 z-50">
            <span
              className={`text-2xl font-black tracking-wider transition-colors duration-300 ${
                scrolled ? "text-secondary" : "text-white"
              }`}
            >
              القثمي
            </span>
            <span
              className={`text-xs font-bold mr-1 mt-1 transition-colors duration-300 ${
                scrolled ? "text-brand" : "text-brand"
              }`}
            >
              GUTHMI
            </span>
          </a>

          {/* Nav links */}
          <nav className="flex flex-1 items-center justify-center gap-1 h-full mx-4">
            {navLinks.map((link) => (
              <div key={link.label} className="relative h-full flex items-center">
                {link.dropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(link.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      className={`px-4 h-full text-sm font-bold tracking-wide transition-colors flex items-center gap-1 py-2 ${
                        scrolled
                          ? "text-secondary/70 hover:text-secondary"
                          : "text-white/80 hover:text-white"
                      }`}
                    >
                      {link.label}
                      <svg className="w-3 h-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    </button>
                    {activeDropdown === link.label && (
                      <div className="absolute top-full right-0 mt-1 bg-white rounded-xl shadow-xl border border-gray-100 py-2 min-w-[180px] z-50">
                        {link.dropdown.map((item) => (
                          <a
                            key={item}
                            href="#"
                            className="block px-4 py-2.5 text-sm text-secondary/70 hover:text-brand hover:bg-surface transition-colors"
                          >
                            {item}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={link.href}
                    className={`px-4 text-sm font-bold tracking-wide transition-colors py-2 ${
                      scrolled
                        ? "text-secondary hover:text-brand"
                        : "text-white/90 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </a>
                )}
              </div>
            ))}
            {/* AI Studio pill */}
            <a
              href="#studio"
              className={`mx-2 px-5 py-2 rounded-full text-xs font-black transition-all whitespace-nowrap ${
                scrolled
                  ? "bg-brand text-white hover:bg-brand/90"
                  : "bg-white text-brand hover:bg-white/90"
              }`}
            >
              استديو AI
            </a>
          </nav>

          {/* Right icons */}
          <div className="flex items-center gap-4 shrink-0">
            <button
              className={`transition-colors ${
                scrolled ? "text-secondary/60 hover:text-brand" : "text-white/80 hover:text-white"
              }`}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            </button>
            <div className={`h-5 w-px ${scrolled ? "bg-gray-200" : "bg-white/20"}`} />
            <a
              href="#"
              className={`transition-colors ${
                scrolled ? "text-secondary/60 hover:text-brand" : "text-white/80 hover:text-white"
              }`}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
            </a>
            <a
              href="#"
              className={`transition-colors ${
                scrolled ? "text-secondary/60 hover:text-brand" : "text-white/80 hover:text-white"
              }`}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007Z" />
              </svg>
            </a>
            <a
              href="#"
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all border ${
                scrolled
                  ? "bg-secondary text-white border-secondary hover:bg-brand hover:border-brand"
                  : "bg-white/10 backdrop-blur-sm text-white border-white/20 hover:bg-white/20"
              }`}
            >
              تسجيل الدخول
            </a>
            <button
              className={`flex items-center gap-1 text-xs font-bold transition-colors ${
                scrolled ? "text-secondary/50 hover:text-brand" : "text-white/50 hover:text-white"
              }`}
            >
              <span>🇸🇦</span>
              <span>AR</span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navbar */}
      <header className="md:hidden fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-2xl border-b border-white/30 shadow-sm">
        <div className="flex items-center justify-between h-14 px-4">
          <button
            onClick={() => setDrawerOpen(true)}
            className="w-9 h-9 flex items-center justify-center text-secondary/70"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
          <a href="/" className="absolute left-1/2 -translate-x-1/2">
            <span className="text-xl font-black text-secondary">القثمي</span>
          </a>
          <div className="flex items-center gap-3">
            <button className="text-secondary/60">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            </button>
            <a href="#" className="text-secondary/60">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007Z" />
              </svg>
            </a>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {drawerOpen && (
        <div className="md:hidden fixed inset-0 z-[70]">
          <div
            className="absolute inset-0 bg-secondary/40"
            onClick={() => setDrawerOpen(false)}
          />
          <div className="absolute top-0 right-0 bottom-0 w-[280px] bg-white shadow-2xl overflow-y-auto">
            <div className="flex items-center justify-between p-5 border-b border-gray-100">
              <span className="text-xl font-black text-secondary">القثمي</span>
              <button
                onClick={() => setDrawerOpen(false)}
                className="w-8 h-8 flex items-center justify-center text-secondary/40"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <nav className="p-4 space-y-1">
              <p className="text-[10px] font-bold text-secondary/30 px-3 mb-2">التصفح</p>
              {[
                "الرئيسية",
                "المعرض",
                "أقمشة التنجيد",
                "الستائر",
                "استديو AI",
                "حاسبة الأقمشة",
                "مود بورد",
                "خدمة التنجيد",
                "فروعنا",
              ].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block px-3 py-2.5 rounded-xl text-sm font-bold text-secondary/70 hover:bg-surface hover:text-brand transition-colors"
                >
                  {item}
                </a>
              ))}
            </nav>
            <div className="px-4 pt-2 pb-6">
              <a
                href="#"
                className="block w-full text-center py-3 bg-brand text-white rounded-xl font-bold text-sm"
              >
                تسجيل الدخول
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
