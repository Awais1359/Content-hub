export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">About Us</h1>

      <div className="bg-white rounded-lg shadow-md p-8 space-y-6">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Who We Are</h2>
          <p className="text-gray-700 leading-relaxed">
            ContentHub is a dedicated platform committed to providing high-quality, original, and valuable content to our readers. We believe in the power of well-researched information and strive to deliver articles that educate, inform, and inspire our audience.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            Our mission is to create a trusted resource where readers can find authentic, thoroughly researched content across various topics. We are committed to maintaining the highest standards of quality and integrity in everything we publish.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">What We Offer</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Original and well-researched articles</li>
            <li>In-depth analysis and insights</li>
            <li>Easy-to-understand content</li>
            <li>Regular updates with fresh content</li>
            <li>Professional and reliable information</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-semibold text-gray-900 mb-2">Quality</h3>
              <p className="text-gray-700">We never compromise on the quality of our content.</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-semibold text-gray-900 mb-2">Authenticity</h3>
              <p className="text-gray-700">All our content is original and properly researched.</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-semibold text-gray-900 mb-2">Reliability</h3>
              <p className="text-gray-700">We provide accurate and trustworthy information.</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-semibold text-gray-900 mb-2">Transparency</h3>
              <p className="text-gray-700">We maintain open communication with our readers.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
          <p className="text-gray-700 leading-relaxed">
            We value feedback from our readers. If you have any questions, suggestions, or would like to get in touch with us, please visit our Contact page.
          </p>
        </section>
      </div>
    </div>
  );
}
