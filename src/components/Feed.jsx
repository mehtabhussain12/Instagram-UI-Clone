import React from "react";
import Notification from "../assets/notification.png"
import comnt from "../assets/comnt.png"
import Share from '../assets/message.png'
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
    imageUrl: "https://instagrabber.reasadazim.com/media/downloads/photos/adWCOkPwtApYpPZXGAhQjrMX.jpg",
    username: "username2",
    avatarUrl: "https://instagrabber.reasadazim.com/media/downloads/photos/adWCOkPwtApYpPZXGAhQjrMX.jpg",
    likes: 200,
    comments: [
      { id: 1, username: "user3", text: "Comment 3" },
      { id: 2, username: "user4", text: "Comment 4" }
    ]
  }
  // Add more post objects as needed
];


function Feed() {
  return (
    <div className="overflow-y-auto  h-screen lg:hidden md:hidden sm:block block">
      {/* Iterate over posts data and render each post */}
      {postsData.map((post) => (
        <div key={post.id} className="p-4 border-b border-gray-300">
          {/* Post Header */}
          <div className="flex items-center mb-2">
            <img
              src={post.avatarUrl}
              alt="User Avatar"
              className="w-8 h-8 rounded-full mr-2"
            />
            <span className="font-semibold">{post.username}</span>
          </div>
          {/* Post Image */}
          <img src={post.imageUrl} alt="Post" className="w-full" />
          {/* Post Metadata (Likes and Comments) */}
          <div className="mt-2 justify-between">
            <div className=" gap-2">
             <div className="flex"> 
              <img src={Notification} alt="Like" className="w-6 h-6 mr-1" />
              <img src={comnt} alt="" className="w-7 h-7 mr-1" />
              <img src={Share} alt="Like" className="w-6 h-6 mr-1" />
             </div>
              <span className="font-semibold">{post.likes}</span>{" "}
              <span>Likes</span>
            </div>
            <div>
              {post.comments.length}{" "}
              <span>{post.comments.length === 1 ? "Comment" : "Comments"}</span>
            </div>
          </div>
          {/* Post Comments */}
          <div className="mt-2">
            {post.comments.map((comment) => (
              <div key={comment.id} className="flex mb-1">
                <span className="font-semibold mr-1">{comment.username}</span>
                <span>{comment.text}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Feed;
