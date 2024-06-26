import React, { useState } from "react";
import Card from "../components/Card.jsx";
import Cards from "../components/Cards.jsx";
import { FaFilter } from "react-icons/fa6"; // Import your filter icon
import SingleCard from "../components/SingleCard.jsx";
import UploadBox from "../components/Upload.jsx";
import Modal from "../components/Modal.jsx"; // Import the Modal component

const MainPage = () => {
  const [selectedFilter, setSelectedFilter] = useState("all"); // Initial filter state
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
  const [selectedSemester, setSelectedSemester] = useState(""); // State to track the selected semester
  const [selectedSubject, setSelectedSubject] = useState(""); // State to track the selected subject

  const subjectsBySemester = {
    1: ["Math 101", "Physics 101", "Chemistry 101", "Biology 101", "CS 101", "English 101"],
    2: ["Math 102", "Physics 102", "Chemistry 102", "Biology 102", "CS 102", "English 102"],
    3: ["Math 201", "Physics 201", "Chemistry 201", "Biology 201", "CS 201", "English 201"],
    4: ["Math 202", "Physics 202", "Chemistry 202", "Biology 202", "CS 202", "English 202"],
    5: ["Math 301", "Physics 301", "Chemistry 301", "Biology 301", "CS 301", "English 301"],
    6: ["Math 302", "Physics 302", "Chemistry 302", "Biology 302", "CS 302", "English 302"],
    7: ["Math 401", "Physics 401", "Chemistry 401", "Biology 401", "CS 401", "English 401"],
    8: ["Math 402", "Physics 402", "Chemistry 402", "Biology 402", "CS 402", "English 402"],
  };

  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
  };

  const handleSemesterChange = (event) => {
    setSelectedSemester(event.target.value);
    setSelectedSubject(""); // Reset the subject when semester changes
  };

  const handleSubjectChange = (event) => {
    setSelectedSubject(event.target.value);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col gap-4 mt-2">
      <div className="profile-section flex flex-col justify-center items-center md:flex-row md:justify-between md:items-center bg-slate-600 p-3 py-5 rounded-lg">
        <img
          src="path/to/profile-picture.jpg"
          alt="Profile Picture"
          className="profile-picture rounded-full h-16 w-16 border border-gray-300" // Ensure circular class is applied
        />
        <div className="profile-info flex flex-col items-center md:flex-row md:items-center gap-4 mt-4 md:mt-0">
          <div className="followers text-white">
            Followers: <span className="font-bold">123</span>
          </div>
          <div className="following text-white">
            Following: <span className="font-bold">456</span>
          </div>
          <button
            className="profile-button px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
            onClick={openModal} // Open modal on click
          >
            Upload
          </button>
        </div>
      </div>
      <div className="filter-container flex flex-col justify-center items-center md:flex-row md:justify-end md:items-center space-x-2">
        <div className="filter-dropdown flex items-center space-x-2">
          <select
            value={selectedFilter}
            onChange={handleFilterChange}
            className="filter-select px-3 py-2 rounded-md text-gray-700 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            <option value="all">All</option>
            <option value="most-rated">Most Rated</option>
            <option value="latest">Latest</option>
            {/* Add more options here */}
          </select>
          <select
            value={selectedSemester}
            onChange={handleSemesterChange}
            className="semester-select px-3 py-2 rounded-md text-gray-700 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            <option value="">Select Semester</option>
            {[...Array(8).keys()].map((semester) => (
              <option key={semester + 1} value={semester + 1}>
                Semester {semester + 1}
              </option>
            ))}
          </select>
          <select
            value={selectedSubject}
            onChange={handleSubjectChange}
            className="subject-select px-3 py-2 rounded-md text-gray-700 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
            disabled={!selectedSemester}
          >
            <option value="">Select Subject</option>
            {selectedSemester &&
              subjectsBySemester[selectedSemester].map((subject, index) => (
                <option key={index} value={subject}>
                  {subject}
                </option>
              ))}
          </select>
          <button className="filter-button flex items-center space-x-1 px-3 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-700">
            <FaFilter className="filter-icon h-4 w-4" />
            Filters
          </button>
        </div>
      </div>
      <div className="max-w-[85%] mx-auto gap-3">
        <Cards selectedFilter={selectedFilter} selectedSemester={selectedSemester} selectedSubject={selectedSubject} />
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <UploadBox />
      </Modal>
    </div>
  );
};

export default MainPage;
