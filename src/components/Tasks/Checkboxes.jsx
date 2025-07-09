import React, { useState } from "react";

const Checkboxes = () => {
  const [skills, setSkills] = useState([]);

  const handleSkills = (event) => {
    if (event.target.checked) {
      setSkills([...skills, event.target.value]);
    } else {
      setSkills(skills.filter((skill) => skill !== event.target.value));
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-blue-100 rounded-lg shadow-md border border-gray-200">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        Select Your Skills
      </h2>

      <div className="flex flex-col gap-3">
        <div className="flex items-center">
          <input
            type="checkbox"
            onChange={handleSkills}
            id="php"
            value="php"
            className="mr-2"
          />
          <label htmlFor="php" className="text-gray-700 font-medium">
            PHP
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            onChange={handleSkills}
            id="java"
            value="java"
            className="mr-2"
          />
          <label htmlFor="java" className="text-gray-700 font-medium">
            JAVA
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            onChange={handleSkills}
            id="node"
            value="node"
            className="mr-2"
          />
          <label htmlFor="node" className="text-gray-700 font-medium">
            NODE
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            onChange={handleSkills}
            id="sql"
            value="sql"
            className="mr-2"
          />
          <label htmlFor="sql" className="text-gray-700 font-medium">
            SQL
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            onChange={handleSkills}
            id="react"
            value="react"
            className="mr-2"
          />
          <label htmlFor="react" className="text-gray-700 font-medium">
            React
          </label>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="font-semibold text-gray-800 mb-1">Skills are here:</h3>
        <p className="text-blue-600">{skills.join(", ") || "None selected"}</p>
      </div>
    </div>
  );
};

export default Checkboxes;
