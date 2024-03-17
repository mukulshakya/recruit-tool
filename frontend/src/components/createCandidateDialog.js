import React, { useState } from "react";
import api from "../services/api";
import { CircularProgress } from "@mui/material";

function CreateCandidateDialog({ setIsDialogOpen }) {
  const [loading, setLoading] = useState(false);
  const [candidateData, setCandidateData] = useState({
    name: "",
    email: "",
    phone: "",
    skills: "",
    expectedSalary: 0,
    reactExperience: 1,
    nodeExperience: 1,
  });

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    if (name === "email") {
      value = value.toLowerCase();
    }
    setCandidateData({
      ...candidateData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    api.createCandidate(candidateData).then((data) => {
      if (data.error) {
        return alert("Fetch candidates error: " + JSON.stringify(data.error));
      }
      window.location.reload();
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative h-2/3 w-1/3 rounded-md bg-white p-4">
        <button
          className="absolute right-0 top-0 m-2 text-gray-500 hover:text-gray-700"
          onClick={handleCloseDialog}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <h2 className="mb-4 text-lg font-semibold">Add Candidate</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 flex">
            <label
              htmlFor="name"
              className="whitespace-no-wrap block w-1/3 text-gray-700"
            >
              Candidate Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={candidateData.name}
              onChange={handleInputChange}
              className={`w-2/3 rounded-md border border-gray-300 outline-none focus:border-blue-500 focus:ring focus:ring-blue-200`}
              required
              disabled={loading}
            />
          </div>
          <div className="mb-4 flex">
            <label
              htmlFor="email"
              className="whitespace-no-wrap block w-1/3 text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={candidateData.email}
              onChange={handleInputChange}
              className={`w-2/3 rounded-md border border-gray-300 outline-none focus:border-blue-500 focus:ring focus:ring-blue-200`}
              required
              disabled={loading}
            />
          </div>
          <div className="mb-4 flex">
            <label
              htmlFor="phone"
              className="whitespace-no-wrap block w-1/3 text-gray-700"
            >
              Phone
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={candidateData.phone}
              onChange={handleInputChange}
              className={`w-2/3 rounded-md border border-gray-300 outline-none focus:border-blue-500 focus:ring focus:ring-blue-200`}
              required
              disabled={loading}
            />
          </div>
          <div className="mb-4 flex">
            <label
              htmlFor="skills"
              className="whitespace-no-wrap block w-1/3 text-gray-700"
            >
              Skills/Qualifications
            </label>
            <input
              type="text"
              id="skills"
              name="skills"
              value={candidateData.skills}
              onChange={handleInputChange}
              className={`w-2/3 rounded-md border border-gray-300 outline-none focus:border-blue-500 focus:ring focus:ring-blue-200`}
              required
              disabled={loading}
            />
          </div>

          <div className="mb-4 flex">
            <label
              htmlFor="expectedSalary"
              className="whitespace-no-wrap block w-1/3 text-gray-700"
            >
              Expected Salary
            </label>
            <input
              type="number"
              id="expectedSalary"
              name="expectedSalary"
              value={candidateData.expectedSalary}
              onChange={handleInputChange}
              className={`w-2/3 rounded-md border border-gray-300 outline-none focus:border-blue-500 focus:ring focus:ring-blue-200`}
              required
              disabled={loading}
            />
          </div>
          <div className="mb-4 flex">
            <label
              htmlFor="nodeExperience"
              className="whitespace-no-wrap block w-1/3 text-gray-700"
            >
              Node Experience
            </label>
            <select
              id="nodeExperience"
              name="nodeExperience"
              value={candidateData.nodeExperience}
              onChange={handleInputChange}
              className={`w-2/3 rounded-md border border-gray-300 outline-none focus:border-blue-500 focus:ring focus:ring-blue-200`}
              required
              disabled={loading}
            >
              <option value={1}>less than 1 year</option>
              <option value={2}>1-2 year</option>
              <option value={3}>over 2 years</option>
            </select>
          </div>
          <div className="mb-4 flex">
            <label
              htmlFor="reactExperience"
              className="whitespace-no-wrap block w-1/3 text-gray-700"
            >
              React Experience
            </label>
            <select
              id="reactExperience"
              name="reactExperience"
              value={candidateData.reactExperience}
              onChange={handleInputChange}
              className={`w-2/3 rounded-md border border-gray-300 outline-none focus:border-blue-500 focus:ring focus:ring-blue-200`}
              required
              disabled={loading}
            >
              <option value={1}>less than 1 year</option>
              <option value={2}>1-2 year</option>
              <option value={3}>over 2 years</option>
            </select>
          </div>
          <div className="flex justify-center">
            {loading ? (
              <CircularProgress />
            ) : (
              <button
                type="submit"
                className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
                disabled={loading}
              >
                Submit
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateCandidateDialog;
