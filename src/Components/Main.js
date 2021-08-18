import HornedBeast from './HornedBeast';
import animalData from '../data';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function Main() {
  let beasts = animalData.map((beast, index) => {
    return (
      <HornedBeast
        key={index} //Not rearranging items in array
        title={beast.title}
        description={beast.description}
        imgUrl={beast.image_url}
        alt={beast.keyword}
      />
    );
  });

  return (
    <Container>
      {beasts.map((beast, index) => {
        if(index % 3 === 0) {
          return (
            <Row>
              <Col>
                {beasts[index]}
              </Col>
              <Col>
                {beasts[index + 1]}
              </Col>
              <Col>
                {beasts[index + 2]}
              </Col>
            </Row>
          );
        }
        else return null;
      })}
    </Container>
  );
}

export default Main;
