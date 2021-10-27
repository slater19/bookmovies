import React from "react";
import "./style.css";
import Header from "../../common/header/Header";
import {useState} from "react";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Rating from "@material-ui/lab/Rating";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import { makeStyles } from "@material-ui/core/styles";
import React,{useState} from "react";
import "./style.css";
import Modal from 'react-modal';
import Button from "@material-ui/core/Button";
import { Tab,Tabs} from '@material-ui/core';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import FormHelperText from "@material-ui/core/FormHelperText";
import {ValidatorForm} from 'react-material-ui-form-validator';



export default function Details() {
  

  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flexDirection: "column",
  
      "& > * + *": {
        marginTop: theme.spacing(1)
      }
    },
    emptyStar: {
      color: "white"
    }
  }));
  const classes = useStyles();
  return (
    
    <div>
    <div>
    <Header/>
    </div>

    <div class="flex-container">
  <div class="flex-item-left"><Link to={"/Home/"}>
            <Typography className="back margin">&#60; Back to Home</Typography>
          </Link></div>
  <div class="flex-item-middle"></div>
  <div class="flex-item-right"><Typography style={{ fontWeight: 600 }}>
 Rate this movie: 
</Typography></div>
<div className={classes.root}>
      <Rating
        name="half-rating-read"
        defaultValue={0}
        precision={0.5}
        readOnly
        emptyIcon={
          <StarBorderIcon fontSize="inherit" className={classes.emptyStar} />
        }
      />
    </div>
</div>


    </div>
  );
}
