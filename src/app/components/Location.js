"use client"

import { motion } from "framer-motion"
import { MapPin, Clock, Phone } from "lucide-react"

export function Location() {
  return (
    <section id="localizacao" className="bg-green-50 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Localização</h2>
          <div className="mx-auto h-1 w-20 bg-green-500"></div>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Visite meu consultório para uma consulta presencial ou agende um atendimento online.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center space-y-6"
          >
            <div className="flex items-start space-x-4">
              <MapPin className="mt-1 h-5 w-5 text-green-500" />
              <div>
                <h3 className="text-lg font-medium text-gray-900">Endereço</h3>
                <p className="text-gray-600">Av. Paulista, 1000, Sala 301</p>
                <p className="text-gray-600">Bela Vista, São Paulo - SP</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Clock className="mt-1 h-5 w-5 text-green-500" />
              <div>
                <h3 className="text-lg font-medium text-gray-900">Horário de Atendimento</h3>
                <p className="text-gray-600">Segunda a Sexta: 8h às 18h</p>
                <p className="text-gray-600">Sábado: 8h às 12h</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Phone className="mt-1 h-5 w-5 text-green-500" />
              <div>
                <h3 className="text-lg font-medium text-gray-900">Contato</h3>
                <p className="text-gray-600">Telefone: (11) 99999-9999</p>
                <p className="text-gray-600">Email: mariana@nutricionista.com</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="h-[400px] overflow-hidden rounded-xl"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0976951333286!2d-46.65390548502211!3d-23.563273284682373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1650000000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização do consultório"
              className="h-full w-full"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
