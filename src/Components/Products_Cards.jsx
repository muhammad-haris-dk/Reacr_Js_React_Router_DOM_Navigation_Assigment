import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Avatar, CardActionArea, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

export function Products_Cards({ data }) {
  const {
    title,
    id,
    price,
    description,
    image,
    category,
    rating: { rate, count },
  } = data;

  const navigate = useNavigate();

  const clickHandle = () => {
    navigate(`/product/${id}`);
  };

  return (
    <Card
      sx={{
        maxWidth: "100%",
        marginTop: "25px",
        marginX: "10px",
        border: "1px solid black",
        borderRadius: "20px",
      }}
      // className="max-h-[650px]"
    >
      <CardActionArea onClick={clickHandle}>
        <CardMedia
          component="img"
          sx={{
            border: "1px solid black",
            borderLeft: "none",
            borderRight: "none",
            borderTop: "none",
            borderEndEndRadius: "10px",
            borderEndStartRadius: "10px",
          }}
          height="350px"
          // className="h-[400px] w-[100%]"
          image={image}
          alt="green iguana"
        />
        <CardContent >
          <Stack flexDirection="row" sx={{ color: "gray" }} gap={2}>
            <Typography
              sx={{
                backgroundColor: "green",
                color: "white",
                paddingX: "10px",
              }}
            >
              {rate}
            </Typography>
            <Typography>{count}</Typography>
          </Stack>
          <Stack>
            <Typography gutterBottom variant="h5" component="div">
              {title.substring(0, 19)}...
            </Typography>
            <Typography>{description.substring(0, 45)}...</Typography>
          </Stack>
          <Stack flexDirection="row" alignItems="center" gap={1}>
            <Typography>{category}</Typography>
          </Stack>
          <Stack>
            <Typography
              variant="body"
              fontWeight="bold"
              sx={{
                fontSize: "1.875rem",
                lineHeight: "2.25rem",
                color: "rgb(251 146 60)",
              }}
            >
              ${price}
            </Typography>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
