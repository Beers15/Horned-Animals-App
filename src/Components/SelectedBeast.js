import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';

const SelectedBeast = (props) => {
  return (
    <div>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image
            src={props.imgUrl}
            thumbnail
          />
        </Modal.Body>
        <Modal.Body>{props.description}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default SelectedBeast;
