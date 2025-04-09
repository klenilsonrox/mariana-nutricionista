"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-green-50 to-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-6"
          >
            <span className="inline-block rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">
              Nutrição Clínica
            </span>
            <h1 className="text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
              Transforme sua saúde com alimentação consciente
            </h1>
            <p className="text-lg text-gray-600">
              Olá, sou Mariana, nutricionista especializada em ajudar você a alcançar seus objetivos de saúde através de
              uma alimentação equilibrada e personalizada.
            </p>
            <div className="flex flex-col space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Button className="bg-green-600 hover:bg-green-700 cursor-pointer">Agende uma Consulta</Button>
              <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 cursor-pointer">
                Conheça meus Serviços
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mx-auto h-[400px] w-[300px] overflow-hidden rounded-2xl md:h-[500px] md:w-[400px]"
          >
            <Image src="/images/nutri.jpg" alt="Nutricionista Mariana" fill className="object-cover" priority />
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-green-100 opacity-50 blur-3xl"></div>
      <div className="absolute -right-16 top-32 h-64 w-64 rounded-full bg-green-200 opacity-50 blur-3xl"></div>
    </section>
  )
}
