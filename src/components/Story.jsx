import React from 'react';

// Sample data for stories
const storiesData = [
  { id: 1, username: 'Your Story', imageUrl: 'https://via.placeholder.com/150' },
  { id: 2, username: 'Asimeazhar', imageUrl: 'https://instagrabber.reasadazim.com/media/downloads/photos/adWCOkPwtApYpPZXGAhQjrMX.jpg' },
  
  // Add more stories as needed
];

function Story() {
  return (
    <div className="flex space-x-4 p-4">
      {storiesData.map(story => (
        <div key={story.id} className="flex flex-col items-center">
          <img
            src={story.imageUrl}
            alt={`Story by ${story.username}`}
            className="w-12 h-12 rounded-full object-cover border border-[#D712C7]"
          />
          <span className="text-sm mt-1">{story.username}</span>
        </div>
      ))}
    </div>
  );
}

export default Story;
