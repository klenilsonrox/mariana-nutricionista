"use client"

import { motion } from "framer-motion"
import { Apple, Dumbbell, Heart, Utensils } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function Services() {
  const services = [
    {
      icon: <Apple className="h-10 w-10 text-green-500" />,
      title: "Nutrição Clínica",
      description: "Avaliação e acompanhamento nutricional personalizado para melhorar sua saúde e qualidade de vida.",
    },
    {
      icon: <Dumbbell className="h-10 w-10 text-green-500" />,
      title: "Nutrição Esportiva",
      description:
        "Planos alimentares específicos para atletas e praticantes de atividade física, visando melhor desempenho.",
    },
    {
      icon: <Heart className="h-10 w-10 text-green-500" />,
      title: "Emagrecimento Saudável",
      description:
        "Estratégias nutricionais para perda de peso de forma saudável e sustentável, sem dietas restritivas.",
    },
    {
      icon: <Utensils className="h-10 w-10 text-green-500" />,
      title: "Reeducação Alimentar",
      description: "Desenvolvimento de hábitos alimentares saudáveis para uma relação equilibrada com a comida.",
    },
  ]

  return (
    <section id="servicos" className="bg-green-50 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Meus Serviços</h2>
          <div className="mx-auto h-1 w-20 bg-green-500"></div>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Ofereço atendimento personalizado para ajudar você a alcançar seus objetivos de saúde através da
            alimentação.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full transition-all hover:shadow-lg">
                <CardHeader className="flex items-center justify-center pt-6">
                  <div className="mb-4 rounded-full bg-green-100 p-3">{service.icon}</div>
                  <CardTitle className="text-center text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600">{service.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
