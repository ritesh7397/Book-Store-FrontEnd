import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function About() {
    return (
        <>
            <Navbar />
            <div className=" min-h-screen ">
            <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Main Container */}
      <div className="flex-grow flex flex-col justify-start mt-12">
        {/* Header */}
        <header className="text-center py-8">
          <h1 className="text-4xl font-bold text-gray-800">About Us</h1>
          <p className="text-lg text-gray-600 mt-2">Learn more about our journey and mission.</p>
        </header>

        {/* About Content */}
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
          <section className="space-y-6">
            <p className="text-gray-700 text-lg">
              Welcome to <span className="font-bold text-pink-500">Book Store</span>, your one-stop destination for all your book needs. Our mission is to connect readers with the books they love while promoting the joy of reading across all ages.
            </p>

            <p className="text-gray-700 text-lg">
              Since our inception, we have been committed to curating a wide selection of books, ranging from timeless classics to the latest bestsellers. We pride ourselves on creating a seamless and enjoyable shopping experience for our customers.
            </p>

            <p className="text-gray-700 text-lg">
              At <span className="font-bold text-pink-500">Book Store</span>, we believe in the transformative power of books. Whether you're exploring new worlds, gaining knowledge, or simply enjoying a story, we strive to make every reading journey unforgettable.
            </p>
          </section>

          {/* Team Section */}
          <section className="mt-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Team</h2>
            <p className="text-gray-700 text-lg">
              Our dedicated team is passionate about books and committed to delivering exceptional service. From sourcing the best titles to ensuring a smooth user experience, we're here to support your love for reading.
            </p>
          </section>
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

export default About
