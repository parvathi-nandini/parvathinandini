import { Cloud, Code, Database, BarChart, Brain, GitMerge } from "lucide-react";
import { skillCategories } from "../data/portfolio";
import SectionHeader from "./SectionHeader";

const categoryIcons: Record<string, React.ElementType> = {
  "Data Engineering": GitMerge,
  "Cloud & Infrastructure": Cloud,
  "Programming": Code,
  "Databases & Warehouses": Database,
  "Analytics & BI": BarChart,
  "ML & Data Science": Brain,
};

const categoryColors: Record<string, string> = {
  "Data Engineering": "teal",
  "Cloud & Infrastructure": "blue",
  "Programming": "orange",
  "Databases & Warehouses": "cyan",
  "Analytics & BI": "green",
  "ML & Data Science": "rose",
};

const colorClasses: Record<string, { border: string; bg: string; icon: string; badge: string }> = {
  teal: {
    border: "border-teal-500/30",
    bg: "bg-teal-500/10",
    icon: "text-teal-400",
    badge: "bg-teal-500/10 text-teal-400 border-teal-500/20",
  },
  blue: {
    border: "border-blue-500/30",
    bg: "bg-blue-500/10",
    icon: "text-blue-400",
    badge: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  },
  orange: {
    border: "border-orange-500/30",
    bg: "bg-orange-500/10",
    icon: "text-orange-400",
    badge: "bg-orange-500/10 text-orange-400 border-orange-500/20",
  },
  cyan: {
    border: "border-cyan-500/30",
    bg: "bg-cyan-500/10",
    icon: "text-cyan-400",
    badge: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  },
  green: {
    border: "border-green-500/30",
    bg: "bg-green-500/10",
    icon: "text-green-400",
    badge: "bg-green-500/10 text-green-400 border-green-500/20",
  },
  rose: {
    border: "border-rose-500/30",
    bg: "bg-rose-500/10",
    icon: "text-rose-400",
    badge: "bg-rose-500/10 text-rose-400 border-rose-500/20",
  },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-gray-950">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          label="Technical Stack"
          title="Skills & Technologies"
          subtitle="Full-stack data engineering capabilities across the modern data ecosystem"
        />

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat) => {
            const Icon = categoryIcons[cat.category] || Code;
            const color = categoryColors[cat.category] || "teal";
            const classes = colorClasses[color];
            return (
              <div
                key={cat.category}
                className={`bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:${classes.border} transition-all duration-300 group`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-9 h-9 rounded-xl ${classes.bg} flex items-center justify-center`}>
                    <Icon size={18} className={classes.icon} />
                  </div>
                  <h3 className="text-white font-semibold">{cat.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-2.5 py-1 text-xs font-medium rounded-lg border ${classes.badge} transition-all duration-200`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border border-gray-800 rounded-2xl p-8 text-center">
          <div className="text-gray-400 text-sm font-medium tracking-widest uppercase mb-4">Also experienced with</div>
          <div className="flex flex-wrap justify-center gap-3 text-gray-500 text-sm">
            {[
              "Apache Hudi", "Delta Lake", "Iceberg", "Presto", "Trino", "Apache Beam",
              "Databricks", "Snowflake Cortex", "dbt Core", "Fivetran", "Airbyte", "Stitch",
              "Apache NiFi", "Prometheus", "DataDog", "PagerDuty", "Jenkins", "GitHub Actions"
            ].map((tool) => (
              <span key={tool} className="px-3 py-1 bg-gray-800/60 border border-gray-700 rounded-lg hover:text-gray-300 hover:border-gray-600 transition-colors cursor-default">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
