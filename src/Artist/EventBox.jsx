import { Icon } from "@iconify/react";

export default function EventBox({ isOpen, onClose, events }) {
  if (!isOpen) return null;

  return (
    <div>
      <div className="bg-white border border-gray-500 rounded-md w-full p-4 relative">
        {events ? (
          <div>
            <div className="flex border-gray-300 pb-2 py-4">
              <p className="text-2xl text-cyan-500 font-bold border-r border-gray-700 pr-3 mr-2">
                {events.title || "Event Title"}
              </p>
              <div>
              <div className="flex items-center text-xl">
              <Icon icon="lsicon:location-outline" className="text-cyan-500 mr-1" />
              <p>{events.address || "Address not provided"}</p>
            </div>
            </div>
            </div>
            <div className="flex items-center mb-2">
                <p className="font-bold text-green-500">Start: </p>
                <span className="pl-2">{events.startDate || "N/A"},</span>
                <span className="pl-2">{events.startTime || "N/A"}</span>
              </div>
              <div className="flex items-center mb-2">
                <p className="font-bold text-red-500">End:  </p>
                <span className="pl-2">{events.endDate || "N/A"},</span>
                <span className="pl-2">{events.endTime || "N/A"}</span>
              </div>
            <div className="mb-2">
              <p className="font-bold">Description:</p>
              <p>{events.description || "No description provided"}</p>
            </div>
          </div>
        ) : (
          <p className="text-gray-500 text-center">No events uploaded yet.</p>
        )}
      </div>
    </div>
  );
}
