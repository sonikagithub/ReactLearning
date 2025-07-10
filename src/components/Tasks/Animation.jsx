import React, { useState } from "react";

const cards = [
  {
    id: "1",
    text: "Agar aap kisi job ke liye post karte ho to aapki minimum zimmedari banti hai ki jo bhi candidate apply kare, usko ek clear confirmation diya jaye ki uska form successfully receive hua hai ya nahi.",
  },
  {
    id: "2",
    text: "Job post karne wale ki zimmedari hai ki candidate ko form receive hone ki confirmation de aur shortlist na hone ka clear reason bataye.",
  },
  {
    id: "3",
    text: "Hiring process transparent aur respectful honi chahiye, silence professional nahi hota.",
  },
  {
    id: "4",
    text: "Candidate ne apna time nikal kar form fill kiya hai, to kam se kam itna batana jaruri hai ki uska application process me consider hua ya nahi.",
  },
];

const Animation = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  return (
    <div className="flex flex-col items-center justify-center  bg-gray-100 p-4">
      <div className="w-full md:w-1/2 bg-white rounded-lg shadow p-6 text-center mb-4">
        <h1 className="text-lg font-semibold">{cards[currentIndex].text}</h1>
      </div>

      <div className="flex gap-4">
        <button
          onClick={handlePrev}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Prev
        </button>
        <button
          onClick={handleNext}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Animation;
