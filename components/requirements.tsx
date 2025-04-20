import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function Requirements() {
  return (
    <section className="py-16 md:py-24 bg-black border-t border-gray-900">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Project <span className="text-cyan-400">Requirements</span>
          </h2>

          <p className="text-gray-400">
            Before submitting your mouse design, make sure you meet our basic requirements.
          </p>

          <div className="grid gap-6 md:grid-cols-2 mt-8">
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 text-left">
              <h3 className="text-xl font-bold mb-3">Technical Requirements</h3>
              <ul className="text-gray-400 text-sm space-y-2 list-disc pl-5">
                <li>Experience with CAD software</li>
                <li>Design files in STL format</li>
                <li>Technical specifications document</li>
                <li>Bill of materials</li>
              </ul>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 text-left">
              <h3 className="text-xl font-bold mb-3">Design Requirements</h3>
              <ul className="text-gray-400 text-sm space-y-2 list-disc pl-5">
                <li>Dimensions: Max 130mm x 70mm x 40mm</li>
                <li>Weight: Under 120g</li>
                <li>Buttons: Min 2, Max 12</li>
                <li>Sensor: Min 16,000 DPI</li>
              </ul>
            </div>
          </div>

          <div className="mt-8">
            <Link href="/guide">
              <Button className="bg-cyan-600 hover:bg-cyan-700 text-white inline-flex items-center">
                View Complete Guide
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
