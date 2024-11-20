import { Icon } from "@iconify/react";

export default function ArtistBox() {
  return (
    <div className="pb-5 grid grid-cols-2 gap-5">
        {/* 1 */}
      <div className="border border-gray-500 bg-gray-100 flex w-[34rem] rounded-xl">
        {/* Profile Pic */}
        <div>
          <img
            className="cursor-pointer shadow-md object-cover mx-5 my-5 rounded-full h-[100px] w-[100px]"
            src="/images/profile-photo.jpg"
            alt="Profile Photo"
          />
        </div>
        {/* Name, Category, Works */}
        <div>
          {/* Name */}
          <div className="flex mt-5 mr-5 text-lg">
            <p className="pr-1 font-bold">Jonathan Wick</p>
            <p className="border-l-2 border-gray-300 ml-1 pl-1 text-gray-400">
              Painter, Digital Artist
            </p>
          </div>
          {/* Category */}
          <div className="flex text-gray-400">
            <Icon icon="lsicon:location-outline" className="text-xl mt-1" />
            <p className="text-gray-400">Butuan City, Philippines</p>
          </div>
          {/* Works */}
          <div className="mt-4">
            <div className="flex font-bold">
              <p>Works</p>
              <Icon
                icon="simple-line-icons:arrow-right"
                className="mt-1 ml-1"
              />
            </div>
            <div className="mt-2 mb-5 grid grid-cols-3 gap-3">
              <img
                className="object-cover w-28 h-20 rounded-lg"
                src="\images\Artist\img2.jpg"
                alt="Image6"
              />

              <img
                className="object-cover w-28 h-20 rounded-lg"
                src="\images\Artist\img14.jpg"
                alt="Image6"
              />

              <img
                className="object-cover w-28 h-20 rounded-lg"
                src="\images\Artist\img16.jpg"
                alt="Image6"
              />
            </div>
          </div>
        </div>
      </div>

        {/* 2 */}
      <div className="border border-gray-500 bg-gray-100 flex w-[34rem] rounded-xl">
        {/* Profile Pic */}
        <div>
          <img
            className="cursor-pointer shadow-md object-cover mx-5 my-5 rounded-full h-[100px] w-[100px]"
            src="/images/Artist/prof1.jpg"
            alt="Profile Photo"
          />
        </div>
        {/* Name, Category, Works */}
        <div>
          {/* Name */}
          <div className="flex mt-5 mr-5 text-lg">
            <p className="pr-1 font-bold">John Doe</p>
            <p className="border-l-2 border-gray-300 ml-1 pl-1 text-gray-400">
              Tatto Artist
            </p>
          </div>
          {/* Category */}
          <div className="flex text-gray-400">
            <Icon icon="lsicon:location-outline" className="text-xl mt-1" />
            <p className="text-gray-400">Butuan City, Philippines</p>
          </div>
          {/* Works */}
          <div className="mt-4">
            <div className="flex font-bold">
              <p>Works</p>
              <Icon
                icon="simple-line-icons:arrow-right"
                className="mt-1 ml-1"
              />
            </div>
            <div className="mt-2 mb-5 grid grid-cols-3 gap-3">
              <img
                className="object-cover w-28 h-20 rounded-lg"
                src="\images\Artist\tattoo1.jpg"
                alt="Image6"
              />

              <img
                className="object-cover w-28 h-20 rounded-lg"
                src="\images\Artist\tattoo3.jpg"
                alt="Image6"
              />

              <img
                className="object-cover w-28 h-20 rounded-lg"
                src="\images\Artist\tattoo4.jpg"
                alt="Image6"
              />
            </div>
          </div>
        </div>
      </div>

        {/* 3 */}
      <div className="border border-gray-500 bg-gray-100 flex w-[34rem] rounded-xl">
        {/* Profile Pic */}
        <div>
          <img
            className="cursor-pointer shadow-md object-cover mx-5 my-5 rounded-full h-[100px] w-[100px]"
            src="/images/Artist/prof2.jpg"
            alt="Profile Photo"
          />
        </div>
        {/* Name, Category, Works */}
        <div>
          {/* Name */}
          <div className="flex mt-5 mr-5 text-lg">
            <p className="pr-1 font-bold">Melissa Hudson</p>
            <p className="border-l-2 border-gray-300 ml-1 pl-1 text-gray-400">
              Painter
            </p>
          </div>
          {/* Category */}
          <div className="flex text-gray-400">
            <Icon icon="lsicon:location-outline" className="text-xl mt-1" />
            <p className="text-gray-400">Butuan City, Philippines</p>
          </div>
          {/* Works */}
          <div className="mt-4">
            <div className="flex font-bold">
              <p>Works</p>
              <Icon
                icon="simple-line-icons:arrow-right"
                className="mt-1 ml-1"
              />
            </div>
            <div className="mt-2 mb-5 grid grid-cols-3 gap-3">
              <img
                className="object-cover w-28 h-20 rounded-lg"
                src="\images\Artist\paint1.jpg"
                alt="Image6"
              />

              <img
                className="object-cover w-28 h-20 rounded-lg"
                src="\images\Artist\paint2.jpg"
                alt="Image6"
              />

              <img
                className="object-cover w-28 h-20 rounded-lg"
                src="\images\Artist\paint3.jpg"
                alt="Image6"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 4 */}
      <div className="border border-gray-500 bg-gray-100 flex w-[34rem] rounded-xl">
        {/* Profile Pic */}
        <div>
          <img
            className="cursor-pointer shadow-md object-cover mx-5 my-5 rounded-full h-[100px] w-[100px]"
            src="/images/Artist/prof3.jpg"
            alt="Profile Photo"
          />
        </div>
        {/* Name, Category, Works */}
        <div>
          {/* Name */}
          <div className="flex mt-5 mr-5 text-lg">
            <p className="pr-1 font-bold">Mark Steel</p>
            <p className="border-l-2 border-gray-300 ml-1 pl-1 text-gray-400">
              Tattoo, Digital Artist
            </p>
          </div>
          {/* Category */}
          <div className="flex text-gray-400">
            <Icon icon="lsicon:location-outline" className="text-xl mt-1" />
            <p className="text-gray-400">Butuan City, Philippines</p>
          </div>
          {/* Works */}
          <div className="mt-4">
            <div className="flex font-bold">
              <p>Works</p>
              <Icon
                icon="simple-line-icons:arrow-right"
                className="mt-1 ml-1 text-sm"
              />
            </div>
            <div className="mt-2 mb-5 grid grid-cols-3 gap-3">
              <img
                className="object-cover w-28 h-20 rounded-lg"
                src="\images\Artist\tattoo4.jpg"
                alt="Image6"
              />

              <img
                className="object-cover w-28 h-20 rounded-lg"
                src="\images\Artist\mecha1.jpg"
                alt="Image6"
              />

              <img
                className="object-cover w-28 h-20 rounded-lg"
                src="\images\Artist\tattoo5.jpg"
                alt="Image6"
              />
            </div>
          </div>
        </div>
      </div>
      {/* 5 */}
      <div className="border border-gray-500 bg-gray-100 flex w-[34rem] rounded-xl">
        {/* Profile Pic */}
        <div>
          <img
            className="cursor-pointer shadow-md object-cover mx-5 my-5 rounded-full h-[100px] w-[100px]"
            src="/images/Artist/prof5.jpg"
            alt="Profile Photo"
          />
        </div>
        {/* Name, Category, Works */}
        <div>
          {/* Name */}
          <div className="flex mt-5 mr-5 text-lg">
            <p className="pr-1 font-bold">Spider-Man</p>
            <p className="border-l-2 border-gray-300 ml-1 pl-1 text-gray-400">
              Digital Artist
            </p>
          </div>
          {/* Category */}
          <div className="flex text-gray-400">
            <Icon icon="lsicon:location-outline" className="text-xl mt-1" />
            <p className="text-gray-400">Butuan City, Philippines</p>
          </div>
          {/* Works */}
          <div className="mt-4">
            <div className="flex font-bold">
              <p>Works</p>
              <Icon
                icon="simple-line-icons:arrow-right"
                className="mt-1 ml-1"
              />
            </div>
            <div className="mt-2 mb-5 grid grid-cols-3 gap-3">
              <img
                className="object-cover w-28 h-20 rounded-lg"
                src="\images\Artist\img15.jpg"
                alt="Image6"
              />

              <img
                className="object-cover w-28 h-20 rounded-lg"
                src="\images\Artist\mecha3.jpg"
                alt="Image6"
              />

              <img
                className="object-cover w-28 h-20 rounded-lg"
                src="\images\Artist\mecha6.jpg"
                alt="Image6"
              />
            </div>
          </div>
        </div>
      </div>
      {/* 6 */}
      <div className="border border-gray-500 bg-gray-100 flex w-[34rem] rounded-xl">
        {/* Profile Pic */}
        <div>
          <img
            className="cursor-pointer shadow-md object-cover mx-5 my-5 rounded-full h-[100px] w-[100px]"
            src="/images/Artist/prof4.jpg"
            alt="Profile Photo"
          />
        </div>
        {/* Name, Category, Works */}
        <div>
          {/* Name */}
          <div className="flex mt-5 mr-5 text-lg">
            <p className="pr-1 font-bold">Lance Lancer</p>
            <p className="border-l-2 border-gray-300 ml-1 pl-1 text-gray-400">
              Painter, Digital, Tattoo Artist
            </p>
          </div>
          {/* Category */}
          <div className="flex text-gray-400">
            <Icon icon="lsicon:location-outline" className="text-xl mt-1" />
            <p className="text-gray-400">Butuan City, Philippines</p>
          </div>
          {/* Works */}
          <div className="mt-4">
            <div className="flex font-bold">
              <p>Works</p>
              <Icon
                icon="simple-line-icons:arrow-right"
                className="mt-1 ml-1 text-sm"
              />
            </div>
            <div className="mt-2 mb-5 grid grid-cols-3 gap-3">
              <img
                className="object-cover w-28 h-20 rounded-lg"
                src="\images\Artist\tattoo9.jpg"
                alt="Image6"
              />

              <img
                className="object-cover w-28 h-20 rounded-lg"
                src="\images\Artist\img13.jpg"
                alt="Image6"
              />

              <img
                className="object-cover w-28 h-20 rounded-lg"
                src="\images\Artist\paint5.jpg"
                alt="Image6"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
