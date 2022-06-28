import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import {
  Button,
  Card,
  CardTitle,
  Col,
  FormGroup,
  Input,
  Label,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  Table,
  TabPane,
} from "reactstrap";

const mealDetails = [
  {
    id: 44,
    name: "Rakib",
    morning: 1,
    noon: 1,
    night: 1,
    total: 3,
    dailyExpence: 400,
    mealRate: 30.25,
    totalExpence: 4000,
    totalMeal: 20,
    extraCharge: 400,
    totalBill: 3000,
    dueAmount: 200,
    payStatus: false,
  },
  {
    id: 88,
    name: "Shakib",
    morning: 1,
    noon: 1,
    night: 1,
    total: 3,
    dailyExpence: 400,
    totalExpence: 4000,
    mealRate: 30.25,

    totalMeal: 20,
    extraCharge: 400,
    totalBill: 3000,
    dueAmount: 200,
    payStatus: true,
  },
];
const Member = () => {
  //#region States
  const [state, setState] = useState({
    memberName: "",
    contactNo: "",
  });
  const [active, setActive] = useState("1");

  const [member, setMember] = useState([]);
  const [mealList, setMealList] = useState([]);
  const [mealInfo, setMealInfo] = useState(mealDetails);
  const getMember = async () => {
    const res = await axios.get("http://localhost:5005/member");
    setMember(res.data.recordset);
  };
  const getMeal = async () => {
    const res = await axios.get("http://localhost:5005/meal");
    setMealList(res.data);
  };
  //#region Effects
  useEffect(() => {
    getMember();
    // getMeal();
  }, []);
  const toggle = (tab) => {
    if (active !== tab) {
      setActive(tab);
    }
  };

  const handleSubmit = async () => {
    const payload = {
      MemberName: state.memberName,
      ContactNo: state.contactNo,
    };
    console.log(JSON.stringify(payload, null, 2));
    if (state.memberId) {
      await axios.put("http://localhost:5005/api/member/" + state.memberId, {
        MemberId: state.memberId,
        MemberName: state.memberName,
        ContactNo: state.contactNo,
      });
    } else {
      await axios.post("http://localhost:5005/api/member", payload);
    }

    getMember();
    setState({ name: "" });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const prev = { ...state };
    prev[name] = value;
    setState(prev);
  };

  const handleEdit = (item) => {
    const updateState = {
      memberId: item.MemberId,
      memberName: item.MemberName,
      contactNo: item.ContactNo,
    };
    setState(updateState);
  };
  const handleDelete = async (id) => {
    await axios.delete(`${"http://localhost:5005/api/member"}/${id}`);
    getMember();
  };
  return (
    <Fragment>
      <Card className="m-2 p-3">
        <div className="d-flex justify-content-around">
          <div>
            <FormGroup>
              <Label for="name">Create Member</Label>
            </FormGroup>
            <FormGroup className="d-flex">
              <FormGroup className="mr-2">
                <Label for="memberName">Name</Label>
                <Input
                  id="memberName"
                  name="memberName"
                  type="text"
                  value={state.memberName}
                  onChange={handleInputChange}
                />
              </FormGroup>
              <FormGroup className="mr-2">
                <Label for="contactNo">Contact No</Label>
                <Input
                  id="contactNo"
                  name="contactNo"
                  type="text"
                  value={state.contactNo}
                  onChange={handleInputChange}
                />
              </FormGroup>
              <div className="ml-5 mt-4">
                <Button
                  type="submit"
                  className="bg-primary"
                  onClick={handleSubmit}
                  size="md"
                >
                  Add
                </Button>
              </div>
            </FormGroup>
            <Table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Contact No</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {member?.map((item, index) => (
                  <tr key={item.MemberId}>
                    <td>{index + 1}</td>
                    <td>{item.MemberName}</td>
                    <td>{item.ContactNo}</td>
                    <td>
                      <Button
                        className="bg-success mr-2"
                        onClick={() => handleEdit(item)}
                      >
                        Edit
                      </Button>
                      <Button
                        className="bg-danger"
                        onClick={() => handleDelete(item.MemberId)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
          <div>
            <FormGroup>
              <Label
                for="month"
                style={{ fontWeight: "bolder", fontSize: "30px" }}
              >
                Create Meal
              </Label>
            </FormGroup>
            <FormGroup className="d-flex">
              <FormGroup className="mr-2">
                <Label for="name">Name</Label>
                <Input id="name" name="name" type="text" onChange={() => {}} />
              </FormGroup>
              <FormGroup className="mr-2">
                <Label for="item">Item</Label>
                <Input id="item" name="item" type="text" onChange={() => {}} />
              </FormGroup>
              <FormGroup className="mr-2">
                <Label for="price">Price</Label>
                <Input
                  id="price"
                  name="price"
                  type="number"
                  onChange={() => {}}
                />
              </FormGroup>
              <div className="ml-5 mt-4">
                <Button
                  type="submit"
                  className="bg-primary"
                  onClick={handleSubmit}
                >
                  Add
                </Button>
              </div>
            </FormGroup>
            <FormGroup>
              <Table>
                <thead>
                  <tr>
                    <th>SL</th>
                    <th>Name</th>
                    <th>Menu</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Morning</td>
                    <td>Menu</td>
                    <td>
                      <Button className="bg-success mr-2">Edit</Button>
                      <Button className="bg-danger">Delete</Button>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </FormGroup>
          </div>
        </div>
      </Card>

      <Card className="m-2 p-3">
        <Row className="rounded rounded-3 p-1">
          <CardTitle tag="h2" className="ml-2 mt-1 text-center">
            Meal Info
          </CardTitle>
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <Nav tabs>
              <NavItem>
                <NavLink
                  active={active === "1"}
                  onClick={() => {
                    toggle("1");
                  }}
                  className="cursor-pointer"
                >
                  Assign Meal
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={active === "2"}
                  onClick={() => {
                    toggle("2");
                  }}
                >
                  Meal Details
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={active === "3"}
                  onClick={() => {
                    toggle("3");
                  }}
                >
                  Meal Calculation
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={active}>
              <TabPane tabId="1">
                <div className="border rounded rounded-3 p-1">
                  <Row>
                    <FormGroup
                      tag={Col}
                      xs={12}
                      sm={12}
                      md={12}
                      lg={12}
                      xl={12}
                    >
                      <div className="d-flex justify-content-between">
                        <FormGroup>
                          <Label for="status">
                            <Input
                              name="status"
                              id="status"
                              type="checkbox"
                              style={{ marginLeft: "5px" }}
                              onChange={() => {}}
                            />
                            <span style={{ marginLeft: "25px" }}>
                              All Select
                            </span>
                          </Label>
                        </FormGroup>
                        <FormGroup
                          className="d-flex"
                          style={{ width: "300px" }}
                        >
                          <Label
                            className="text-nowrap mt-2"
                            style={{ marginRight: "25px" }}
                            for="month"
                          >
                            Select Date:
                          </Label>
                          <Input
                            id="month"
                            name="month"
                            type="date"
                            onChange={() => {}}
                          />
                        </FormGroup>
                      </div>
                      <Table>
                        <thead>
                          <tr>
                            <th>SL</th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Morning</th>
                            <th>Noon</th>
                            <th>Night</th>
                            <th>Total Meal</th>
                            <th>Expence</th>
                          </tr>
                        </thead>
                        <tbody>
                          {mealList.map((ml, index) => (
                            <tr key={ml.id}>
                              <td>
                                <Input
                                  type="checkbox"
                                  checked={ml.mealStatus}
                                  onChange={() => {}}
                                />
                              </td>
                              <td>{ml.memberName}</td>
                              <td>{ml.date}</td>
                              <td>
                                <Input
                                  type="number"
                                  value={ml.morning}
                                  onChange={() => {}}
                                />
                              </td>
                              <td>
                                <Input
                                  type="number"
                                  value={ml.noon}
                                  onChange={() => {}}
                                />
                              </td>
                              <td>
                                <Input
                                  type="number"
                                  value={ml.night}
                                  onChange={() => {}}
                                />
                              </td>
                              <td>{ml.dayTotalMeal}</td>

                              <td>
                                <Input
                                  type="number"
                                  value={ml.dailyExpence}
                                  onChange={() => {}}
                                />
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </Table>
                    </FormGroup>
                  </Row>
                </div>
              </TabPane>
              <TabPane tabId="2">
                <div className="border rounded rounded-3 p-1">
                  <Row>
                    <FormGroup
                      tag={Col}
                      xs={12}
                      sm={12}
                      md={12}
                      lg={12}
                      xl={12}
                    >
                      <Table responsive>
                        <thead>
                          <tr>
                            <th>SL</th>
                            <th>Name</th>
                            <th>Morning</th>
                            <th>Noon</th>
                            <th>Night</th>
                            <th>Total Meal</th>

                            <th>Expence</th>
                            <th>M Rate</th>
                            <th>Meal Bill</th>
                            <th>Extra</th>
                            <th>NetTotal</th>
                            <th>Due Amount</th>
                            <th>Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          {mealInfo.map((item, index) => (
                            <tr key={item.id}>
                              <td>{index + 1}</td>
                              <td>{item.name}</td>
                              <td>{item.morning}</td>
                              <td>{item.noon}</td>
                              <td>{item.night}</td>
                              <td>
                                <Input
                                  type="text"
                                  value={item.totalMeal}
                                  onChange={() => {}}
                                />
                              </td>
                              <td>
                                <Input
                                  type="text"
                                  value={item.totalExpence}
                                  onChange={() => {}}
                                />
                              </td>
                              <td>
                                <Input
                                  type="text"
                                  value={item.mealRate}
                                  onChange={() => {}}
                                />
                              </td>
                              <td>
                                <Input
                                  type="text"
                                  value={item.total}
                                  onChange={() => {}}
                                />
                              </td>
                              <td>
                                <Input
                                  type="text"
                                  value={item.totalBill}
                                  onChange={() => {}}
                                />
                              </td>
                              <td>
                                <Input
                                  type="text"
                                  value={item.extraCharge}
                                  onChange={() => {}}
                                />
                              </td>
                              <td>
                                <Input
                                  type="text"
                                  value={item.dueAmount}
                                  onChange={() => {}}
                                />
                              </td>
                              <td>{item.payStatus ? "Paid" : "Due"}</td>
                            </tr>
                          ))}
                        </tbody>
                      </Table>
                    </FormGroup>
                  </Row>
                </div>
              </TabPane>
              <TabPane tabId="3">
                <div className="border rounded rounded-3 p-1">
                  <Row>
                    <FormGroup
                      tag={Col}
                      xs={12}
                      sm={12}
                      md={12}
                      lg={12}
                      xl={12}
                    >
                      <Table responsive>
                        <thead>
                          <tr>
                            <th>SL</th>
                            <th>Name</th>
                            <th>Morning</th>
                            <th>Noon</th>
                            <th>Night</th>
                            <th>Total Meal</th>

                            <th>Expence</th>
                            <th>M Rate</th>
                            <th>Meal Bill</th>
                            <th>Extra</th>
                            <th>NetTotal</th>
                            <th>Due Amount</th>
                            <th>Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          {mealInfo.map((item, index) => (
                            <tr key={item.id}>
                              <td>{index + 1}</td>
                              <td>{item.name}</td>
                              <td>{item.morning}</td>
                              <td>{item.noon}</td>
                              <td>{item.night}</td>
                              <td>
                                <Input
                                  type="text"
                                  value={item.totalMeal}
                                  onChange={() => {}}
                                />
                              </td>
                              <td>
                                <Input
                                  type="text"
                                  value={item.totalExpence}
                                  onChange={() => {}}
                                />
                              </td>
                              <td>
                                <Input
                                  type="text"
                                  value={item.mealRate}
                                  onChange={() => {}}
                                />
                              </td>
                              <td>
                                <Input
                                  type="text"
                                  value={item.total}
                                  onChange={() => {}}
                                />
                              </td>
                              <td>
                                <Input
                                  type="text"
                                  value={item.totalBill}
                                  onChange={() => {}}
                                />
                              </td>
                              <td>
                                <Input
                                  type="text"
                                  value={item.extraCharge}
                                  onChange={() => {}}
                                />
                              </td>
                              <td>
                                <Input
                                  type="text"
                                  value={item.dueAmount}
                                  onChange={() => {}}
                                />
                              </td>
                              <td>{item.payStatus ? "Paid" : "Due"}</td>
                            </tr>
                          ))}
                        </tbody>
                      </Table>
                    </FormGroup>
                  </Row>
                </div>
              </TabPane>
            </TabContent>
          </Col>
        </Row>
      </Card>
    </Fragment>
  );
};

export default Member;
