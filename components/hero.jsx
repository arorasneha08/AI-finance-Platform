"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!imageRef.current) return;

      const scrollY = window.scrollY;

      if (scrollY > 100) {
        imageRef.current.style.transform =
          "scale(0.95) translateY(20px)";
        imageRef.current.style.opacity = "0.9";
      } else {
        imageRef.current.style.transform =
          "scale(1) translateY(0px)";
        imageRef.current.style.opacity = "1";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative pt-32 pb-28 px-6 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
      
      <div className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-indigo-200/40 blur-3xl rounded-full -z-10" />

      <div className="max-w-7xl mx-auto text-center">

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight text-slate-900">
          Smarter Money Decisions <br />
          <span className="bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
            Powered by Artificial Intelligence
          </span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          FinTrack automatically tracks your expenses, scans receipts using AI,
          categorizes transactions, and delivers real-time financial insights —
          so you stay in control of your money effortlessly.
        </p>

        <div className="mt-10 flex justify-center">
          <Link href="/dashboard">
            <Button
              size="lg"
              className="px-10 py-6 text-base font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              Start Managing Smarter
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        {/* IMAGE */}
        <div className="mt-16 relative">
          <div
            ref={imageRef}
            className="rounded-2xl p-3 bg-white/70 backdrop-blur-xl shadow-2xl border border-slate-200 transition-all duration-500 ease-out"
          >
            <Image
              src="/banner.jpeg"
              width={1280}
              height={720}
              alt="FinTrack Dashboard Preview"
              className="rounded-xl"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;