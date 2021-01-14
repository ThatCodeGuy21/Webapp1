import './Education.css';

function Profile() {
  return (
    <section className="education">
    <div className="content-wrap item-details">
      <h2 className="education-h2">Education</h2>
      <section>
        <h3 className="education-h3">University of Wisconsin Platteville - Platteville, WI</h3>
        <p>Bachelor of Science - Software Engineering, May 2021</p>
      </section>
    </div>
  </section>
  );
}

function Education() {
  return (
    <Profile />
  );
}

export default Education;