/* eslint-disable jsx-a11y/alt-text */
import { yupResolver } from "@hookform/resolvers/yup";
import React from 'react';
import { Controller, useForm } from "react-hook-form";
// import coverImg from '../../assets/images/logo.jpg'
import Select from "react-select";
import { Form, FormGroup, Input, Label } from 'reactstrap';
import * as yup from "yup";
import './Home.css';
const styles={
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  
}
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
    firstName: yup.string().required(),
});
const Home = () => {
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
      <form onSubmit={handleSubmit(onSubmit)}>
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
        <p>{errors.style?.message || errors.style?.label.message}</p>
        <input type="submit" />
      </form>
      </div>
      {/* <img width={300} height={300} src={coverImg} className="img-responsive img-rounded img-thumbnail" style={styles}></img> */}
      <div style={styles} >
        <h2> Login</h2>
          <Form>
            <FormGroup>
              <Label>Username</Label>
              <Input type='text'{...register("firstName")}></Input>
              <p>{errors.firstName?.message}</p>
            </FormGroup>
            <FormGroup>
              <Label>Password</Label>
              <Input type='text'></Input>
            </FormGroup>
          </Form>
       
      </div>
    </div>
  )
}

export default Home