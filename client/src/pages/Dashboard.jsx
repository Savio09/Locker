import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getProjects } from "../features/projects/projectSlice";
import Spinner from "../components/Spinner";
import ProjectWrapper from "../components/ProjectWrapper";
import AddIcon from "../components/AddIcon";
import { reset } from "../features/auth/authSlice";
import IntroText from "../components/IntroText";
function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { projects, isLoading, isError, message } = useSelector(
    (state) => state.projects
  );

  const colors = [
    {
      background: "radial-gradient(at left top, #92be71, #2760de)",
    },
    {
      background: "radial-gradient(at left top, #363795, #005C97)",
    },
    {
      background: "radial-gradient(at left top, #fc00ff, #00dbde)",
    },
    {
      background: "radial-gradient(at left top,  #2c3e50, #3498db)",
    },
    {
      background: "radial-gradient(at left top, #525252, #3d72b4)",
    },
    {
      background: "radial-gradient(at left top, #004ff9, #fff94c)",
    },
    {
      background: "radial-gradient(at left top, #d1913c, #ffd194)",
    },
    {
      background: "radial-gradient(at left top, #7b4397, #dc2430)",
    },
    {
      background: "radial-gradient(at left top, #1e130c, #9a8478)",
    },
    {
      background: "radial-gradient(at left top, #485563, #29323c)",
    },
  ];
  useEffect(() => {
    if (isError) {
      console.log(message);
    }
    if (!user) {
      navigate("/login");
    }
    dispatch(getProjects());
    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, message, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }
  const onClick = () => {
    navigate("/addNew");
  };

  return (
    <div>
      <IntroText user={user} projects={projects} />
      {projects && projects.length > 0 ? (
        <div className="projects">
          {projects.map((project, index) => (
            <ProjectWrapper
              color={colors[index % colors.length]}
              key={project.id}
              project={project}
            />
          ))}
        </div>
      ) : (
        <h3> You have not set any Projects</h3>
      )}
      <div>
        <AddIcon onclick={onClick} />
      </div>
    </div>
  );
}

export default Dashboard;
