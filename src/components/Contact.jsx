import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function Contact() {
  return (
    <>
      <Navbar />
      <div className=" min-h-screen ">
        <div className="bg-gray-100 min-h-screen flex flex-col">
          {/* Main Container */}
          <div className="flex-grow mt-12">
            {/* Header */}
            <header className="text-center py-8">
              <h1 className="text-4xl font-bold text-gray-800">Contact Us</h1>
              <p className="text-lg text-gray-600 mt-2">We'd love to hear from you!</p>
            </header>

            {/* Contact Form */}
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
              <form className="grid grid-cols-1 gap-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter your name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    placeholder="Write your message"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Footer */}
          <footer className="bg-gray-800 text-white py-4 mt-8">
            <div className="text-center text-sm">
              &copy; {new Date().getFullYear()} Book Store. All rights reserved.
            </div>
          </footer>
        </div>

      </div>
      <Footer />
    </>
  )
}

export default Contact
