interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle: string;
}

export default function SectionHeader({ label, title, subtitle }: SectionHeaderProps) {
  return (
    <div className="text-center">
      <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-500/10 border border-teal-500/20 rounded-full text-teal-400 text-xs font-medium tracking-widest uppercase mb-4">
        {label}
      </div>
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h2>
      <p className="text-gray-400 text-lg max-w-xl mx-auto">{subtitle}</p>
    </div>
  );
}
