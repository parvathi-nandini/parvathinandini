import { Activity, Cpu, Brain, Cloud, Zap, Shield } from "lucide-react";
import { projects } from "../data/portfolio";
import SectionHeader from "./SectionHeader";
import { useState } from "react";

const iconMap: Record<string, React.ElementType> = {
  cpu: Cpu,
  brain: Brain,
  cloud: Cloud,
  stream: Activity,
  shield: Shield,
  zap: Zap,
};

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);
  const displayed = showAll ? projects : featured;

  return (
    <section id="projects" className="py-24 bg-gray-900/50">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          label="Portfolio"
          title="Featured Projects"
          subtitle="Production-grade AI and data engineering solutions with measurable business impact"
        />

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayed.map((project) => {
            const Icon = iconMap[project.icon] || Activity;
            return (
              <div
                key={project.title}
                className="group relative bg-gray-900 border border-gray-800 rounded-2xl p-6 flex flex-col hover:border-teal-500/40 hover:shadow-2xl hover:shadow-teal-500/5 hover:-translate-y-1 transition-all duration-300"
              >
                {project.featured && (
                  <div className="absolute top-4 right-4 px-2 py-0.5 bg-teal-500/10 border border-teal-500/20 rounded-full text-teal-400 text-xs font-medium">
                    Featured
                  </div>
                )}

                <div className="w-10 h-10 rounded-xl bg-gray-800 border border-gray-700 flex items-center justify-center mb-4 group-hover:bg-teal-500/10 group-hover:border-teal-500/30 transition-colors">
                  <Icon size={18} className="text-gray-400 group-hover:text-teal-400 transition-colors" />
                </div>

                <h3 className="text-white font-bold text-lg mb-2 leading-snug pr-12">{project.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-1">{project.description}</p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.metrics.map((m) => (
                    <span key={m} className="px-2 py-0.5 bg-teal-500/10 text-teal-400 text-xs rounded-full font-medium">
                      {m}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 bg-gray-800 text-gray-400 text-xs rounded-md border border-gray-700">
                      {tag}
                    </span>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

        {!showAll && rest.length > 0 && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll(true)}
              className="px-8 py-3 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-xl border border-gray-700 transition-colors duration-200"
            >
              View All {projects.length} Projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
