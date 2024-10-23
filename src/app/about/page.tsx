import React from 'react';
import Layout from '@/components/Layout';
import { GithubIcon, InstagramIcon, LinkedinIcon, Mail } from 'lucide-react';

const About = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br flex items-center justify-center">
        <div className="max-w-6xl mx-auto p-8 relative">
          <div className="relative flex flex-col lg:flex-row items-center justify-center gap-16">
            {/* Text Content */}
            <div className="lg:w-1/2 space-y-6 text-center lg:text-left animate-fade-in-up">
              <div className="space-y-4">
                <h2 className="text-sm uppercase tracking-wider text-blue-400 font-semibold animate-slide-in-left">
                  Hello!
                </h2>
                <h1 className="text-4xl lg:text-5xl font-bold mb-8 bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent animate-fade-in-slow">
                  About Me
                </h1>
              </div>
              
              <div className="space-y-6">
                <p className="text-lg text-gray-300 leading-relaxed hover:text-gray-100 transition-colors duration-300">
                I'm Juan Farrel, a multidisciplinary student, developer, and penetration tester passionate about crafting interactive websites that deliver immersive experiences for users. My expertise lies in FullStack Web Development, and as a freelance software engineer, I am committed to creating practical applications that make a difference while ensuring security through thorough testing and penetration testing techniques.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed hover:text-gray-100 transition-colors duration-300">
                  I'm also in the process of expanding my team, with a vision to develop 
                  widely recognized applications that resonate with the community. My goal 
                  is to establish a career focused on building inclusive and accessible 
                  applications through thoughtfully designed code and user-centered 
                  principles that foster engaging experiences.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed hover:text-gray-100 transition-colors duration-300">
                  When I'm away from my laptop, you can find me enjoying movies, gaming, 
                  or playing music.
                </p>
              </div>
              
              {/* Social Links */}
              <div className="flex gap-4 pt-6 justify-center lg:justify-start">
                <a href="https://github.com/NimonHiya" className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300 animate-pulse-slow">
                  <GithubIcon className="w-6 h-6 text-gray-300 hover:text-white" />
                </a>
                <a href="https://www.instagram.com/nimonhiya/" className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300 animate-pulse-slow">
                  <InstagramIcon className="w-6 h-6 text-gray-300 hover:text-white" />
                </a>
                <a href="https://www.linkedin.com/in/juan-farrel-88b66a236/" className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300 animate-pulse-slow">
                  <LinkedinIcon className="w-6 h-6 text-gray-300 hover:text-white" />
                </a>
                <a href="mailto:nimonhiya@gmail.com" className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300 animate-pulse-slow">
                  <Mail className="w-6 h-6 text-gray-300 hover:text-white" />
                </a>
              </div>
            </div>

            {/* Image Container */}
            <div className="lg:w-1/2">
              <div className="relative group animate-fade-in">
                {/* Background shape */}
                <div className="absolute -bottom-6 -right-6 w-full h-full bg-gray-800/80 rounded-lg transform rotate-3 transition-transform duration-500 ease-in-out group-hover:rotate-0" />
                {/* Second background shape for layered effect */}
                <div className="absolute -bottom-3 -right-3 w-full h-full bg-gray-800/50 rounded-lg transform -rotate-2 transition-transform duration-500 ease-in-out group-hover:rotate-0" />
                
                {/* Main image */}
                <img
                  src="piala.jpg"
                  alt="Professional headshot"
                  className="rounded-lg w-full max-w-md mx-auto relative z-10 
                    shadow-2xl transition-transform duration-500 
                    group-hover:scale-[1.02]"
                />
                
                {/* Additional decorative elements */}
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-500/10 rounded-full blur-xl animate-pulse" />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-purple-500/10 rounded-full blur-xl animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
