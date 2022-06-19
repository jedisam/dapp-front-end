import { useState } from 'react';

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardText,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from 'reactstrap';

function Trainee() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [assetID, setAssetId] = useState('');

  const handleSubmit = () => {
    // console.log(name, email, address, assetID);
    fetch('http://localhost:8000/api/v1/trainees/optin', {
      // Adding method type
      method: 'POST',

      // Adding body or contents to send
      body: JSON.stringify({
        name,
        email,
        address,
        asset_id: parseInt(assetID),
      }),

      // Adding headers to the request
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status === 'fail') {
          console.log(res);
          alert(res.message);
        } else {
          alert('Request Sent to Admin!');
        }
      });
  };

  return (
    <>
      <div className="content">
        <Row>
          <Col md="8">
            <Card>
              <CardHeader>
                <h5 className="title">Tenx System</h5>
              </CardHeader>
              <CardBody>
                {/* Add a description text */}
                <p>
                  Please optin the asset using the{' '}
                  <a href="https://chrome.google.com/webstore/detail/algosigner/kmmolakhbgdlpkjkcjkebenjheonagdm">
                    algosign
                  </a>{' '}
                  chrome extension once you get your asset-ID
                </p>
                <p>
                  Once you optin for the asset, please fill up the form below
                  and we will transfer your certificate
                </p>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>Role (disabled)</label>
                        <Input
                          defaultValue="Tenx Trainee"
                          disabled
                          placeholder="Tenx Trainee"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="6">
                      <FormGroup>
                        <label>Full Name</label>
                        <Input
                          placeholder="your-full-name"
                          type="text"
                          onChange={(e) => setName(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="6">
                      <FormGroup>
                        <label>Email</label>

                        <Input
                          placeholder="email"
                          type="text"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <label>Public Address</label>
                        <Input
                          placeholder="0x390f0f9fk930kf39k3mfe9"
                          type="text"
                          onChange={(e) => setAddress(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="4">
                      <FormGroup>
                        <label>Asset-ID</label>

                        <Input
                          placeholder="8594322"
                          type="text"
                          onChange={(e) => setAssetId(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button
                  className="btn-fill"
                  color="primary"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Request Transfer
                </Button>
              </CardFooter>
            </Card>
          </Col>
          <Col md="4">
            <Card className="card-user">
              <CardBody>
                <CardText />
                <div className="author">
                  <div className="block block-one" />
                  <div className="block block-two" />
                  <div className="block block-three" />
                  <div className="block block-four" />
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      className="avatar"
                      src={require('assets/img/emilyz.png').default}
                    />
                    <h5 className="title">Yididiya Samuel</h5>
                  </a>
                  <p className="description">Trainee</p>
                </div>
                <div>Bio</div>
                <div className="card-description">
                  A journey of a thousand miles begins with a single step.
                </div>
              </CardBody>
              <CardFooter>
                <div className="button-container">
                  <Button className="btn-icon btn-round" color="facebook">
                    <i className="fab fa-facebook" />
                  </Button>
                  <Button className="btn-icon btn-round" color="twitter">
                    <i className="fab fa-twitter" />
                  </Button>
                  <Button className="btn-icon btn-round" color="google">
                    <i className="fab fa-google-plus" />
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
      <Card className="card-user">
        <CardHeader>
          <h5 className="title">Trainee's Profile</h5>
        </CardHeader>
        <CardBody>
          <Form>
            <Row>
              <Col className="pr-md-1" md="5">
                <h5>My certificate </h5>{' '}
                <p>Your certificate is not ready yet!</p>
              </Col>
            </Row>
          </Form>
        </CardBody>
      </Card>
    </>
  );
}

export default Trainee;
