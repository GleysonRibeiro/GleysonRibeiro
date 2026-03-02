'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Terminal, Menu, X } from 'lucide-react';
import data from '@/data/config.json';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0c10]/80 backdrop-blur-md border-b border-slate-800">
      <nav className='max-w-7xl mx-auto px-4 md:px-8 h-16 flex justify-between items-center'>
        
        {/* Logo */}
        <Link href="/" className='flex items-center gap-2 group' onClick={() => setIsOpen(false)}>
          <div className='w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white group-hover:bg-blue-500 transition-colors'>
            <Terminal 
              size={20} 
              strokeWidth={2.5} 
              className="text-white group-hover:scale-110 transition-transform duration-300" 
            />
          </div>
          <span className="font-bold text-lg hidden sm:inline-block tracking-tight text-white uppercase">
            {data.perfil.primeiroNome}
            <span className="text-blue-500 ml-1">{data.perfil.sobrenome}</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
          <li>
            <Link href="/projetos" className="hover:text-white transition-colors">Projetos</Link>
          </li>
          <li>
            <Link href="/curriculo" className="hover:text-white transition-colors">Currículo</Link>
          </li>
          <li>
            <a 
              href="#contato" 
              className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-full font-bold transition-all shadow-lg shadow-blue-600/20 active:scale-95"
            >
              Contato
            </a>
          </li>
        </ul>

        {/* Mobile Toggle Button */}
        <button 
          className="md:hidden p-2 text-slate-400 hover:text-white z-50"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`
          fixed inset-0 bg-[#0a0c10] flex flex-col items-center justify-center gap-8 text-xl font-bold transition-all duration-300 md:hidden
          ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'}
        `}>
          <Link href="/projetos" onClick={toggleMenu} className="hover:text-blue-500 transition-colors">Projetos</Link>
          <Link href="/curriculo" onClick={toggleMenu} className="hover:text-blue-500 transition-colors">Currículo</Link>
          <a 
            href="#contato" 
            onClick={toggleMenu}
            className="bg-blue-600 text-white px-8 py-3 rounded-full shadow-lg shadow-blue-600/20"
          >
            Contato
          </a>
        </div>
      </nav>
    </header>
  );
}