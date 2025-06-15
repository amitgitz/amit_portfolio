import React from 'react';
import { Cloud, Container, Database, GitBranch, Shield, Monitor, Code, Settings } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Cloud Platforms",
      icon: <Cloud className="h-8 w-8 text-cyan-400" />,
      skills: [
        { name: "Amazon Web Services (AWS)", level: 90 },
        { name: "Google Cloud Platform (GCP)", level: 85 },
        { name: "Microsoft Azure", level: 80 },
        { name: "OVH Cloud", level: 75 },
        { name: "Hetzner Cloud", level: 85 },
        { name: "Contabo VPS", level: 80 },
        { name: "Fly.io", level: 70 }
      ]
    },
    {
      title: "Container Orchestration",
      icon: <Container className="h-8 w-8 text-emerald-400" />,
      skills: [
        { name: "Kubernetes", level: 95 },
        { name: "Docker", level: 90 },
        { name: "Helm Charts", level: 85 },
        { name: "Docker Compose", level: 85 },
        { name: "Istio Service Mesh", level: 75 },
        { name: "Rancher", level: 70 }
      ]
    },
    {
      title: "Infrastructure as Code",
      icon: <Code className="h-8 w-8 text-blue-400" />,
      skills: [
        { name: "Terraform", level: 90 },
        { name: "Ansible", level: 85 },
        { name: "CloudFormation", level: 80 },
        { name: "Pulumi", level: 75 },
        { name: "ARM Templates", level: 70 }
      ]
    },
    {
      title: "CI/CD & Version Control",
      icon: <GitBranch className="h-8 w-8 text-purple-400" />,
      skills: [
        { name: "Jenkins", level: 90 },
        { name: "GitLab CI/CD", level: 85 },
        { name: "GitHub Actions", level: 80 },
        { name: "ArgoCD", level: 85 },
        { name: "Git", level: 95 }
      ]
    },
    {
      title: "Monitoring & Observability",
      icon: <Monitor className="h-8 w-8 text-yellow-400" />,
      skills: [
        { name: "Prometheus", level: 85 },
        { name: "Grafana", level: 85 },
        { name: "ELK Stack", level: 80 },
        { name: "Jaeger", level: 75 },
        { name: "New Relic", level: 70 }
      ]
    },
    {
      title: "Security & Compliance",
      icon: <Shield className="h-8 w-8 text-red-400" />,
      skills: [
        { name: "HashiCorp Vault", level: 80 },
        { name: "RBAC", level: 85 },
        { name: "Network Policies", level: 80 },
        { name: "Security Scanning", level: 75 },
        { name: "Compliance Auditing", level: 70 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Technical <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-400 mt-6 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels across various DevOps technologies and platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-cyan-500/30 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-slate-800 rounded-xl mr-4">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-cyan-400 text-sm font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-cyan-500 to-emerald-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 rounded-full border border-cyan-500/30 backdrop-blur-sm">
            <Settings className="h-5 w-5 text-cyan-400 mr-2" />
            <span className="text-white font-medium">Continuously learning and expanding skill set</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;