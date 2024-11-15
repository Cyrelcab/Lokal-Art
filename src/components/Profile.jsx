

export default function Profile(){
    return (
        <>
        <section>
            {/* Profile Cover Photo*/}
            <div className="h-[200px] w-screen max-w-full overflow-hidden">
                <img className="w-screen" src="/images/cover-photo.jpg" alt="Cover Photo" />
            </div>
            <img className="cursor-pointer shadow-md object-cover mt-[-150px] ml-20 rounded-full h-[200px] w-[200px]" 
            src="/images/profile-photo.jpg" alt="Profile Photo" />

            {/* contents */}
            <div className="flex flex-row gap-10">
                <div className="h-full w-[20rem] border-solid border-r-2 border-r-gray-300 ml-20 flex flex-col justify-around gap-[50px] mt-5 pr-5">
                    {/* name */}
                    <div>
                        <h1 className="text-2xl font-bold">John Doe</h1>
                        <p className="text-gray-500 ">Painter, Visual Artist</p>
                        <p className="pt-7">"If I could say it in words there would be no reason to paint.”</p>
                    </div>

                    {/* buttons */}
                    <div className="flex flex-col w-60 items-center">
                        <div className="pb-2">
                            <button className="h-8 w-[6rem] bg-cyan-500 rounded-full text-white mr-1 hover:bg-cyan-400">Message</button>
                            <button className="h-8 w-[6rem] bg-cyan-500 rounded-full text-white hover:bg-cyan-400">Follow</button><br />
                        </div>
                        <button className="h-8 w-[12.3rem] bg-cyan-500 rounded-full text-white hover:bg-cyan-400">Book a Transaction</button>
                    </div>
                    <div>
                        {/* information */}
                        <i className="fa-solid fa-globe text-cyan-500 pr-2"></i><span>Libertad, Butuan City, Philippines</span><br />
                        <i class="fa-solid fa-cake-candles text-cyan-500 pr-2"></i><span>January 19, 2003</span>
                    </div>
                    {/* works-followers-ratings */}
                    <div className="flex justify-around text-center">
                        <div>
                            {/* works */}
                            <h1 className="text-4xl font-bold">9</h1>
                            <i class="fa-solid fa-suitcase text-cyan-500"></i> <span>Works</span>
                        </div>
                        <div>
                            {/* follower */}
                            <h1 className="text-4xl font-bold">13.5k</h1>
                            <i class="fa-solid fa-user-plus text-cyan-500"></i> <span>Followers</span>
                        </div>
                        <div>
                            {/* ratings */}
                            <h1 className="text-4xl font-bold">3.4</h1>
                            <i class="fa-solid fa-star text-cyan-500"></i> <span>Ratings</span>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="pt-5 w-[70vw]">
                        <span className="mr-20 font-bold hover:text-cyan-500"><a href="#">Works</a></span>
                        <span className="mr-20 font-bold hover:text-cyan-500"><a href="#">Followers</a></span>
                        <span className="mr-20 font-bold hover:text-cyan-500"><a href="#">Events</a></span>
                    </div>
                     {/* image container */}
                     {/* this is where i left */}
                    <div className="w-inherit h-full pt-10
                                    grid grid-cols-3 justify-items-center"> 
                       {/* image-card */}
                        <div className="">
                            <img className="object-cover h-52 w-72 rounded-lg" src="\images\image1.jfif" alt="Image1" />
                            <p className="font-medium">Ocean Serenity</p>
                        </div>
                        <div className="">
                            <img className="object-cover h-52 w-72 rounded-lg" src="\images\image1.jfif" alt="Image1" />
                            <p className="font-medium">Ocean Serenity</p>
                        </div>
                        <div className="">
                            <img className="object-cover h-52 w-72 rounded-lg" src="\images\image1.jfif" alt="Image1" />
                            <p className="font-medium">Ocean Serenity</p>
                        </div>
                        <div className="">
                            <img className="object-cover h-52 w-72 rounded-lg" src="\images\image1.jfif" alt="Image1" />
                            <p className="font-medium">Ocean Serenity</p>
                        </div>
                        <div className="">
                            <img className="object-cover h-52 w-72 rounded-lg" src="\images\image1.jfif" alt="Image1" />
                            <p className="font-medium">Ocean Serenity</p>
                        </div>
                        <div className="">
                            <img className="object-cover h-52 w-72 rounded-lg" src="\images\image1.jfif" alt="Image1" />
                            <p className="font-medium">Ocean Serenity</p>
                        </div>
                        
                    </div>
                </div>
            </div>
            
        </section>


        </>
    )

}