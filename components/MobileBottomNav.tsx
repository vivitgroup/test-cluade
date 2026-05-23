"use client";
import { useState } from "react";

const tabs = [
  {
    id: "home",
    label: "الرئيسية",
    href: "/",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
  },
  {
    id: "gallery",
    label: "المعرض",
    href: "#",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.651V9.35m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72L4.318 3.44A1.5 1.5 0 0 1 5.378 3h13.244a1.5 1.5 0 0 1 1.06.44l1.19 1.19a3.004 3.004 0 0 1-.621 4.721" />
      </svg>
    ),
  },
  {
    id: "studio",
    label: "استديو القثمي",
    href: "#studio",
    isCenter: true,
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
        <path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
      </svg>
    ),
  },
  {
    id: "cart",
    label: "سلتي",
    href: "#",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
      </svg>
    ),
  },
  {
    id: "profile",
    label: "حسابي",
    href: "#",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
      </svg>
    ),
  },
];

export default function MobileBottomNav() {
  const [active, setActive] = useState("home");

  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-black/8 pb-[max(env(safe-area-inset-bottom,0px),8px)] pt-2 z-50 shadow-[0_-8px_30px_rgba(0,0,0,0.04)]">
      <div className="max-w-md mx-auto grid grid-cols-5 items-end px-1">
        {tabs.map((tab) =>
          tab.isCenter ? (
            <a
              key={tab.id}
              href={tab.href}
              className="flex flex-col items-center justify-end gap-0.5 relative text-secondary/40"
              onClick={() => setActive(tab.id)}
            >
              <div className="flex flex-col items-center -mt-5">
                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-500 shadow-xl ${
                    active === tab.id ? "bg-brand scale-110" : "bg-brand"
                  } text-white`}
                >
                  {tab.icon}
                </div>
                <span className="text-[10px] font-bold mt-1 text-brand truncate max-w-[60px] text-center">
                  {tab.label}
                </span>
              </div>
            </a>
          ) : (
            <a
              key={tab.id}
              href={tab.href}
              className={`flex flex-col items-center justify-end gap-0.5 relative transition-all duration-300 pb-1 ${
                active === tab.id ? "text-brand" : "text-secondary/40"
              }`}
              onClick={() => setActive(tab.id)}
            >
              <div className={`transition-all duration-300 ${active === tab.id ? "scale-105" : ""}`}>
                {tab.icon}
              </div>
              <span
                className={`text-[10px] font-bold transition-all truncate max-w-[56px] text-center ${
                  active === tab.id ? "text-brand" : "text-secondary/40"
                }`}
              >
                {tab.label}
              </span>
            </a>
          )
        )}
      </div>
    </nav>
  );
}
