import { Button } from "@/components/ui/button"

export function AdditionalContent() {
  return (
    <section className="py-16 md:py-24 bg-gray-950">
      <div className="container">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-center">
            Why Choose <span className="text-cyan-400">HackMouse</span>
          </h2>

          <p className="text-gray-400 text-center">
            HackMouse is more than just a grant program. We're building a community of innovators who are passionate
            about creating the next generation of input devices.
          </p>

          <div className="grid gap-6 md:grid-cols-2 mt-8">
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-bold mb-2">Community Access</h3>
              <p className="text-gray-400 text-sm">
                Join our community of designers, engineers, and enthusiasts who share your passion.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-bold mb-2">Market Exposure</h3>
              <p className="text-gray-400 text-sm">
                Showcase your design to the world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
