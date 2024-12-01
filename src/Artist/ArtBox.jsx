const ArtBox = ({ isOpen, onClose, artwork }) => {
  if (!isOpen) return null;

  return (
    <div>
      <div className="bg-white rounded-md w-full p-4 relative">
        <div className="h-full grid grid-cols-1 lg:grid-cols-3 justify-center items-center gap-5 w-full">
          {artwork ? (
            <div
              className="relative w-64 h-52"
              style={{
                textShadow:
                  "1px 1px 2px black, -1px -1px 2px black, 1px -1px 2px black, -1px 1px 2px black",
              }}
            >
              <img
                src={artwork.image}
                className="object-cover w-full h-full rounded-lg"
                alt={artwork.title || "Artwork"}
              />
              <p className="absolute bottom-2 left-2 text-white font-bold px-2 py-1 rounded">
                {artwork.title || "Untitled"}
              </p>
            </div>
          ) : (
            <div className="flex flex-col justify-center items-center h-full col-span-3">
              <p>No artworks uploaded yet.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ArtBox;
