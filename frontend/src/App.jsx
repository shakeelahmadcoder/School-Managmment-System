import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard/Dashboard'
import StudentDashboard from './pages/Dashboard/StudentDashboard'
import TeachersDashboard from './pages/Dashboard/TeachersDashboard'
import ParentsDashboard from './pages/Dashboard/ParentsDashboard'
import AllStudents from './pages/Students/AllStudents'
import AdmitForm from './pages/Students/AdmitForm'
import StudentPromotion from './pages/Students/StudentPromotion'
import AllTeachers from './pages/Teachers/AllTeachers'
import AddTeacher from './pages/Teachers/AddTeacher'
import TeacherDetails from './pages/Teachers/TeacherDetails'
import AllParents from './pages/Parents/AllParents'
import AllBooks from './pages/Library/AllBooks'
import AddBooks from './pages/Library/AddBooks'
import AddExpensess from './pages/Account/AddExpensess'
import AllExpensess from './pages/Account/AllExpensess'
import CreatStudentPayment from './pages/Account/CreatStudentPayment'
import FeesCollection from './pages/Account/FeesCollection'
import AllClass from './pages/Class/AllClass'
import AddNewClass from './pages/Class/AddNewClass'
import Subject from './pages/Subject/Subject'
import ClassRoutine from './pages/Class-Routine/ClassRoutine'
import Attendance from './pages/Attendance/Attendance'
import ExamGrades from './pages/Exam/ExamGrades'
import ExamSchedule from './pages/Exam/ExamSchedule'
import Transport from './pages/Transport/Transport'
import Hostel from './pages/Hostel/Hostel'
import Notice from './pages/Notice/Notice'
import Message from './pages/Message/Message'

const App = () => {
  return (
   
      <Routes>

        <Route path='/' element={<Layout/>}>
            {/* Dashboard Routes  */}
            <Route index element={<Dashboard/>}/>
            <Route path='dashboard/students' element={<StudentDashboard/>}/>
            <Route path='dashboard/teachers' element={<TeachersDashboard/>}/>
            <Route path='dashboard/parents' element={<ParentsDashboard/>}/>

            {/* Students Routes  */}
            <Route path='students' element={<AllStudents/>}/>
            <Route path='students/add' element={<AdmitForm/>}/>
            <Route path='students/promotion' element={<StudentPromotion/>}/>

            {/* Teachers Routes  */}
            <Route path='teachers' element={<AllTeachers/>}/>
            <Route path='teachers/add' element={<AddTeacher/>}/>
            <Route path='teachers/details' element={<TeacherDetails/>}/>

            {/* Parents Routes  */}
            <Route path='parents' element={<AllParents/>}/>

            {/* Library Routes  */}
            <Route path='library' element={<AllBooks/>}/>
            <Route path='library/add' element={<AddBooks/>}/>
            
            {/* Account Routes  */}
            <Route path='account/add-expensess' element={<AddExpensess/>}/>
            <Route path='account/all-expensess' element={<AllExpensess/>}/>
            <Route path='account/create-student-payment' element={<CreatStudentPayment/>}/>
            <Route path='account/fees-collection' element={<FeesCollection/>}/>

            {/* Class Routes  */}
            <Route path='class' element={<AllClass/>}/>
            <Route path='class/add' element={<AddNewClass/>}/>

            {/* Subject Routes  */}
            <Route path='subjects' element={<Subject/>}/>
            
            {/* ClassRoutine Routes  */}
            <Route path='class-routine' element={<ClassRoutine/>}/>
            
            {/* Attendance Routes  */}
            <Route path='attendance' element={<Attendance/>}/>
            
            {/* Exam Routes  */}
            <Route path='exam/grades' element={<ExamGrades/>}/>
            <Route path='exam/schedule' element={<ExamSchedule/>}/>
            
            {/* Transport Routes  */}
            <Route path='transport' element={<Transport/>}/>

            {/* Hostel Routes  */}
            <Route path='hostel' element={<Hostel/>}/>

            {/* Notice Routes  */}
            <Route path='notice' element={<Notice/>}/>
            
            {/* Message Routes  */}
            <Route path='message' element={<Message/>}/>
        </Route>

      </Routes>
  
  )
}

export default App