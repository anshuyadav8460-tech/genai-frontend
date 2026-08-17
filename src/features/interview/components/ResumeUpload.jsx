import React, { useState } from "react";

export default function ResumeUpload() {
  const [resume, setResume] = useState(null);

  const handleResumeChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      setResume(file);
    }
  };

  return (
    <div className="input-group">
      <p>
        Resume{" "}
        <small className="highlight">
          (Use Resume and Self Description together for best result)
        </small>
      </p>

      <label className="file-label" htmlFor="resume">
        {resume ? resume.name : "Upload Resume"}
      </label>

      <input
        hidden
        type="file"
        name="resume"
        id="resume"
        accept=".pdf"
        onChange={handleResumeChange}
      />
    </div>
  );
}