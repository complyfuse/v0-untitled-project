"use client"

import { useActionState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CheckCircle, AlertCircle } from "lucide-react"
import { submitToWaitlist } from "@/app/actions/submit-email"

export function SecondaryCTA() {
  const [state, formAction, isPending] = useActionState(submitToWaitlist, null)

  const scrollToHero = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <section className="bg-blue-600 px-6 py-16 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Ready to regain control of vendor compliance?
        </h2>
        <p className="mt-6 text-xl text-blue-100">
          Join hundreds of compliance teams who've already transformed their vendor management process.
        </p>

        <div className="mt-8">
          {state?.success ? (
            <div className="flex items-center justify-center gap-3 rounded-lg bg-green-100 p-4 text-green-800 max-w-md mx-auto">
              <CheckCircle className="h-6 w-6" />
              <span className="text-lg font-medium">{state.message}</span>
            </div>
          ) : (
            <form action={formAction} className="space-y-4">
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <div className="flex-1 max-w-md">
                  <Input
                    type="email"
                    name="email"
                    placeholder="Enter your work email"
                    required
                    className="h-12 text-lg bg-white"
                    aria-label="Email address"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  variant="secondary"
                  disabled={isPending}
                  className="h-12 bg-white text-blue-600 hover:bg-gray-100 px-8"
                >
                  {isPending ? "Joining..." : "Get Early Access"}
                </Button>
              </div>
              {/* Honeypot field */}
              <input type="text" name="website" className="hidden" tabIndex={-1} />

              {state?.error && (
                <div className="flex items-center justify-center gap-3 rounded-lg bg-red-100 p-3 text-red-800 max-w-md mx-auto">
                  <AlertCircle className="h-5 w-5" />
                  <span>{state.error}</span>
                </div>
              )}
            </form>
          )}
        </div>

        <div className="mt-6">
          <Button variant="ghost" onClick={scrollToHero} className="text-blue-100 hover:text-white hover:bg-blue-700">
            Back to Top
          </Button>
        </div>
      </div>
    </section>
  )
}
