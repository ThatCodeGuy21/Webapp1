import './Experience.css';

function Profile() {
  return (
    <section className = "experience">
        <div className="content-wrap item-details divider">
          <h2 className="h2-e">Work Experience</h2>
          <p> <br></br> </p>
          <section className="job-item">
            <div>
              <h3 className="h3-e">Software Engineer Intern</h3>
              <p className="p-e">Kohl's</p>
              <p>June 2020 - August 2020</p>
            </div>
            <div>
              <ul>
                <li className="li-e">Created an application for the Systems Reliability team that helped with troubleshooting store issues.</li>
                <li className="li-e">Created multiple chat bots to display store information.</li>
                <li className="li-e">Created multiple dashboards which displayed and analyzed real-time store data with alerting systems utilizing the chat-bots.</li>
                <li className="li-e">Worked in an Agile environment and participated in think tanks for IT and store innovation.</li>
              </ul>
            </div>
          </section>
          <p> <br></br> </p>
          <section className="job-item">
            <div>
              <h3 className ="h3-e">Software Engineer Intern</h3>
              <p className="p-e">Sentry</p>
              <p>May 2018 - June 2018</p>
            </div>
            <div>
              <ul>
                <li className="li-e">Created application features such as "time till completion" estimator for user claims.</li>
                <li className="li-e">Provided software quality assurance by developing and maintaining test cases for frontend functionality by utilizing the Junit framework</li>
                <li className="li-e">Attended daily standup/scrum meetings and participated in a think tank for Insurtech</li>
                <li className="li-e">Introduced methodologies and practices to enhance product definition and customization of applications to user needs.</li>
              </ul>
            </div>
         </section>
        </div>
      </section>                                
  );
}

function Experience() {
  return (
    <Profile />
  );
}

export default Experience;
