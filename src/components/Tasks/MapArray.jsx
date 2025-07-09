import React from "react";
import CheckArray from "./CheckArray";

const MapArray = () => {
  const userName = [
    {
      name: "Pooja",
      age: "24",
      email: "pooja@gmail.com",
      id: 0,
      img: "https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ=",
    },
    {
      name: "Shreya",
      age: "24",
      email: "shreya@gmail.com",
      id: 1,
      img: "https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ=",
    },
    {
      name: "Arpit",
      age: "24",
      email: "arpit@gmail.com",
      id: 2,
      img: "https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ=",
    },
    {
      name: "Mahima",
      age: "24",
      email: "mahima@gmail.com",
      id: 3,
      img: "https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ=",
    },
    {
      name: "Rudra",
      age: "24",
      email: "rudra@gmail.com",
      id: 4,
      img: "https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-600nw-1714666150.jpg",
    },
    {
      name: "Nandani",
      age: "24",
      email: "Nandani@gmail.com",
      id: 5, // fixed duplicate ID
      img: "https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-600nw-1714666150.jpg",
    },
  ];

  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-900">
        User List
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <CheckArray data={userName} />
      </div>
    </div>
  );
};

export default MapArray;
