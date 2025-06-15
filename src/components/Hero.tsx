import React from 'react';
import { ChevronDown, Download, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Amit_Choudhary_Resume.pdf';
    link.download = 'Amit_Choudhary_Resume.pdf';
    link.click();
  };

  return (
    <section className="min-h-screen relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="order-1 lg:order-1 flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-gradient-to-r from-cyan-400 to-emerald-400 shadow-2xl bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                <img 
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop" 
                  alt="Amit Choudhary - DevOps Engineer" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to a professional avatar if image fails to load
                    e.currentTarget.src = "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop";
                  }}
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500/20 to-emerald-500/20 blur-xl -z-10"></div>
            </div>
          </div>

          {/* Content */}
          <div className="order-2 lg:order-2 text-center lg:text-left">
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center px-4 py-2 bg-slate-800/50 rounded-full text-cyan-400 text-sm font-medium mb-8 backdrop-blur-sm">
                <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></span>
                Available for DevOps Opportunities
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                  Amit Choudhary
                </span>
                <br />
                <span className="text-3xl md:text-4xl text-gray-300">
                  DevOps Engineer
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl leading-relaxed">
                Passionate DevOps Engineer with <span className="text-cyan-400 font-semibold">2+ years of experience</span> in 
                Kubernetes orchestration, cloud infrastructure automation, and scalable system design across multiple cloud platforms.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-emerald-600 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 group"
                >
                  <Mail className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                  Get In Touch
                </button>
                <button 
                  onClick={downloadResume}
                  className="inline-flex items-center px-8 py-4 bg-slate-800/50 text-white font-semibold rounded-lg hover:bg-slate-700/50 transition-all duration-300 backdrop-blur-sm border border-slate-700 hover:border-cyan-500 group"
                >
                  <Download className="mr-2 h-5 w-5 group-hover:translate-y-1 transition-transform duration-300" />
                  Download Resume
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">2+</div>
                  <div className="text-gray-400">Years Experience</div>
                </div>
                <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <div className="text-3xl font-bold text-emerald-400 mb-2">7+</div>
                  <div className="text-gray-400">Cloud Platforms</div>
                </div>
                <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <div className="text-3xl font-bold text-blue-400 mb-2">50+</div>
                  <div className="text-gray-400">Projects Deployed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white hover:text-cyan-400 transition-colors duration-300 animate-bounce"
      >
        <ChevronDown className="h-8 w-8" />
      </button>
    </section>
  );
};

export default Hero;