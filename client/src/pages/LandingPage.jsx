import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "../components/ExpandMoreIcon";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import hero from "../images/todo-app-ui.png";
import rest from "../images/rest.svg";
import eiffel from "../images/eiffel.svg";

function LandingPage() {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleRegisterRouting = () => {
    if (user) {
      toast("You're signed in. Navigate to Dashboard");
    } else {
      navigate("/register");
    }
  };
  return (
    <section className="home">
      <div className="intro">
        <h2>
          A go-without necessity for awesome people particularly students.
        </h2>
        <p>
          Organize your life, from tasks to schedules and beyond. Stay on top of
          everything with a space that’s built just for you.
        </p>
        <button onClick={handleRegisterRouting} className="btn">
          Get Started
        </button>
      </div>
      <div className="hero-img">
        <img src={hero} alt="the application's UI" />
      </div>
      <div className="hero-text">
        <div className="item-1">
          <h2>
            Play safe and have fun with this new tool, while sharing it with
            your friends.
          </h2>
          <p>
            With Locka, we wanted to share something meaningful with students
            that is not only secure but also offers privacy for anyone wanting
            to save personal information.
          </p>
        </div>
        <div className="item-2">
          <img src={rest} alt="three people having rest" />
        </div>
      </div>
      <div className="cards">
        <div className="card">
          <p className="bold">
            <b>Simple to navigate. </b>
            Simply provide the necessary input and get the output you want. No
            complex decisions or hesitations
          </p>
        </div>
        <div className="card">
          <p>
            <b> Complete a variety of tasks. </b>
            Curate your own playlists, outline your courses for the day,
            organize your weekend trip
          </p>
        </div>
        <div className="card">
          <p>
            <b>Use anywhere or everywhere. </b>
            Simply provide the necessary input and get the output you want. No
            complex decisions or hesitations
          </p>
        </div>
      </div>
      <div className="more-info">
        <div className="left">
          <img src={eiffel} alt="" />
        </div>
        <div className="right">
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
            sx={{ boxShadow: "none" }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  fontSize: "0.9rem",
                  fontWeight: "bold",
                }}
              >
                <span
                  style={{
                    fontSize: "1.2rem",
                  }}
                  class="material-symbols-outlined"
                >
                  schedule
                </span>{" "}
                Optimize your time
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
            sx={{ boxShadow: "none" }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  fontSize: "0.9rem",
                  fontWeight: "bold",
                }}
              >
                <span
                  style={{
                    fontSize: "1.2rem",
                  }}
                  class="material-symbols-outlined"
                >
                  thumb_up
                </span>
                Increase your performance
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
            sx={{
              boxShadow: "none",
              borderBottom: "1px solid rgba(0, 0, 0, 0.16)",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  fontSize: "0.9rem",
                  fontWeight: "bold",
                }}
              >
                <span
                  style={{
                    fontSize: "1.2rem",
                  }}
                  class="material-symbols-outlined"
                >
                  favorite
                </span>
                Enjoy doing what you love
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
      <div className="hero-text cta">
        <div className="cta-text">
          <h1>
            Ready to become Lockd<b style={{ color: "#66bb6a" }}>.</b> in?
          </h1>
          <p>
            The application is free to students for a period of time. Just give
            me a star{" "}
            <Link
              to="https://github.com/Savio09/Locker"
              style={{ textDecoration: "underline" }}
            >
              here
            </Link>
            !
          </p>
        </div>
        <div className="cta-pricing">
          <h1>$0</h1>
          <p>Lifetime access</p>
          <button className="btn btn-block" onClick={handleRegisterRouting}>
            Get started
            <span class="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </div>
      <footer className="hero-text">
        <div className="links">
          <p>
            Created by{" "}
            <Link
              to="https://declann.me"
              style={{ textDecoration: "underline" }}
            >
              Fortune Declan
            </Link>
            ❤️
          </p>
          <p>
            Design from dribble{" "}
            <Link
              to="https://dribbble.com/shots/21236436-To-Do-List-Mobile-App-Design"
              style={{ textDecoration: "underline" }}
            >
              Shakuro{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="20"
                height="20"
                viewBox="0 0 50 50"
              >
                <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 26 11 C 25.048655 11 24.320554 11.64702 23.849609 12.375 C 23.378665 13.10298 23.049614 14.003252 22.783203 15.029297 C 22.250381 17.081386 22 19.635549 22 22 C 22 22.989207 22.18839 23.704667 22.267578 24.583984 C 22.243978 24.572684 22.228668 24.540227 22.205078 24.529297 C 21.436067 24.172911 20.675783 24 20 24 C 19.160502 24 17.727134 24.213324 16.402344 25.240234 C 15.077554 26.267144 14 28.139571 14 31 C 14 33.376439 14.773964 35.17397 15.943359 36.333984 C 17.112754 37.493999 18.619821 38 20 38 C 22.56583 38 24.654438 36.695799 26.216797 34.763672 C 27.097668 35.517061 28.031478 36 29 36 C 30.833438 36 32.123477 34.63194 32.992188 33.123047 C 33.860898 31.614154 34.449229 29.816375 34.949219 28.316406 A 1.0005646 1.0005646 0 1 0 33.050781 27.683594 C 32.550771 29.183625 31.972352 30.885846 31.257812 32.126953 C 30.543273 33.36806 29.833562 34 29 34 C 28.628083 34 28.012791 33.634634 27.349609 33.033203 C 27.438148 32.877854 27.5535 32.747394 27.636719 32.587891 C 29.238442 29.517921 30 25.642857 30 22 C 30 18.905111 29.565273 16.315848 28.931641 14.431641 C 28.614825 13.489537 28.255274 12.722719 27.822266 12.128906 C 27.389257 11.535093 26.838996 11 26 11 z M 25.9375 13.029297 C 25.982265 13.064034 26.081108 13.138587 26.205078 13.308594 C 26.455695 13.652281 26.765425 14.260463 27.037109 15.068359 C 27.580477 16.684152 28 19.094889 28 22 C 28 25.244593 27.279249 28.705352 25.970703 31.355469 C 24.882323 29.422206 24 26.350016 24 22 C 24 19.781451 24.250822 17.335364 24.71875 15.533203 C 24.952714 14.632123 25.250522 13.891863 25.529297 13.460938 C 25.749198 13.121015 25.8665 13.052344 25.9375 13.029297 z M 20 26 C 20.285217 26 20.858995 26.109139 21.365234 26.34375 C 21.871474 26.578361 22.308641 26.926714 22.533203 27.308594 A 1.0001 1.0001 0 0 0 22.552734 27.339844 C 22.950839 29.342132 23.504774 31.071642 24.238281 32.367188 C 24.400392 32.653512 24.611871 32.77614 24.785156 33.03125 C 23.5106 34.763942 22.004243 36 20 36 C 19.109179 36 18.116371 35.670798 17.353516 34.914062 C 16.590661 34.157328 16 32.956561 16 31 C 16 28.610429 16.776696 27.482856 17.628906 26.822266 C 18.481116 26.161676 19.547498 26 20 26 z"></path>
              </svg>
            </Link>
          </p>
        </div>

        <p>Copyrights &copy; {new Date().getFullYear()} Fortune Declan </p>
      </footer>
    </section>
  );
}

export default LandingPage;
