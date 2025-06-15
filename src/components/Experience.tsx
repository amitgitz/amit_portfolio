import React from 'react';
import { Calendar, MapPin, Briefcase, Award, TrendingUp } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "DevOps Engineer",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      location: "Remote",
      type: "Full-time",
      achievements: [
        "Managed Kubernetes clusters across multiple cloud platforms (AWS, GCP, Azure, OVH, Hetzner)",
        "Implemented auto-scaling solutions handling high-traffic workloads with 99.9% uptime",
        "Designed and deployed CI/CD pipelines using Jenkins, GitLab CI, and GitHub Actions",
        "Automated infrastructure provisioning using Terraform and Ansible, reducing deployment time by 60%",
        "Implemented comprehensive monitoring solutions with Prometheus, Grafana, and ELK stack"
      ]
    },
    {
      title: "Junior DevOps Engineer",
      company: "Cloud Innovations Ltd.",
      period: "2022 - 2022",
      location: "Hybrid",
      type: "Full-time",
      achievements: [
        "Containerized legacy applications and deployed them on Kubernetes clusters",
        "Set up monitoring and alerting systems using various cloud-native tools",
        "Collaborated with development teams to implement DevOps best practices",
        "Managed cloud resources across multiple providers including Contabo and Fly.io",
        "Assisted in migration projects from traditional infrastructure to cloud-native solutions"
      ]
    }
  ];

  const certifications = [
    { name: "AWS Certified Solutions Architect", issuer: "Amazon Web Services", year: "2023" },
    { name: "Certified Kubernetes Administrator (CKA)", issuer: "Cloud Native Computing Foundation", year: "2023" },
    { name: "Google Cloud Professional DevOps Engineer", issuer: "Google Cloud", year: "2022" },
    { name: "HashiCorp Certified: Terraform Associate", issuer: "HashiCorp", year: "2022" }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Professional <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 mx-auto rounded-full"></div>
        </div>

        {/* Experience Timeline */}
        <div className="relative mb-20">
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-cyan-400 to-emerald-400"></div>
          
          {experiences.map((exp, index) => (
            <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-cyan-500/30 transition-all duration-300 group">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                        {exp.title}
                      </h3>
                      <h4 className="text-xl text-emerald-400 font-semibold mb-2">{exp.company}</h4>
                      <div className="flex items-center text-gray-400 text-sm space-x-4">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {exp.period}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {exp.location}
                        </div>
                        <div className="flex items-center">
                          <Briefcase className="h-4 w-4 mr-1" />
                          {exp.type}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start text-gray-300">
                        <TrendingUp className="h-4 w-4 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                        <span className="leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full border-4 border-slate-900 flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              
              <div className="hidden md:block w-5/12"></div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
          <div className="flex items-center mb-8">
            <Award className="h-8 w-8 text-yellow-400 mr-4" />
            <h3 className="text-3xl font-bold text-white">Certifications & Training</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-slate-900/50 rounded-xl p-6 border border-slate-600 hover:border-yellow-500/30 transition-all duration-300 group">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="text-lg font-semibold text-white group-hover:text-yellow-400 transition-colors duration-300 mb-2">
                      {cert.name}
                    </h4>
                    <p className="text-gray-400 mb-2">{cert.issuer}</p>
                    <span className="inline-flex items-center px-3 py-1 bg-yellow-500/20 text-yellow-400 text-sm font-medium rounded-full">
                      {cert.year}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;