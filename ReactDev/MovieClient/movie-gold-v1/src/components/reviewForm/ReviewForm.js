import { Form, Button, FormGroup, FormLabel } from "react-bootstrap";

const ReviewForm = ({ handleSubmit, revText, labelText, defaultValue }) => {
  return (
    <Form>
      <FormGroup className="mb-3" controlId="exampleForm.ControlTextarea1">
        <FormLabel>{labelText}</FormLabel>
        <Form.Control
          ref={revText}
          as="textarea"
          rows={3}
          defaultValue={defaultValue}
        />
      </FormGroup>
      <Button variant="outline-in" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
  );
};

export default ReviewForm;
