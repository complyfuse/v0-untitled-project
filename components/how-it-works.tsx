import { Zap, Database, FileCheck } from "lucide-react"

export function HowItWorks() {
  const features = [
    {
      icon: Zap,
      title: "Rapid Launch",
      description: "Self-service wizard, send first assessment in <15 min.",
    },
    {
      icon: Database,
      title: "Single Source of Truth",
      description: "Evidence vault, immutable audit log, risk heat-map.",
    },
    {
      icon: FileCheck,
      title: "Instant Regulator Dossier",
      description: "Sealed PDF (hash, timestamp, eIDAS) packaged in 2 clicks.",
    },
  ]

  return (
    <section className="px-6 py-16 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            How ComplyFuse Puts You in Control
          </h2>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                <feature.icon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="mb-4 text-xl font-semibold text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
