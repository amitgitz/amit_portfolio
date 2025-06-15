import React from 'react';
import { ExternalLink, Github, Server, Cloud, Zap, Shield, Database, Monitor } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Multi-Cloud Kubernetes Platform",
      description: "Designed and implemented a unified Kubernetes platform spanning AWS, GCP, and Azure with automatic failover and load balancing.",
      technologies: ["Kubernetes", "Terraform", "Helm", "Istio", "Prometheus"],
      achievements: [
        "99.99% uptime across all regions",
        "Automatic scaling handling 5M+ requests/day",
        "Cross-cloud disaster recovery"
      ],
      icon: <Cloud className="h-8 w-8 text-cyan-400" />,
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      title: "Infrastructure Automation Pipeline",
      description: "Built comprehensive CI/CD pipeline with infrastructure provisioning, testing, and deployment automation across multiple environments.",
      technologies: ["Jenkins", "Terraform", "Ansible", "Docker", "GitLab CI"],
      achievements: [
        "70% reduction in deployment time",
        "Zero-downtime deployments",
        "Automated rollback capabilities"
      ],
      icon: <Zap className="h-8 w-8 text-emerald-400" />,
      gradient: "from-emerald-500 to-green-500"
    },
    {
      title: "Container Security & Compliance",
      description: "Implemented comprehensive security scanning and compliance framework for containerized applications with automated remediation.",
      technologies: ["Falco", "OPA Gatekeeper", "Vault", "Twistlock", "Helm"],
      achievements: [
        "100% container compliance",
        "Automated vulnerability scanning",
        "Policy-as-code implementation"
      ],
      icon: <Shield className="h-8 w-8 text-purple-400" />,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Observability & Monitoring Stack",
      description: "Deployed comprehensive monitoring solution with custom dashboards, alerting, and distributed tracing across microservices.",
      technologies: ["Prometheus", "Grafana", "Jaeger", "ELK Stack", "AlertManager"],
      achievements: [
        "Real-time monitoring of 100+ services",
        "Custom SLI/SLO dashboards",
        "Intelligent alerting system"
      ],
      icon: <Monitor className="h-8 w-8 text-yellow-400" />,
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      title: "Database Migration & Scaling",
      description: "Orchestrated large-scale database migration to cloud-native solutions with automatic scaling and backup strategies.",
      technologies: ["PostgreSQL", "MongoDB", "Redis", "Kubernetes Operators", "Helm"],
      achievements: [
        "Zero-downtime migration",
        "90% performance improvement",
        "Automated backup & recovery"
      ],
      icon: <Database className="h-8 w-8 text-blue-400" />,
      gradient: "from-blue-500 to-indigo-500"
    },
    {
      title: "Edge Computing Infrastructure",
      description: "Designed and deployed edge computing infrastructure using Fly.io and regional cloud providers for low-latency applications.",
      technologies: ["Fly.io", "Hetzner", "Contabo", "CDN", "Load Balancers"],
      achievements: [
        "50% latency reduction",
        "Global edge deployment",
        "Cost optimization of 35%"
      ],
      icon: <Server className="h-8 w-8 text-red-400" />,
      gradient: "from-red-500 to-rose-500"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-400 mt-6 max-w-3xl mx-auto">
            Here are some of my key projects that showcase my expertise in DevOps, cloud infrastructure, and system automation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700 hover:border-cyan-500/30 transition-all duration-300 group"
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
              
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-slate-800 rounded-xl mr-4 group-hover:bg-slate-700 transition-colors duration-300">
                    {project.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>

                <p className="text-gray-300 leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {project.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-slate-700 text-cyan-400 text-sm font-medium rounded-full border border-slate-600 hover:border-cyan-500 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4">
                  <button className="flex items-center px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors duration-300 group/btn">
                    <Github className="h-4 w-4 mr-2 group-hover/btn:rotate-12 transition-transform duration-300" />
                    View Details
                  </button>
                  <button className="flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600 text-white rounded-lg transition-all duration-300 group/btn">
                    <ExternalLink className="h-4 w-4 mr-2 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                    Live Demo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="inline-flex items-center px-8 py-4 bg-slate-800/50 hover:bg-slate-700/50 text-white font-semibold rounded-lg transition-all duration-300 backdrop-blur-sm border border-slate-700 hover:border-cyan-500 group">
            <Github className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
            View All Projects on GitHub
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;