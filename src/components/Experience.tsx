import { MapPin, Calendar, CheckCircle2 } from "lucide-react";
import { experiences, education, certifications } from "../data/portfolio";
import SectionHeader from "./SectionHeader";

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-gray-950">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          label="Career Journey"
          title="Work Experience"
          subtitle="7+ years building AI systems and data platforms at enterprise scale"
        />

        <div className="relative mt-16">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-teal-500/50 via-teal-500/20 to-transparent" />

          <div className="flex flex-col gap-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.company}
                className={`relative flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } gap-8 md:gap-0`}
              >
                <div
                  className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full border-2 border-teal-500 bg-gray-950 transform -translate-x-1/2 top-6 z-10"
                  style={{ boxShadow: `0 0 12px ${exp.color}40` }}
                />

                <div
                  className={`md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-16 pl-16 md:pl-0" : "md:pl-16 pl-16"
                  }`}
                >
                  <div className="group bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-gray-700 hover:shadow-2xl transition-all duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-sm"
                          style={{ backgroundColor: exp.color + "20", border: `1px solid ${exp.color}40`, color: exp.color }}
                        >
                          {exp.logo}
                        </div>
                        <div>
                          <h3 className="text-white font-bold text-lg leading-tight">{exp.role}</h3>
                          <div className="font-semibold text-sm" style={{ color: exp.color }}>{exp.company}</div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 text-xs text-gray-500 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={12} />
                        {exp.location}
                      </span>
                    </div>

                    {exp.project && (
                      <div className="text-xs font-medium text-teal-400/80 bg-teal-500/5 border border-teal-500/10 rounded-lg px-3 py-1.5 mb-4 italic">
                        {exp.project}
                      </div>
                    )}

                    <ul className="flex flex-col gap-2.5">
                      {exp.highlights.map((point, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <CheckCircle2 size={14} className="text-teal-500 mt-0.5 shrink-0" />
                          <span className="text-gray-400 text-sm leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-white font-bold text-xl mb-6 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center">
                <span className="text-teal-400 text-sm font-bold">Ed</span>
              </div>
              Education
            </h3>
            <div className="flex flex-col gap-4">
              {education.map((edu) => (
                <div key={edu.degree} className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-gray-700 transition-colors">
                  <div className="text-white font-semibold">{edu.degree}</div>
                  <div className="text-teal-400 text-sm font-medium mt-0.5">{edu.school}</div>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-gray-500 text-xs">{edu.focus}</span>
                    <span className="text-gray-600 text-xs">{edu.period}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-xl mb-6 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center">
                <span className="text-teal-400 text-sm font-bold">Cr</span>
              </div>
              Certifications
            </h3>
            <div className="flex flex-col gap-3">
              {certifications.map((cert) => (
                <div key={cert} className="bg-gray-900 border border-gray-800 rounded-xl p-4 flex items-center gap-3 hover:border-gray-700 transition-colors">
                  <div className="w-2 h-2 rounded-full bg-teal-500 shrink-0" />
                  <span className="text-gray-300 text-sm">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
