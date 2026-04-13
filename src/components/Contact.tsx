import { Mail, Github, Linkedin, FileText, MapPin, Phone } from "lucide-react";
import { personalInfo } from "../data/portfolio";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-900/50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-500/10 border border-teal-500/20 rounded-full text-teal-400 text-xs font-medium tracking-widest uppercase mb-4">
            Get In Touch
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Let's Work Together</h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            I'm actively exploring Senior AI Engineer and Staff Data Engineer opportunities. Reach out directly via email, phone, or LinkedIn.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-5">
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-gray-700 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center">
                  <Mail size={18} className="text-teal-400" />
                </div>
                <div>
                  <div className="text-gray-500 text-xs font-medium uppercase tracking-wide">Email</div>
                  <span className="text-white font-medium">{personalInfo.email}</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-gray-700 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                  <Linkedin size={18} className="text-blue-400" />
                </div>
                <div>
                  <div className="text-gray-500 text-xs font-medium uppercase tracking-wide">LinkedIn</div>
                  <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:text-blue-400 transition-colors break-all">
                    Parvathi Nandini Rajanala
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-gray-700 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-gray-800 border border-gray-700 flex items-center justify-center">
                  <Github size={18} className="text-gray-300" />
                </div>
                <div>
                  <div className="text-gray-500 text-xs font-medium uppercase tracking-wide">GitHub</div>
                  <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:text-gray-300 transition-colors">
                    github.com/parvathi-nandini
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-gray-700 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                  <Phone size={18} className="text-green-400" />
                </div>
                <div>
                  <div className="text-gray-500 text-xs font-medium uppercase tracking-wide">Phone</div>
                  <a href={`tel:${personalInfo.phone}`} className="text-white font-medium hover:text-green-400 transition-colors">
                    {personalInfo.phone}
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-gray-700 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-gray-800 border border-gray-700 flex items-center justify-center">
                  <MapPin size={18} className="text-gray-400" />
                </div>
                <div>
                  <div className="text-gray-500 text-xs font-medium uppercase tracking-wide">Location</div>
                  <span className="text-white font-medium">Dallas, TX · Open to Relocate</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
                <span className="text-teal-400 text-sm font-semibold">Available for new roles</span>
              </div>

              <h3 className="text-white font-bold text-2xl mb-3">Ready to Make an Impact</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-8">
                Whether you're scaling an AI platform, modernizing a data infrastructure, or building production-grade agentic systems — I bring 7+ years of hands-on delivery across GCP, Azure, and AWS. Let's connect.
              </p>

              <div className="flex flex-col gap-3">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/20"
                >
                  <Linkedin size={16} />
                  Connect on LinkedIn
                </a>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="flex items-center justify-center gap-2 w-full py-3 bg-gray-800 hover:bg-gray-700 text-white font-bold rounded-xl border border-gray-700 transition-all duration-200"
                >
                  <Phone size={16} />
                  Call Me
                </a>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-800">
              <div className="text-gray-500 text-xs font-medium uppercase tracking-widest mb-3">Preferred Role Types</div>
              <div className="flex flex-wrap gap-2">
                {["Senior AI Engineer", "Staff Data Engineer", "ML Engineer", "AI Platform Lead", "Remote / On-site"].map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-gray-800 border border-gray-700 text-gray-400 text-xs rounded-lg">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-4">
            <a
              href="#"
              className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-xl border border-gray-700 transition-all duration-200 hover:-translate-y-0.5"
            >
              <FileText size={16} />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
