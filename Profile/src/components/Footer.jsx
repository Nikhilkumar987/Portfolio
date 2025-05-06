import React from 'react'

function Footer()
{
    return(
<div className="bg-black w-full px-10 py-12 text-white">
  <div className="max-w-7xl mx-auto">
    <div className="flex flex-col md:flex-row justify-between gap-8 mb-6">
      {/* Left Section */}
      <div className="max-w-xl">
        <h3 className="text-2xl font-semibold mb-2">Nikhil Kumar</h3>
        <p className="text-gray-400 leading-relaxed">
          A frontend-focused web developer building intuitive and performant web interfaces that drive product success.
        </p>
      </div>

      {/* Right Section - Social */}
      <div>
        <h4 className="text-xl font-semibold mb-2">Connect</h4>
        <div className="flex gap-4">
          <a href="https://www.linkedin.com/in/nikhil-kumar-b8663a258/" className="hover:text-orange-500 transition">LinkedIn</a>
          <a href="https://github.com/Nikhilkumar987" className="hover:text-orange-500 transition">GitHub</a>
          <a href="nkydv100@gmail.com" className="hover:text-orange-500 transition">Email</a>
        </div>
      </div>
    </div>

    <hr className="border-white/10 mb-4" />

    <div className="text-center text-gray-500 text-sm">
      © Copyright 2025. Made by <span className="text-white font-medium">Nikhil Kumar</span>
    </div>
  </div>
</div>

    )
}

export default Footer;