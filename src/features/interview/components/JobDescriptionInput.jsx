import React from "react";

export default function JobDescriptionInput() {
  return (
    <div className="input-group">
      <label htmlFor="jobDescription">
        Job Description
      </label>

      <textarea
        name="jobDescription"
        id="jobDescription"
        placeholder="Enter job description here..."
      ></textarea>
    </div>
  );
}