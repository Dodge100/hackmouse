import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Steps } from "@/components/steps"
import { AdditionalContent } from "@/components/additional-content"
import { Requirements } from "@/components/requirements"

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <Hero />
      <Steps />
      <AdditionalContent />
      <Requirements />
    </main>
  )
}
