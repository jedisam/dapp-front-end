import { Button } from 'reactstrap';

function OptinList({ traineesOptin }) {
  const handleAccept = ({ name, address, asset_id }) => {
    fetch('http://localhost:8000/api/v1/nft/transfer', {
      method: 'POST',
      body: JSON.stringify({
        name,
        address,
        asset_id,
      }),
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
          alert('Request Accepted!');
          window.location.reload(true);
        }
      });
  };

  const handleDecline = ({ name, address }) => {
    console.log(name, address);
    // http://localhost:8000/api/v1/nft
    fetch('http://localhost:8000/api/v1/trainees/optin', {
      // Adding method type
      method: 'DELETE',

      // Adding body or contents to send
      body: JSON.stringify({
        name,
        address,
      }),

      // Adding headers to the request
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      // Converting to JSON
      .then((response) => response.json())
      .then(console.log);
    window.location.reload(false);
  };
  return traineesOptin.map((trainee) => {
    return (
      <tr key={trainee._id}>
        <td>{trainee.name}</td>
        <td>{trainee.address}</td>
        {/* <td>{trainee.status}</td> */}
        <td className="text-center">
          <Button
            variant="success"
            className="btn-success"
            onClick={() => handleAccept(trainee)}
          >
            Accept
          </Button>{' '}
          <Button
            variant="danger"
            className="btn-danger"
            onClick={() => handleDecline(trainee)}
          >
            Decline
          </Button>
        </td>
      </tr>
    );
  });
}

export default OptinList;
