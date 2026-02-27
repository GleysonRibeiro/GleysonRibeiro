import {Github, Linkedin, MessageCircle} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0a0c10] border-t border-slate-800 py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Coluna 1: Bio Rápida */}
        <div className="space-y-4">
          <div className="font-bold text-white">Gleyson Ribeiro</div>
          <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
            Bacharel em Sistemas de Informação focado em criar soluções escaláveis e gestão operacional eficiente.
          </p>
        </div>

        {/* Coluna 2: Navegação rápida */}
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex flex-col gap-2">
            <span className="text-white font-semibold">Explorar</span>
            <a href="#" className="text-slate-400 hover:text-white">Estudos de Caso</a>
            <a href="#" className="text-slate-400 hover:text-white">Blog</a>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-white font-semibold text-sm uppercase tracking-wider">Conectar</span>
            <a 
              href="https://www.linkedin.com/in/gleyson-barcelos-ribeiro-97046954/"
              target='_blank'
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-400 hover:text-blue-500 transition-colors text-sm"
              >
              <Linkedin size={18} />
              <span>LinkedIn</span>
            </a>
            <a 
              href="https://github.com/GleysonRibeiro" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm"
            >
              <Github size={18} />
              <span>GitHub</span>
            </a>
            <a 
              href="https://wa.me/5522997660134" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-400 hover:text-green-500 transition-colors text-sm"
            >
              <MessageCircle size={18} />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Coluna 3: Contato Direto */}
        <div className="text-sm space-y-2">
          <span className="text-white font-semibold block">Contato</span>
          <p className="text-slate-400 italic">Macaé, Rio de Janeiro</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
        <p>© 2026 Gleyson Ribeiro. Todos os direitos reservados.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition"></a>
          <a href="#" className="hover:text-white transition"></a>
        </div>
      </div>
    </footer>
  );
}