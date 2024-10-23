import Layout from '@/components/Layout';

export default function Contact() {
  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center">
        <div className="max-w-4xl w-full flex flex-col lg:flex-row gap-12">
          {/* Left Side: Contact Form */}
          <div className="lg:w-1/2">
            <h1 className="text-4xl font-bold mb-8">Contact me</h1>
            <form
              action={`mailto:nimonhiya@gmail.com`} // Add mailto action
              method="POST"
              encType="text/plain" // Specifies how the form data should be encoded
              className="space-y-6"
            >
              <div>
                <label className="block mb-2">Name</label>
                <input
                  type="text"
                  name="name" // Added name attribute
                  className="w-full px-4 py-2 bg-slate-800 rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
                  placeholder="Your name"
                  required // Added required attribute
                />
              </div>
              <div>
                <label className="block mb-2">Email</label>
                <input
                  type="email"
                  name="email" // Added name attribute
                  className="w-full px-4 py-2 bg-slate-800 rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
                  placeholder="Your email"
                  required // Added required attribute
                />
              </div>
              <div>
                <label className="block mb-2">Message</label>
                <textarea
                  name="message" // Added name attribute
                  className="w-full px-4 py-2 bg-slate-800 rounded-lg focus:ring-2 focus:ring-red-500 outline-none h-32"
                  placeholder="Your message"
                  required // Added required attribute
                />
              </div>
              <button
                type="submit"
                className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right Side: Contact Information */}
          <div className="lg:w-1/2 space-y-6">
          <h2 className="text-3xl font-bold text-white">❤️</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              If want more information or have any questions, feel free to reach out to me.
            </p>
            <p className="text-lg text-red-500 font-semibold">
              nimonhiya@gmail.com
            </p>
            <p className="text-lg text-red-500 font-semibold">
              081910128608 - Juan
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
