import { Badge } from "@/components/ui/badge"

export function Footer() {
  return (
    <footer className="bg-gray-900 px-6 py-12 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-white">ComplyFuse</h3>
            <p className="mt-4 text-gray-300">EU-native vendor assessment platform for lean compliance teams.</p>
            <div className="mt-4 flex items-center gap-2">
              <span className="text-2xl">🇪🇺</span>
              <span className="text-sm text-gray-300">Data stored exclusively in the EU</span>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white">Legal</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  DPA
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white">Company</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Security
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-gray-400">© 2024 ComplyFuse. All rights reserved.</p>
            <div className="flex gap-4">
              <Badge variant="outline" className="border-gray-600 text-gray-300">
                GDPR Compliant
              </Badge>
              <Badge variant="outline" className="border-gray-600 text-gray-300">
                ISO 27001
              </Badge>
              <Badge variant="outline" className="border-gray-600 text-gray-300">
                SOC 2 Type II
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
