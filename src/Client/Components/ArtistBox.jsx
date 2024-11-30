import { Icon } from "@iconify/react";
import { useState } from "react";
import artistsData from '@/utils/db_artists'
import {Link} from "react-router-dom"
//i-Update sab ni dri kay nawala

// Move artist data to a separate array


export default function ArtistBox({ searchQuery, categoryFilter, locationFilter }) {
  const artists = artistsData.artists
  console.log(artists)

  const filteredArtists = artists.filter(artist => {
    // First apply search filter
    const matchesSearch = artist.name.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Then apply category filter if present
    const matchesCategory = categoryFilter.length === 0 || 
      categoryFilter.some(category => artist.categories.includes(category));
    
    // Then apply location filter if present
    const matchesLocation = locationFilter.length === 0 || 
      locationFilter.some(location => artist.location === location);
    
    // Return true only if all active filters match
    return matchesSearch && matchesCategory && matchesLocation;
  });

  // Add conditional rendering based on filteredArtists length
  if (searchQuery && filteredArtists.length === 0) {
    return (
      <div className="flex justify-center items-center h-[200px]">
        <p className="text-xl text-gray-500">Artist not found</p>
      </div>
    );
  }

  return (
    <div className="pb-5 grid grid-cols-1 gap-6 xl:grid-cols-2 justify-center items-center border">
      {filteredArtists.map((artist) => (
        <div className="border border-gray-500 bg-gray-100 flex w-[24rem] md:w-[35rem] rounded-xl">
          {/* Profile Pic */}
          <div>
            <img
              className="cursor-pointer shadow-md object-cover mx-5 my-5 rounded-full h-[50px] w-[50px] lg:h-[100px] lg:w-[100px]"
              src={artist.profilePic}
              alt="Profile Photo"
            />
          </div>
          {/* Name, Category, Works */}
          <div>
            {/* Name */}
            <div className="flex mt-5 mr-5 text-lg">
              <Link to={`/client/view-artist/${artist.id}`} className="pr-1 font-bold hover:text-cyan-500">{artist.name}</Link>
              <p className="border-l-2 border-gray-300 ml-1 pl-1 text-gray-400">
                {artist.categories.join(", ")}
              </p>
            </div>
            {/* Category */}
            <div className="flex text-gray-400 text-[0.9rem] md:text-lg">
              <Icon icon="lsicon:location-outline" className="mt-1" />
              <p className="text-gray-400">{artist.location}</p>
            </div>
            {/* Works */}
            <div className="mt-4">
              <div className="flex font-bold text-[1rem] md:text-lg">
                <p>Works</p>  
                <Icon
                  icon="simple-line-icons:arrow-right"
                  className="mt-1 ml-1"
                />
              </div>
              <div className="mt-2 mb-5 grid grid-cols-3 gap-5">
                {artist.works.map((work, index) => (
                  <img
                    key={index}
                    className="object-cover w-[5rem] h-[4.5rem] md:w-[7rem] md:h-[5rem] rounded-lg"
                    src={work}
                    alt="Image6"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
