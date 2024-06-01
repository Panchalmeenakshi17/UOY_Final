import React, { useEffect } from 'react';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';

const Developer = () => {
  const developers = [
    {
      name: 'Meenakshi Panchal',
      design: 'Full Stack Mobile Application Developer',
      image: 'images/mee.jpg', // Replace with the actual path to the image
      linkedin: 'https://www.linkedin.com/in/meenakshi-panchal-617393242/',
      instagram: 'https://www.instagram.com/_meenakshi.17/',
    },
    {
      name: 'Kunal Prajapati',
      design: 'Mobile Application Developer - Android / iOS',
      image: 'images/kunal.jpg', // Replace with the actual path to the image
      linkedin: 'https://www.linkedin.com/in/kunal-prajapati-3a3620237/',
      instagram: 'https://www.instagram.com/prajapati._.0/',
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="relative">
        <video
          src="videos/sd.mp4"
          autoPlay={true}
          loop
          muted
          className="h-[400px] w-full object-cover opacity-100 transition-opacity duration-500 ease-in-out"
        />
        <div className="absolute backdrop-blur-md h-1/2 bg-[#f48d5e18] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full">
          <div className="text-center p-8 rounded-lg">
            <h1 className="font-main font-bold text-xl text-center text-[#ffffff]">
              | Meet Our Developers
            </h1>
            <h2 className="text-[#f96f41] text-xl mt-7 mb-1 md:p-0 px-6 text-center translate-x-[0px] font-semibold md:text-5xl font-main title-font">
              For the development of any website and Android development, please contact.
            </h2>
          </div>
        </div>
      </div>

      <div className="container font-Main mx-auto mt-8 mb-20 px-4">
        <header className="text-center mb-12">
          {/* Header content if any */}
        </header>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:p-10 lg:grid-cols-2 xl:grid-cols-2">
            {developers.map((dev, index) => (
              <div key={index} className="bg-[#000000] hover:cursor-pointer  w-full shadow-lg transition ease-in-out rounded-xl overflow-hidden shadow-black hover:shadow-2xl hover:shadow-orange-700">
                <div className="overflow-hidden">
                  <img
                    className="w-full object-cover p-5 transform hover:scale-95 transition-transform duration-300"
                    src={dev.image}
                    alt={`${dev.name} profile`}
                  />
                </div>
                <div className="flex flex-col justify-between p-6 w-full">
                  <div>
                    <div className="font-bold text-[#ff7344] text-xl mb-2">{dev.name}</div>
                    <div className="font-bold text-[#ffc8b5] text-md mb-2">{dev.design}</div>
                    <p className="text-[white] text-base"></p>
                  </div>
                  <div className="mt-4 flex items-center">
                    <a href={dev.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-500 mr-4">
                      <FaLinkedin size={24} />
                    </a>
                    <a href={dev.instagram} target="_blank" rel="noopener noreferrer" className="text-pink-500">
                      <FaInstagram size={24} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Developer;
