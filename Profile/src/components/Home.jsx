import React from 'react';

function Home() {
  const skills = [
    "HTML", "CSS", "JavaScript", "React", "GIT", "Github", "Responsive Design",
    "Redux", "Context-API" , "Firebase"
  ];

  return (
    <div className='bg-gradient-to-br from-slate-900 to-slate-700 p-10 w-full min-h-screen'>
      
      {/* Hero Section */}
      <div className="min-h-screen w-full flex justify-center items-center p-6 rounded-2xl">
        <div className="bg-white shadow-lg rounded-2xl w-full max-w-4xl p-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            HEY, I AM <span className="text-orange-500">NIKHIL KUMAR</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-xl mx-auto">
            A passionate Frontend Developer who loves building beautiful UIs with React, Tailwind CSS, and JavaScript.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6">
            <button className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition">
              Download Resume
            </button>
            <button className="border border-orange-500 text-orange-500 px-6 py-3 rounded-lg hover:bg-orange-100 transition">
              GitHub
            </button>
          </div>
        </div>
      </div>

      {/* About Me Section */}
      <div className="w-full px-6 py-16 bg-gradient-to-br from-slate-800 to-slate-700 text-white mt-10 rounded-2xl">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">About Me</h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg md:text-xl leading-relaxed text-gray-300">
            Here you will find more information about me, what I do, and my current skills — mostly in terms of programming and technology.
          </p>
        </div>
      </div>

      {/* Skills Section */}
      <div className="w-full px-6 py-16 bg-slate-300 text-gray-800 mt-10 rounded-2xl">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-12">
          
          {/* Left Column */}
          <div className="flex-1">
            <h3 className="text-2xl font-semibold text-purple-700 mb-4">Get to know me!</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              I'm a <span className="font-semibold text-black">Frontend-focused Web Developer</span> building and managing the UI of websites and web apps that contribute to the product's success. Check out my work in the <span className="text-orange-500 font-semibold">Projects</span> section.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              I love sharing what I learn in Web Development through platforms like <span className="font-semibold text-black">LinkedIn</span> and <span className="font-semibold text-black">Instagram</span>, to help others in the Dev community.
            </p>
            <p className="text-gray-700 leading-relaxed">
              I'm open to job opportunities where I can grow, learn, and contribute. If you have a fitting role, feel free to reach out!
            </p>
          </div>

          {/* Right Column */}
          <div className="flex-1 flex flex-col items-center">
            <h4 className="text-xl font-semibold text-gray-700 mb-4">MY SKILLS</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 text-center">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-gray-100 text-gray-800 px-4 py-2 rounded-md shadow-sm hover:bg-gray-200 transition text-center"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Home;
