"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function Testimonials() {
  const testimonials = [
    {
      name: "Ana Oliveira",
      avatar: "AO",
      role: "Perdeu 15kg em 6 meses",
      content:
        "A Mariana mudou completamente minha relação com a comida. Seu método não é baseado em restrições, mas em educação alimentar. Perdi peso de forma saudável e sustentável.",
    },
    {
      name: "Carlos Santos",
      avatar: "CS",
      role: "Atleta amador",
      content:
        "Como corredor, sempre tive dificuldade em manter a energia durante as provas. O plano alimentar da Mariana melhorou meu desempenho e recuperação significativamente.",
    },
    {
      name: "Juliana Costa",
      avatar: "JC",
      role: "Mãe de 2 filhos",
      content:
        "Após a gravidez, não conseguia voltar ao meu peso. A Mariana me ajudou não só a emagrecer, mas a criar hábitos saudáveis para toda a família.",
    },
  ]

  return (
    <section id="depoimentos" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Depoimentos</h2>
          <div className="mx-auto h-1 w-20 bg-green-500"></div>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Veja o que meus clientes têm a dizer sobre os resultados alcançados.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardHeader className="pb-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">"{testimonial.content}"</p>
                </CardContent>
                <CardFooter>
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src={`/placeholder.svg?height=40&width=40&text=${testimonial.avatar}`} />
                      <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">{testimonial.name}</p>
                      <p className="text-xs text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
