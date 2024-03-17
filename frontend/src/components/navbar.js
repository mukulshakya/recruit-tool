import React from "react";

const Navbar = ({ setIsDialogOpen }) => {
  const handleAddCandidateClick = () => {
    setIsDialogOpen(true);
  };

  return (
    <nav className="flex items-center justify-between bg-gray-800 p-4">
      <div className="text-xl font-bold text-white">Recruitment Tool</div>
      <button
        className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
        onClick={handleAddCandidateClick}
      >
        Add Candidate
      </button>
    </nav>
  );
};

export default Navbar;
