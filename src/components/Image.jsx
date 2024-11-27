export function Image({ image }) {
  return (
    <div className="w-full bg-gray-200 h-auto pt-[80%] relative">
      {image !== 'None' && (
        <img
          className="absolute top-0 left-0 w-full h-full object-cover "
          src={image}
        />
      )}
    </div>
  );
}
