import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Database, Users, GraduationCap, ClipboardCheck, Sparkles, Award } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-900">
      {/* Background Image with Overlay - Slightly Brighter than slate-950 */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/973ad496-8470-4dad-8161-1da9cbe993f2/hero-background---experts-researching-3d2c5689-1771662058031.webp"
          alt="Experts conducting research"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-800/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-blue-500/20 text-blue-300 font-['Open_Sans'] text-sm font-bold mb-8 backdrop-blur-md border border-blue-500/30">
            <Sparkles className="w-4 h-4" />
            <span>Redefining Global Health Consulting</span>
          </div>
          <h1 className="font-['Montserrat'] text-5xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-8">
            Advancing Health <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">
              Through Innovation
            </span>
          </h1>
          <p className="font-['Open_Sans'] text-lg lg:text-xl text-slate-300 mb-12 leading-relaxed opacity-90">
            Afro Public Health Consultancy delivers evidence-based research and high-impact training. We empower experts with tools like STATA, Power BI, and modern health methodologies.
          </p>
          
          <div className="flex flex-wrap gap-5 mb-16">
            <button className="px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-['Montserrat'] font-bold transition-all shadow-xl shadow-blue-600/20 flex items-center gap-2 group transform hover:-translate-y-1">
              Explore Services <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-10 py-5 bg-white/5 hover:bg-white/10 text-white border border-white/20 rounded-xl font-['Montserrat'] font-bold transition-all backdrop-blur-md transform hover:-translate-y-1">
              About Our Team
            </button>
          </div>

          <div className="grid grid-cols-3 gap-8 border-t border-white/10 pt-10">
            <div>
              <div className="text-3xl font-['Montserrat'] font-bold text-white mb-1">15+</div>
              <div className="text-sm font-['Open_Sans'] text-slate-400">Core Trainings</div>
            </div>
            <div>
              <div className="text-3xl font-['Montserrat'] font-bold text-white mb-1">50+</div>
              <div className="text-sm font-['Open_Sans'] text-slate-400">Expert Consultants</div>
            </div>
            <div>
              <div className="text-3xl font-['Montserrat'] font-bold text-white mb-1">100%</div>
              <div className="text-sm font-['Open_Sans'] text-slate-400">Data Driven</div>
            </div>
          </div>
        </motion.div>

        {/* Lead Researcher Card - Replaced Curriculum Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hidden lg:block relative"
        >
          <div className="absolute -inset-4 bg-blue-500/20 blur-3xl rounded-full" />
          <div className="relative bg-white/95 backdrop-blur-2xl p-6 rounded-[2.5rem] shadow-2xl border border-white/20">
            <div className="relative overflow-hidden rounded-[2rem] mb-6 aspect-[4/5]">
              <img 
                src="https://storage.googleapis.com/dala-prod-public-storage/attachments/a9628104-cbe8-443d-b77e-e5a2e1eacd33/1771663425323_image.png" 
                alt="Mihiret Tesfaw - Senior Public health Specialist"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-white/50 shadow-lg">
                <div className="text-blue-600 font-['Montserrat'] font-extrabold text-xs uppercase tracking-wider mb-1">Lead Consultant</div>
                <h3 className="font-['Montserrat'] text-xl font-extrabold text-slate-900 leading-tight">Mihiret Tesfaw</h3>
                <p className="font-['Open_Sans'] text-xs text-slate-600 font-bold">Senior Public health Specialist</p>
              </div>
            </div>
            
            <div className="px-2 space-y-4">
              <div className="flex items-center gap-4 p-3 rounded-xl bg-blue-50/50 border border-blue-100/50">
                <div className="p-2 bg-blue-600 rounded-lg text-white">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-['Open_Sans'] text-slate-500 font-bold uppercase tracking-tighter">Verified Expertise</div>
                  <div className="text-sm font-['Montserrat'] font-bold text-slate-900">Certified Public Health Consultant</div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-slate-900 rounded-2xl flex items-center justify-between">
              <div className="flex -space-x-3">
                {[1,2,3].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-slate-800 bg-slate-700 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i+20}`} alt="Expert" />
                  </div>
                ))}
              </div>
              <div className="text-[10px] font-['Montserrat'] font-bold text-slate-400 uppercase tracking-widest">
                Trusted by 500+ Experts
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;