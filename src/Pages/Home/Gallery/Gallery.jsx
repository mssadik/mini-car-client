import React, { useEffect, useState } from 'react';

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch('gallery.json')
      .then(res => res.json())
      .then(data => setImages(data))
  }, []);

  const handleMouseEnter = (index) => {
    const updatedImages = [...images];
    updatedImages[index].hovered = true;
    setImages(updatedImages);
  };

  const handleMouseLeave = (index) => {
    const updatedImages = [...images];
    updatedImages[index].hovered = false;
    setImages(updatedImages);
  };

  return (
    <div>
      <h2 className="text-4xl text-center font-bold ">Our Gallery</h2>
      <hr className='mx-40' />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-40 pt-10">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden transition duration-300 transform hover:scale-105 hover:shadow-lg"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            <img src={image.image} alt={`Image ${index + 1}`} className="w-full rounded-md h-auto" />
            {image.hovered && (
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition duration-300 bg-black bg-opacity-50 text-white">
                <h3 className="text-2xl text-center font-bold mb-2">{image.name}</h3>
                <p className="text-sm text-center">{image.features}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;



























// const Gallery = () => {
//     const images = [
//         'https://i.ibb.co/L99X7Xq/g1.jpg',
//         'https://i.ibb.co/pQHMXHS/g11.jpg',
//         'https://i.ibb.co/CHVW4Rp/g10.webp',
//         'https://i.ibb.co/L99X7Xq/g1.jpg',
//         'https://i.ibb.co/mzQsmHw/g4.jpg',
//         'https://i.ibb.co/5MkNZ39/logcar.jpg',
//         'https://i.ibb.co/pzRYZCy/g2.jpg',
//         'https://i.ibb.co/mzQsmHw/g4.jpg',
//         'https://i.ibb.co/pzRYZCy/g2.jpg',
//         'https://i.ibb.co/bKVnDrN/g7.jpg',
//         'https://i.ibb.co/hFr358M/g8.webp',
//         'https://i.ibb.co/BTFN9sv/g9.jpg',
//         // Add more image URLs here
//     ];

//     return (
//         <div>
//       <h2 className="text-4xl text-center font-bold">Our Gallery</h2>
//       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-40 pt-10">
//         {images.map((image, index) => (
//           <div
//             key={index}
//             className="relative overflow-hidden transition duration-300 transform hover:scale-105 hover:shadow-lg"
//           >
//             <img src={image} alt={`Image ${index + 1}`} className="w-full rounded-md h-auto" />
//           </div>
//         ))}
//       </div>
//     </div>
//     );
// };

// export default Gallery;
