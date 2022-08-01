// import CourseCard from './components/CourseCard/CourseCard';


import Courses from './layouts/Courses/Courses';
import CoursePage from './layouts/CoursePage/CoursePage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReviewCard from './components/ReviewCard/ReviewCard';
import Footer from './layouts/Footer/Footer';


import Hero from './layouts/Hero/Hero';
import Nav from './layouts/Nav/Nav'

import AboutPage from './layouts/About/AboutPage';
import Modules from './InsideCourse/Modules';
import InsideCourse from './InsideCourse/InsideCourse';
import UserCourses from './layouts/CourseDashboard/UserCourses';
import ErrorToast from './components/ErrorToast/ErrorToast'
import { useGlobalContext } from './context';
import Navbarmenu from './layouts/Nav/TempNav';
import Navy from './layouts/Nav/Navy';
import TempFooter from './layouts/Footer/TempFooter';
import TempProfile from './layouts/Profile/TempProfile';
import PaymentSuccess from './layouts/Payment/PaymentSuccess';
import MainInsideCourse from './InsideCourse/mainInsideCourse';
import ErrorModal from './components/BasicModal/ErrorModal';
import {ErrorBoundary} from 'react-error-boundary'

function App() {
 const {errors, setErrors} = useGlobalContext()

 const FallBack = ({ error, componentStack, resetErrorBoundary }) => {
  return (
    <ErrorModal error={errors} errorMessage={error.message} reset={resetErrorBoundary} /> 
  )
 }

 const errorHandler = (error, errorInfo) => {
 setErrors(true)
  console.log('Logging', error, errorInfo);
}

  return (
    <ErrorBoundary FallbackComponent={FallBack} onError={errorHandler}>
    <div style={{padding:0, margin:0, boxSizing:'border-box', backgroundColor:'#F5F7FA', overflow:'hidden'}}>
   
    <Router>
    {/* <Nav /> */}
    {/* <Navbarmenu /> */}
    <Navy />
    {/* {errors && <ErrorToast error={errors}  /> } */}
        <Routes>
            <Route path="/" exact element={<Hero />} />
            <Route path="/about" exact element={<AboutPage />} />
            <Route path="/profile" exact element={<TempProfile />} />
            <Route path='/course/:courseId' element={<CoursePage />} />
            <Route path='/courses' element={<Courses />} />
            <Route path='/modules' element={<Modules />} />
            <Route path='/inside/course' element={<InsideCourse />} />
            <Route path='/inside/course/main/:courseId/:enrollmentId' element={<MainInsideCourse />} />
            <Route path='/user/courses' element={<UserCourses />} />
            <Route path='/payment/success' element={<PaymentSuccess />} />
        </Routes>
        {/* <Footer/> */}
        <TempFooter />
   </Router>
  
    </div>
    </ErrorBoundary>
  );
}

export default App;
 {/* <Nav />
      <Hero />
      <div className='m-auto' style={{display:'flex', alignContent:'center', justifyContent:'center'}}>
      {/* <Features />
      <TempFeatures />
      </div>
      <Achievements />
      <About />
      <CourseCard />
      <ReviewCard />
      <Footer /> */}