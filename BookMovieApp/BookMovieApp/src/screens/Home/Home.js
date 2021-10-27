import React from "react";
import "./style.css";
import { GridList, GridListTile,GridListTileBar } from "@material-ui/core";

import { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import { createTheme } from '@mui/material/styles';
import WithTheme from './WithTheme';
import TextField from '@material-ui/core/TextField';
import Modal from 'react-modal';
import { Tab,Tabs} from '@material-ui/core';
import FormHelperText from "@material-ui/core/FormHelperText";
import {ValidatorForm,TextValidator} from 'react-material-ui-form-validator';
import Header from "../../common/header/Header";
import { Link } from "react-router-dom";










export default function Home () {
  
    const [posters, setPosters] = useState([]);   {/*Fetching movies and title data */}
  
    useEffect(() => {
    fetch("http://localhost:8085/api/poster_url")
      .then(response => response.json())
      .then(data => {
        setPosters(data); // set posters in state
      });
  }, []);

  const [title, setTitle] = useState([]);
  
  useEffect(() => {
  fetch("http://localhost:8085/api/title")
    .then(response => response.json())
    .then(data => {
      setTitle(data); // set title in state
    });
}, []);
  
  
  
  
  
  return (
   
   <div>
    
  
<div>
  <Header/>
</div>




<div className="headernew">
  
  <p>Upcoming Movies</p>
</div>

 {/*Upcoming movies grid list */}
<GridList cellHeight={250} cols={6}  style={{ height: 250 }}>
        {posters.map((data) => (
          <GridListTile >
        
<img src={posters}/>

            <GridListTileBar
              title={title}
              
              
            />
            
         
         
          </GridListTile>
          
        ))}
      </GridList>  
    {/*Released movies grid list */}
      <div id="flex-container">
           <div className="flex-item-left">
               <div>
               <GridList className="pointer" cellHeight={250} cols={4} style={{  height: 1000 }}>
        {posters.map((data) => (
          <GridListTile >
          <Link to={"/details/" }>
            
          
<img src={posters}/>
</Link>
            <GridListTileBar
              title={title}
              
              
            />
            
         
         
          </GridListTile>
          
        ))}
      </GridList>  
               </div>
            </div>
           <div className="flex-item-right">
           <div>
         <Card className="cardStyle">
          <CardContent>
          
          FIND MOVIES BY:        {/*Movies filter card */}
           
            <br /><br/>

            <FormControl className="formControl">
              <InputLabel htmlFor="tickets">
               Movie Name
              </InputLabel>
              <Input
                id="tickets"
                
                
              />
             
            </FormControl><br/><br/>

            <FormControl className="formControl">
              <InputLabel htmlFor="location">Genres</InputLabel>
              <Select>
                
                  <MenuItem >
                    {}
                  </MenuItem>
                
              </Select>
              
            </FormControl>
            <br />
            <br />

            <FormControl  className="formControl">
              <InputLabel htmlFor="location">Artists</InputLabel>
              <Select >
              
                  <MenuItem >
                  
                  </MenuItem>
               
              </Select>
             
            </FormControl>
            <br />
            <br />
           
            <FormControl className="formControl">
            <TextField
        id="date"
        label="Release Date Start"
        type="date"
        defaultValue={} // Today's Date being used as default
        InputLabelProps={{
          shrink: true
        }}
      /> </FormControl><br/><br/>
<FormControl className="formControl">
<TextField
        id="date"
        label="Release Date End"
        type="date"
        defaultValue={} // Today's Date being used as default
        InputLabelProps={{
          shrink: true
        }}
      /> </FormControl> <br/><br/>
       
       
            <Button className="btn"
              variant="contained"
              //onClick={bookShowButtonHandler}
              color="primary"
            >
              APPLY
            </Button>
          </CardContent>
        </Card>
      </div>
            </div>

           
       </div>

    </div>

  );
}
