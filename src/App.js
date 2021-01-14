import './App.css';

function Profile() {
  return (
    <header className="header-profile">
        <div className="content-wrap">
          <h1 className="h1-a">Alec Heinrich</h1>
          <h2>Software Engineer</h2>
          <p className= "p">Full stack Software Engineer with 4+ years of experience in building and designing user interfaces, testing and debugging application functionality and handling back-end coding tasks</p>
        </div>
      </header>
  );
}

function App() {
  return (
    <Profile />
  );
}

export default App;