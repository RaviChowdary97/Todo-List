import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";

export default function CardUi({
  Name,
  Descrption,
  Status,
  deleteButton,
  editButton,
}) {
  return (
    <Card sx={{ width: 345, backgroundColor: "lightgreen", margin: "10px" }}>
      <CardContent>
        <Typography>Name : {Name}</Typography>
        <Typography>Description : {Descrption}</Typography>
        <Typography>Status : {Status}</Typography>
      </CardContent>
      <CardActions disableSpacing>
        {editButton}
        {deleteButton}
      </CardActions>
    </Card>
  );
}
