import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Skills.css';

function Profile() {
  return (
        <section className = "skills">
        <div className="content-wrap">
          <h2 className = "skill-h2">Featured Skills</h2>
          <Container>
              <Row>
                  <Col md={{ span: 5, offset: 2 }}>JavaScript - 3 years experience</Col>
                  <Col>Python - 3 years experience</Col>
              </Row>
              <Row>
                  <Col md={{ span: 5, offset: 2 }}>React - 2 years experience </Col>
                  <Col>PyCharm - 3 years experience</Col>
              </Row>
              <Row>
                  <Col md={{ span: 5, offset: 2 }}>Bootstrap - 2 years experience </Col>
                  <Col>IDLE - 2 years experience</Col>
              </Row>
              <Row>
                  <Col md={{ span: 5, offset: 2 }}>Redux - 2 years experience </Col>
                  <Col>GitHub - 3 years experience</Col>
              </Row>
              <Row>
                  <Col md={{ span: 5, offset: 2 }}>HTML - 3 years experience </Col>
                  <Col>CSS - 3 years experience</Col>
              </Row>
          </Container>
          <p> <br></br> </p>
          <Container>
              <Row>
                  <Col md={{ span: 5, offset: 2 }}>Java - 4 years experience</Col>
                  <Col>SQL - 3 years experience</Col>
              </Row>
              <Row>
                  <Col md={{ span: 5, offset: 2 }}>Junit - 3 years experience </Col>
                  <Col>Oracle SQL - 2 years experience</Col>
              </Row>
              <Row>
                  <Col md={{ span: 5, offset: 2 }}>Eclipse - 4 years experience </Col>
                  <Col>MS SQL Server - 2 years experience</Col>
              </Row>
              <Row>
                  <Col md={{ span: 5, offset: 2 }}>Netbeans - 3 years experience </Col>
                  <Col>MySQL - 3 years experience</Col>
              </Row>
              <Row>
                  <Col md={{ span: 5, offset: 2 }}>IntelliJ - 2 years experience </Col>
                  <Col>InfluxDB - 1 years experience</Col>
              </Row>
          </Container>
          <p> <br></br> </p>
          <Container>
              <Row>
                  <Col md={{ span: 5, offset: 2 }}>C# - 3 years experience</Col>
                  <Col>TortoiseSVN - 3 years experience</Col>
              </Row>
              <Row>
                  <Col md={{ span: 5, offset: 2 }}>.NET - 2 years experience </Col>
                  <Col>Azure DevOps - 2 years experience</Col>
              </Row>
              <Row>
                  <Col md={{ span: 5, offset: 2 }}>.NET Core - 2 years experience </Col>
                  <Col>Jira - 3 years experience</Col>
              </Row>
              <Row>
                  <Col md={{ span: 5, offset: 2 }}>C++ - 4 years experience </Col>
                  <Col>Visual Studio - 4 years experience</Col>
              </Row>
          </Container>                                
        </div>
        </section>
  );
}

function Skills() {
  return (
    <Profile />
  );
}

export default Skills;
