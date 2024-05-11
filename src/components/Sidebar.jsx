import React from "react";
import logo from "../assets/logo.png";
import home from "../assets/Home.png";
import search from "../assets/search.png";
import explore from "../assets/explore.png";
import message from "../assets/message.png";
import notification from "../assets/notification.png";
import newpost from "../assets/newpost.png";
import reels from "../assets/reels.png";
import user from "../assets/user.png";
import Threads from "../assets/Thread.png";
import insta from "../assets/instagram.png";
import Sidebar_mobile from "./Sidebar_mobile";
import Feed_large from "./Feed_large";
import Profile from "./Profile";
import Story from './Story';

const icons = [
  { src: home, alt: "Home", label: "Home" },
  { src: search, alt: "Search", label: "Search" },
  { src: explore, alt: "Explore", label: "Explore" },
  { src: reels, alt: "Reels", label: "Reels" },
  { src: message, alt: "Message", label: "Message" },
  { src: notification, alt: "Notification", label: "Notification" },
  { src: newpost, alt: "New Post", label: "Create" },
  { src: user, alt: "User", label: "Profile" },
  // Add more icon objects as needed
];

const Ficons = [
  { src: Threads, alt: "Threads", label: "Threads" },
  { src: user, alt: "User", label: "User" } // Corrected label to "User"
  // Add more icon objects as needed
];

function Sidebar() {
  return (
    <>
      {/* For Large and medium screen */}
      <main className="w-full h-auto flex items-start gap-x-32 lg:flex-row md:flex-row sm:flex-col-reverse flex-col-reverse relative">
        <div className="lg:w-[17%] md:w-[16%] sm:w-full w-full lg:h-full md:h-full sm:h-auto h-auto pt-6 px-3 border-r border-r-gray-300 sticky top-0 left-0 lg:block md:block sm:hidden hidden">
          {/* Logo */}
          <div className="w-ful h-auto relative">
            <div className="mb-10 px-2 lg:hidden md:block sm:block">
              <img
                src={insta}
                alt="Instagram Logo"
                height={10}
                width={28}
              />
            </div>
            <div className="mb-4 px-2 lg:block md:hidden sm:hidden hidden">
              <img
                src={logo}
                alt="Logo"
                height={10}
                width={95}
              />
            </div>
          </div>
          <div className="gap-4 flex flex-col">
            {/* Render icons dynamically */}
            {icons.map((icon, index) => (
              <div
                key={index}
                className="mt-2 flex items-center gap-4 active:font-bold cursor-pointer hover:bg-gray-200 ease-out duration-500 group p-2 mr-2 rounded-lg"
              >
                <img src={icon.src} alt={icon.alt} height={10} width={25} />
                <span className="md:hidden lg:flex">{icon.label}</span>
              </div>
            ))}
          </div>
          {/* Footer */}
          <div className="gap-4 mt-8">
            {Ficons.map((icon, index) => (
              <div
                key={index}
                className="flex items-center gap-4 active:font-bold cursor-pointer hover:bg-gray-200 p-2 mr-2  ease-out duration-500 group rounded-lg pl-0"
              >
                <img
                  className="rounded-full"
                  src={icon.src}
                  alt={icon.alt}
                  height={10}
                  width={30}
                />
                <span className="md:hidden lg:flex">{icon.label}</span>
              </div>
            ))}
          </div>
        </div>
   
        <Feed_large  />
        <Profile className="" />
      </main>
      <Sidebar_mobile />
    </>
  );
}

export default Sidebar;
