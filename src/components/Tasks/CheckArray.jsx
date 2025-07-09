import React from "react";

const CheckArray = ({ data }) => {
  if (!Array.isArray(data)) return <p>No data available.</p>;

  return (
    <>
      <h1 className="col-span-full text-2xl font-bold mb-4 text-center">
        User Component
      </h1>
      {data.map((user, index) => (
        <div
          key={user.id + "-" + index}
          className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
        >
          <img
            className="h-32 w-32 rounded-full object-cover mx-auto mb-4"
            src={user.img}
            alt={user.name}
          />
          <h2 className="text-xl font-semibold text-gray-800 text-center">
            {user.name}
          </h2>
          <p className="text-gray-600 text-center">Id: {user.id}</p>
          <p className="text-gray-600 text-center">Age: {user.age}</p>
          <p className="text-gray-600 text-center">Email: {user.email}</p>
        </div>
      ))}
    </>
  );
};

export default CheckArray;
