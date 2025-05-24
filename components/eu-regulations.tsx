import { Badge } from "@/components/ui/badge"
import { Shield, CheckCircle } from "lucide-react"

export function EuRegulations() {
  const regulations = ["NIS2 measures mapped", "DORA Annex I baseline", "GDPR Art 28 guarantees", "VSME ESG ready"]

  return (
    <section className="px-6 py-16 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-8 flex justify-center">
          <Shield className="h-12 w-12 text-blue-600" />
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Built for EU Regulations</h2>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {regulations.map((regulation, index) => (
            <Badge key={index} variant="outline" className="border-green-200 bg-green-50 text-green-700 px-4 py-2">
              <CheckCircle className="mr-2 h-4 w-4" />
              {regulation}
            </Badge>
          ))}
        </div>
        <p className="mt-8 text-lg text-gray-600">
          Pre-mapped control libraries keep you current—no more copy-pasting from SIG.
        </p>
      </div>
    </section>
  )
}
