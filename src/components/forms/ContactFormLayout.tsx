export default function ContactFormLayout() {
  return (
    <div className="max-w-2xl mx-auto px-4">
      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
        <form className="space-y-6">
          {/* TODO: Make functional in Phase 2 */}
          <div>
            <label htmlFor="company" className="block text-sm font-medium mb-2">
              Company Name
            </label>
            <input
              type="text"
              id="company"
              name="company"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              disabled
            />
          </div>
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              disabled
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              disabled
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-2">
              Phone (Optional)
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              disabled
            />
          </div>
          <div>
            <label htmlFor="region" className="block text-sm font-medium mb-2">
              Region
            </label>
            <select
              id="region"
              name="region"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              disabled
            >
              <option>US</option>
              <option>Canada</option>
              <option>EU</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="interest" className="block text-sm font-medium mb-2">
              Product Interest
            </label>
            <select
              id="interest"
              name="interest"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              disabled
            >
              <option>Fresh</option>
              <option>Guac/Pulp</option>
              <option>Oil</option>
              <option>Multiple</option>
            </select>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              disabled
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled
          >
            Submit (Disabled - Placeholder)
          </button>
        </form>
      </div>
    </div>
  )
}

