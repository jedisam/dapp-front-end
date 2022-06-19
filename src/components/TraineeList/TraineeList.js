import { useState } from 'react';
import { Button, Spinner } from 'reactstrap';

function TraineeList({ trainees }) {
  const [loading, setLoading] = useState(false);
  const handleMint = ({ name, email, country, status }) => {
    // console.log(data);
    setLoading(true);
    console.log(name, email, country, status);
    // http://localhost:8000/api/v1/nft
    fetch('http://localhost:8000/api/v1/nft', {
      // Adding method type
      method: 'POST',

      // Adding body or contents to send
      body: JSON.stringify({
        name,
        email,
      }),

      // Adding headers to the request
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      // Converting to JSON
      .then((response) => response.json())
      .then(console.log);
    setLoading(false);
    alert('Asset minted successfully!');
    window.location.reload(true);
  };

  return trainees.map((trainee) => {
    return (
      <tr key={trainee._id}>
        <td>{trainee.name}</td>
        <td>{trainee.email}</td>
        <td>{trainee.country}</td>
        <td>{trainee.status}</td>
        {trainee.status === 'pass' ? (
          <td className="text-center">
            <Button
              variant="primary"
              className="btn-primary"
              onClick={() => handleMint(trainee)}
            >
              {loading ? (
                <Spinner type="border" color="sucess" />
              ) : (
                trainee.mint
              )}
            </Button>
          </td>
        ) : (
          <td className="text-center">Mint</td>
        )}
      </tr>
    );
  });
}

export default TraineeList;
