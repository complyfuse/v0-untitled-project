import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export function SocialProof() {
  const testimonials = [
    {
      quote: "Cut our review time by 80% and eliminated the audit scramble completely.",
      author: "Sarah Chen",
      role: "Compliance Director",
      company: "TechFlow Solutions",
    },
    {
      quote: "Finally, a compliance tool that doesn't require a PhD to operate.",
      author: "Marcus Weber",
      role: "Risk Manager",
      company: "EuroFinance Group",
    },
    {
      quote: "The cost savings alone paid for itself in the first month.",
      author: "Elena Rodriguez",
      role: "Chief Compliance Officer",
      company: "DataSecure Ltd",
    },
  ]

  const logos = ["TechFlow", "EuroFinance", "DataSecure", "CloudVault", "SecureNet", "ComplianceFirst"]

  return (
    <section className="px-6 py-16 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Trusted by Compliance Leaders</h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="mb-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="mb-4 text-gray-900">"{testimonial.quote}"</blockquote>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-sm text-gray-500">{testimonial.company}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16">
          <p className="text-center text-sm text-gray-500 mb-8">Trusted by leading organizations</p>
          <div className="flex flex-wrap justify-center gap-8 opacity-60">
            {logos.map((logo, index) => (
              <div key={index} className="text-2xl font-bold text-gray-400">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
