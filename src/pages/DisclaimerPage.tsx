export default function DisclaimerPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Disclaimer</h1>

      <div className="bg-white rounded-lg shadow-md p-8 space-y-6 text-gray-700">
        <p className="text-sm text-gray-500">Last Updated: {new Date().toLocaleDateString()}</p>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">General Information</h2>
          <p className="leading-relaxed">
            The information provided on ContentHub is for general informational purposes only. All information on the website is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the website.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">No Professional Advice</h2>
          <p className="leading-relaxed">
            The content on this website should not be considered professional advice. Before taking any action based on the information provided on our website, we recommend consulting with qualified professionals in the relevant field.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">External Links Disclaimer</h2>
          <p className="leading-relaxed">
            Our website may contain links to external websites that are not provided or maintained by ContentHub. We do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Errors and Omissions</h2>
          <p className="leading-relaxed">
            While we strive to keep the information on our website accurate and up-to-date, errors and omissions may occur. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update information at any time without prior notice.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Fair Use Disclaimer</h2>
          <p className="leading-relaxed">
            This website may use copyrighted material for purposes such as criticism, commentary, news reporting, teaching, scholarship, and research. We believe this constitutes fair use of any such copyrighted material. If you wish to use copyrighted material from this website for purposes that go beyond fair use, you must obtain permission from the copyright owner.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Views Expressed</h2>
          <p className="leading-relaxed">
            The views and opinions expressed on this website are those of the authors and do not necessarily reflect the official policy or position of ContentHub. Any content provided by our authors are of their opinion and are not intended to malign any organization, company, individual, or anyone.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">No Warranties</h2>
          <p className="leading-relaxed">
            ContentHub provides the website and its content on an "as is" basis. We make no warranties, expressed or implied, and hereby disclaim all other warranties including, without limitation, implied warranties of merchantability, fitness for a particular purpose, or non-infringement of intellectual property.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Limitation of Liability</h2>
          <p className="leading-relaxed">
            Under no circumstances shall ContentHub be liable for any loss or damage, including but not limited to indirect or consequential loss or damage, arising from the use of this website or reliance on any information provided on the website.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Use at Your Own Risk</h2>
          <p className="leading-relaxed">
            Your use of the website and your reliance on any information on the website is solely at your own risk. We recommend that you independently verify any information before relying on it.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
          <p className="leading-relaxed">
            If you have any questions about this disclaimer, please contact us through our Contact page.
          </p>
        </section>
      </div>
    </div>
  );
}
