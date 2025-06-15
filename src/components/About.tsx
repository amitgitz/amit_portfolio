import React from 'react';
import { Code, Server, Cloud, Shield, Zap, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Server className="h-6 w-6 text-cyan-400" />,
      title: "Infrastructure Automation",
      description: "Expert in automating complex infrastructure deployments and management using Terraform and Ansible"
    },
    {
      icon: <Cloud className="h-6 w-6 text-emerald-400" />,
      title: "Multi-Cloud Expertise",
      description: "Extensive experience across AWS, GCP, Azure, OVH, Hetzner, Contabo, and Fly.io"
    },
    {
      icon: <Code className="h-6 w-6 text-blue-400" />,
      title: "Kubernetes Orchestration",
      description: "Advanced container orchestration and microservices architecture with auto-scaling capabilities"
    },
    {
      icon: <Shield className="h-6 w-6 text-purple-400" />,
      title: "Security & Monitoring",
      description: "Implementing comprehensive monitoring solutions and security best practices"
    },
    {
      icon: <Zap className="h-6 w-6 text-yellow-400" />,
      title: "CI/CD Pipelines",
      description: "Building robust continuous integration and deployment pipelines for faster delivery"
    },
    {
      icon: <Users className="h-6 w-6 text-pink-400" />,
      title: "Team Collaboration",
      description: "Strong collaboration skills with development and operations teams"
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 lg:order-1">
            <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-8 shadow-2xl border border-slate-600">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                I'm a passionate DevOps Engineer with <span className="text-cyan-400 font-semibold">2+ years of hands-on experience</span> in 
                designing, implementing, and managing scalable cloud infrastructure solutions. My expertise spans across 
                multiple cloud platforms including AWS, GCP, Azure, OVH, Hetzner, Contabo, and Fly.io.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                My journey in DevOps has been driven by a love for <span className="text-emerald-400 font-semibold">automation, efficiency, and reliability</span>. 
                I specialize in Kubernetes cluster management, multi-cloud deployments, and building robust CI/CD pipelines 
                that enable teams to deliver software faster and more reliably.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm constantly learning and adapting to new technologies, always seeking innovative solutions to complex 
                infrastructure challenges. My goal is to bridge the gap between development and operations while ensuring 
                <span className="text-blue-400 font-semibold"> security, scalability, and cost-optimization</span>.
              </p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 rounded-2xl p-8 backdrop-blur-sm border border-slate-600">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-400 mb-2">K8s</div>
                    <div className="text-sm text-gray-400">Container Orchestration</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-emerald-400 mb-2">CI/CD</div>
                    <div className="text-sm text-gray-400">Pipeline Automation</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-2">IaC</div>
                    <div className="text-sm text-gray-400">Infrastructure as Code</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-400 mb-2">Multi-Cloud</div>
                    <div className="text-sm text-gray-400">7+ Platforms</div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 rounded-2xl blur-xl -z-10"></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 group hover:transform hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-slate-700 rounded-lg group-hover:bg-slate-600 transition-colors duration-300">
                  {highlight.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{highlight.title}</h3>
              <p className="text-gray-400 leading-relaxed">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;