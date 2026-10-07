import React from 'react';

export default function PrivacyPolicyPage() {
  return (
    <section
      aria-label="Privacy Policy"
      className="max-w-4xl mx-auto w-full my-6 px-2 sm:px-4 flex-1"
    >
      {/* Header Title & Date */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-xs font-sans tracking-wide mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-white/70 shrink-0" />
          <span>Legal Documentation</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white tracking-tight mb-2">
          Privacy Policy
        </h1>
        <p className="text-xs sm:text-sm text-white/60 font-sans">
          Last updated: May 13, 2024
        </p>
      </div>

      {/* Scrollable Privacy Content Card */}
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 sm:p-10 shadow-2xl max-h-[70vh] overflow-y-auto text-white/80 text-xs sm:text-sm font-sans leading-relaxed space-y-6 text-left scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
        <p>
          This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
        </p>
        <p>
          We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.
        </p>
        <p>
          Privacy rights depend on Your jurisdiction and the applicability of the relevant law. Moving Our business to Tennessee does not limit rights that may apply to residents of other jurisdictions.
        </p>

        <hr className="border-white/10 my-6" />

        {/* Interpretation and Definitions */}
        <h2 className="text-base sm:text-lg font-medium text-white pt-2">Interpretation and Definitions</h2>

        <h3 className="text-sm font-semibold text-white/90 mt-4">Interpretation</h3>
        <p>
          The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
        </p>

        <h3 className="text-sm font-semibold text-white/90 mt-4">Definitions</h3>
        <p>For the purposes of this Privacy Policy:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong className="text-white">Account</strong> means a unique account created for You to access our Service or parts of our Service.</li>
          <li><strong className="text-white">Affiliate</strong> means an entity that controls, is controlled by or is under common control with a party, where &quot;control&quot; means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.</li>
          <li><strong className="text-white">Business</strong>, for the purpose of CCPA/CPRA, refers to the Company as the legal entity that collects Consumers&apos; personal information...</li>
          <li><strong className="text-white">CCPA and/or CPRA</strong> refers to the California Consumer Privacy Act (the &quot;CCPA&quot;) as amended by the California Privacy Rights Act of 2020 (the &quot;CPRA&quot;).</li>
          <li><strong className="text-white">Company</strong> (referred to as either &quot;the Company&quot;, &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot; in this Agreement) refers to Mind over Media Holding Co, Culver City, CA 90230. For GDPR purposes, the Company is the Data Controller.</li>
          <li><strong className="text-white">Consumer</strong> means a natural person who is a California resident under CCPA/CPRA.</li>
          <li><strong className="text-white">Cookies</strong> are small files placed on Your computer or mobile device by a website.</li>
          <li><strong className="text-white">Country</strong> refers to: California, United States.</li>
          <li><strong className="text-white">Data Controller</strong> refers to the Company as the legal person determining processing purposes under GDPR.</li>
          <li><strong className="text-white">Device</strong> means any device that can access the Service such as a computer, cellphone, or tablet.</li>
          <li><strong className="text-white">Personal Data</strong> is any information that relates to an identified or identifiable individual.</li>
          <li><strong className="text-white">Service</strong> refers to the Website accessible from mindovermedia.ai.</li>
          <li><strong className="text-white">Service Provider</strong> means any natural or legal person processing data on behalf of the Company.</li>
          <li><strong className="text-white">Usage Data</strong> refers to data collected automatically from the Service infrastructure.</li>
          <li><strong className="text-white">You</strong> means the individual or legal entity accessing or using the Service.</li>
        </ul>

        <hr className="border-white/10 my-6" />

        {/* Collecting and Using Your Personal Data */}
        <h2 className="text-base sm:text-lg font-medium text-white pt-2">Collecting and Using Your Personal Data</h2>

        <h3 className="text-sm font-semibold text-white/90 mt-4">Types of Data Collected</h3>
        <p className="font-semibold text-white/90 mt-2">Personal Data</p>
        <p>While using Our Service, We may ask You to provide Us with certain personally identifiable information, including:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Email address</li>
          <li>First name and last name</li>
          <li>Usage Data</li>
        </ul>

        <p className="font-semibold text-white/90 mt-4">Usage Data</p>
        <p>
          Usage Data is collected automatically when using the Service (e.g. IP address, browser type, pages visited, date/time, and unique device identifiers).
        </p>

        <h3 className="text-sm font-semibold text-white/90 mt-4">Tracking Technologies and Cookies</h3>
        <p>
          We use Cookies, Web Beacons, and similar tracking technologies. You can instruct Your browser to refuse all Cookies or indicate when a Cookie is being sent.
        </p>

        <hr className="border-white/10 my-6" />

        {/* Use of Personal Data */}
        <h2 className="text-base sm:text-lg font-medium text-white pt-2">Use of Your Personal Data</h2>
        <p>The Company may use Personal Data for the following purposes:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>To provide and maintain our Service.</li>
          <li>To manage Your Account registration.</li>
          <li>For performance of a contract.</li>
          <li>To contact You via email, calls, SMS, or push notifications.</li>
          <li>To provide news, special offers, and general information.</li>
          <li>For business transfers, data analysis, and service improvements.</li>
        </ul>

        <hr className="border-white/10 my-6" />

        {/* Rights Sections */}
        <h2 className="text-base sm:text-lg font-medium text-white pt-2">GDPR, TIPA &amp; CCPA/CPRA Privacy Rights</h2>
        <p>
          Depending on your jurisdiction (EEA, Tennessee, California), you have specific rights regarding access, deletion, correction, and opt-out of sales or sharing of Personal Data.
        </p>

        <h3 className="text-sm font-semibold text-white/90 mt-4">Exercising Your Rights</h3>
        <p>To exercise any of your privacy rights, please contact us:</p>
        <p className="text-white font-medium">By email: hello@mindovermedia.ai</p>

        <hr className="border-white/10 my-6" />

        {/* Contact Us */}
        <h2 className="text-base sm:text-lg font-medium text-white pt-2">Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, You can contact us:</p>
        <p className="text-[#F2C265] font-medium">Email: hello@mindovermedia.ai</p>
      </div>
    </section>
  );
}
