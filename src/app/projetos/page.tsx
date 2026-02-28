'use client';

import { Github, ExternalLink, Code2, Layers, Cpu } from 'lucide-react';
import NextImage from 'next/image';
import Link from 'next/link';

export default function Projetos() {
  const projetos = [
    {
      titulo: "Portfólio Profissional v1.0",
      descricao: "Desenvolvimento de um ecossistema digital para centralizar minha trajetória em Gestão Operacional e Engenharia de Software. Focado em performance, SEO e acessibilidade.",
      tech: ["Next.js 16", "Tailwind CSS", "TypeScript", "Lucide Icons"],
      github: "https://github.com/GleysonRibeiro/portfolio",
      demo: "/",
      imagem: "/images/projeto-portfolio.jpg" // Você pode tirar um print do site depois!
    }
  ];

  return (
    <div className="max-w-6xl mx-auto py-12 px-6 space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-white tracking-tighter uppercase">
          Meus <span className="text-blue-500">Projetos</span>
        </h1>
        <p className="text-slate-400 max-w-2xl">
          Uma vitrine das soluções técnicas que desenvolvi, unindo a lógica de programação à eficiência operacional.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projetos.map((proj, index) => (
          <div key={index} className="group relative bg-[#0d1117] border border-slate-800 rounded-3xl overflow-hidden hover:border-blue-500/50 transition-all duration-500">
            
            {/* Preview da Imagem */}
            <div className="relative h-64 w-full bg-slate-900 overflow-hidden">
              <div className="absolute inset-0 bg-blue-600/10 group-hover:bg-transparent transition-colors z-10"></div>
              {/* Fallback caso não tenha a imagem ainda */}
              <div className="flex items-center justify-center h-full text-slate-700">
                <Cpu size={64} className="group-hover:scale-110 group-hover:text-blue-500 transition-all duration-500" />
              </div>
            </div>

            {/* Conteúdo */}
            <div className="p-8 space-y-4">
              <div className="flex justify-between items-start">
                <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">{proj.titulo}</h3>
                <div className="flex gap-3">
                  <Link href={proj.github} target="_blank" className="text-slate-400 hover:text-white transition-colors">
                    <Github size={20} />
                  </Link>
                  <Link href={proj.demo} className="text-slate-400 hover:text-white transition-colors">
                    <ExternalLink size={20} />
                  </Link>
                </div>
              </div>

              <p className="text-slate-400 text-sm leading-relaxed">
                {proj.descricao}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {proj.tech.map(t => (
                  <span key={t} className="px-3 py-1 bg-blue-500/5 border border-blue-500/10 text-blue-400 rounded-md text-[10px] font-bold uppercase tracking-widest">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* Card Placeholder para o Futuro */}
        <div className="border-2 border-dashed border-slate-800 rounded-3xl p-8 flex flex-col items-center justify-center text-center space-y-4 opacity-50 hover:opacity-100 transition-opacity">
          <div className="w-16 h-16 rounded-full bg-slate-900 flex items-center justify-center text-slate-600">
            <Layers size={32} />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">Novo Projeto em breve</h3>
            <p className="text-sm text-slate-500">Desenvolvendo soluções em Python e Bubble.io.</p>
          </div>
        </div>
      </div>
    </div>
  );
}