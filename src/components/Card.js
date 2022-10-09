import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
export default function ImgMediaCard(props) {

  return (
    <Card className="card-main" sx={{ maxWidth: 345 }}>
      <CardContent className="card">
        <Typography gutterBottom variant="h5" component="div">
        </Typography>

        <Typography variant="h6" color="text.secondary">
          Name : {props.name}
        </Typography>

        <Typography variant="h6" color="text.secondary">
          Email : {props.email}
        </Typography>

        <Typography variant="h6" color="text.secondary">
          Phone Number : {props.phoneNumber}
        </Typography>

        <Typography variant="h6" color="text.secondary">
          Rashan For : {props.rashan}
        </Typography>

        <Typography variant="h6" color="text.secondary">
          CNIC: {props.CNIC}
        </Typography>

        <Typography variant="h6" color="text.secondary">
          Family Members : {props.familyMembers}
        </Typography>

        <Typography variant="h6" color="text.secondary">
          Income: {props.income}
        </Typography>

        <Typography variant="h6" color="text.secondary">
          Current Status : {props.currentStatus}
        </Typography>

        <Typography variant="h6" color="text.secondary">
         Date : {props.date}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          ID = {props.id}
        </Typography>


      </CardContent>
      <CardActions className="btn">
        <Link to="/details">
          <Button variant="contained" className="cardbtn" color="success" >Details</Button>
        </Link>
      </CardActions>
    </Card>
  );
}

