import { useState } from 'react'
import './App.css'

import Courses from './components/Courses/Courses'
import Header from './components/Header/Header'
import Cart from './components/Cart/Cart'






function App() {
  const [courses, setCourses] = useState([]);
  const [credit, setCredit] = useState(0);
  const [remainingCredit, setRemainingCredit] = useState(20);
  const [totalPrice, setTotalPrice] = useState(0);
  
  

  const handleSelectButton = course =>{

    const isExist = courses.find((item) => item.id == course.id);

    let credit = course.credit;
    let price = course.price;
    
    if(isExist){
      return alert('This course has already been selected.')
    }
    else{
      courses.forEach(course => credit = credit + course.credit);

      courses.forEach(course => price = price + course.price);
      

      const newRemainingCredit = 20 - credit;
      

      if(credit >= 20){
         return alert('Crossing total credit hours, this course can not be selected .')
      }
      else{
        setCredit(credit);
        setRemainingCredit(newRemainingCredit);
        setTotalPrice(price);
        const newCourses = [...courses, course];
        setCourses(newCourses)

      }

      

    }
    
  }
  

  return (
    <>
      <Header ></Header>

      <div className='flex flex-col-reverse md:flex-col-reverse lg:flex-row gap-5 mt-12'>
        <div className='lg:w-4/5 '>
          <Courses handleSelectButton = {handleSelectButton}></Courses>
        </div>
        <div className='lg:w-1/5 '>
          <Cart 
          courses = {courses}
          credit = {credit}
          remainingCredit = {remainingCredit}
          totalPrice = {totalPrice}
          ></Cart>
          
          
         
        </div>
        
      </div>
      
      
    </>
  )
}

export default App
