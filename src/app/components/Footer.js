import Link from "next/link"
import { Instagram, Facebook, MessageSquare } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-green-800 py-12 text-white">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-xl font-bold">Nutricionista Mariana</h3>
            <p className="mb-4 text-green-100">Transformando vidas através da alimentação saudável e consciente.</p>
            <div className="flex space-x-4">
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="h-5 w-5 text-white transition-colors hover:text-green-300" />
              </Link>
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook className="h-5 w-5 text-white transition-colors hover:text-green-300" />
              </Link>
              <Link href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <MessageSquare className="h-5 w-5 text-white transition-colors hover:text-green-300" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-bold">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#sobre" className="text-green-100 transition-colors hover:text-white">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="#servicos" className="text-green-100 transition-colors hover:text-white">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="#depoimentos" className="text-green-100 transition-colors hover:text-white">
                  Depoimentos
                </Link>
              </li>
              <li>
                <Link href="#localizacao" className="text-green-100 transition-colors hover:text-white">
                  Localização
                </Link>
              </li>
              <li>
                <Link href="#contato" className="text-green-100 transition-colors hover:text-white">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-bold">Contato</h3>
            <address className="not-italic">
              <p className="mb-2">Av. Paulista, 1000, Sala 301</p>
              <p className="mb-2">Bela Vista, São Paulo - SP</p>
              <p className="mb-2">Telefone: (11) 99999-9999</p>
              <p>Email: mariana@nutricionista.com</p>
            </address>
          </div>
        </div>

        <div className="mt-8 border-t border-green-700 pt-8 text-center">
          <p className="text-green-100">
            &copy; {new Date().getFullYear()} Nutricionista Mariana. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
