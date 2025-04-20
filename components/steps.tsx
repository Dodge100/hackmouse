import { ArrowRight, FileCode, Package, Zap } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function Steps() {
  return (
    <section id="steps" className="py-16 md:py-24 bg-gradient-to-b from-black to-gray-950">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
            How It <span className="text-cyan-400">Works</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Three simple steps to get your mouse design funded and manufactured.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <Card key={index} className="bg-gray-900 border-gray-800 hover:border-cyan-900 transition-colors group">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-cyan-950 flex items-center justify-center mb-4 group-hover:bg-cyan-900 transition-colors">
                  {step.icon}
                </div>
                <CardTitle className="text-xl font-bold">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400 text-sm">{step.description}</CardDescription>
                <div className="mt-4 flex items-center text-cyan-400 text-sm font-medium">
                  <span>Learn more</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

const steps = [
  {
    icon: <FileCode className="h-6 w-6 text-cyan-400" />,
    title: "Design Your Mouse",
    description:
      "Create your mouse design using CAD software. Focus on innovation, ergonomics, and functionality. Export your files in the required formats.",
  },
  {
    icon: <Package className="h-6 w-6 text-cyan-400" />,
    title: "Submit Your Files",
    description:
      "Upload your design files, technical specifications, and a brief description of what makes your mouse unique to our platform.",
  },
  {
    icon: <Zap className="h-6 w-6 text-cyan-400" />,
    title: "Receive Your Grant",
    description:
      "If your design is selected, you'll receive a grant to help bring your mouse to life. Our team will guide you through the manufacturing process.",
  },
]
