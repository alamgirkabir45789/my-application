import { Grid, Paper, TextField } from "@material-ui/core";
import React from "react";
const arr = [
  {
    id: "b298eab5-5184-4965-a9c1-79cb1ffe7bf1",
    sysId: "STYLE/2022/1",
    styleNo: "STYLE-0001012001",
    description: "Dsfsf",
    styleCategory: "T-Shirt",
    buyerId: "2adb7708-51d4-49f3-bee6-0f86e23ba1cc",
    buyerName: "H&M",
    season: "Summer 2022",
    year: "2022",
    status: "Confirmed PO",
    isActive: true,
  },

  {
    id: "d9b55ce3-66e3-4f37-9bfb-c1f1568ec4d8",
    sysId: "STYLE/2022/6",
    styleNo: "SY-001",
    description: "D",
    styleCategory: "T-Shirt",
    buyerId: "89ce0a8a-2e80-4a8f-88c0-d2604ba38363",
    buyerName: "WALMART",
    season: "Summer 2022",
    year: "2022",
    status: "Confirmed PO",
    isActive: true,
  },
  {
    id: "d60712e1-ae28-4f77-b499-506b604ad0af",
    sysId: "STYLE/2022/32",
    styleNo: "OG2435",
    description: "GIRLS BOYFRIEND JOGGER",
    styleCategory: "Long Pant",
    buyerId: "79eaffef-ab5b-468c-be62-e0add563ea40",
    buyerName: "Omni",
    season: "Summer 2022",
    year: "2022",
    status: "Confirmed PO",
    isActive: true,
  },
  {
    id: "5ae7434d-fecd-427a-856d-a739d6c5ec6c",
    sysId: "STYLE/2022/38",
    styleNo: "AF1575",
    description: "Avenue Anorak",
    styleCategory: "Hoodie",
    buyerId: "88907d57-5d32-474e-a930-34c8873253e4",
    buyerName: "IFG",
    season: "SPRING-22",
    year: "2022",
    status: "Confirmed PO",
    isActive: true,
  },
];
const arr2 = [
  {
    styleId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    styleNo: "STyle 01",
  },
  {
    styleId: "d60712e1-ae28-4f77-b499-506b604ad0af",
    styleNo: "OG2435",
  },
];
const filteredSerials = arr.filter((s) =>
  arr2.every((exs) => s.id !== exs.styleId)
);
console.log(filteredSerials);
const Login = () => {
  return (
    <div>
      <Paper elevation={5} className="m-5">
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          style={{ minHeight: "25vh" }}
        >
          <Grid item xs={3}>
            <TextField
              label="Size"
              id="outlined-size-small"
              defaultValue="Small"
              size="small"
            />
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default Login;
