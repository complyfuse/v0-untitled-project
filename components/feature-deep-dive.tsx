"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Settings, Database, AlertTriangle, Globe, FileText } from "lucide-react"

export default function FeatureDeepDive() {
  const [activeFeature, setActiveFeature] = useState(0)

  const features = [
    {
      icon: Settings,
      title: "Scoping Wizard",
      description: "Intelligent questionnaire builder that adapts to your industry and risk profile.",
    },
    {
      icon: Database,
      title: "Evidence Vault",
      description: "LLM OCR automatically extracts and links compliance evidence from documents.",
    },
    {
      icon: AlertTriangle,
      title: "High-Risk Alerting",
      description: "Real-time notifications when vendors pose compliance or security risks.",
    },
    {
      icon: Globe,
      title: "Multi-Language Templates",
      description: "Ready-to-use templates in EN/DE/FR/ES/IT for seamless vendor communication.",
    },
    {
      icon: FileText,
      title: "Immutable Audit Log",
      description: "Cryptographically sealed audit trail that meets regulatory requirements.",
    },
  ]

  return (
    <section className="bg-gray-50 px-6 py-16 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Feature Deep Dive</h2>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            {features.map((feature, index) => (
              <Button
                key={index}
                variant={activeFeature === index ? "default" : "outline"}
                className="w-full justify-start p-4 h-auto"
                onClick={() => setActiveFeature(index)}
              >
                {feature.icon && <feature.icon className="mr-3 h-5 w-5" />}
                <span className="font-medium">{feature.title}</span>
              </Button>
            ))}
          </div>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                {(() => {
                  const IconComponent = features[activeFeature].icon
                  return <IconComponent className="h-6 w-6 text-blue-600" />
                })()}
                {features[activeFeature].title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">{features[activeFeature].description}</CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
