"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Instagram, Facebook, MessageSquare } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to a server
    console.log("Form submitted:", formData)
    alert("Mensagem enviada com sucesso! Entraremos em contato em breve.")
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: ""
    })
  }

  return (
    <section id="contato" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Entre em Contato</h2>
          <div className="mx-auto h-1 w-20 bg-green-500"></div>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Estou aqui para ajudar você a alcançar seus objetivos de saúde. Entre em contato para agendar uma consulta ou tirar dúvidas.
          </p>
        </motion.div>
        
        <div className="grid gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="mb-6 text-2xl font-semibold text-gray-900">Envie uma Mensagem</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome</Label>
                  <Input 
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    placeholder="Seu nome" 
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    placeholder="seu.email@exemplo.com" 
                    required 
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Telefone</Label>
                <Input 
                  id="phone" 
                  name="phone" 
                  value={formData.phone} 
                  onChange={handleChange} 
                  placeholder="(00) 00000-0000" 
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Mensagem</Label>
                <Textarea 
                  id="message" 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  placeholder="Como posso ajudar você?" 
                  rows={4} 
                  required 
                />
              </div>
              
              <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                Enviar Mensagem
              </Button>
            </form>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col justify-center"
          >
            <h3 className="mb-6 text-2xl font-semibold text-gray-900">Redes Sociais</h3>
            
            <div className="space-y-6">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-4 rounded-lg border border-gray-200 p-4 transition-colors hover:bg-green-50"
              >
                <div className="rounded-full bg-pink-100 p-2">
                  <Instagram className="h-6 w-6 text-pink-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Instagram</h4>
                  <p className="text-sm text-gray-600">@nutricionista.mariana</p>
                </div>
              </a>
              
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-4 rounded-lg border border-gray-200 p-4 transition-colors hover:bg-green-50"
              >
                <div className="rounded-full bg-blue-100 p-2">
                  <Facebook className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Facebook</h4>
                  <p className="text-sm text-gray-600">Nutricionista Mariana Silva</p>
                </div>
              </a>
              
              <a 
                href="https://wa.me/5511999999999" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-4 rounded-lg border border-gray-200 p-4 transition-colors hover:bg-green-50"
              >
                <div className="rounded-full bg-green-100 p-2">
                  <MessageSquare className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">WhatsApp</h4>
                  <p className="text-sm text-gray-600">(11) 99999-9999</p>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
