import React, { useState } from "react";
import { Product_Data } from "../Utils/Product_data";
import { Products_Cards } from "./Products_Cards";
import { Container, Grid, Stack } from "@mui/material";
import { useParams } from "react-router-dom";

const Product = () => {
  const params = useParams();
  const [data, setData] = useState([...Product_Data]);

  return (
    <div>
      <Container maxWidth={false}>
        <Stack spacing={5}>
          <Grid container>
            {data.map((pro, index) => {
              return (
                <Grid key={index} item xs={12} sm={12} md={4} lg={3} xl={3}>
                  <Products_Cards key={pro.id} data={pro} />
                </Grid>
              );
            })}
          </Grid>
        </Stack>
      </Container>
    </div>
  );
};

export { Product };
