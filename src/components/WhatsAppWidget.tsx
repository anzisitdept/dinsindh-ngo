"use client";

import React, { useEffect, useState } from "react";
import { X, MessageCircle, Phone, Send, Clock } from "lucide-react";
import { ORGANIZATION_DATA, CONTACT_LINKS } from "@/lib/data/organization";

const QUICK_MESSAGES = [
  "Assalam-o-Alaikum! I would like to inquire about your programs.",
  "I am interested in becoming a partner / donor.",
  "Can I schedule a visit to your Shikarpur office?",
  "I need a donation receipt for my transfer."
];

export default function WhatsAppWidget() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(true), 1200);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const send = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    window.open(CONTACT_LINKS.whatsapp(trimmed), "_blank", "noopener,noreferrer");
  };

  if (!visible) return null;

  return (
    <>
      {/* Launcher */}
      <div className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-[60] flex flex-col items-end gap-3">
        {open && (
          <div className="flex items-center gap-2 pr-1 animate-in fade-in duration-200">
            <span className="hidden sm:inline text-[11px] font-mono uppercase tracking-widest text-white bg-[#0E1726]/95 border border-[#253754] px-3.5 py-1.5 rounded-full shadow-lg">
              Chat with the Secretariat
            </span>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close WhatsApp widget"
              className="w-9 h-9 flex items-center justify-center bg-[#152238] text-white border border-[#253754] rounded-full shadow-lg hover:bg-rose-600 hover:border-rose-500 transition-all cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        )}

        <a
          href={CONTACT_LINKS.whatsapp()}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => {
            if (window.matchMedia("(min-width: 640px)").matches) {
              e.preventDefault();
              setOpen((v) => !v);
            }
          }}
          aria-label="Chat with DIN Pakistan on WhatsApp"
          className="group flex items-center gap-3.5 px-5 py-3.5 bg-[#25D366] hover:bg-[#1EBE5A] text-white rounded-full shadow-[0_8px_30px_rgba(37,211,102,0.45)] border border-emerald-300/40 transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40 cursor-pointer"
        >
          <span className="relative flex items-center justify-center shrink-0 w-8 h-8 rounded-full bg-white/20">
            <span className="absolute inset-0 rounded-full bg-white/40 animate-ping opacity-60" />
            <MessageCircle className="relative w-5 h-5 text-white fill-white/20" strokeWidth={2.2} />
          </span>
          <span className="text-left leading-tight pr-1">
            <span className="block text-[13px] font-extrabold uppercase tracking-wider drop-shadow-sm">
              {open ? "Close Chat" : "WhatsApp Us"}
            </span>
            <span className="block text-[11px] font-mono opacity-95 text-emerald-100">
              {ORGANIZATION_DATA.headquarters.phonePrimary}
            </span>
          </span>
        </a>
      </div>

      {/* Panel */}
      {open && (
        <div className="fixed inset-0 z-[55] flex items-end sm:items-center sm:justify-center sm:p-6">
          <button
            aria-label="Close chat panel"
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-[#0E1726]/75 backdrop-blur-[2px] cursor-default"
          />

          <div className="relative w-full sm:max-w-md bg-[#FBF9F5] border border-[#253754]/40 shadow-2xl rounded-t-3xl sm:rounded-3xl overflow-hidden flex flex-col max-h-[85vh] sm:max-h-[600px] animate-in slide-in-from-bottom-4 sm:slide-in-from-bottom-0 duration-200">
            {/* Header */}
            <div className="bg-[#152238] text-white border-b-4 border-[#25D366]">
              <div className="flex items-start justify-between gap-3 px-5 py-4">
                <div className="flex items-center gap-3">
                  <span className="w-11 h-11 rounded-full bg-[#25D366] flex items-center justify-center shrink-0 shadow-md">
                    <MessageCircle className="w-6 h-6 text-white" strokeWidth={2.2} />
                  </span>
                  <div>
                    <div className="font-heading font-bold text-base leading-tight">
                      DIN Pakistan Secretariat
                    </div>
                    <div className="text-[11px] text-emerald-300 font-mono flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Usually replies within a few hours
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close WhatsApp widget"
                  className="p-1.5 rounded-full text-neutral-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="px-5 pb-3 text-[11px] text-neutral-400 font-mono flex items-center gap-1.5">
                <Clock className="w-3 h-3 text-amber-400 shrink-0" />
                <span>{ORGANIZATION_DATA.headquarters.workingHours}</span>
              </div>
            </div>

            {/* Body */}
            <div className="flex-1 overflow-y-auto px-5 py-5 space-y-4">
              <div className="flex justify-start">
                <div className="max-w-[88%] bg-white border border-[#E2DDD5] rounded-2xl rounded-tl-sm px-4 py-3 text-xs text-neutral-700 shadow-sm">
                  <p className="font-bold text-[#152238] mb-1">Assalam-o-Alaikum!</p>
                  <p className="leading-relaxed">
                    Thank you for contacting <strong>DIN Pakistan</strong>. Send us your message below
                    and it will open directly in WhatsApp, or call the Secretariat office.
                  </p>
                  <div className="mt-2 pt-2 border-t border-[#E2DDD5] text-[11px] font-mono text-neutral-500">
                    {CONTACT_LINKS.fullAddress}
                  </div>
                </div>
              </div>

              <div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 mb-2">
                  Quick Messages
                </div>
                <div className="space-y-2">
                  {QUICK_MESSAGES.map((q) => (
                    <button
                      key={q}
                      onClick={() => send(q)}
                      className="w-full text-left text-xs px-4 py-3 bg-white border border-[#E2DDD5] rounded-xl text-[#152238] hover:border-[#25D366] hover:bg-emerald-50/80 transition-all cursor-pointer leading-relaxed shadow-sm hover:shadow"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2.5 pt-1">
                <a
                  href={CONTACT_LINKS.phonePrimary}
                  className="flex items-center justify-center gap-2 py-2.5 bg-[#152238] text-white text-[11px] font-bold uppercase tracking-wider rounded-xl hover:bg-[#243656] transition-colors shadow-sm"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>Call Office</span>
                </a>
                <a
                  href={`mailto:${ORGANIZATION_DATA.headquarters.emailGeneral}`}
                  className="flex items-center justify-center gap-2 py-2.5 border border-[#8C241D] text-[#8C241D] text-[11px] font-bold uppercase tracking-wider rounded-xl hover:bg-[#8C241D] hover:text-white transition-colors shadow-sm"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Email Us</span>
                </a>
              </div>
            </div>

            {/* Composer */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                send(message);
              }}
              className="border-t border-[#E2DDD5] bg-white p-3 flex items-center gap-2"
            >
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                aria-label="WhatsApp message"
                className="flex-1 px-4 py-2.5 bg-[#FBF9F5] border border-[#E2DDD5] rounded-full text-xs text-neutral-900 focus:outline-none focus:border-[#25D366] focus:ring-1 focus:ring-[#25D366]"
              />
              <button
                type="submit"
                disabled={!message.trim()}
                aria-label="Send to WhatsApp"
                className="w-10 h-10 flex items-center justify-center bg-[#25D366] text-white rounded-full hover:bg-[#1EBE5A] disabled:bg-neutral-300 disabled:cursor-not-allowed transition-all shadow-md cursor-pointer shrink-0"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
