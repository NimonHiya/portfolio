import React from 'react';
import { Shield, Monitor, FileCode, Code, Smartphone, Gamepad } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Shield className="w-16 h-16 text-yellow-300" />,
      title: "Penetration Testing",
      description: "I perform Professional Penetration Testing to identify loopholes in the Organization's infrastructure.",
      bgColor: "bg-[#6C5CE7]", // Purple background like in image
      containerClass: "hover:shadow-[#6C5CE7]/50",
    },
    {
      icon: <Monitor className="w-16 h-16 text-red-300" />,
      title: "Vulnerability Assessment",
      description: "To approach the infrastructure in identifying the early and malicious security flaws.",
      bgColor: "bg-[#FF7675]", // Coral/salmon background like in image
      containerClass: "hover:shadow-[#FF7675]/50",
    },
    {
      icon: <FileCode className="w-16 h-16 text-white" />,
      title: "Research",
      description: "To identify and discover the new vulnerabilities and to develop a new exploit.",
      bgColor: "bg-[#5BE7A9]", // Mint green background like in image
      containerClass: "hover:shadow-[#5BE7A9]/50",
    },
    {
      icon: <Code className="w-16 h-16 text-white" />,
      title: "Web Development",
      description: "Building responsive, scalable websites and web applications tailored to the needs of clients.",
      bgColor: "bg-[#6C5CE7]",
      containerClass: "hover:shadow-[#6C5CE7]/50",
    },
    {
      icon: <Smartphone className="w-16 h-16 text-white" />,
      title: "Mobile Development",
      description: "Creating modern and scalable mobile applications for iOS and Android platforms.",
      bgColor: "bg-[#FF7675]",
      containerClass: "hover:shadow-[#FF7675]/50",
    },
    {
      icon: <Gamepad className="w-16 h-16 text-white" />,
      title: "Game Development",
      description: "Designing and developing interactive and engaging games for various platforms.",
      bgColor: "bg-[#5BE7A9]",
      containerClass: "hover:shadow-[#5BE7A9]/50",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 mt-10">
        <div className="mb-12">
         
          <h2 className="text-4xl font-bold text-center text-white">SKILLS</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`${service.bgColor} ${service.containerClass} rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl`}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-white">{service.title}</h3>
                <p className="text-white/80">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400">
            Find my <span className="text-[#FF7675]">#Quality Works</span> here.
          </p>
        </div>
      </div>
    </section>
  );
}