import React from 'react';
import { Mail, Phone, MapPin, Send, User } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden grid lg:grid-cols-2">
          {/* Contact Information Panel */}
          <div className="p-12 lg:p-16 bg-blue-600 text-white flex flex-col justify-between">
            <div>
              <h2 className="font-['Montserrat'] text-4xl font-bold mb-8">Let's Transform Health Together</h2>
              <p className="font-['Open_Sans'] text-blue-100 text-lg mb-12 leading-relaxed">
                Ready to elevate your healthcare initiatives? Contact us today to discuss how our expert consultancy and training can make a difference.
              </p>
              
              {/* Lead Consultant Card */}
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 mb-12 flex items-center gap-6 border border-white/20">
                <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-lg flex-shrink-0">
                  <img 
                    src="https://storage.googleapis.com/dala-prod-public-storage/attachments/a9628104-cbe8-443d-b77e-e5a2e1eacd33/1771663425323_image.png" 
                    alt="Mihiret Tesfaw - Senior Public health Specialist"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-blue-200 text-xs font-bold uppercase tracking-wider mb-1 flex items-center gap-2">
                    <User className="w-3 h-3" /> Senior Public health Specialist
                  </div>
                  <div className="font-['Montserrat'] font-bold text-xl">Mihiret Tesfaw</div>
                  <div className="font-['Open_Sans'] text-blue-100 text-sm">info@afropublichealth.com</div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-blue-200 text-xs font-bold uppercase tracking-wider mb-1">Email Us</div>
                    <div className="font-['Montserrat'] font-bold">info@afropublichealth.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-blue-200 text-xs font-bold uppercase tracking-wider mb-1">Call Us</div>
                    <div className="font-['Montserrat'] font-bold">+251721910521</div>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-blue-200 text-xs font-bold uppercase tracking-wider mb-1">Visit Us</div>
                    <div className="font-['Montserrat'] font-bold">Addis Ababa, Ethiopia</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Form Panel */}
          <div className="p-12 lg:p-20">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-['Montserrat'] font-bold text-sm text-slate-700">Full Name</label>
                  <input type="text" className="w-full px-5 py-4 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-blue-500 transition-all outline-none font-['Open_Sans']" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="font-['Montserrat'] font-bold text-sm text-slate-700">Email Address</label>
                  <input type="email" className="w-full px-5 py-4 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-blue-500 transition-all outline-none font-['Open_Sans']" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="font-['Montserrat'] font-bold text-sm text-slate-700">Subject</label>
                <input type="text" className="w-full px-5 py-4 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-blue-500 transition-all outline-none font-['Open_Sans']" placeholder="Inquiry about training" />
              </div>
              <div className="space-y-2">
                <label className="font-['Montserrat'] font-bold text-sm text-slate-700">Message</label>
                <textarea rows={4} className="w-full px-5 py-4 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-blue-500 transition-all outline-none font-['Open_Sans'] resize-none" placeholder="Tell us more about your project..."></textarea>
              </div>
              <button className="w-full py-5 bg-blue-600 text-white font-['Montserrat'] font-bold rounded-xl flex items-center justify-center gap-3 hover:bg-blue-700 transition-all shadow-xl shadow-blue-100">
                Send Message <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;