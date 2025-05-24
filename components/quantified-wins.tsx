"use client"

import { useEffect, useState } from "react"
import { Rocket, BarChart3, Euro, FolderOpen } from "lucide-react"

export function QuantifiedWins() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const wins = [
    {
      icon: Rocket,
      title: "15-minute launch",
      description: "vs 2-3 h manual setup",
      metric: "15",
      unit: "min",
    },
    {
      icon: BarChart3,
      title: "Live risk dashboard",
      description: "always-current status & heat-map",
      metric: "80",
      unit: "% less admin",
    },
    {
      icon: Euro,
      title: "Pay-per-assessment",
      description: "≈ €300/yr for 50 vendors (vs €10-15k)",
      metric: "300",
      unit: "€/yr",
    },
    {
      icon: FolderOpen,
      title: "2-click audit pack",
      description: "dossier ready instantly (vs ½-day collation)",
      metric: "2",
      unit: "clicks",
    },
  ]

  return (
    <section className="bg-blue-50 px-6 py-16 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Quantified Wins for Your Team</h2>
          <p className="mt-4 text-xl text-blue-700 font-semibold">
            10 × less admin • 30-50 × lower cost • Zero audit panic
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {wins.map((win, index) => (
            <div key={index} className="rounded-2xl bg-white p-6 shadow-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                <win.icon className="h-6 w-6 text-blue-600" />
              </div>
              <div className="mb-2">
                <span
                  className={`text-4xl font-bold text-blue-600 transition-all duration-1000 ${
                    isVisible ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {win.metric}
                </span>
                <span className="ml-1 text-lg text-blue-500">{win.unit}</span>
              </div>
              <h3 className="mb-2 font-semibold text-gray-900">{win.title}</h3>
              <p className="text-sm text-gray-600">{win.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
