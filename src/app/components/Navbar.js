"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from 'lucide-react'
import { motion } from "framer-motion"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="text-xl font-bold text-green-600">
          Nutricionista Mariana
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden space-x-8 md:flex">
          <NavLink href="#sobre">Sobre</NavLink>
          <NavLink href="#servicos">Serviços</NavLink>
          <NavLink href="#depoimentos">Depoimentos</NavLink>
          <NavLink href="#localizacao">Localização</NavLink>
          <NavLink href="#contato">Contato</NavLink>
        </div>
        
        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isOpen ? <X className="h-6 w-6 text-green-600" /> : <Menu className="h-6 w-6 text-green-600" />}
        </button>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.div 
          className="absolute w-full bg-white py-4 md:hidden"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
        >
          <div className="container mx-auto flex flex-col space-y-4 px-4">
            <MobileNavLink href="#sobre" onClick={() => setIsOpen(false)}>Sobre</MobileNavLink>
            <MobileNavLink href="#servicos" onClick={() => setIsOpen(false)}>Serviços</MobileNavLink>
            <MobileNavLink href="#depoimentos" onClick={() => setIsOpen(false)}>Depoimentos</MobileNavLink>
            <MobileNavLink href="#localizacao" onClick={() => setIsOpen(false)}>Localização</MobileNavLink>
            <MobileNavLink href="#contato" onClick={() => setIsOpen(false)}>Contato</MobileNavLink>
          </div>
        </motion.div>
      )}
    </nav>
  )
}

function NavLink({ href, children }) {
  return (
    <Link 
      href={href} 
      className="text-sm font-medium text-gray-700 transition-colors hover:text-green-600"
    >
      {children}
    </Link>
  )
}

function MobileNavLink({ href, onClick, children }) {
  return (
    <Link 
      href={href} 
      className="block py-2 text-sm font-medium text-gray-700 transition-colors hover:text-green-600"
      onClick={onClick}
    >
      {children}
    </Link>
  )
}
