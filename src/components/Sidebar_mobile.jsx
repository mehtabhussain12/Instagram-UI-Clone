import React from "react";
import logo from "../assets/logo.png";
import notification from "../assets/notification.png";
import home from "../assets/Home.png";
import search from "../assets/search.png";
import newpost from "../assets/newpost.png";
import user from "../assets/user.png";
import Feed from "./Feed"
import explore from "../assets/explore.png";
import message from "../assets/message.png";

function Sidebar_mobile() {
  return (
    <>
      <main className=" lg:hidden md:hidden ">
        <div className="flex justify-between  p-4">
          <div className="lg-[320px]:hidden md-[470px]:flex">
            <img
              className="md:hidden flex"
              src={logo}
              alt="instagram"
              height={10}
              width={110}
            />
          </div>
          <div className="flex ">
            <div className="pr-4">
              <input
                class="px-16 py-2 font-normal placeholder:text-base text-black w-full border rounded-md hover:border bg-gray-200 placeholder-gray-600 border-gray-300 outline-none text-sm"
                type="search"
                placeholder="Search"
              />
            </div>
            <div className="">
              <img
                src={notification}
                alt="notification"
                height={10}
                width={25}
              />
            </div>
          </div>
        </div>
        <nav className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-300 p-3 flex justify-around items-center lg:hidden md:hidden">
      <img src={home} alt="Home" className="w-6 h-6" />
      <img src={search} alt="Search" className="w-6 h-6" />
      <img src={newpost} alt="New Post" className="w-6 h-6" />
      <img src={notification} alt="Notification" className="w-6 h-6" />
      <img src={user} alt="Profile" className="w-6 h-6" />
      <img src={message} alt="Profile" className="w-6 h-6" />
      <img src={explore} alt="Profile" className="w-6 h-6" />
    </nav>
      </main>
     
    <Feed/>
    </>
  );
}

export default Sidebar_mobile;
