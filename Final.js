import './Final.css';

function Profile() {
  return (
        <footer className="footer">
        <div className="content-wrap">
          <h2 className="f-h2">Let's Keep in Touch!</h2>
          <ul className="contact-list">
            <li><a href="mailto:Heinricha@uwplatt.edu">Heinricha@uwplatt.edu</a></li>
            <li><a href="https://www.linkedin.com/in/alec-heinrich-1265aa1b8">LinkedIn</a></li>
            <li><a>715-340-7663(Cell)</a></li>
          </ul>
        </div>
      </footer>
  );
}

function Final() {
  return (
    <Profile />
  );
}

export default Final;