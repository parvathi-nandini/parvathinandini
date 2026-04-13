import { Github, Linkedin, Mail, Code2 } from "lucide-react";
import { personalInfo } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-900 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-teal-500 flex items-center justify-center">
            <Code2 size={14} className="text-gray-950" />
          </div>
          <span className="text-white font-bold text-sm">{personalInfo.name}</span>
        </div>

        <p className="text-gray-600 text-xs text-center">
          Senior AI Engineer · Dallas, TX · Open to Relocate
        </p>

        <div className="flex items-center gap-3">
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-lg bg-gray-800 hover:bg-gray-700 border border-gray-700 flex items-center justify-center text-gray-400 hover:text-blue-400 transition-colors"
          >
            <Linkedin size={14} />
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-lg bg-gray-800 hover:bg-gray-700 border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
          >
            <Github size={14} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="w-8 h-8 rounded-lg bg-gray-800 hover:bg-gray-700 border border-gray-700 flex items-center justify-center text-gray-400 hover:text-teal-400 transition-colors"
          >
            <Mail size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}
