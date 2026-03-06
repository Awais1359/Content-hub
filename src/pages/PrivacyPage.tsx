export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>

      <div className="bg-white rounded-lg shadow-md p-8 space-y-6 text-gray-700">
        <p className="text-sm text-gray-500">Last Updated: {new Date().toLocaleDateString()}</p>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
          <p className="leading-relaxed">
            At ContentHub, we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information We Collect</h2>
          <p className="leading-relaxed mb-3">We may collect the following types of information:</p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li>Personal information you provide voluntarily through contact forms</li>
            <li>Usage data and analytics to improve our website</li>
            <li>Cookies and similar tracking technologies</li>
            <li>Device and browser information</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Your Information</h2>
          <p className="leading-relaxed mb-3">We use the collected information to:</p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li>Provide and maintain our services</li>
            <li>Respond to your inquiries and requests</li>
            <li>Improve our website and user experience</li>
            <li>Send updates and notifications (with your consent)</li>
            <li>Analyze usage patterns and trends</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Protection</h2>
          <p className="leading-relaxed">
            We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cookies</h2>
          <p className="leading-relaxed">
            Our website may use cookies to enhance your browsing experience. Cookies are small files stored on your device that help us understand how you use our website. You can choose to disable cookies through your browser settings, though this may affect some functionality.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Third-Party Services</h2>
          <p className="leading-relaxed">
            We may use third-party services for analytics and other purposes. These services may have their own privacy policies, and we encourage you to review them.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Rights</h2>
          <p className="leading-relaxed mb-3">You have the right to:</p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your personal information</li>
            <li>Opt-out of marketing communications</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to This Policy</h2>
          <p className="leading-relaxed">
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page with an updated date.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
          <p className="leading-relaxed">
            If you have any questions about this Privacy Policy, please contact us through our Contact page.
          </p>
        </section>
      </div>
    </div>
  );
}
