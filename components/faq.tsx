"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "How does the pricing model work?",
      answer:
        "ComplyFuse uses a simple pay-per-assessment model at €6 per vendor submission. No fixed licenses, no hidden fees. For a typical 50-vendor program, you'll pay around €300/year instead of €10-15k for traditional solutions.",
    },
    {
      question: "Where is our data stored?",
      answer:
        "All data is stored exclusively in EU data centers with full GDPR compliance. We provide Schrems II-ready Data Processing Agreements and maintain ISO 27001 certification for maximum security.",
    },
    {
      question: "How quickly can we get started?",
      answer:
        "Most teams launch their first assessment within 15 minutes using our self-service wizard. Full onboarding typically takes less than an hour, with no technical setup required.",
    },
    {
      question: "What's the vendor experience like?",
      answer:
        "Vendors receive clean, professional questionnaires in their preferred language (EN/DE/FR/ES/IT). The interface is mobile-friendly and includes progress tracking to improve completion rates.",
    },
    {
      question: "What features are coming next?",
      answer:
        "We're launching an AI Co-Pilot for automated risk scoring and a Template Exchange where compliance teams can share best-practice questionnaires. Both features will be available to early-access users first.",
    },
  ]

  return (
    <section className="bg-gray-50 px-6 py-16 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Frequently Asked Questions</h2>
        </div>
        <div className="mt-16 space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="rounded-lg bg-white shadow-sm">
              <button
                className="flex w-full items-center justify-between p-6 text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
              >
                <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
