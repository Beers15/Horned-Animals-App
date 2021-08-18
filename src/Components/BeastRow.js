import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const BeastRow = ({beasts}) => {
  return (
    <Row>
      <Col>
        {beasts[0]}
      </Col>
      <Col>
        {beasts[1]}
      </Col>
      <Col>
        {beasts[2]}
      </Col>
      <Col>
        {beasts[3]}
      </Col>
    </Row>
  );
};

export default BeastRow;
