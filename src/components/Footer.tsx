'use client';
import {Github, Linkedin, MessageCircle, Mail, Phone} from 'lucide-react';
import { useEffect, useState } from 'react';
import data from '@/data/config.json';

export default function Footer() {
  const [year, setYear] = useState<number | string>('...');

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer id="contato" className="bg-[#0a0c10] border-t border-slate-800 py-12 px-4 md:px-8">
      {/* Container Pai com Grid de 12 colunas no Desktop */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
  
        {/* Coluna 1: Bio Rápida (Ocupa 6 de 12 colunas = ~66%) */}
        <div className="md:col-span-6 space-y-4">
          <div className="font-bold text-white text-lg uppercase tracking-tight">{data.perfil.nome}</div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-2xl">
              {data.perfil.resumo}
            </p>
        </div>

        {/* Coluna 2: Conectar (Ocupa 3 de 12 colunas = ~17%) */}
        <div className="md:col-span-3 flex flex-col gap-4">
          <span className="text-white font-semibold text-sm uppercase tracking-wider">Conectar</span>
          <div className="flex flex-col gap-3">
            <a href={data.perfil.linkedin} target='_blank' rel="noopener noreferrer" className="flex items-center gap-2 text-slate-400 hover:text-blue-500 transition-colors text-sm">
              <Linkedin size={18} />
              <span>LinkedIn</span>
            </a>
            <a href={data.perfil.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm">
              <Github size={18} />
              <span>GitHub</span>
            </a>
            <a href={data.perfil.Whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-400 hover:text-green-500 transition-colors text-sm">
              <MessageCircle size={18} />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Coluna 3: Contatos (Ocupa 3 de 12 colunas = ~17%) */}
        <div className="md:col-span-3 text-sm space-y-4">
          <span className="text-white font-semibold text-sm uppercase tracking-wider block">Contatos</span>
          <div className="space-y-3">
            <p className="text-slate-400 italic flex items-center gap-2">
              <Mail size={18} className="shrink-0" />
              <span className="truncate">{data.perfil.email}</span>
            </p>
            <p className="text-slate-400 italic flex items-center gap-2">
              <Phone size={18} className="shrink-0" /> 
              <span>{data.perfil.telefone}</span>
            </p>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
        <p>© 2026 {data.perfil.nome}. Todos os direitos reservados.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition"></a>
          <a href="#" className="hover:text-white transition"></a>
        </div>
      </div>
    </footer>
  );
}