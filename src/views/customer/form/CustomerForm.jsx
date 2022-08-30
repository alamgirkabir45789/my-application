import { useState } from "react";
import Select from "react-select";
import {
  Button,
  Card,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Row
} from "reactstrap";
import defaultImageSrc from '../../../assets/images/AlamgirSmallSizePP.jpg';
import '../style/customer.css';
const data=[
  {
    value: "India",
   label: "India",
    "city": [
      {
        label: "Kolkata",
       value: "Kolkata",
       "thana":[
        {
          label:'Sadar',
          value:'Sadar'
        }
       ]
      },
      {
        label: "Chennai",
        value: "Chennai",
        "thana":[
          {
            label:'Chennai',
            value:'Chennai'
          }
         ]
      }
    ]
  },
  {
    value: "Bangladesh",
    label: "Bangladesh",
    "city": [
      {
        label: "Dhaka",
       value: "Dhaka",
       "thana":[
        {
          label:'Koatoli',
          value:'Koatoli'
        },
        {
          label:'Savar',
          value:'Savar'
        },
       ]
      },
      {
        label: "Rajshahi",
        value: "Rajshahi",
        "thana":[
          {
            label:'Bagmara',
            value:'Bagmara'
          },
          {
            label:'Mohanpur',
            value:'Mohanpur'
          }
         ]
      }
    ]
  }
]
const CustomerForm = () => {
  const [photo, setPhoto] = useState( { url: '' } );
  console.log(photo)
  const [city, setCity] = useState(null);
  const [country, setCountry] = useState(null);
  const [policeStation, setPoliceStation] = useState(null);
const [cityList, setCityList] = useState([])
const [policeStationList, setPoliceStationList] = useState([])
  // const [countrys, setCountrys] = useState(null);
  // const [lang, setLang] = useState(null);
  // const [langList, setLangList] = useState([]);

  
  // handle change event of the country dropdown
  const handleCountryChange = (obj) => {   
    if(obj){
      setCountry(obj);
      setCityList(obj.city);
      setCity(null);
    }else{
      setCountry(null)
      setCity(null);
      setPoliceStation(null)
    }
   
    
  };
const onImageChange = (e) => { 
  console.log(e)
  const reader=new FileReader();
  const file=e.target.files[0]
  reader.readAsDataURL(file)
  reader.onload=()=>{
    const fileres=reader.result;
    setPhoto((prev=>({...prev,url:fileres})))
  }
 }
    
  // handle change event of the language dropdown
  const 
  handleCityChange = (obj) => {
    if(obj){
      setCity(obj);
      setPoliceStationList(obj.thana)
      setPoliceStation(null)
    }else{
      setCity(null);
      setPoliceStation(null)
    }
  
  };
  // handle change event of the language dropdown
  const 
  handleChangePoliceStation = (obj) => {
    setPoliceStation(obj);
  };
  return (
    <Card className="p-3 m-3">
      <Form>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="firstName">First Name</Label>
              <Input
                id="firstName"
                name="firstName"
                placeholder="firstName"
                type="text"
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="lastName">Last Name</Label>
              <Input
                id="lastName"
                name="lastName"
                placeholder="lastName"
                type="text"
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input id="email" name="email" placeholder="email" type="email" />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="phone">Phone</Label>
              <Input
                id="phone"
                name="phone"
                placeholder="phone "
                type="phone"
              />
            </FormGroup>
          </Col>
        </Row>

        <Row>
       
          <Col md={6}>
            <FormGroup tag={Col} xs={12}>
              <Label for="country">Country</Label>
              <Select
                id="country"
                isSearchable
                isClearable
                options={data}
                classNamePrefix="select"
                value={country}
                onChange={handleCountryChange}
              
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup tag={Col} xs={12}>
              <Label for="city">City</Label>
              <Select
                id="city"
                isSearchable
                isClearable
                options={cityList}
                classNamePrefix="select"
                value={city}
                onChange={handleCityChange}
               
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup tag={Col} xs={12}>
              <Label for="policeStation">Thana</Label>
              <Select
                id="policeStation"
                isSearchable
                isClearable
                options={policeStationList}
                classNamePrefix="select"
                value={policeStation}
                onChange={handleChangePoliceStation}
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Label for="postCode">Post Code</Label>
              <Input id="postCode" name="zip" />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleAddress">Address</Label>
              <Input
                id="exampleAddress"
                name="address"
                placeholder="1234 Main St"
              />
            </FormGroup>
          </Col>
          <Col md={6}  >

            <FormGroup >           
                      <input type='file' accept="image/*" onChange={(e)=>onImageChange(e)} name="image" ></input> 
                      
                        <img  src={ photo.url !== "" ? photo?.url : defaultImageSrc} alt="Example" width={100} height={100} />                   
            </FormGroup>
          </Col>
        </Row>

        <FormGroup check>
          <Input id="exampleCheck" name="check" type="checkbox" />
          <Label check for="exampleCheck">
            Check me out
          </Label>
        </FormGroup>
        <Button className="bg-primary">Sign in</Button>
      </Form>
    </Card>
  );
};

export default CustomerForm;
