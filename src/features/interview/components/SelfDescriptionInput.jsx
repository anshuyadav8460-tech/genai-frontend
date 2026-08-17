import React from "react";

export default function SelfDescriptionInput() {
  return (
    <div className="input-group">
      <label htmlFor="selfDescription">
        Self Description
      </label>

      <textarea
        name="selfDescription"
        id="selfDescription"
        placeholder="Describe yourself in a few sentences..."
      ></textarea>
    </div>
  );
}