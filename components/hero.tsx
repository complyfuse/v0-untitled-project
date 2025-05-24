"use client"

import { useActionState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Shield, AlertCircle } from "lucide-react"
import { submitToWaitlist } from "@/app/actions/submit-email"

export function Hero() {
  const [state, formAction, isPending] = useActionState(submitToWaitlist, null)

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50 px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Copy */}
          <div className="flex flex-col justify-center">
            <div className="mb-8">
              <Badge variant="outline" className="mb-4 border-blue-200 bg-blue-50 text-blue-700">
                🇪🇺 EU-Native Compliance Platform
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
                Vendor assessments, issued and audited in <span className="text-blue-600">under 15 minutes</span>
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-600 lg:text-2xl">
                ComplyFuse gives EU compliance teams iron-clad evidence for NIS2, DORA & GDPR—without spreadsheets,
                consultants or five-figure licences.
              </p>
            </div>

            {/* Email Capture Form */}
            <div className="mt-8">
              {state?.success ? (
                <div className="flex items-center gap-3 rounded-lg bg-green-50 p-4 text-green-800">
                  <CheckCircle className="h-6 w-6" />
                  <span className="text-lg font-medium">{state.message}</span>
                </div>
              ) : (
                <form action={formAction} className="space-y-4">
                  <div className="flex flex-col gap-4 sm:flex-row">
                    <div className="flex-1">
                      <Input
                        type="email"
                        name="email"
                        placeholder="Enter your work email"
                        required
                        className="h-12 text-lg"
                        aria-label="Email address"
                      />
                    </div>
                    <Button
                      type="submit"
                      size="lg"
                      disabled={isPending}
                      className="h-12 bg-blue-600 px-8 text-lg hover:bg-blue-700"
                    >
                      {isPending ? "Joining..." : "Join the Early-Access Wait-List"}
                    </Button>
                  </div>
                  {/* Honeypot field */}
                  <input type="text" name="website" className="hidden" tabIndex={-1} />

                  {state?.error && (
                    <div className="flex items-center gap-3 rounded-lg bg-red-50 p-3 text-red-800">
                      <AlertCircle className="h-5 w-5" />
                      <span>{state.error}</span>
                    </div>
                  )}
                </form>
              )}
              <p className="mt-3 text-sm text-gray-500">No spam. Unsubscribe anytime. GDPR-compliant.</p>
            </div>
          </div>

          {/* Right Column - Dashboard Mockup */}
          <div className="relative">
            <div className="rounded-2xl bg-white p-6 shadow-2xl ring-1 ring-gray-200">
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">Vendor Assessment Dashboard</h3>
                <Badge className="bg-green-100 text-green-800">
                  <Shield className="mr-1 h-3 w-3" />
                  Audit Dossier Ready
                </Badge>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="rounded-lg bg-blue-50 p-4 text-center">
                  <div className="text-2xl font-bold text-blue-600">23</div>
                  <div className="text-sm text-blue-700">Assigned</div>
                </div>
                <div className="rounded-lg bg-amber-50 p-4 text-center">
                  <div className="text-2xl font-bold text-amber-600">7</div>
                  <div className="text-sm text-amber-700">Overdue</div>
                </div>
                <div className="rounded-lg bg-red-50 p-4 text-center">
                  <div className="text-2xl font-bold text-red-600">3</div>
                  <div className="text-sm text-red-700">High-Risk</div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between rounded-lg border p-3">
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-green-500"></div>
                    <span className="font-medium">CloudTech Solutions</span>
                  </div>
                  <Badge variant="outline" className="text-green-600">
                    Complete
                  </Badge>
                </div>
                <div className="flex items-center justify-between rounded-lg border p-3">
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-amber-500"></div>
                    <span className="font-medium">DataFlow Systems</span>
                  </div>
                  <Badge variant="outline" className="text-amber-600">
                    In Progress
                  </Badge>
                </div>
                <div className="flex items-center justify-between rounded-lg border p-3">
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-red-500"></div>
                    <span className="font-medium">SecureVault Inc</span>
                  </div>
                  <Badge variant="outline" className="text-red-600">
                    High Risk
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
