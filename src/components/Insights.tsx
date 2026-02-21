import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Calendar, ArrowUpRight } from 'lucide-react';

const Insights = () => {
  const posts = [
    {
      title: "The Future of Digital Health in East Africa",
      date: "May 12, 2024",
      category: "Innovation",
      image: "https://images.unsplash.com/photo-1576091160607-21314f34658c?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Advancing SRH Services through Data Analytics",
      date: "April 28, 2024",
      category: "Research",
      image: "https://images.unsplash.com/photo-1581056344415-3abb473d758c?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Building Capacity for Adolescent Health Programs",
      date: "April 15, 2024",
      category: "Training",
      image: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section id="insights" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-blue-600 font-['Open_Sans'] font-bold tracking-widest uppercase text-sm">Knowledge Hub</span>
            <h2 className="font-['Montserrat'] text-4xl md:text-5xl font-bold text-slate-900 mt-4 leading-tight">Latest <span className="text-blue-600">Insights</span></h2>
          </div>
          <button className="text-blue-600 font-['Montserrat'] font-bold flex items-center gap-2 group">
            View All Posts <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <Card key={index} className="border-none shadow-lg overflow-hidden group">
              <div className="h-48 overflow-hidden relative">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-['Montserrat'] font-bold text-blue-600 uppercase">
                  {post.category}
                </div>
              </div>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2 text-slate-400 text-sm font-['Open_Sans'] mb-2">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </div>
                <CardTitle className="font-['Montserrat'] text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <button className="text-slate-600 font-['Open_Sans'] font-bold text-sm underline decoration-blue-200 underline-offset-4 hover:decoration-blue-500 transition-all">
                  Read Article
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Insights;