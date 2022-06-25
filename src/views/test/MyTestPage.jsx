import { useState } from "react";
import { Button, Col, FormGroup, Input, Label, Row } from "reactstrap";
import DynamicColumn from "./DynamicColumn";
const columns = [
    { path: "id",   name: "ID" },
    { path: "name", name: "Name" },
    { path: "age",  name: "Age" },
  ];

  const data = [
    { id: 1, name: 'Kate',  age: 25, favFruit: '🍏' },
    { id: 2, name: 'Tom',   age: 23, favFruit: '🍌' },
    { id: 3, name: 'Ann',   age: 26, favFruit: '🍊' },
    { id: 4, name: 'Jack',  age: 21, favFruit: '🍒' }
  ];
const MyTestPage = () => {
    const [column, setColumn] = useState(columns)
    const [row, setRow] = useState(data)
    const [state, setState] = useState('')
console.log(column)
 
    const handleSave = () => {
        const payload={
            path:Math.floor(Math.random()*100),
            name:state,
        }

        setColumn([...column,payload])
      };
    
  return (
    <div>
        <Row className="rounded rounded-3 ml-1">
            <FormGroup tag={Col} xs={8} sm={8} md={8} lg={8} xl={8}>
              <Label for="name">Name</Label>
              <Input id="name" name="name" type="text" placeholder="name" value={state} onChange={(e)=>setState(e.target.value
                
              )} />
            </FormGroup>
            <FormGroup tag={Col} xs={1} sm={1} md={1} lg={1} xl={1}>
              <Button className="btn-icon " id="btn-save" style={{ marginTop: '15px', padding: '8px' }} color="primary" outline onClick={handleSave}>
               Add
              </Button>
            </FormGroup>
          </Row>
        <DynamicColumn id="id" columns={column} data={row}/>
    </div>
  )
}

export default MyTestPage