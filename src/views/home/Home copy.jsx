import React from 'react'
import { Card, Col, FormGroup, Input, Label, Row } from 'reactstrap'
const Home = () => {
  return (
    <div >
         <div>
        <h1>Test Form</h1>
      </div>
      <Card className="">
        <Row>
          <Col sm={12} xs={12} md={4} lg={4} xl={4}>
            <FormGroup className="d-flex">
              <Label sm="3" size="sm" for="input-small-horizontal">
                Email
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
          <Col sm={12} xs={12} md={4} lg={4} xl={4}>
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
          <Col sm={12} xs={12} md={4} lg={4} xl={4}>
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
        </Row>
      </Card>
    </div>
  )
}

export default Home