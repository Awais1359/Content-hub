export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms & Conditions</h1>

      <div className="bg-white rounded-lg shadow-md p-8 space-y-6 text-gray-700">
        <p className="text-sm text-gray-500">Last Updated: {new Date().toLocaleDateString()}</p>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Agreement to Terms</h2>
          <p className="leading-relaxed">
            By accessing and using ContentHub, you accept and agree to be bound by the terms and conditions of this agreement. If you do not agree to these terms, please do not use our website.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Use of Website</h2>
          <p className="leading-relaxed mb-3">You agree to use our website only for lawful purposes and in a manner that does not:</p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li>Infringe upon the rights of others</li>
            <li>Restrict or inhibit anyone's use of the website</li>
            <li>Violate any applicable laws or regulations</li>
            <li>Transmit any harmful or malicious content</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Intellectual Property</h2>
          <p className="leading-relaxed">
            All content on this website, including text, graphics, logos, and images, is the property of ContentHub and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, or use any content without our express written permission.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">User Content</h2>
          <p className="leading-relaxed">
            If you submit any content to our website (such as comments or contact form submissions), you grant us a non-exclusive, royalty-free license to use, reproduce, and display such content in connection with operating the website.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Disclaimer of Warranties</h2>
          <p className="leading-relaxed">
            Our website is provided "as is" without any warranties, express or implied. We do not warrant that the website will be uninterrupted, error-free, or free of viruses or other harmful components.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Limitation of Liability</h2>
          <p className="leading-relaxed">
            To the maximum extent permitted by law, ContentHub shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the website.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">External Links</h2>
          <p className="leading-relaxed">
            Our website may contain links to external websites. We are not responsible for the content or practices of these external sites and recommend reviewing their terms and privacy policies.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Modifications</h2>
          <p className="leading-relaxed">
            We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Your continued use of the website after changes constitutes acceptance of the modified terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Governing Law</h2>
          <p className="leading-relaxed">
            These terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law provisions.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
          <p className="leading-relaxed">
            If you have any questions about these Terms & Conditions, please contact us through our Contact page.
          </p>
        </section>
      </div>
    </div>
  );
}
