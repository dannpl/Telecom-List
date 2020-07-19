import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { Form, Button } from 'react-bootstrap';
import { X } from 'react-bootstrap-icons';
import { Modal, Container } from './styles';

function ModalEdit(props) {
  const [status, setStatus] = useState({});

  useEffect(() => {
    setStatus(props.phone.status);
  }, [props.phone]);

  return (
    <Container show={props.show}>
      <Modal>
        <X onClick={props.close} className="close-icon" size={25} />
        <Form>
          <p className="phone">{props.phone.value}</p>
          <Form.Group
            className="form-group"
            controlId="exampleForm.ControlSelect1"
          >
            <Form.Label className="label">Change Status: </Form.Label>
            <Form.Control
              onChange={(event) => setStatus(event.target.value)}
              value={status}
              as="select"
            >
              <option value={1}>Active</option>
              <option value={0}>Inactive</option>
            </Form.Control>
          </Form.Group>
        </Form>
        <Button
          onClick={() => props.save(status, props.phone.id)}
          variant="success"
        >
          Save
        </Button>
      </Modal>
    </Container>
  );
}

export default ModalEdit;

ModalEdit.propTypes = {
  phone: PropTypes.object,
  show: PropTypes.bool,
  save: PropTypes.func,
  close: PropTypes.func,
};
