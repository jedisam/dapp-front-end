import { Button } from 'reactstrap';

function TraineeList({ trainees }) {
  return trainees.map((trainee) => {
    return (
      <tr key={trainee._id}>
        <td>{trainee.name}</td>
        <td>{trainee.email}</td>
        <td>{trainee.country}</td>
        <td>{trainee.status}</td>
        {trainee.status === 'pass' ? (
          <td className="text-center">
            <Button variant="primary" className="btn-primary">
              Mint
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
