import React from 'react';
import Notification from "../assets/notification.png"
import comnt from "../assets/comnt.png"
import Share from '../assets/message.png'
import Story from './Story';
const postsData = [
  {
    id: 1,
    imageUrl: "https://instagrabber.reasadazim.com/media/downloads/photos/JZhyIDkJKRIfTwoVMjAckYrZ.jpg",
    username: "asimazhar",
    avatarUrl: "https://instagrabber.reasadazim.com/media/downloads/photos/adWCOkPwtApYpPZXGAhQjrMX.jpg",
    likes: 100,
    comments: [
      { id: 1, username: "user1", text: "Comment 1" },
      { id: 2, username: "user2", text: "Comment 2" }
    ]
  },
  {
    id: 2,
    imageUrl: "https://instagrabber.reasadazim.com/media/downloads/photos/JZhyIDkJKRIfTwoVMjAckYrZ.jpg",
    username: "username2",
    avatarUrl: "https://instagrabber.reasadazim.com/media/downloads/photos/JZhyIDkJKRIfTwoVMjAckYrZ.jpg",
    likes: 200,
    comments: [
      { id: 1, username: "user3", text: "Comment 3" },
      { id: 2, username: "user4", text: "Comment 4" }
    ]
  }
  // Add more post objects as needed
];

function Feed_large() {
  return (
    <>

    <div className="lg:block md:block sm:hidden hidden lg:w-[50%] md:w-[84%] sm:w-full w-full">
    <Story/>
      {postsData.map((post) => (
        <div key={post.id} className=" mb-4 flex justify-center items-center w-[500px] mx-40px my-30px mb-50px">
          
          <div className="border border-gray-300 rounded-lg overflow-hidden">
          <div className="flex  items-center flex-row mb-6 mt-2 ml-2">
                <img
                  src={post.avatarUrl}
                  alt="User Avatar"
                  className="w-8 h-8 rounded-full mr-2"
                />
                <span className="font-semibold">{post.username}</span>
              </div>
            <img src={post.imageUrl} alt="Post" className="w-full" />
            <div className="p-3">
              <div className="flex flex-row items-center gap-4">
                <img src={Notification} alt="Like" className="w-6 h-6 mr-1" />
                <img src={comnt} alt="" className="w-7 h-7 mr-1" />
                <img src={Share} alt="Like" className="w-6 h-6 mr-1" />
                <span className="font-semibold">{post.likes}</span>{" "}
                <span>Likes</span>
              </div>
              <div className="mt-1">
                {post.comments.length}{" "}
                <span>{post.comments.length === 1 ? "Comment" : "Comments"}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </>
  );
}

export default Feed_large;
