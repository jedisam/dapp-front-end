import { Button } from 'reactstrap';

function OptinList({ traineesOptin }) {
  return traineesOptin.map((trainee) => {
    return (
      <tr key={trainee._id}>
        <td>{trainee.name}</td>
        <td>{trainee.address}</td>
        {/* <td>{trainee.status}</td> */}
        <td className="text-center">
          <Button variant="success" className="btn-success">
            Accept
          </Button>{' '}
          <Button variant="danger" className="btn-danger">
            Decline
          </Button>
        </td>
      </tr>
    );
  });
}

export default OptinList;
