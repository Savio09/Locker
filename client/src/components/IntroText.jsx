import React from "react";

function IntroText({ user, projects }) {
  return (
    <div className="intro">
      {user && <p>Hello {user.firstname}</p>}

      <h1>
        Your Projects ({projects && projects.length > 0 ? projects.length : 0})
      </h1>
    </div>
  );
}

export default IntroText;
