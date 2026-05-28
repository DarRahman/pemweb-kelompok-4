"use client";

import React from 'react';
import Link from 'next/link';
import { ChevronRight, Mail, Code, Layers, Smartphone } from 'lucide-react';

// SVG Icons for Social
const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);
const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const teamMembers = [
  {
    name: "Badar Rahman",
    nim: "14524303",
    role: "@dar.rhmn",
    gradient: "from-orange-400 to-[#ff6700]",
    initials: "BR"
  },
  {
    name: "Khaira Nur Fatihah",
    nim: "14524008",
    role: "@airavwrr",
    gradient: "from-cyan-400 to-[#00bcd4]",
    initials: "KF"
  },
  {
    name: "Nassar Afif",
    nim: "14524020",
    role: "@piplefterios_hwang",
    gradient: "from-emerald-400 to-[#20d087]",
    initials: "NA"
  },
  {
    name: "Teguh Hadi Rachmat",
    nim: "14524212",
    role: "anonimus_43127",
    gradient: "from-indigo-400 to-violet-600",
    initials: "TR"
  },
  {
    name: "Ubaidillah Mubbarok",
    nim: "14524021",
    role: "@ubdlla44",
    gradient: "from-rose-400 to-rose-600",
    initials: "UM"
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#f7f7f7]">
      {/* Hero Section */}
      <div className="bg-white pt-24 pb-16 border-b border-gray-100">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <div className="inline-block bg-[#fff0e5] text-[#ff6700] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
            Proyek Pemrograman Web
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Di Balik Layar <span className="text-[#ff6700]">Kelompok 4</span>
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Kami adalah tim mahasiswa yang berdedikasi untuk menghadirkan pengalaman belanja produk teknologi terbaik melalui platform e-commerce modern yang kami bangun.
          </p>
        </div>
      </div>

      {/* Team Grid */}
      <div className="max-w-[1200px] mx-auto px-6 py-20">
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Anggota Tim</h2>
          <div className="w-12 h-1 bg-[#ff6700] rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group border border-gray-100 flex flex-col">
              <div className={`h-36 bg-gradient-to-br ${member.gradient} flex items-center justify-center relative overflow-hidden shrink-0`}>
                <span className="text-white text-4xl font-extrabold tracking-tight select-none drop-shadow-sm opacity-90 group-hover:scale-110 transition-transform duration-300">
                  {member.initials}
                </span>
                
                {/* Pattern background */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
              </div>
              <div className="p-6 text-center flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-gray-900 text-base mb-1 group-hover:text-[#ff6700] transition-colors line-clamp-1">{member.name}</h3>
                  <p className="text-gray-400 text-xs font-semibold mb-4">{member.nim}</p>
                </div>
                <div className="pt-3 border-t border-gray-50 flex flex-col items-center gap-2">
                  <span className="text-[11px] font-bold text-gray-500 bg-gray-50 border border-gray-100 px-3 py-1 rounded-full group-hover:bg-[#ff6700]/5 group-hover:text-[#ff6700] group-hover:border-[#ff6700]/20 transition-all duration-300">
                    {member.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Stack / Project Info */}
      <div className="max-w-[1200px] mx-auto px-6 pb-24">
        <div className="bg-white rounded-[40px] p-10 md:p-16 shadow-sm border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col gap-4">
              <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-900">
                <Code size={24} />
              </div>
              <h3 className="font-bold text-xl text-gray-900">Teknologi Modern</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Dibangun menggunakan Next.js, Tailwind CSS, dan Prisma untuk performa maksimal dan antarmuka yang responsif.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-900">
                <Layers size={24} />
              </div>
              <h3 className="font-bold text-xl text-gray-900">Arsitektur Bersih</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Implementasi server actions dan database relasional MySQL untuk manajemen data yang aman dan terstruktur.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-900">
                <Smartphone size={24} />
              </div>
              <h3 className="font-bold text-xl text-gray-900">Xiaomi Aesthetic</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Desain visual yang terinspirasi dari filosofi desain minimalis Xiaomi untuk memberikan kesan premium.
              </p>
            </div>
          </div>
          
          <div className="mt-16 pt-12 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <h4 className="font-bold text-gray-900 mb-1">Siap untuk Berbelanja?</h4>
              <p className="text-gray-500 text-sm font-light">Kembali ke beranda dan temukan produk favorit Anda.</p>
            </div>
            <Link href="/" className="inline-flex items-center gap-2 bg-[#ff6700] text-white px-8 py-3 rounded-full font-bold hover:bg-[#e65c00] transition-all hover:shadow-lg hover:shadow-orange-200">
              Mulai Belanja <ChevronRight size={20} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
