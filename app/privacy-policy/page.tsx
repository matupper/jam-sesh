"use client";

import { PlateHeader } from "@/components/plate-header";
import { PlateFooter } from "@/components/plate-footer";
import Link from "next/link";
import { ThemedContainer } from "@/components/themed-container";

export default function TermsPage() {
  return (
    <ThemedContainer className="container mx-auto py-[35px] px-4">
      <PlateHeader title="Privacy Policy" />

      {/* Full-width "paper" card with actual Terms content */}
      <div className="mx-auto mt-6 w-full max-w-[1100px] rounded-md bg-white p-8 text-left shadow-sm">
        <h2 className="mb-2 text-xl font-semibold">PRIVACY NOTICE</h2>
        <p>Last updated on March 1, 2025</p><br />
    <p>
    Thank you for choosing to be part of our community at AFOL, Inc., doing
    business as AFOL.com (&quot;AFOL&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). We are committed to 
    protecting your personal information and your right to privacy. If you have any
    questions or concerns about this privacy notice, or our practices with regards
    to your personal information, please contact us at <Link
      href="mailto:contact@afol.com"
      className="text-red-600 no-underline hover:no-underline font-semibold"
    >
      contact@afol.com
    </Link>.
  </p><br />
  <p>
    When you visit our website <Link
      href="https://afol.com"
      className="text-red-600 no-underline hover:no-underline font-semibold"
    >
      https://afol.com
    </Link> (the &quot;Website&quot;), and more
    generally, use any of our services (the &quot;Services&quot;, which include the Website),
    we appreciate that you are trusting us with your personal information. We take
    your privacy very seriously. In this privacy notice, we seek to explain to you
    in the clearest way possible what information we collect, how we use it and what
    rights you have in relation to it. We hope you take some time to read through it
    carefully, as it is important. If there are any terms in this privacy notice
    that you do not agree with, please discontinue use of our Services immediately.
  </p><br />
  <p>
    This privacy notice applies to all information collected through our Services
    (which, as described above, includes our Website), as well as any related
    services, sales, marketing or events.
  </p><br />
  <p>
    Please read this privacy notice carefully as it will help you understand what we
    do with the information that we collect.
  </p><br />

  {/* Add an HR above the TOC */}
  <hr className="my-4 border-gray-300" />

  <h2 id="toc" className="font-semibold">TABLE OF CONTENTS</h2>
  <br />
  <p>
    <a
      href="#section1"
      className="text-red-600 no-underline hover:no-underline font-semibold"
    >
      1. WHAT INFORMATION DO WE COLLECT?
    </a>
  </p>
  <br />
  <p>
    <a
      href="#section2"
      className="text-red-600 no-underline hover:no-underline font-semibold"
    >
      2. HOW DO WE USE YOUR INFORMATION?
    </a>
  </p>
  <br />
  <p>
    <a
      href="#section3"
      className="text-red-600 no-underline hover:no-underline font-semibold"
    >
      3. WILL YOUR INFORMATION BE SHARED WITH ANYONE?
    </a>
  </p>
  <br />
  <p>
    <a
      href="#section4"
      className="text-red-600 no-underline hover:no-underline font-semibold"
    >
      4. WHO WILL YOUR INFORMATION BE SHARED WITH?
    </a>
  </p>
  <br />
  <p>
    <a
      href="#section5"
      className="text-red-600 no-underline hover:no-underline font-semibold"
    >
      5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
    </a>
  </p>
  <br />
  <p>
    <a
      href="#section6"
      className="text-red-600 no-underline hover:no-underline font-semibold"
    >
      6. DO WE USE GOOGLE MAPS?
    </a>
  </p>
  <br />
  <p>
    <a
      href="#section7"
      className="text-red-600 no-underline hover:no-underline font-semibold"
    >
      7. HOW DO WE HANDLE YOUR SOCIAL LOGINS?
    </a>
  </p>
  <br />
  <p>
    <a
      href="#section8"
      className="text-red-600 no-underline hover:no-underline font-semibold"
    >
      8. WHAT IS OUR STANCE ON THIRD-PARTY WEBSITES?
    </a>
  </p>
  <br />
  <p>
    <a
      href="#section9"
      className="text-red-600 no-underline hover:no-underline font-semibold"
    >
      9. HOW LONG DO WE KEEP YOUR INFORMATION?
    </a>
  </p>
  <br />
  <p>
    <a
      href="#section10"
      className="text-red-600 no-underline hover:no-underline font-semibold"
    >
      10. HOW DO WE KEEP YOUR INFORMATION SAFE?
    </a>
  </p>
  <br />
  <p>
    <a
      href="#section11"
      className="text-red-600 no-underline hover:no-underline font-semibold"
    >
      11. DO WE COLLECT INFORMATION FROM MINORS?
    </a>
  </p>
  <br />
  <p>
    <a
      href="#section12"
      className="text-red-600 no-underline hover:no-underline font-semibold"
    >
      12. WHAT ARE YOUR PRIVACY RIGHTS?
    </a>
  </p>
  <br />
  <p>
    <a
      href="#section13"
      className="text-red-600 no-underline hover:no-underline font-semibold"
    >
      13. CONTROLS FOR DO-NOT-TRACK FEATURES
    </a>
  </p>
  <br />
  <p>
    <a
      href="#section14"
      className="text-red-600 no-underline hover:no-underline font-semibold"
    >
      14. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
    </a>
  </p>
  <br />
  <p>
    <a
      href="#section15"
      className="text-red-600 no-underline hover:no-underline font-semibold"
    >
      15. DO WE MAKE UPDATES TO THIS NOTICE?
    </a>
  </p>
  <br />
  <p>
    <a
      href="#section16"
      className="text-red-600 no-underline hover:no-underline font-semibold"
    >
      16. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
    </a>
  </p>
  <br />
  <p>
    <a
      href="#section17"
      className="text-red-600 no-underline hover:no-underline font-semibold"
    >
      17. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?
    </a>
  </p>
  <br />

  {/* Add an HR below the last TOC link */}
  <hr className="my-4 border-gray-300" />

  <h2 id="section1" className="font-semibold">1. WHAT INFORMATION DO WE COLLECT?</h2>
  <br />
  <h3 className="font-semibold">Personal information you disclose to us.</h3>
  <br />
  <p>
    <strong>In Short:</strong> We collect information that you provide to us.
  </p>
  <br />
  <p>
    We collect personal information that you voluntarily provide to us when you
    register on the Website, express an interest in obtaining information about us
    or our products and Services, when you participate in activities on the Website
    (such as by posting messages in our online forums or entering competitions,
    contests or giveaways) or otherwise when you contact us.
  </p>
  <br />
  <p>
    The personal information that we collect depends on the context of your
    interactions with us and the Website, the choices you make and the products and
    features you use. The personal information we collect may include the following:
  </p>
  <br />
  <p>
    <strong>Personal Information Provided by You.</strong> We collect names; phone
    numbers; email addresses; mailing addresses; job titles; usernames; contact
    preferences; contact or authentication data; billing addresses; and other
    similar information.
  </p>
  <br />
  <p>
    <strong>Payment Data.</strong> We may collect data necessary to process your
    payment if you make purchases, such as your payment instrument number (such as a
    credit card number), and the security code associated with your payment
    instrument. All payment data is stored by ChargeBee. You may find their privacy
    notice link(s) here: https://stripe.com/privacy.
  </p>
  <br />
  <p>
    <strong>Social Media Login Data.</strong> We may provide you with the option to
    register with us using your existing social media account details, like your
    Facebook, Twitter or other social media account. If you choose to register in
    this way, we will collect the information described in the section called &quot;
    HOW DO WE HANDLE YOUR SOCIAL LOGINS&quot; below.
  </p>
  <br />
  <p>
    All personal information that you provide to us must be true, complete and
    accurate, and you must notify us of any changes to such personal information.
  </p>
  <br />

  <h3 className="font-semibold">Information automatically collected</h3>
  <br />
  <p>
    <strong>In Short:</strong> Some information — such as your Internet Protocol
    (IP) address and/or browser and device characteristics — is collected
    automatically when you visit our Website.
  </p>
  <br />
  <p>
    We automatically collect certain information when you visit, use or navigate
    the Website. This information does not reveal your specific identity (like your
    name or contact information) but may include device and usage information, such
    as your IP address, browser and device characteristics, operating system,
    language preferences, referring URLs, device name, country, location,
    information about who and when you use our Website and other technical
    information. This information is primarily needed to maintain the security and
    operation of our Website, and for our internal analytics and reporting purposes.
  </p>
  <br />
  <p>
    Like many businesses, we also collect information through cookies and similar
    technologies.
  </p>
  <br />
  <p>
    The information we collect includes:
  </p>
  <br />
  <p>
    <strong>Log and Usage Data.</strong> Log and usage data is service-related,
    diagnostic usage and performance information our servers automatically collect
    when you access or use our Website and which we record in log files. Depending
    on how you interact with us, this log data may include your IP address, device
    information, browser type and settings and information about your activity in
    the Website (such as the date/time stamps associated with your usage, pages and
    files viewed, searches and other actions you take such as which features you
    use), device event information (such as system activity, error reports (sometimes
    called &quot;crash dumps&quot;) and hardware settings).
  </p>
  <br />
  <p>
    <strong>Device Data.</strong> We collect device data such as information about
    your computer, phone, tablet or other device you use to access the Website.
    Depending on the device used, this device data may include information such as
    your IP address (or proxy server), device application identification numbers,
    location, browser type, hardware model Internet service provider and/or mobile
    carrier, operating system configuration information.
  </p>
  <br />
  <p>
    <strong>Location Data.</strong> We collect information data such as information
    about your device&apos;s location, which can be either precise or imprecise. How much
    information we collect depends on the type of settings of the device you use to
    access the Website. For example, we may use GPS and other technologies to
    collect geolocation data that tells us your current location (based on your IP
    address). You can opt out of allowing us to collect this information either by
    refusing access to the information or by disabling your Locations settings on
    your device. Note however, if you choose to opt out, you may not be able to use
    certain aspects of the Services.
  </p>
  <br />

  <h3 className="font-semibold">Information collected from other sources</h3>
  <br />
  <p>
    <strong>In Short:</strong> We may collect limited data from public databases,
    marketing partners, social media platforms, and other outside sources.
  </p>
  <br />
  <p>
    In order to enhance our ability to provide relevant marketing, offers and
    services to you and update our records, we may obtain information about you from
    other sources, such as public databases, joint marketing partners, affiliate
    programs, data providers, social media platforms, as well as from other third
    parties. This information includes mailing addresses, job titles, email
    addresses, phone numbers, intent data (or user behavior data), Internet Protocol
    (IP) addresses, social media profiles, social media URLs and custom profiles,
    for purposes of targeted advertising and event promotion. If you interact with
    us on a social media platform using your social media account (e.g. Facebook or
    Twitter), we receive personal information about you such as your name, email
    address, and gender. Any personal information that we collect from your social
    media account depends on your social media account&apos;s privacy settings.
  </p>
  <br />
  <p>
    <a
      href="#toc"
      className="inline-block bg-gray-100 hover:bg-gray-200 text-gray-600 px-3 py-1 rounded 
                 no-underline hover:no-underline text-sm"
    >
      TOC ^
    </a>
  </p>
  <hr className="my-4 border-gray-300" />
  <br />

  <h2 id="section2" className="font-semibold">2. HOW DO WE USE YOUR INFORMATION?</h2>
  <br />
  <p>
    <strong>In Short:</strong> We process your information for purposes based on
    legitimate business interests, the fulfillment of our contract with you,
    compliance with our legal obligations, and/or your consent.
  </p>
  <br />
  <p>
    We use personal information collected via our Website for a variety of business
    purposes described below. We process your personal information for these
    purposes in reliance on our legitimate business interests, in order to enter
    into or perform a contract with you, with your consent, and/or for compliance
    with our legal obligations. We indicate the specific processing grounds we rely
    on next to each purpose listed below.
  </p>
  <br />
  <p>
    We use the information we collect or receive:
  </p>
  <br />
  <p>
    <strong>To facilitate account creation and logon process.</strong> If you choose
    to link your account with us to a third-party account (such as your Google or
    Facebook account), we use the information you allowed us to collect from those
    third parties to facilitate account creation and logon process for the
    performance of the contract. See the section below headed &quot;HOW DO WE HANDLE YOUR
    SOCIAL LOGINS&quot; for further information.
  </p>
  <br />
  <p>
    <strong>To post testimonials.</strong> We post testimonials on our Website that
    may contain personal information. Prior to posting a testimonial, we will obtain
    your consent to use your name and the content of the testimonial. If you wish to
    update or delete your testimonial, please contact us at contact@marjin.co and be
    sure to include your name, testimonial location, and contact information.
  </p>
  <br />
  <p>
    <strong>Request feedback.</strong> We may use your information to request
    feedback and to contact you about your use of our Website.
  </p>
  <br />
  <p>
    <strong>To enable user-to-user communications.</strong> We may use your
    information in order to enable user-to-user communications with each user&apos;s
    consent.
  </p>
  <br />
  <p>
    <strong>To manage user accounts.</strong> We may use your information for the
    purposes of managing our account and keeping it in working order.
  </p>
  <br />
  <p>
    <strong>To send administrative information to you.</strong> We may use your
    personal information to send you product, service and new feature information
    and/or information about changes to our terms, conditions, and policies.
  </p>
  <br />
  <p>
    <strong>To protect our Services.</strong> We may use your information as part of
    our efforts to keep our Website safe and secure (for example, for fraud
    monitoring and prevention).
  </p>
  <br />
  <p>
    <strong>
      To enforce our terms, conditions and policies for business purposes, to comply
      with legal and regulatory requirements or in connection with our contract.
    </strong>
  </p>
  <br />
  <p>
    <strong>To respond to legal requests and prevent harm.</strong> If we receive a
    subpoena or other legal request, we may need to inspect the data we hold to
    determine how to respond.
  </p>
  <br />
  <p>
    <strong>Fulfill and manage your orders.</strong> We may use your information to
    fulfill and manage your orders, payments, returns, and exchanges made through
    the Website.
  </p>
  <br />
  <p>
    <strong>Administer prize draws and competitions.</strong> We may use your
    information to administer prize draws and competitions when you elect to
    participate in our competitions.
  </p>
  <br />
  <p>
    <strong>To deliver and facilitate delivery of services to the user.</strong> We
    may use your information to provide you with the requested service.
  </p>
  <br />
  <p>
    <strong>To respond to user inquiries/offer support to users.</strong> We may use
    your information to respond to your inquiries and solve any potential issues you
    might have with the use of our Services.
  </p>
  <br />
  <p>
    <strong>To send you marketing and promotional communications.</strong> We and/or
    our third-party marketing partners may use the personal information you send to
    us for our marketing purposes, if this is in accordance with your marketing
    preferences. For example, when expressing an interest in obtaining information
    about us or our Website, subscribing to marketing or otherwise contacting us, we
    will collect personal information from you. You can opt-out of our marketing
    emails at any time (see the &quot;WHAT ARE YOUR PRIVACY RIGHTS&quot; below).
  </p>
  <br />
  <p>
    <strong>Deliver targeted advertising to you.</strong> We may use your
    information to develop and display personalized content and advertising (and
    work with third parties who do so) tailored to your interests and/or location
    and to measure its effectiveness.
  </p>
  <br />
  <p>
    <strong>For other business purposes.</strong> We may use your information for
    other business purposes, such as data analysis, identifying usage trends,
    determining the effectiveness of our promotional campaigns and to evaluate and
    improve our Website, products, marketing and your experience. We may use and
    store this information in aggregated and anonymized form so that it is not
    associated with individual end users and does not include personal information.
    We will not use identifiable personal information without your consent.
  </p>
  <br />
  <p>
    <a
      href="#toc"
      className="inline-block bg-gray-100 hover:bg-gray-200 text-gray-600 px-3 py-1 rounded 
                 no-underline hover:no-underline text-sm"
    >
      TOC ^
    </a>
  </p>
  <hr className="my-4 border-gray-300" />
  <br />

  <h2 id="section3" className="font-semibold">3. WILL YOUR INFORMATION BE SHARED WITH ANYONE?</h2>
  <br />
  <p>
    <strong>In Short:</strong> We only share information with your consent, to
    comply with laws, to provide you with services, to protect your rights, or to
    fulfill business obligations.
  </p>
  <br />
  <p>
    We may process or share your data that we hold based on the following legal
    basis:
  </p>
  <br />
  <p>
    <strong>Consent:</strong> We may process your data if you have given us specific
    consent to use your personal information in a specific purpose.
  </p>
  <br />
  <p>
    <strong>Legitimate Interests:</strong> We may process your data when it is
    reasonably necessary to achieve our legitimate business interests.
  </p>
  <br />
  <p>
    <strong>Performance of a Contract:</strong> Where we have entered into a
    contract with you, we may process your personal information to fulfill the terms
    of our contract.
  </p>
  <br />
  <p>
    <strong>Legal Obligations:</strong> We may disclose your information where we
    are legally required to do so in order to comply with applicable law,
    governmental requests, a judicial proceeding, court order, or legal process,
    such as in response to a court order or a subpoena (including in response to
    public authorities to meet national security or law enforcement requirements).
  </p>
  <br />
  <p>
    <strong>Vital Interests:</strong> We may disclose your information where we
    believe it is necessary to investigate, prevent, or take action regarding
    potential violations of our policies, suspected fraud, situations involving
    potential threats to the safety of any person and illegal activities, or as
    evidence in litigation in which we are involved.
  </p>
  <br />
  <p>
    More specifically, we may need to process your data or share your personal
    information in the following situations:
  </p>
  <br />
  <p>
    <strong>Business Transfers.</strong> We may share or transfer your information
    in connection with, or during negotiations of, any merger, sale of company
    assets, financing, or acquisition of all or a portion of our business to another
    company.
  </p>
  <br />
  <p>
    <strong>Vendors, Consultants and Other Third-Party Service Providers.</strong>
    We may share your data with third-party vendors, service providers, contractors
    or agents who perform services for us or on our behalf and require access to
    such information to do that work. Examples include: payment processing, data
    analysis, email delivery, hosting services, customer service and marketing
    efforts. We may allow selected third parties to use tracking technology on the
    Website, which will enable them to collect data on our behalf about how you
    interact with our Website over time. This information may be used to, among
    other things, analyze and track data, determine the popularity of certain
    content, pages or features, and better understand online activity. Unless
    described in this notice, we do not share, sell, rent or trade any of your
    information with third parties for their promotional purposes.
  </p>
  <br />
  <p>
    <a
      href="#toc"
      className="inline-block bg-gray-100 hover:bg-gray-200 text-gray-600 px-3 py-1 rounded 
                 no-underline hover:no-underline text-sm"
    >
      TOC ^
    </a>
  </p>
  <hr className="my-4 border-gray-300" />
  <br />

  <h2 id="section4" className="font-semibold">4. WHO WILL YOUR INFORMATION BE SHARED WITH?</h2>
  <br />
  <p>
    <strong>In Short:</strong> We only share information with the following third
    parties.
  </p>
  <br />
  <p>
    We only share and disclose your information with the following third parties. We
    have categorized each party so that you may easily understand the purpose of our
    data collection and processing practices. If we have processed your data based
    on your consent and you wish to revoke your consent, please contact us using the
    contact details provided in the section below titled &quot;HOW CAN YOU CONTACT US
    ABOUT THIS NOTICE?&quot;.
  </p>
  <br />
  <p>
    <strong>Advertising, Direct Marketing, and Lead Generation:</strong><br />
    Google AdSense, Crisp Chat, Smartlook, DoubleClick for Publishers, Salesforce
    Sales Cloud and Salesforce Marketing Cloud
  </p>
  <br />
  <p>
    <strong>Allow Users to Connect to Their Third-Party Accounts:</strong><br />
    Google account and Stripe account
  </p>
  <br />
  <p>
    <strong>Cloud Computing Services:</strong><br />
    Amazon Web Services (AWS), Google Cloud Platform, DigitalOcean
  </p>
  <br />
  <p>
    <strong>Content Optimization:</strong><br />
    Google Fonts, Google Site Search, Gravatar and Google Calendar widget
  </p>
  <br />
  <p>
    <strong>Data Backup and Security:</strong><br />
    Amazon Glacier and Google Drive Backup
  </p>
  <br />
  <p>
    <strong>Functionality and Infrastructure Optimization:</strong><br />
    Amazon Web Services, DigitalOcean and Termly.io
  </p>
  <br />
  <p>
    <strong>Invoice and Billing:</strong><br />
    Stripe
  </p>
  <br />
  <p>
    <strong>Retargeting Platforms:</strong><br />
    Google Ads Remarketing, Google Analytics Remarketing, LinkedIn Website
    Retargeting and Salesforce DMP
  </p>
  <br />
  <p>
    <strong>Social Media Sharing and Advertising:</strong><br />
    LinkedIn social plugins, Twitter social plugins, Facebook social plugins and
    YouTube social plugins
  </p>
  <br />
  <p>
    <strong>User Account Registration and Authentication:</strong><br />
    Google OAuth 2.0, Auth0, LinkedIn OAuth 2.0, Login with Amazon and Stripe OAuth
  </p>
  <br />
  <p>
    <strong>User Commenting and Forums:</strong><br />
    Disqus, Google Tag Manager and Segment
  </p>
  <br />
  <p>
    <strong>Web and Mobile Analytics:</strong><br />
    Google Analytics, Amplitude, Google Tag Manager and Segment
  </p>
  <br />
  <p>
    <strong>Website Performance Monitoring:</strong><br />
    New Relic, Crashlytics and Pingdom
  </p>
  <br />
  <p>
    <strong>Website Testing:</strong><br />
    Beta by Crashlytics, Google Website Optimizer and Optimizely
  </p>
  <br />
  <p>
    <a
      href="#toc"
      className="inline-block bg-gray-100 hover:bg-gray-200 text-gray-600 px-3 py-1 rounded 
                 no-underline hover:no-underline text-sm"
    >
      TOC ^
    </a>
  </p>
  <hr className="my-4 border-gray-300" />
  <br />

  <h2 id="section5" className="font-semibold">5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</h2>
  <br />
  <p>
    <strong>In Short:</strong> We may use cookies and other tracking technologies to
    collect and store your information.
  </p>
  <br />
  <p>
    We may use cookies and similar tracking technologies (like web beacons and
    pixels) to access or store information. Specific information about how we use
    such technologies and how you can refuse certain cookies is set out in our
    Cookie Notice.
  </p>
  <br />
  <p>
    <a
      href="#toc"
      className="inline-block bg-gray-100 hover:bg-gray-200 text-gray-600 px-3 py-1 rounded 
                 no-underline hover:no-underline text-sm"
    >
      TOC ^
    </a>
  </p>
  <hr className="my-4 border-gray-300" />
  <br />

  <h2 id="section6" className="font-semibold">6. DO WE USE GOOGLE MAPS?</h2>
  <br />
  <p>
    <strong>In Short:</strong> Yes, we use Google Maps for the purpose of providing
    better service.
  </p>
  <br />
  <p>
    This Website uses Google Maps APIs which is subject to Google&apos;s Terms of
    Service. You may find the Google Maps APIs Terms of Service here. To find out
    more about Google&apos;s Privacy Policy, please refer to this link.
  </p>
  <br />
  <p>
    <a
      href="#toc"
      className="inline-block bg-gray-100 hover:bg-gray-200 text-gray-600 px-3 py-1 rounded 
                 no-underline hover:no-underline text-sm"
    >
      TOC ^
    </a>
  </p>
  <hr className="my-4 border-gray-300" />
  <br />

  <h2 id="section7" className="font-semibold">7. HOW DO WE HANDLE YOUR SOCIAL LOGINS?</h2>
  <br />
  <p>
    <strong>In Short:</strong> If you choose to register or log in to our services
    using a social media account, we may have access to certain information about
    you.
  </p>
  <br />
  <p>
    Our Website offers you the ability to register and login using your third-party
    social media account details (like your Facebook or Twitter logins). Where you
    choose to do this, we will receive certain profile information about you from
    your social media provider. The profile Information we receive may vary
    depending on the social media provider concerned, but will often include your
    name, email address, friends list, profile picture as well as other information
    you choose to make public on such social media platform.
  </p>
  <br />
  <p>
    We will use the information we receive only for the purposes that are described
    in this privacy notice or that are otherwise made clear to you on the relevant
    Website. Please note that we do not control, and are not responsible for, other
    uses of your personal information by your third-party social media provider. We
    recommend that you review their privacy notice to understand how they collect,
    use and share your personal information, and how you can set your privacy
    preferences on their sites and apps.
  </p>
  <br />
  <p>
    <a
      href="#toc"
      className="inline-block bg-gray-100 hover:bg-gray-200 text-gray-600 px-3 py-1 rounded 
                 no-underline hover:no-underline text-sm"
    >
      TOC ^
    </a>
  </p>
  <hr className="my-4 border-gray-300" />
  <br />

  <h2 id="section8" className="font-semibold">8. WHAT IS OUR STANCE ON THIRD-PARTY WEBSITES?</h2>
  <br />
  <p>
    <strong>In Short:</strong> We are not responsible for the safety of any
    information that you share with third-party providers who advertise, but are not
    affiliated with, our Website.
  </p>
  <br />
  <p>
    The Website may contain advertisements from third parties that are not
    affiliated with us and which may link to other websites, online services or
    mobile applications. We cannot guarantee the safety and privacy of data you
    provide to any third parties. Any data collected by third parties is not covered
    by this privacy notice. We are not responsible for the content or privacy and
    security practices and policies of any third parties, including other websites,
    services or applications that may be linked to or from the Website. You should
    review the policies of such third parties and contact them directly to respond
    to your questions.
  </p>
  <br />
  <p>
    We will use the information we receive only for the purposes that are described
    in this privacy notice or that are otherwise made clear to you on the relevant
    Website. Please note that we do not control, and are not responsible for, other
    uses of your personal information by your third-party social media provider. We
    recommend that you review their privacy notice to understand how they collect,
    use and share your personal information, and how you can set your privacy
    preferences on their sites and apps.
  </p>
  <br />
  <p>
    <a
      href="#toc"
      className="inline-block bg-gray-100 hover:bg-gray-200 text-gray-600 px-3 py-1 rounded 
                 no-underline hover:no-underline text-sm"
    >
      TOC ^
    </a>
  </p>
  <hr className="my-4 border-gray-300" />
  <br />

  <h2 id="section9" className="font-semibold">9. HOW LONG DO WE KEEP YOUR INFORMATION?</h2>
  <br />
  <p>
    <strong>In Short:</strong> We keep your information for as long as necessary to
    fulfill the purposes outlined in this privacy notice unless otherwise required
    by law.
  </p>
  <br />
  <p>
    We will only keep your personal information for as long as it is necessary for
    the purposes set out in this privacy notice, unless a longer retention period is
    required or permitted by law (such as tax, accounting or other legal
    requirements). No purpose in this notice will require us keeping your personal
    information for longer than twelve (12) months past the termination of the
    user&apos;s account.
  </p>
  <br />
  <p>
    When we have no ongoing legitimate business need to process your personal
    information, we will either delete or anonymize such information, or, if this is
    not possible (for example, because your personal information has been stored in
    backup archives), then we will securely store your personal information and
    isolate it from any further processing until deletion is possible.
  </p>
  <br />
  <p>
    <a
      href="#toc"
      className="inline-block bg-gray-100 hover:bg-gray-200 text-gray-600 px-3 py-1 rounded 
                 no-underline hover:no-underline text-sm"
    >
      TOC ^
    </a>
  </p>
  <hr className="my-4 border-gray-300" />
  <br />

  <h2 id="section10" className="font-semibold">10. HOW DO WE KEEP YOUR INFORMATION SAFE?</h2>
  <br />
  <p>
    <strong>In Short:</strong> We aim to protect your personal information through a
    system of organizational and technical security measures.
  </p>
  <br />
  <p>
    We have implemented appropriate technical and organizational security measures
    designed to protect the security of any personal information we process.
    However, despite our safeguards and efforts to secure your information, no
    electronic transmission over the Internet or information storage technology can
    be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers,
    cybercriminals, or other unauthorized third parties will not be able to defeat
    our security, and improperly collect, access, steal, or modify your information.
    Although we will do our best to protect your personal information, transmission
    of personal information to and from our Website is at your own risk. You should
    only access the Website within a secure environment.
  </p>
  <br />
  <p>
    <a
      href="#toc"
      className="inline-block bg-gray-100 hover:bg-gray-200 text-gray-600 px-3 py-1 rounded 
                 no-underline hover:no-underline text-sm"
    >
      TOC ^
    </a>
  </p>
  <hr className="my-4 border-gray-300" />
  <br />

  <h2 id="section11" className="font-semibold">11. DO WE COLLECT INFORMATION FROM MINORS?</h2>
  <br />
  <p>
    <strong>In Short:</strong> We do not knowingly collect data from or market to
    children under 18 years of age.
  </p>
  <br />
  <p>
    We do not knowingly solicit data from or market to children under 18 years of
    age. By using the Website, you represent that you are at least 18 or that you
    are the parent or guardian of such a minor and consent to such minor dependent&apos;s
    use of the Website. If we learn that personal information from users less than
    18 years of age has been collected, we will deactivate the account and take
    reasonable measures to promptly delete such data from our records. If you become
    aware of any data we may have collected from children under age 18, please
    contact us at contact@marjin.co.
  </p>
  <br />
  <p>
    <a
      href="#toc"
      className="inline-block bg-gray-100 hover:bg-gray-200 text-gray-600 px-3 py-1 rounded 
                 no-underline hover:no-underline text-sm"
    >
      TOC ^
    </a>
  </p>
  <hr className="my-4 border-gray-300" />
  <br />

  <h2 id="section12" className="font-semibold">12. WHAT ARE YOUR PRIVACY RIGHTS?</h2>
  <br />
  <p>
    <strong>In Short:</strong> You may review, change, or terminate your account at
    any time.
  </p>
  <br />
  <p>
    If you are resident in the European Economic Area and you believe we are
    unlawfully processing your personal information, you also have the right to
    complain to your local data protection supervisory authority. You can find their
    contact details here:
    http://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm.
  </p>
  <br />
  <p>
    If you are resident in Switzerland, the contact details for the data protection
    authorities are available here: https://www.edoeb.admin.ch/edoeb/en/home.html.
  </p>
  <br />
  <p>
    If you have questions or comments about your privacy rights, you may email us at
    contact@marjin.co.
  </p>
  <br />
  <p>
    <strong>Account Information</strong>
  </p>
  <br />
  <p>
    If you would at any time like to review or change the information in your
    account or terminate your account, you can:
  </p>
  <br />
  <p>
    Contact us using the contact information provided.
  </p>
  <br />
  <p>
    Upon your request to terminate your account, we will deactivate or delete your
    account and information from our active databases. However, we may retain some
    information in our files to prevent fraud, troubleshoot problems, assist with
    any investigations, enforce our Terms of Use and/or comply with applicable legal
    requirements.
  </p>
  <br />
  <p>
    <strong>Cookies and similar technologies:</strong> Most Web browsers are set to
    accept cookies by default. If you prefer, you can usually choose to set your
    browser to remove cookies and to reject cookies. If you choose to remove cookies
    or reject cookies, this could affect certain features or services of our
    Website. To opt-out of interest-based advertising by advertisers on our Website
    visit http://www.aboutads.info/choices/.
  </p>
  <br />
  <p>
    <strong>Opting out of email marketing:</strong> You can unsubscribe from our
    marketing email list at any time by clicking on the unsubscribe link in the
    emails that we send or by contacting us using the details provided below. You
    will then be removed from the marketing email list – however, we may still
    communicate with you, for example to send you service-related emails that are
    necessary for the administration and use of your account, to respond to service
    requests, or for other non-marketing purposes. To otherwise opt-out, you may:
  </p>
  <br />
  <p>Access your account settings and update your preferences.</p>
  <br />
  <p>
    <a
      href="#toc"
      className="inline-block bg-gray-100 hover:bg-gray-200 text-gray-600 px-3 py-1 rounded 
                 no-underline hover:no-underline text-sm"
    >
      TOC ^
    </a>
  </p>
  <hr className="my-4 border-gray-300" />
  <br />

  <h2 id="section13" className="font-semibold">13. CONTROLS FOR DO-NOT-TRACK FEATURES</h2>
  <br />
  <p>
    Most web browsers and some mobile operating systems and mobile applications
    include a Do-Not-Track (“DNT”) feature or setting you can activate to signal
    your privacy preference not to have data about your online browsing activities
    monitored and collected. At this stage, no uniform technology standard for
    recognizing and implementing DNT signals has been finalized. As such, we do not
    currently respond to DNT browser signals or any other mechanism that
    automatically communicates your choice not to be tracked online. If a standard
    for online tracking is adopted that we must follow in the future, we will inform
    you about that practice in a revised version of this privacy notice.
  </p>
  <br />
  <p>
    <a
      href="#toc"
      className="inline-block bg-gray-100 hover:bg-gray-200 text-gray-600 px-3 py-1 rounded 
                 no-underline hover:no-underline text-sm"
    >
      TOC ^
    </a>
  </p>
  <hr className="my-4 border-gray-300" />
  <br />

  <h2 id="section14" className="font-semibold">14. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</h2>
  <br />
  <p>
    <strong>In Short:</strong> Yes, if you are a resident of California, you are
    granted specific rights regarding access to your personal information.
  </p>
  <br />
  <p>
    California Civil Code Section 1798.83, also known as the &quot;Shine The Light&quot; law,
    permits our users who are California residents to request and obtain from us,
    once a year and free of charge, information about categories of personal
    information (if any) we disclosed to third parties for direct marketing purposes
    and the names and addresses of all third parties with which we shared personal
    information in the immediately preceding calendar year. If you are a California
    resident and would like to make such a request, please submit your request in
    writing to us using the contact information provided below.
  </p>
  <br />
  <p>
    If you are under 18 years of age, reside in California, and have a registered
    account with the Website, you have the right to request removal of unwanted data
    that you publicly post on the Website. To request removal of such data, please
    contact us using the contact information provided below, and include the email
    address associated with your account and a statement that you reside in
    California. We will make sure the data is not publicly displayed on the Website,
    but please be aware that the data may not be completely or comprehensively
    removed from all our systems (e.g. backups, etc.).
  </p>
  <br />
  <p>
    <strong>CCPA Privacy Notice</strong><br />
    The California Code of Regulations defines a &quot;resident&quot; as:
  </p>
  <br />
  <p>
    every individual who is in the State of California for other than a temporary or
    transitory purpose and
  </p>
  <br />
  <p>
    every individual who is domiciled in the State of California who is outside the
    State of California for a temporary or transitory purpose
  </p>
  <br />
  <p>All other individuals are defined as &quot;non-residents.&quot;</p>
  <br />
  <p>
    If this definition of &quot;resident&quot; applies to you, certain rights and obligations
    apply regarding your personal information.
  </p>
  <br />
  <p>
    <strong>What categories of personal information do we collect?</strong>
  </p>
  <br />
  <p>
    We have collected the following categories of personal information in the past
    twelve (12) months:
  </p>
  <br />
  <table className="w-full border border-gray-200 text-sm">
    <thead className="bg-gray-50 text-gray-600">
      <tr>
        <th className="p-2 text-left">Category</th>
        <th className="p-2 text-left">Description</th>
        <th className="p-2 text-right">Collected?</th>
      </tr>
    </thead>
    <tbody>
      <tr className="border-b border-gray-200">
        <td className="p-2 align-top">A. Identifiers</td>
        <td className="p-2 align-top">
          Contact details, such as real name, alias, postal address, telephone or
          mobile contact number, unique personal identifier, online identifier,
          Internet Protocol address, email address and account name
        </td>
        <td className="p-2 align-top text-right">NO</td>
      </tr>
      <tr className="border-b border-gray-200">
        <td className="p-2 align-top">B. Personal information categories listed in the California Customer
        Records statute</td>
        <td className="p-2 align-top">
          Name, contact information, education, employment, employment history and
          financial information
        </td>
        <td className="p-2 align-top text-right">YES</td>
      </tr>
      <tr className="border-b border-gray-200">
        <td className="p-2 align-top">C. Protected classification characteristics under California or federal
        law</td>
        <td className="p-2 align-top">Gender and date of birth</td>
        <td className="p-2 align-top text-right">NO</td>
      </tr>
      <tr className="border-b border-gray-200">
        <td className="p-2 align-top">D. Commercial information</td>
        <td className="p-2 align-top">
          Transaction information, purchase history, financial details and payment
          information
        </td>
        <td className="p-2 align-top text-right">NO</td>
      </tr>
      <tr className="border-b border-gray-200">
        <td className="p-2 align-top">E. Biometric information</td>
        <td className="p-2 align-top">Fingerprints and voiceprints</td>
        <td className="p-2 align-top text-right">NO</td>
      </tr>
      <tr className="border-b border-gray-200">
        <td className="p-2 align-top">F. Internet or other similar network activity</td>
        <td className="p-2 align-top">
          Browsing history, search history, online behavior, interest data, and
          interactions with our and other websites, applications, systems and
          advertisements
        </td>
        <td className="p-2 align-top text-right">NO</td>
      </tr>
      <tr className="border-b border-gray-200">
        <td className="p-2 align-top">G. Geolocation data</td>
        <td className="p-2 align-top">Device location</td>
        <td className="p-2 align-top text-right">NO</td>
      </tr>
      <tr className="border-b border-gray-200">
        <td className="p-2 align-top">H. Audio, electronic, visual, thermal, olfactory, or similar
        information</td>
        <td className="p-2 align-top">
          Images and audio, video or call recordings created in connection with our
          business activities
        </td>
        <td className="p-2 align-top text-right">NO</td>
      </tr>
      <tr className="border-b border-gray-200">
        <td className="p-2 align-top">I. Professional or employment-related information</td>
        <td className="p-2 align-top">
          Business contact details in order to provide you our services at a
          business level, job title as well as work history and professional
          qualifications if you apply for a job with us
        </td>
        <td className="p-2 align-top text-right">NO</td>
      </tr>
      <tr className="border-b border-gray-200">
        <td className="p-2 align-top">J. Education Information</td>
        <td className="p-2 align-top">Student records and directory information</td>
        <td className="p-2 align-top text-right">NO</td>
      </tr>
      <tr className="border-b border-gray-200">
        <td className="p-2 align-top">K. Inferences drawn from other personal information</td>
        <td className="p-2 align-top">
          Inferences drawn from any of the collected personal information listed
          above to create a profile or summary about, for example, an individual&apos;s
          preferences and characteristics
        </td>
        <td className="p-2 align-top text-right">YES</td>
      </tr>
    </tbody>
  </table>
  <br />
  <p>
    We may also collect other personal information outside of these categories in
    instances where you interact with us in-person, online, or by phone or mail in
    the context of:
  </p>
  <br />
  <p>
    - Receiving help through our customer support channels<br />
    - Participation in customer surveys or contests<br />
    - Facilitation in the delivery of our Services and to respond to your inquiries
  </p>
  <br />
  <p>
    <strong>How do we use and share your personal information?</strong>
  </p>
  <br />
  <p>
    More information about our data collection and sharing practices can be found
    in this privacy notice.
  </p>
  <br />
  <p>
    You may contact us by email at contact@marjin.co, or by referring to the contact
    details at the bottom of this document.
  </p>
  <br />
  <p>
    If you are using an authorized agent to exercise your right to opt-out, we may
    deny a request if the authorized agent does not submit proof that they have been
    validly authorized to act on your behalf.
  </p>
  <br />
  <p>
    <strong>Will your information be shared with anyone else?</strong>
  </p>
  <br />
  <p>
    We may disclose your personal information with our service providers pursuant to
    a written contract between us and each service provider. Each service provider
    is a for-profit entity that processes the information on our behalf.
  </p>
  <br />
  <p>
    The current list of our service providers can be found below.
  </p>
  <br />
  <p>
    We may use your personal information for our own business purposes, such as for
    undertaking internal research for technological development and demonstration.
    This is not considered to be &quot;selling&quot; of your personal data.
  </p>
  <br />
  <p>
    SG Platforms, Inc. has disclosed the following categories or personal
    information to third parties for a business or commercial purpose in the
    preceding twelve (12) months:
  </p>
  <br />
  <p>
    Category B. Personal information, as defined in the California Customer Records
    law, such as your name, contact information, education, employment, employment
    history and financial information.
  </p>
  <br />
  <p>
    The categories of third parties to whom we disclosed personal information for a
    business or commercial purpose can be found under &quot;WHO WILL YOUR INFORMATION BE
    SHARED WITH?&quot;.
  </p>
  <br />
  <p>
    <strong>Your rights with respect to your personal data</strong>
  </p>
  <br />
  <p>
    <strong>Right to request deletion of the data - Request to delete</strong>
  </p>
  <br />
  <p>
    You can ask for the deletion of your personal information. If you ask us to
    delete your personal information, we will respect your request and delete your
    personal information, subject to certain exceptions provided by law, such as
    (but not limited to) the exercise by another consumer of his or her right to
    free speech, our compliance requirements resulting from a legal obligation or
    any processing that may be required to protect against illegal activities.
  </p>
  <br />
  <p>
    <strong>Right to be informed - Request to know</strong>
  </p>
  <br />
  <p>
    Depending on the circumstances, you have a right to know:
  </p>
  <br />
  <p>
    - whether we collect and use your personal information; <br />
    - the categories of personal information that we collect; <br />
    - the purposes for which the collected personal information is used; <br />
    - whether we sell your personal information to third parties; <br />
    - the categories of personal information that we sold or disclosed for a
    business purpose; <br />
    - the categories of third parties to whom the personal information was sold or
    disclosed for a business purpose; and <br />
    - the business or commercial purpose for collecting or selling personal
    information.
  </p>
  <br />
  <p>
    In accordance with applicable law, we are not obligated to provide or delete
    consumer information that is de-identified in response to a consumer request or
    to re-identify individual data to verify a consumer request.
  </p>
  <br />
  <p>
    <strong>Right to Non-Discrimination for the Exercise of a Consumer&apos;s Privacy
    Rights</strong>
  </p>
  <br />
  <p>We will not discriminate against you if you exercise your privacy rights.</p>
  <br />
  <p>
    <strong>Verification process</strong>
  </p>
  <br />
  <p>
    Upon receiving your request, we will need to verify your identity to determine
    you are the same person about whom we have the information in our system. These
    verification efforts require us to ask you to provide information so that we can
    match it with the information you have previously provided us. For instance,
    depending on the type of request you submit, we may ask you to provide certain
    information so that we can match the information you provide with the
    information we already have on file, or we may contact you through a
    communication method (e.g. phone or email) that you have previously provided to
    us. We may also use other verification methods as the circumstances dictate.
  </p>
  <br />
  <p>
    We will only use personal information provided in your request to verify your
    identity or authority to make the request. To the extent possible, we will avoid
    requesting additional information from you for the purposes of verification. If,
    however, if we cannot verify your identity from the information already
    maintained by us, we may request that you provide additional information for the
    purposes of verifying your identity, and for security or fraud-prevention
    purposes. We will delete such additionally provided information as soon as we
    finish verifying you.
  </p>
  <br />
  <p>
    <strong>Other privacy rights</strong>
  </p>
  <br />
  <p>
    - you may object to the processing of your personal data <br />
    - you may request correction of your personal data if it is incorrect or no
    longer relevant, or ask to restrict the processing of the data <br />
    - you can designate an authorized agent to make a request under the CCPA on your
    behalf. We may deny a request from an authorized agent that does not submit
    proof that they have been validly authorized to act on your behalf in accordance
    with the CCPA. <br />
    - you may request to opt-out from future selling of your personal information to
    third parties. Upon receiving a request to opt-out, we will act upon the request
    as soon as feasibly possible, but no later than 15 days from the date of the
    request submission.
  </p>
  <br />
  <p>
    To exercise these rights, you can contact us by email at contact@marjin.co, or
    by referring to the contact details at the bottom of this document. If you have
    a complaint about how we handle your data, we would like to hear from you.
  </p>
  <br />
  <p>
    <a
      href="#toc"
      className="inline-block bg-gray-100 hover:bg-gray-200 text-gray-600 px-3 py-1 rounded 
                 no-underline hover:no-underline text-sm"
    >
      TOC ^
    </a>
  </p>
  <hr className="my-4 border-gray-300" />
  <br />

  <h2 id="section15" className="font-semibold">15. DO WE MAKE UPDATES TO THIS NOTICE?</h2>
  <br />
  <p>
    <strong>In Short:</strong> Yes, we will update this notice as necessary to stay
    compliant with relevant laws.
  </p>
  <br />
  <p>
    We may update this privacy notice from time to time. The updated version will be
    indicated by an updated &quot;Revised&quot; date and the updated version will be effective
    as soon as it is accessible. If we make material changes to this privacy notice,
    we may notify you either by prominently posting a notice of such changes or by
    directly sending you a notification. We encourage you to review this privacy
    notice frequently to be informed of how we are protecting your information.
  </p>
  <br />
  <p>
    <a
      href="#toc"
      className="inline-block bg-gray-100 hover:bg-gray-200 text-gray-600 px-3 py-1 rounded 
                 no-underline hover:no-underline text-sm"
    >
      TOC ^
    </a>
  </p>
  <hr className="my-4 border-gray-300" />
  <br />

  <h2 id="section16" className="font-semibold">16. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</h2>
  <br />
  <p>
    If you have questions or comments about this notice, you may email us at
    contact@marjin.co or by post to:
  </p>
  <br />
  <p>
    AFOL, Inc.<br />
    2369 Falcon Dr<br />
    West Linn, OR 97068<br />
    United States
  </p>
  <br />
  <p>
    <a
      href="#toc"
      className="inline-block bg-gray-100 hover:bg-gray-200 text-gray-600 px-3 py-1 rounded 
                 no-underline hover:no-underline text-sm"
    >
      TOC ^
    </a>
  </p>
  <hr className="my-4 border-gray-300" />
  <br />

  <h2 id="section17" className="font-semibold">17. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</h2>
  <br />
  <p>
    Based on the applicable laws of your country, you may have the right to request
    access to the personal information we collect from you, change that information,
    or delete it in some circumstances. To request to review, update, or delete your
    personal information, please submit a request form by clicking here. We will
    respond to your request within 30 days.
  </p>
  <br />
  <p>
    <a
      href="#toc"
      className="inline-block bg-gray-100 hover:bg-gray-200 text-gray-600 px-3 py-1 rounded 
                 no-underline hover:no-underline text-sm"
    >
      TOC ^
    </a>
  </p>
  <hr className="my-4 border-gray-300" />
</div>
      <PlateFooter />
    </ThemedContainer>
  );
}
