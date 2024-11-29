import { useNavigate, Link, useParams } from "react-router-dom";
import { Icon } from "@iconify/react";
import { setDocumentTitle } from "@/utils/document";
import { useState, useEffect } from "react";
import ArtistsData from "@/utils/db_artists";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button";




const ArtistProfileFromData = ({ artistData: initialArtistData }) => {
    
  const { id } = useParams()
  setDocumentTitle("Profile | Lokal-Art");
  const navigate = useNavigate();
  const artist = ArtistsData.artists.find((artist) => artist.id === parseInt(id));
  const category = artist.categories.map((category) => category);


  return (
    <div className="h-screen bg-gray-100">
      <nav className="h-15 font-bold flex justify-between items-center shadow-md font-sans px-8 fixed top-0 w-full z-50 bg-white">
        <div className="flex items-center">
          <img
            src="/images/logo-blue.png"
            alt="LokalArt Logo"
            className="w-48"
          />
        </div>
        <div className="flex justify-center items-center p-5">
          <a
            className="mr-10 border-b-2 border-cyan-500 text-m"
            href="/client/discover"
          >
            Discover
          </a>
          <a className="mr-10 hover:text-cyan-500 text-m" href="#">
            Transaction
          </a>
          <a className="hover:text-cyan-500 text-m" href="#">
            Messages
          </a>
        </div>
        <div className="flex items-center p-5">
          <i className="fa-solid fa-bell hover:text-cyan-500 cursor-pointer text-xl mr-4"></i>
          <div className="bg-cyan-900 rounded-full h-8 w-8 mr-4"></div>
          <button className="bg-cyan-500 h-8 w-20 rounded-2xl text-white hover:bg-cyan-300">
            <Link to={"/login"}>Logout</Link>
          </button>
        </div>
      </nav>

      <main className="pt-10">
        {/* Banner Photo Upload Section */}
        <div className="relative w-full h-48 bg-gray-200 mb-16">

          {/* Profile Photo Upload Section */}
          <div className="absolute -bottom-16 left-8">

            <label htmlFor="profile-upload" className="">
                <img
                  src={artist.profilePic}
                  alt="Profile"
                  className="w-40 h-40 rounded-full object-cover border-4 border-white"
                />
            </label>
          </div>
        </div>

        {/* User Information Section */}
        <div className="mt-20 px-8">
          {/* Create a flex container to hold both sections */}
          <div className="flex">
            {/* Left section - existing user info */}
            <div className=" flex-1 max-w-md w-[20rem] max-h-96 border-r border-slate-400 mr-4">
              <div className="flex items-center space-x-4">
                <h1 className="text-3xl font-bold">{artist.name}</h1>
              </div>
              <p className="text-gray-600 mt-1">
                {category.join(", ")}
              </p>

              <div className="mt-6 space-y-2 text-gray-600">
                <div className="flex items-center mb-6">
                    {artist.bio}
                  {/* {bio && <i>"{bio}"</i>} */}
                </div>

                <div className="mt-4 flex w-full flex-col gap-2 p-5">
                  <Button className="w-full">Message</Button>
                  <Button variant="outline" className="w-full">
                    Unfollow
                  </Button>
                  <Button variant="secondary" className="w-full">
                    Book a Transaction
                  </Button>
                </div>

                <div className="flex items-center space-x-2">
                  <Icon icon="mdi:map-marker" width="20" height="20" />
                  <span>{artist.location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon icon="mdi:calendar" width="20" height="20" />
                  <span>{artist.birthday}</span>
                </div>
              </div>

              {/* Stats Section - moved outside the flex container */}
              <div className="mt-16 flex space-x-11">
                <div className="flex flex-col items-center">
                  <span className="text-2xl font-bold">9</span>
                  <div className="flex items-center space-x-1 text-gray-600 text-sm">
                    <Icon icon="ix:workspace" width="16" height="16" />
                    <span>Works</span>
                  </div>
                </div>

                <div className="flex flex-col items-center">
                  <span className="text-2xl font-bold">13.5k</span>
                  <div className="flex items-center space-x-1 text-gray-600 text-sm">
                    <Icon icon="mdi:account-group" width="16" height="16" />
                    <span>Followers</span>
                  </div>
                </div>

                <div className="flex flex-col items-center">
                  <span className="text-2xl font-bold">3.4</span>
                  <div className="flex items-center space-x-1 text-gray-600 text-sm">
                    <Icon icon="mdi:star" width="16" height="16" />
                    <span>Ratings</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right section with border - Fixed structure */}
            <div className="md:col-span-3">
            <Tabs defaultValue="works" className="w-full h-full">
              <TabsList className="flex justify-start gap-1 w-[14.7rem]">
                <TabsTrigger value="works">Works</TabsTrigger>
                <TabsTrigger value="followers">Followers</TabsTrigger>
                <TabsTrigger value="events">Events</TabsTrigger>
              </TabsList>
              <TabsContent value="works" className="mt-6">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {artist.works.map((_, i) => (
                    <div key={i} className="space-y-4">
                      <Dialog>
                        <DialogTrigger>
                          <Card>
                            <CardContent className="p-0">
                              <img
                                src={artist.works[i]}
                                alt="Ocean Serenity"
                                width={400}
                                height={300}
                                className="aspect-[4/3] object-cover"
                              />
                            </CardContent>
                          </Card>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                          <DialogTitle>Art Title</DialogTitle>
                          <CardContent className="p-0">
                            <img
                              src={artist.works[i]}
                              alt="Ocean Serenity"
                              className="object-cover"
                            />
                          </CardContent>
                        </DialogContent>
                      </Dialog>
                    </div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="followers">
                <div className="text-center text-muted-foreground">No followers to display</div>
              </TabsContent>
              <TabsContent value="events">
                <div className="text-center text-muted-foreground">No events to display</div>
              </TabsContent>
            </Tabs>

          </div>
          </div>
        </div>
      </main>

      {/* Add Modal */}
      {/* <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        artistData={artistData}
        onUpdate={handleProfileUpdate}
      /> */}
      {/* <UploadPopup
        isOpen={isUploadPopupOpen}
        onClose={() => setIsUploadPopupOpen(false)}
      /> */}
    </div>
  );
};

export default ArtistProfileFromData;
