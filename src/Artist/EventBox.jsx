export default function EventBox(){
    return (
        <div className="flex border left-0 w-full bg-gray-100 border-gray-500 rounded-md">
            <div className="">
                <p className="text-xl p-3 border border-r-gray-500">Title</p>
                
            </div>
            <div>
            <p className="pl-3 font-bold">Start:</p>
            <p className="pl-3 font-bold">End:</p>
            </div>
        </div>
    );
}