import { FormGroup,Label,Input,Col, } from "reactstrap";


function FormgroupComp(props){
    return(
        <FormGroup row>
    <Label
      for={props.name}
      size="lg"
      sm={4}
    >
      {props.label}
    </Label>
    <Col sm={8}>
      <Input
        bsSize="lg"
        id={props.name}
        name={props.name}
        placeholder={props.placeholder}
        type={props.type}
        value={props.value}
        onChange={props.changeHandler}
      />
    </Col>
            </FormGroup>
    )
}

export default FormgroupComp;