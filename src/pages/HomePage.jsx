import React, { useEffect, useState } from "react";
import JobFilter from "../components/JobFilter";
import JobCard from "../components/JobCard";

const HomePage = () => {
  const [jobs, setJobs] = useState([]); // State to store jobs
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    fetch("http://localhost:5000/jobs")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched Data:", data); // Debugging log
        if (Array.isArray(data)) {
          setJobs(data); // Set jobs if it's an array
        } else {
          console.error("Unexpected data format:", data);
          setJobs([]); // Fallback to empty array
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching jobs:", error);
        setLoading(false);
      });
  }, []);

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 py-8">
      <div>
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Find Your Dream Job
        </h1>

        <JobFilter />

        <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
          {loading ? (
            <p className="text-center text-gray-500">Loading jobs...</p>
          ) : jobs.length > 0 ? (
            jobs.map((job) => <JobCard key={job.id} job={job} />)
          ) : (
            <p className="text-center text-gray-500">No jobs available.</p>
          )}
        </div>
      </div>
    </main>
  );
};

export default HomePage;
