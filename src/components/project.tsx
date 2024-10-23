import ProjectCard from './ProjectCard';

const projectData1 = {
  title: 'Kasir21 - App',
  description: 'An app for school shopping management, facilitating smooth transactions for users.',
  tags: ['Python', 'Apps'],
  githubLink: 'https://github.com/NimonHiya/Kasir',
  imageUrl: '/Kasir.png', // Updated path
};

const projectData2 = {
  title: 'Booking Hotel - App',
  description: 'An application for managing hotel bookings efficiently.',
  tags: ['JavaScript', 'React'],
  githubLink: 'https://github.com/NimonHiya/BookingHotel',
  imageUrl: '/bookinghotel.png', // Updated path
};

const projectData3 = {
  title: 'Burp Suite Setup',
  description: 'A guide for configuring Burp Suite with FoxyProxy for web security testing.',
  tags: ['Security', 'Web'],
  githubLink: 'https://github.com/NimonHiya/Setup-Burpsuite',
  imageUrl: '/setupburpsuite.png', // Updated path
};

const projectData4 = {
  title: 'Toko',
  description: 'A store management application for efficient transactions and inventory.',
  tags: ['JavaScript', 'Node.js'],
  githubLink: 'https://github.com/NimonHiya/Toko',
  imageUrl: '/toko.png', // Updated path
};

const projectData5 = {
  title: 'Toko_Ku',
  description: 'A personalized store application built with modern web technologies.',
  tags: ['React', 'Node.js'],
  githubLink: 'https://github.com/NimonHiya/Toko_Ku',
  imageUrl: '/tokoku.png', // Updated path
};

const projectData6 = {
  title: 'UTS',
  description: 'A project developed for UTS, showcasing various development techniques.',
  tags: ['JavaScript', 'React'],
  githubLink: 'https://github.com/NimonHiya/uts',
  imageUrl: '/uts.png', // Updated path
};

const App = () => {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen pt-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"> {/* Responsive grid layout */}
        <ProjectCard {...projectData1} />
        <ProjectCard {...projectData2} />
        <ProjectCard {...projectData3} />
        <ProjectCard {...projectData4} />
        <ProjectCard {...projectData5} />
        <ProjectCard {...projectData6} />
      </div>
    </div>
  );
};

export default App;
