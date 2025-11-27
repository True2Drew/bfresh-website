import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Address Block */}
          <div>
            <h3 className="text-lg font-semibold mb-4">BFresh Avocado Group</h3>
            <p className="text-slate-300 text-sm">
              {/* Placeholder address */}
              Avocado Processing Facility<br />
              Mexico<br />
              {/* Placeholder location details */}
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-slate-300 text-sm space-y-2">
              <span>Email: info@bfresh.com</span><br />
              <span>Phone: +1 (555) 123-4567</span>
            </p>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex flex-col space-y-2 text-sm">
              <a
                href="#"
                className="text-slate-300 hover:text-white transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="#"
                className="text-slate-300 hover:text-white transition-colors"
              >
                Instagram
              </a>
              <a
                href="#"
                className="text-slate-300 hover:text-white transition-colors"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-slate-700 text-center text-sm text-slate-400">
          <p>© {currentYear} BFresh Avocado Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

