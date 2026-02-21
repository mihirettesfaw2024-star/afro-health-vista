import React from 'react';
import { motion } from 'framer-motion';
import { Activity, ShieldCheck, Zap, Globe2, ChevronRight } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-32 px-6 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=2000" 
                alt="Afro Public Health Team"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-blue-600/10 mix-blend-multiply" />
            </div>
            <div className="absolute -bottom-10 -right-10 w-80 h-80 bg-blue-200/50 rounded-full blur-3xl -z-0" />
            
            {/* Trust Badge - Replaced ShieldCheck with AI image */}
            <div className="absolute bottom-10 left-10 bg-white p-6 rounded-3xl shadow-2xl z-20 flex items-center gap-5 border border-slate-100">
              <div className="w-16 h-16 rounded-2xl overflow-hidden">
                <img 
                  src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/973ad496-8470-4dad-8161-1da9cbe993f2/verified-badge-152552cc-1771663179796.webp" 
                  alt="Verified Excellence Badge"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="font-['Montserrat'] font-bold text-slate-900 text-xl">Transparent</div>
                <div className="font-['Open_Sans'] text-slate-500 text-sm font-semibold tracking-tighter">Verified Excellence</div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 space-y-10">
            <div>
              <span className="text-blue-600 font-['Open_Sans'] font-extrabold tracking-[0.2em] uppercase text-xs mb-4 block">Our Purpose</span>
              <h2 className="font-['Montserrat'] text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
                Modern Strategy for <br />
                <span className="text-blue-600">Complex Challenges</span>
              </h2>
            </div>
            
            <p className="font-['Open_Sans'] text-slate-600 text-lg leading-relaxed font-medium">
              Afro Public Health Consultancy is a leading firm providing innovative solutions to public health hurdles. We combine deep technical expertise with an agile, forward-thinking approach.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center text-blue-600">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-['Montserrat'] font-bold text-slate-900 mb-2">Innovative</h4>
                  <p className="font-['Open_Sans'] text-sm text-slate-500 leading-relaxed font-medium">Pioneering digital health and data solutions.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center text-blue-600">
                  <Globe2 className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-['Montserrat'] font-bold text-slate-900 mb-2">Approachable</h4>
                  <p className="font-['Open_Sans'] text-sm text-slate-500 leading-relaxed font-medium">Collaborative partnership with every client.</p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <button className="flex items-center gap-3 font-['Montserrat'] font-bold text-slate-900 group">
                Learn more about our approach
                <div className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                  <ChevronRight className="w-6 h-6" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;