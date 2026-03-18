import React from "react";
import { FaCreditCard, FaMobileAlt, FaShieldAlt, FaClock } from "react-icons/fa";

export default function Payments() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-4">
            Make <span className="text-yellow-600">Payments</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Secure and convenient payment options for our waste management services. Choose the method that works best for you.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-yellow-500 to-yellow-600 mx-auto rounded-full"></div>
        </div>

        {/* Payment Methods */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Mobile Money (MoMo) */}
          <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-yellow-500 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center gap-4 mb-6">
              <FaMobileAlt className="text-yellow-500 text-4xl" />
              <h2 className="text-3xl font-bold text-gray-900">Mobile Money (MoMo)</h2>
            </div>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              Pay conveniently using your mobile phone. Mobile Money is the fastest and most secure way to make payments for our services in Uganda.
            </p>

            {/* MoMo Payment Image */}
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <img
                src="/momo payment.jpeg"
                alt="Mobile Money Payment Instructions"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>

            {/* Payment Instructions */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">How to Pay:</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="bg-yellow-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">1</span>
                  <p className="text-gray-700">Dial <strong>*165#</strong> on your phone</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="bg-yellow-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">2</span>
                  <p className="text-gray-700">Select "Send Money" or "Pay Bill"</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="bg-yellow-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">3</span>
                  <p className="text-gray-700">Enter our business number: <strong>+256 772 594470</strong></p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="bg-yellow-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">4</span>
                  <p className="text-gray-700">Enter the amount and confirm payment</p>
                </div>
              </div>
            </div>

            {/* Contact for Payment Confirmation */}
            <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
              <p className="text-gray-800 text-sm">
                <strong>Important:</strong> After making payment, please send us a screenshot or reference number via WhatsApp at <strong>+256 772 594470</strong> for confirmation and service scheduling.
              </p>
            </div>
          </div>

          {/* Alternative Payment Methods */}
          <div className="space-y-8">
            {/* Bank Transfer */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-4">
                <FaCreditCard className="text-yellow-500 text-2xl" />
                <h3 className="text-xl font-bold text-gray-900">Bank Transfer</h3>
              </div>
              <p className="text-gray-700 mb-4">
                For larger payments or business accounts, you can transfer directly to our bank account.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600 mb-2"><strong>Account Name:</strong> Bins Kampala Ltd</p>
                <p className="text-sm text-gray-600 mb-2"><strong>Account Number:</strong> xxxxxxxx</p>
                <p className="text-sm text-gray-600 mb-2"><strong>Bank:</strong> xxxx</p>
                <p className="text-sm text-gray-600"><strong>Swift Code:</strong> xxxxx</p>
              </div>
            </div>

            {/* Cash on Delivery */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-4">
                <FaClock className="text-yellow-500 text-2xl" />
                <h3 className="text-xl font-bold text-gray-900">Cash on Delivery</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Pay in cash when our team arrives for service. Perfect for one-time or trial services.
              </p>
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <p className="text-sm text-green-800">
                  <strong>Available for:</strong> Garbage collection, fumigation, and cleaning services.
                </p>
              </div>
            </div>

            {/* Security Notice */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-yellow-500">
              <div className="flex items-center gap-3 mb-4">
                <FaShieldAlt className="text-yellow-500 text-2xl" />
                <h3 className="text-xl font-bold text-gray-900">Payment Security</h3>
              </div>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• All transactions are secured and monitored</li>
                <li>• We accept payments from verified sources only</li>
                <li>• Instant confirmation for all payments</li>
                <li>• 24/7 customer support for payment queries</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Service Request Forms */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Service Request <span className="text-yellow-600">Forms</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Download and fill out our service request forms to get started with our waste management services.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-yellow-500 to-yellow-600 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Normal Collection Form */}
            <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Normal Collection Form</h3>
                <p className="text-gray-700">For standard waste collection services</p>
              </div>

              <div className="bg-yellow-100 rounded-lg p-4 mb-6 border border-yellow-300">
                <img
                  src="/form4.jpeg"
                  alt="Normal Collection Service Request Form"
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>

              <div className="text-center">
                <a
                  href="/form4.jpeg"
                  download="Normal_Collection_Form.jpeg"
                  className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Download Form
                </a>
                <p className="text-sm text-gray-600 mt-3">
                  Fill out and submit to our office or via email
                </p>
              </div>
            </div>

            {/* Drum Collection Form */}
            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Drum Collection Form</h3>
                <p className="text-gray-700">For waste collection using drums/containers</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 mb-6 border border-gray-300">
                <img
                  src="/form3.jpeg"
                  alt="Drum Collection Service Request Form"
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>

              <div className="text-center">
                <a
                  href="/form3.jpeg"
                  download="Drum_Collection_Form.jpeg"
                  className="inline-block bg-gray-800 hover:bg-gray-900 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Download Form
                </a>
                <p className="text-sm text-gray-600 mt-3">
                  Fill out and submit to our office or via email
                </p>
              </div>
            </div>
          </div>

          {/* Form Instructions */}
          <div className="mt-12 bg-gray-50 rounded-xl p-8 border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">How to Use Our Forms</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-yellow-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-3">1</div>
                <h4 className="font-semibold text-gray-900 mb-2">Download</h4>
                <p className="text-gray-700 text-sm">Click the download button above to get the form</p>
              </div>
              <div className="text-center">
                <div className="bg-yellow-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-3">2</div>
                <h4 className="font-semibold text-gray-900 mb-2">Fill Out</h4>
                <p className="text-gray-700 text-sm">Complete all required information clearly</p>
              </div>
              <div className="text-center">
                <div className="bg-yellow-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-3">3</div>
                <h4 className="font-semibold text-gray-900 mb-2">Submit</h4>
                <p className="text-gray-700 text-sm">Send to our office or email for processing</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-black to-gray-800 rounded-xl shadow-lg p-12 text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Make a Payment?
          </h3>
          <p className="text-lg text-yellow-100 mb-8 max-w-2xl mx-auto">
            Contact us now to discuss your service needs and payment options. We're here to make the process as smooth as possible.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:+256772594470">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 text-lg inline-flex items-center gap-2">
                <FaMobileAlt size={20} />
                Call Now
              </button>
            </a>
            <a href="/contact">
              <button className="bg-white/20 hover:bg-white/30 text-white font-bold py-4 px-8 rounded-lg backdrop-blur-sm transition-all duration-300 transform hover:scale-105 border-2 border-white/50 text-lg">
                Get Quote
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}