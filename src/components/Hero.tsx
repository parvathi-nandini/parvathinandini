import { Linkedin, FileText, MapPin, ChevronDown, Zap, Database, TrendingUp, DollarSign, Phone } from "lucide-react";
import { personalInfo, stats } from "../data/portfolio";

const statIcons = [Zap, Database, TrendingUp, DollarSign];

export default function Hero() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center pt-16 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-900/20 via-transparent to-transparent" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="grid-pattern absolute inset-0 opacity-[0.03]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-teal-500/10 border border-teal-500/20 rounded-full text-teal-400 text-xs font-medium tracking-widest uppercase mb-8 animate-fade-in">
          <span className="w-1.5 h-1.5 bg-teal-400 rounded-full animate-pulse" />
          Open to Senior AI / Data Engineer Roles
        </div>

        <div className="relative w-28 h-28 mx-auto mb-8 animate-fade-in-up">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-teal-400 to-blue-500 p-0.5">
            <img
              src={personalInfo.photo}
              alt={personalInfo.name}
              className="w-full h-full rounded-full object-cover object-top"
            />
          </div>
          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-teal-500 rounded-full border-2 border-gray-950 flex items-center justify-center">
            <span className="w-2 h-2 bg-gray-950 rounded-full" />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          {personalInfo.name}
        </h1>

        <div className="flex items-center justify-center gap-3 mb-6 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
          <div className="h-px w-12 bg-teal-500/50" />
          <h2 className="text-teal-400 text-xl font-semibold tracking-wide">{personalInfo.title}</h2>
          <div className="h-px w-12 bg-teal-500/50" />
        </div>

        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          {personalInfo.bio}
        </p>

        <div className="flex items-center justify-center gap-2 text-gray-500 text-sm mb-10 animate-fade-in-up" style={{ animationDelay: "0.25s" }}>
          <MapPin size={14} />
          <span>{personalInfo.location}</span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-16 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5"
          >
            <Linkedin size={18} />
            LinkedIn
          </a>
          <a
            href={`tel:${personalInfo.phone}`}
            className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-xl border border-gray-700 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
          >
            <Phone size={18} />
            {personalInfo.phone}
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 px-6 py-3 bg-teal-500 hover:bg-teal-400 text-gray-950 font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-teal-500/25 hover:-translate-y-0.5"
          >
            <FileText size={18} />
            Get In Touch
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          {stats.map((stat, i) => {
            const Icon = statIcons[i];
            return (
              <div
                key={stat.label}
                className="bg-gray-900/60 backdrop-blur border border-gray-800 rounded-2xl p-5 hover:border-teal-500/40 hover:bg-gray-900 transition-all duration-200 group"
              >
                <Icon size={20} className="text-teal-400 mb-3 group-hover:scale-110 transition-transform" />
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-gray-500 text-xs font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>

      <a
        href="#experience"
        className="relative z-10 mt-16 text-gray-600 hover:text-teal-400 transition-colors animate-bounce"
      >
        <ChevronDown size={24} />
      </a>
    </section>
  );
}
