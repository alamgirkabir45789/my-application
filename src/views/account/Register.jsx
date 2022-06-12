import { yupResolver } from "@hookform/resolvers/yup";
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import Select from "react-select";
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import * as yup from "yup";

const options = [
    { value: "active", label: "Active" },
    { value: "inactive", label: "In Active" },
    { value: "deleted", label: "Delete" }
  ];
  const schema = yup.object().shape({
    style: yup
      .object()
      .shape({
        label: yup.string().required("style is required (from label)"),
        value: yup.string().required("style is required")
      })
      .nullable() // for handling null value when clearing options via clicking "x"
      .required("style is required (from outter null check)"),
      firstName: yup.string().required("Name is Required"),
      email: yup.string().required("Email is Required"),
  });
const Register = () => {
    const {
        handleSubmit,
        control,register,
        formState: { errors }
      } = useForm({
        resolver: yupResolver(schema)
      });
      console.log(errors)
      const onSubmit = (data) => console.log(data);
  return (
    <div >
         <div>
        <h1>Sign Up</h1>
      </div>
     <Form onSubmit={handleSubmit(onSubmit)}>

    
        <Row className="p-5" >
          <Col sm={12} xs={12} md={12} lg={12} xl={12}>
            <FormGroup className="d-flex">
              <Label sm="3" size="sm" for="firstName">
                Name
              </Label>
              <span style={{ marginRight: "10px", marginLeft: "10px" }}>:</span>
              <Input
                type="text"
                id="firstName"
                bsSize="sm"
                placeholder="Small Input"
                {...register("firstName")}
              />
            </FormGroup>
            <p style={{color:'red'}}>{errors.firstName?.message}</p>
          </Col>
          <Col sm={12} xs={12} md={12} lg={12} xl={12}>
            <FormGroup className="d-flex">
              <Label sm="3" size="sm" for="email">
                Email
              </Label>
              <span style={{ marginRight: "10px", marginLeft: "10px" }}>:</span>
              <Input
                type="text"
                id="email"
                bsSize="sm"
                placeholder="Small Input"
                {...register("email",{pattern:/^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/})}
              />
            </FormGroup>
            <p>{errors.email?.message}</p>
          </Col>
         
          <Col  sm={12} xs={12} md={12} lg={12} xl={12}>
            <FormGroup className="d-flex">
              <Label sm="3" size="sm" for="input-small-horizontal">
                Phone
              </Label>
              <span style={{ marginRight: "10px", marginLeft: "10px" }}>:</span>
              <Input
                type="text"
                id="input-small-horizontal"
                bsSize="sm"
                placeholder="Small Input"
              />
            </FormGroup>
          </Col>
          <Col  sm={12} xs={12} md={12} lg={12} xl={12}>
            <FormGroup className="d-flex">
              <Label sm="3" size="sm" for="input-small-horizontal">
                Address
              </Label>
              <span style={{ marginRight: "10px", marginLeft: "10px" }}>:</span>
              <Input
                type="text"
                id="input-small-horizontal"
                bsSize="sm"
                placeholder="Small Input"
              />
            </FormGroup>
          </Col>
          <Col sm={12} xs={12} md={12} lg={12} xl={12}>
            <FormGroup className="d-flex">
              <Label sm="3" size="sm" for="input-small-horizontal">
                Status
              </Label>
              <span style={{ marginRight: "10px", marginLeft: "10px" }}>:</span>

              <Controller
          name="style"
          control={control}
          render={({ field }) => (
            <Select
              // defaultValue={options[0]}
              {...field}
              isClearable // enable isClearable to demonstrate extra error handling
              isSearchable={false}
              className="react-dropdown"
              classNamePrefix="dropdown"
              options={options}
            />
          )}
        />
            </FormGroup>
            <p style={{color:'red'}}>{errors.style?.message}</p>
          </Col>
          <FormGroup >
              <Button className=' bg-primary' type='submit' >Submit</Button>
          </FormGroup>
        </Row>
        </Form>
    </div>
  )
}

export default Register