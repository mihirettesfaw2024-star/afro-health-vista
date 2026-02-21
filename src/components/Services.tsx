import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Activity, ClipboardList, Database, FileText, Globe, GraduationCap, CheckCircle2 } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "Public Health Research",
      description: "Rigorous data collection and analysis to inform health policies and clinical practices.",
      icon: Database,
      color: "bg-blue-50 text-blue-600"
    },
    {
      title: "SRH & Family Planning",
      description: "Specialized training and program implementation for sexual and reproductive health services.",
      icon: Activity,
      color: "bg-emerald-50 text-emerald-600"
    },
    {
      title: "Digital Health Solutions",
      description: "Implementing HMIS, Kobo Toolbox, and modern health management systems.",
      icon: Globe,
      color: "bg-purple-50 text-purple-600"
    },
    {
      title: "Advanced Data Analytics",
      description: "Statistical modeling and visualization using Power BI and STATA.",
      icon: ClipboardList,
      color: "bg-rose-50 text-rose-600"
    },
    {
      title: "Grant Writing & Strategy",
      description: "Expert assistance in securing funding and developing long-term health strategies.",
      icon: FileText,
      color: "bg-amber-50 text-amber-600"
    },
    {
      title: "Capacity Building",
      description: "Comprehensive training in VCAT, CAC, IPLS and adolescent youth health.",
      icon: GraduationCap,
      color: "bg-indigo-50 text-indigo-600"
    }
  ];

  const expertTrainings = [
    "Sexual and reproductive health services",
    "Family Planning",
    "Cervical cancer",
    "Adolescent and youth health (AYH)",
    "VCAT (Value Clarification and Attitude Transformation)",
    "CAC (Comprehensive Abortion Care)",
    "IPLS (Integrated Pharmaceutical Logistics System)",
    "HMIS (Health Management Information System)",
    "Kobo Toolbox",
    "Power BI",
    "STATA",
    "Grant Writing"
  ];

  return (
    <section id="services" className="py-24 px-6 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-50/30 blur-3xl -z-10 rounded-full translate-x-1/2 -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="inline-block py-1 px-4 rounded-full bg-blue-100 text-blue-700 font-['Open_Sans'] font-bold text-xs uppercase tracking-[0.2em] mb-4">Our Expertise</span>
          <h2 className="font-['Montserrat'] text-4xl md:text-5xl font-extrabold text-slate-900 mt-4 leading-tight">
            Comprehensive <span className="text-blue-600">Consultancy</span> Solutions
          </h2>
          <p className="font-['Open_Sans'] text-slate-500 mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
            Empowering healthcare systems through specialized knowledge, modern technology, and data-driven insights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-24">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="border-none shadow-xl shadow-slate-100/60 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group p-4 rounded-[2rem]">
                <CardHeader>
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:rotate-6 ${service.color}`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <CardTitle className="font-['Montserrat'] text-2xl font-bold text-slate-900 mb-2">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-['Open_Sans'] text-slate-600 leading-relaxed font-medium">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Expert Training Section */}
        <div className="bg-slate-900 rounded-[3rem] p-12 lg:p-20 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 blur-[100px] rounded-full -translate-x-1/2 translate-y-1/2" />
          
          <div className="relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="inline-block py-1 px-4 rounded-full bg-blue-500/20 text-blue-400 font-['Open_Sans'] font-bold text-xs uppercase tracking-[0.2em] mb-4">Professional Development</span>
                <h2 className="font-['Montserrat'] text-3xl md:text-4xl font-extrabold mb-8 leading-tight">
                  Expert Training & <br /> <span className="text-blue-400">Capacity Building</span>
                </h2>
                <p className="font-['Open_Sans'] text-slate-400 text-lg mb-8 leading-relaxed">
                  We provide specialized training programs designed to empower healthcare professionals and organizations with the technical skills needed for modern public health challenges.
                </p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-['Montserrat'] font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-blue-900/40">
                  Request Training Session
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                {expertTrainings.map((training, index) => (
                  <div key={index} className="flex items-center gap-3 group">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="font-['Open_Sans'] text-slate-300 font-medium group-hover:text-white transition-colors">{training}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;