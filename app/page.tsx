import { Hero } from "@/components/hero"
import { PainPoints } from "@/components/pain-points"
import { HowItWorks } from "@/components/how-it-works"
import { QuantifiedWins } from "@/components/quantified-wins"
import { EuRegulations } from "@/components/eu-regulations"
import FeatureDeepDive from "@/components/feature-deep-dive"
import { SocialProof } from "@/components/social-proof"
import { FAQ } from "@/components/faq"
import { SecondaryCTA } from "@/components/secondary-cta"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <PainPoints />
      <HowItWorks />
      <QuantifiedWins />
      <EuRegulations />
      <FeatureDeepDive />
      <SocialProof />
      <FAQ />
      <SecondaryCTA />
      <Footer />
    </main>
  )
}
