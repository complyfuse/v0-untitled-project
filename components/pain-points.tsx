import { FileSpreadsheet, RotateCcw, Search } from "lucide-react"

export function PainPoints() {
  const painPoints = [
    {
      icon: FileSpreadsheet,
      text: "Manually tracking 50+ vendors in Excel",
    },
    {
      icon: RotateCcw,
      text: "Chasing answers & evidence by email",
    },
    {
      icon: Search,
      text: "Half-day scramble every time auditors ask for proof",
    },
  ]

  return (
    <section className="bg-gray-50 px-6 py-16 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">The Compliance Headache</h2>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {painPoints.map((point, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-red-100 p-4">
                <point.icon className="h-8 w-8 text-red-600" />
              </div>
              <p className="text-lg font-medium text-gray-900">{point.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
