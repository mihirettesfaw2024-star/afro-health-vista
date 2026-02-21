import React from 'react';
import { Target, Lightbulb, TrendingUp, Search } from 'lucide-react';

const Approach = () => {
  const steps = [
    {
      title: "Discovery & Research",
      description: "We start by deeply understanding the public health landscape through rigorous data collection.",
      icon: Search
    },
    {
      title: "Strategic Design",
      description: "We develop agile, evidence-based strategies tailored to specific health outcomes.",
      icon: Target
    },
    {
      title: "Implementation",
      description: "Our experts provide technical assistance and hands-on training to ensure successful execution.",
      icon: Lightbulb
    },
    {
      title: "Continuous Evaluation",
      description: "We use tools like Power BI and STATA to measure impact and refine our approach.",
      icon: TrendingUp
    }
  ];

  return (
    <section id="approach" className="py-24 px-6 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-blue-400 font-['Open_Sans'] font-bold tracking-widest uppercase text-sm">Our Process</span>
          <h2 className="font-['Montserrat'] text-4xl md:text-5xl font-bold mt-4 leading-tight">
            How We Deliver <span className="text-blue-400">Impact</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative group">
                <div className="mb-6 p-4 bg-white/5 rounded-2xl inline-block group-hover:bg-blue-600 transition-colors">
                  <Icon className="w-8 h-8 text-blue-400 group-hover:text-white" />
                </div>
                <h3 className="font-['Montserrat'] text-xl font-bold mb-4">{step.title}</h3>
                <p className="font-['Open_Sans'] text-slate-400 leading-relaxed">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-6 w-12 h-px bg-white/10" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Approach;