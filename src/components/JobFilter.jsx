import React from "react";

const JobFilter = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h3 className="text-lg font-medium mb-4 text-gray-700 border-b pb-2">
        Filter Jobs
      </h3>
      <div className="grid gap-6 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
        <div>
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Category
          </label>
          <select
            name="category"
            id="category"
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white shadow-sm"
          >
            <option value="">All Categories</option>
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
            <option value="Fullstack">Fullstack</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="location"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Location
          </label>
          <select
            name="location"
            id="location"
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white shadow-sm"
          >
            <option value="">All Locations</option>
            <option value="Dharan">Dharan</option>
            <option value="Itahari">Itahari</option>
            <option value="Biratnagar">Biratnagar</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="minSalary"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Min Salary
          </label>
          <input
            type="number"
            name="minSalary"
            id="minSalary"
            placeholder="e.g. 90000"
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
          />
        </div>
      </div>
      <div className="mt-4 flex justify-end">
        <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-md transition duration-200 shadow-sm border border-gray-300">
          Clear Filters
        </button>
      </div>
    </div>
  );
};

export default JobFilter;
