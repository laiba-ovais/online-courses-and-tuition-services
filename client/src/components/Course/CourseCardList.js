import React from 'react';
import CourseCard from './CourseCard';

const CourseCardList = ({ CourseDetails }) => {
    const courseArray = CourseDetails.map((course,i) => {
      return <CourseCard 
        authorInitial  = { CourseDetails[i].authorInitial }
        courseTitle = { CourseDetails[i].courseTitle }
        uploadDate = { CourseDetails[i].uploadDate }
        courseImage = { CourseDetails[i].courseImage }
        imageTitle = { CourseDetails[i].imageTitle }
        courseAuthor = { CourseDetails[i].courseAuthor }
        />;
    });
    return (
      <div>
        { courseArray }
      </div>
    );
      

}


// import React, { Component } from 'react'

// export default class CourseCardList extends Component {
//   render() {
//     return (
//       <div>
  // listcourses
//       </div>
//     )
//   }
// }



export default CourseCardList;