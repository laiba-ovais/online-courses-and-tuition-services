import React, {Component, useState} from 'react';
import Navbar from '../components/Navbar/Navbar';
import Cart from '../components/Cart/Cart';
import Default from '../components/Default.';
import { CourseDetails } from '../components/Course/CourseDetails';
import CourseCardList from '../components/Course/CourseCardList';
import { GridList } from '@material-ui/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/Course/CourseDetails';
import "./Course.css";

import { BrowserRouter, Route, Link } from 'react-router-dom';
import SearchBar from '../components/Navbar/SearchBar';


class Course extends React.Component{
    constructor(props){
        super(props);
        this.state={apiResponse: "", 
        CourseDetails: CourseDetails,
        searchfeild: '' };
        
    }
   
    callAPI(){
        fetch("http://localhost:9000/Courses")
        .then(res => res.text())
        .then(res => this.setState({apiResponse: res}))
    }

    componentWillMount(){
        this.callAPI();
    }

    
    

     onSearchChange = (event) =>{
      var searchfeild = event.target.value;
          const filteredcourse = CourseDetails.filter(CourseDetails=>{
             return( 
              CourseDetails.courseTitle.toLowerCase().includes(searchfeild.toLowerCase()))
             })
             this.setState({CourseDetails:filteredcourse}); 
             console.log(CourseDetails);
              }
    
    render(){

        return(
            <div className ="container">
            <div>
            <SearchBar  onChange={this.onSearchChange}> 
            
            </SearchBar>
            </div>
            {/* <Navbar/>
            <Cart/>
            <Default/> */}
            
            <GridList cols={3} cellHeight={'auto'}> 
            <CourseCardList CourseDetails={this.state.CourseDetails}/>
            </GridList>
             </div>

            
            
        )


    }
}

export default Course;