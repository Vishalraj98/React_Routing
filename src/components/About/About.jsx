import React from 'react'

export default function About() {
  return (
      <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12">
                      <img
                         src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                          alt="image"
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                          React development is carried out by passionate developers
                      </h2>
                      <p className="mt-6 text-2xl text-black">
                      React Router enables "client side routing". In traditional websites, the browser requests a document from a web server, downloads and evaluates CSS and JavaScript assets, and renders the HTML sent from the server. When the user clicks a link, it starts the process all over again for a new page.
                      </p>
                      <p className="mt-4 text-gray-600">
                          
                      </p>
                  </div>
              </div>
          </div>
      </div>
  );
}