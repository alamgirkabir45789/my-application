/* eslint-disable no-unused-expressions */
import axios from "axios";
import _ from "lodash";
import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  FormGroup,
  Input,
  Label,
  Table,
} from "reactstrap";
import CustomModal from "../../../utility/customComponent/CustomModal";

const myProject = [
  {
    id: 13,
    name: "Garments ERP Project - Front End: React JS(Production)",
    description: "ReactJs Application",
    projectLink:
      "https://bitbucket.org/rdmerp/erp_production/src/master/ or http://192.168.0.29/nasir/erp-production/-/tree/alamgir",
    technology: ["Reactjs", "NodeJs", "HTML", "CSS", "Bootstrap"],
  },
  {
    id: 12,
    name: "Garments ERP Project - Front End: React JS(Merchandising)",
    description: "ReactJs Application",
    projectLink: "https://bitbucket.org/rdmerp/quadrion.erp/src/alamgir/UI/",
    technology: ["Reactjs", "NodeJs", "HTML", "CSS", "Bootstrap"],
  },
  {
    id: 11,
    name: "E-Commerce App- ReactJs",
    description: "ReactJs Application",
    projectLink: "https://github.com/alamgirkabir45789/react-ecommerce-project",
    technology: ["Reactjs", "NodeJs", "HTML", "CSS", "Bootstrap"],
  },
  {
    id: 1,
    name: "C#",
    description: "ReactJs Application",
    projectLink: "https://github.com/alamgirkabir45789/ExamProject",
    technology: ["Reactjs", "NodeJs", "HTML", "CSS", "Bootstrap"],
  },
  {
    id: 2,
    name: "ASP.NET CORE",
    description: "ReactJs Application",
    projectLink: "https://github.com/alamgirkabir45789/CoreProject_Alamgir",
    technology: ["Reactjs", "NodeJs", "HTML", "CSS", "Bootstrap"],
  },
  {
    id: 3,
    name: "ASP.NET MVC(CodeFast)",
    description: "ReactJs Application",
    projectLink:
      "https://github.com/alamgirkabir45789/MvcCodeFastProject_Alamgir",
    technology: ["Reactjs", "NodeJs", "HTML", "CSS", "Bootstrap"],
  },
  {
    id: 4,
    name: "ASP.NET MVC(DatabaseFast)",
    description: "ReactJs Application",
    projectLink:
      "https://github.com/alamgirkabir45789/AspDotNetMvcProject_Alamgir",
    technology: ["Reactjs", "NodeJs", "HTML", "CSS", "Bootstrap"],
  },
  {
    id: 5,
    name: "ASP.NET WEB FORM",
    description: "ReactJs Application",
    projectLink: "https://github.com/alamgirkabir45789/Asp_Project_Alamgir",
    technology: ["Reactjs", "NodeJs", "HTML", "CSS", "Bootstrap"],
  },
  {
    id: 6,
    name: "MSSQL",
    description: "ReactJs Application",
    projectLink: "https://github.com/alamgirkabir45789/SqlProject",
    technology: ["Reactjs", "NodeJs", "HTML", "CSS", "Bootstrap"],
  },
  {
    id: 7,
    name: "SignalR",
    description: "ReactJs Application",
    projectLink: "https://github.com/alamgirkabir45789/SignalRProject_Alamgir",
    technology: ["Reactjs", "NodeJs", "HTML", "CSS", "Bootstrap"],
  },
  {
    id: 8,
    name: "ASP.NET WEB API",
    description: "ReactJs Application",
    projectLink: "https://github.com/alamgirkabir45789/SmsCoreApi",
    technology: ["Reactjs", "NodeJs", "HTML", "CSS", "Bootstrap"],
  },
  {
    id: 9,
    name: "Chat Application - NodeJs",
    description: "ReactJs Application",
    projectLink: "https://github.com/alamgirkabir45789/DoctorInformation",
    technology: ["Reactjs", "NodeJs", "HTML", "CSS", "Bootstrap"],
  },
];
const ProjectList = () => {
  const [tableData, setTableData] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [project, setProject] = useState({
    id: 0,
    projectName: "",
    description: "",
    projectLink: "",
    technology: [
      {
        id: 0,
        name: "",
      },
    ],
  });
  const [techTable, setTechTable] = useState([]);
  const fetchProject = () => {
    axios.get("http://localhost:5005/projectList").then((res) => {
      const listData = res.data;
      setTableData(listData);
    });
  };
  useEffect(() => {
    console.log("render");
    fetchProject();
  }, []);

  const clearState = () => {
    project.technology.name = "";
  };

  const handleAddTechnology = () => {
    if (project.technology.name !== "") {
      const techData = {
        id: Math.floor(Math.random() * 100),
        technology: project.technology.name,
      };
      console.log(techData);
      // setTechTable({ ...techTable, techData });
    }

    clearState();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const clone = _.cloneDeep(project);
    const preValue = { ...clone };
    preValue[name] = value;
    console.log(preValue);
    setProject(preValue);
  };

  const handleModalOpen = () => {
    setOpenModal(!openModal);
  };
  const handleToogleModalClose = () => {
    setOpenModal(!openModal);
  };
  const handleModalSubmit = async () => {
    const modData = techTable.map((m) => m.technology);

    if (project.projectName !== "" && project.projectLink !== "") {
      const submitData = {
        id: Math.floor(Math.random() * 100),
        projectName: project.projectName,
        description: project.description,
        projectLink: project.projectLink,
        technology: modData,
      };
      try {
        await axios.post("http://localhost:5005/projectList", submitData);
        fetchProject();
      } catch (error) {
        console.log(error);
      } finally {
        setOpenModal(!openModal);
      }
      console.log(JSON.stringify(submitData, null, 2));
    }
  };
  const handleDeleteProject = async (id) => {
    try {
      await axios.delete(`http://localhost:5005/projectList/${id}`);
      alert("Deleted!!");
      fetchProject();
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditFormOpen = (item) => {
    const techItem = item.technology.map((m, index) => m);
    const editData = {
      projectName: item.projectName,
      description: item.description,
      projectLink: item.projectLink,
      // technology: "techItem",
    };
    setProject(editData);
    setTechTable(techItem);
    setOpenModal(!openModal);
  };

  return (
    <Card className="m-3 p-2">
      <CardHeader>
        <Button className="float-right" onClick={(e) => handleModalOpen(e)}>
          Add Project
        </Button>
      </CardHeader>
      <CardBody>
        <CustomModal
          openModal={openModal}
          handleToogleModalClose={handleToogleModalClose}
          handleModalSubmit={handleModalSubmit}
          title="New Project"
        >
          <Card className="m-1 p-3">
            <FormGroup>
              <Label for="projectName">Project Name</Label>
              <Input
                id="projectName"
                name="projectName"
                placeholder="Project Name"
                value={project.projectName}
                onChange={handleInputChange}
              />
            </FormGroup>{" "}
            <FormGroup>
              <Label for="description">Project Description</Label>
              <Input
                id="description"
                name="description"
                placeholder="Project Description"
                value={project.description}
                onChange={handleInputChange}
              />
            </FormGroup>{" "}
            <FormGroup>
              <Label for="projectLink">Project Link</Label>
              <Input
                id="projectLink"
                name="projectLink"
                placeholder="Project Link"
                value={project.projectLink}
                onChange={handleInputChange}
              />
            </FormGroup>{" "}
            <FormGroup row>
              <FormGroup tag={Col} xs={10}>
                <Label for="technology">Technology Name</Label>
                <Input
                  id="technology"
                  name="technology"
                  placeholder="Project Technology"
                  value={project.technology.name}
                  onChange={handleInputChange}
                />
              </FormGroup>{" "}
              <FormGroup tag={Col} xs={2} className="mt-4">
                <Button className="float-right" onClick={handleAddTechnology}>
                  +
                </Button>
              </FormGroup>
            </FormGroup>
            <Table striped hover bordered responsive>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Technology</th>
                </tr>
              </thead>
              <tbody>
                {techTable?.map((m, index) => (
                  <tr key={m.id}>
                    <td>{index + 1}</td>
                    <td>{m.technology}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card>
        </CustomModal>

        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Github/Bitbucket/GitLab Link</th>
              <th>Technology</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {myProject?.map((project, index) => (
              <tr key={project.id}>
                <td>{index + 1}.</td>
                <td>{project.name}</td>
                <td>{project.description}</td>
                <td>{project.projectLink}</td>
                <td>{project.technology.toString(", ")}</td>
                <td>
                  <Button
                    className=" bg-primary"
                    onClick={() => {
                      handleEditFormOpen(project);
                    }}
                  >
                    Edit
                  </Button>
                  <Button
                    type="button"
                    onClick={() => {
                      handleDeleteProject(project.id);
                    }}
                    className="bg-danger"
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </CardBody>
    </Card>
  );
};

export default ProjectList;
