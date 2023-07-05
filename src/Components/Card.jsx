import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";


export default function CardCustom(props) {
  return (
    <Card id="card" className="smoothsize" sx={{maxHeight:500, maxWidth: 370 ,margin:5 ,boxShadow:"3px 3px 3px 3px gray"}}>
      {/* <CardActionArea> */}
        <CardContent>
          <Typography gutterBottom variant="h5" textAlign={"center"} component="div">
            {props.title}
          </Typography>
          <Typography
            variant="body2"
            fontWeight={"bold"}
            textAlign={"justify"}
          >
            {props.text}
          </Typography>
        </CardContent>
      {/* </CardActionArea> */}
    </Card>
  );
}
