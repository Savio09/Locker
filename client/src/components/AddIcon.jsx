import React from "react";

function AddIcon({ onclick }) {
  return (
    <button className="btn btn-block" onClick={onclick}>
      + Add New Project
    </button>
  );
}

export default AddIcon;
