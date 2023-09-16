Project Features are as follows:

 * In this project, user can select any course once. If user tries to select course more than one time,      a toast message (This course has already been selected) will be given. 
 
 * When user will select any course, user will find some information such as course name, total credit hours, remaining credit hours, total price which will be automatically shown on the cart part.

 * User can not select courses exceeding 20 credit hours or making credit hours remaining less than 0. If user tries this a toast message (Crossing total credit hours, this course can not be selected) will be given. 

 * Total credit hours will be shown adding credit hours of the courses selected and Credit hours remaining will be shown subtracting total credit hours from 20.

 * In this project, useState, useEffect, components, props, drilling, map, forEach, if condition,  toast etc have been used.



 How I have managed the state in this project:

 In Courses component I have used useState and useEffect to load and store json data. In useState, courses, setCourses are used to get array of objects. Then map is used to get each object. Object is then passed as prop to course component. There destructuring process is used to find property values of the object. In the Course component these property values are used to make card on which course image and information have been shown. Components are declared on App.jsx. For calculation of Total Credit Hours, Credit Hours Remaining and Total Price, useState are used several times. In thess cases PropTypes.object.isRequired, PropTypes.array, PropTypes.number, PropTypes.func have been used. 

