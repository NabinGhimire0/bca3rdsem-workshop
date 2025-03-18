import React from "react";
import { Link } from "react-router-dom";

const JobCard = ({ job }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition transform hover:-translate-y-1 duration-200 h-full flex flex-col">
      {/* Header with Company Logo & Name */}
      <div className="p-4 bg-gray-50 flex justify-between items-center border-b">
        <div className="flex items-center">
          <img
            src={job.companyLogo}
            alt={`${job.company} logo`}
            className="w-10 h-10 object-contain rounded bg-white p-1 border border-gray-200"
          />
          <span className="ml-2 font-medium text-gray-600">{job.company}</span>
        </div>
        <button className="text-2xl focus:outline-none">
          <span className="text-amber-500 hover:text-amber-400"> ★ </span>
        </button>
      </div>

      {/* Job Details */}
      <Link to={`/job/${job.id}`} className="p-4 flex-1 flex flex-col">
        <h3 className="text-lg font-semibold text-blue-800 mb-1">
          {job.title}
        </h3>

        {/* Location */}
        <div className="text-gray-500 mb-2 flex items-center">
          <svg
            className="w-4 h-4 mr-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            ></path>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            ></path>
          </svg>
          {job.location}
        </div>

        {/* Salary */}
        <div className="text-green-700 font-medium mb-3">
          <svg
            className="w-4 h-4 inline mr-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          {job.salary}
        </div>

        {/* Category Tag */}
        <div className="mt-auto pt-2">
          <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded font-medium">
            {job.category}
          </span>
        </div>
      </Link>
    </div>
  );
};

export default JobCard;
