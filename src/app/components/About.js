"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { CheckCircle } from 'lucide-react'

export function About() {
  return (
    <section id="sobre" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Sobre Mim</h2>
          <div className="mx-auto h-1 w-20 bg-green-500"></div>
        </motion.div>
        
        <div className="grid gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[400px] overflow-hidden rounded-xl"
          >
            <Image
              src="/images/nutri.jpg"
              alt="Nutricionista Mariana em seu consultório"
              fill
              className="object-cover"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col justify-center space-y-6"
          >
            <h3 className="text-2xl font-semibold text-gray-900">Mariana Silva</h3>
            <p className="text-gray-600">
              Sou nutricionista formada pela Universidade Federal com mais de 5 anos de experiência clínica. 
              Minha paixão é ajudar pessoas a desenvolverem uma relação saudável com a comida, 
              promovendo bem-estar e qualidade de vida através da alimentação consciente.
            </p>
            <p className="text-gray-600">
              Minha abordagem é personalizada e baseada em evidências científicas, 
              respeitando a individualidade e as necessidades específicas de cada pessoa.
            </p>
            
            <div className="grid gap-3 pt-4 sm:grid-cols-2">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-gray-700">Nutrição Clínica</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-gray-700">Emagrecimento Saudável</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-gray-700">Nutrição Esportiva</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-gray-700">Reeducação Alimentar</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
