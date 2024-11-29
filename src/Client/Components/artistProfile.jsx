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
import { Textarea } from "@/components/ui/textarea";
import {ToastContainer, toast} from "react-toastify";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"


const ArtistProfileFromData = ({ artistData: initialArtistData }) => {
    
  const { id } = useParams()
  setDocumentTitle("Profile | Lokal-Art");
  const navigate = useNavigate();
  const artist = ArtistsData.artists.find((artist) => artist.id === parseInt(id));
  const category = artist.categories.map((category) => category);

  const handleMessage = (e) => {
    e.preventDefault();
    toast.success('Message Sent');
  }

  const [date, setDate] = useState(new Date())

  return (
    <div className="h-full max-h-screen bg-gray-100">
            <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={true}
        newestOnTop={false}
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover={false}
        theme="light"
        limit={1}
        closeButton={false}
      />
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
          <div className="flex text-sm">
            {/* Left section - existing user info */}
            <div className=" flex-1 max-w-[20rem] w-[20rem] max-h-96 border-r border-slate-400 mr-4">
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
                  <Dialog>
                    <DialogTrigger asChild>
                    <Button className="w-full">Message</Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Message</DialogTitle>
                      </DialogHeader>
                      <DialogDescription>Send your message for Transactions and Bookings</DialogDescription>
                      <Textarea placeholder="Type message here..."></Textarea>
                      <Button type="submit" onClick={handleMessage}>Send</Button>
                    </DialogContent>
                  </Dialog>
                 
                  <Button variant="outline" className="w-full">
                    Unfollow
                  </Button>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="secondary" className="w-full">
                      Book a Transaction
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader><DialogTitle>Transaction Information</DialogTitle></DialogHeader>
                      <DialogDescription>Input necessary information for transactions</DialogDescription>
                        <div className="grid w-full items-center gap-1.5">
                          <Label htmlFor='name'>Customer Name</Label>
                          <Input id='name' type='text'/>
                        </div>
                        <div className="grid w-full items-center gap-1.5">
                          <Label htmlFor='serviceType'>Service Type</Label>
                          <Input id='serviceType' type='text'/>
                        </div>
                        <div className="grid w-full items-center gap-1.5">
                          <Label htmlFor='date'>Date</Label>
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "w-[280px] justify-start text-left font-normal",
                                  !date && "text-muted-foreground"
                                )}
                              >
                                <CalendarIcon />
                                {date ? format(date, "PPP") : <span>Pick a date</span>}
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                              <Calendar
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                        </div>
                        <Label htmlFor='payment'>Payment Method</Label>
                        <Select>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select a payment method" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Methods</SelectLabel>
                              <SelectItem value="gcash">GCash</SelectItem>
                              <SelectItem value="paymaya">Paymaya</SelectItem>
                              <SelectItem value="paypal">Paypal</SelectItem>
                              <SelectItem value="bdo">BDO</SelectItem>
                              <SelectItem value="metrobank">MetroBank</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                        <div className="grid w-full items-center gap-1.5">
                          <Label htmlFor='amount'>Payment amount</Label>
                          <Input id='serviceType' type='number'/>
                        </div>
                        <div className="grid w-full items-center gap-1.5">
                          <Label htmlFor='amount'>Contact number</Label>
                          <Input id='serviceType' type='number'/>
                        </div>
                        <div className="flex justify-center items-center space-x-2">
                          <Checkbox id="terms" />
                          <label
                            htmlFor="terms"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Accept terms and conditions
                          </label>
                        </div>
                        <Button>Done</Button>
                    </DialogContent>
                    
                  </Dialog>
                  
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
              <div className="mt-5 flex space-x-11">
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
                                alt="Art Title"
                                width={400}
                                height={300}
                                className="aspect-[4/3] object-cover"
                              />
                            </CardContent>
                          </Card>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[320px]">
                          <DialogTitle>Art Title</DialogTitle>
                          <CardContent className="p-0">
                            <img
                              src={artist.works[i]}
                              alt="Art Title"
                              className="object-cover"
                            />
                            <p className="font-bold">Artist: {artist.name}</p>
                            <p className="font-bold mb-2">Description: {artist.description}</p>
                            <div className="mt-5">
                              <Textarea placeholder="Type your comment here.."/>
                            </div>
                            <div className="mt-5 flex justify-end">
                              <Button className="">Comment</Button>
                            </div>
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
