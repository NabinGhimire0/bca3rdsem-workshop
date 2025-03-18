import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const JobDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top
    // Fetch job by ID
    fetch(`http://localhost:5000/jobs/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched Job:", data);
        setJob(data); // Set fetched job
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching job:", error);
        setLoading(false);
      });
  }, [id]);

  if (!job) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold mb-4">Job Not Found</h2>
        <button
          onClick={() => navigate("/")}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition"
        >
          Back to Jobs
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-4xl mx-auto p-6">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-gray-600 hover:text-gray-900 mb-6 transition"
      >
        ⬅ Back
      </button>

      <div className="md:flex items-start gap-6">
        {/* Company Logo */}
        <img
          src={job.companyLogo || "/default-logo.png"}
          alt={job.company}
          className="w-20 h-20 object-contain rounded-lg border border-gray-200 p-2 bg-white shadow-sm"
        />

        {/* Job Details */}
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-blue-800 mb-2">{job.title}</h1>
          <h2 className="text-xl font-medium mb-3">{job.company}</h2>
          <p className="text-gray-600">
            {job.location} | {job.category}
          </p>
          <p className="text-green-700 font-medium">{job.salary}</p>
        </div>

        {/* Favorite Button */}
        <button
          className={`px-4 py-2 rounded-md transition bg-blue-600 hover:bg-blue-700 text-white`}
        >
          Add to Favorites
        </button>
      </div>

      {/* Job Description */}
      <div className="mt-8 space-y-6">
        <section>
          <h3 className="text-lg font-medium border-b pb-2 mb-3">
            Job Description
          </h3>
          <p className="text-gray-700">{job.description}</p>
        </section>

        {/* Requirements */}
        <section>
          <h3 className="text-lg font-medium border-b pb-2 mb-3">
            Requirements
          </h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            {job.requirements?.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>
        </section>

        {/* Benefits */}
        <section>
          <h3 className="text-lg font-medium border-b pb-2 mb-3">Benefits</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            {job.benefits?.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </section>
      </div>

      {/* Apply Button */}
      <div className="bg-gray-50 p-6 rounded-lg text-center mt-8 shadow-inner">
        <h3 className="text-lg font-medium mb-4">Apply for this Position</h3>
        <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md text-lg font-medium transition shadow-sm">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default JobDetail;
