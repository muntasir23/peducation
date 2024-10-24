import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import UpdateAllumni from "./components/Allumni/UpdateAllumni";
import PostGallery from "./components/GalleryCompo/PostGallery";
import Header from "./components/Header";
import MultiNoticeCard from "./components/NoticeCompo/MultiNoticeCard";
import MultiplePost from "./components/NoticeCompo/MultiplePost";
import PostNotice from "./components/NoticeCompo/PostNotice";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import Routine from "./components/Routine/Routine";
import RoutineComponent from "./components/Routine/RoutineComponent";
import RoutineUpdate from "./components/Routine/RoutineUpdate";
import Sidebar from "./components/Sidebar";
import PostStudent from "./components/StundentCompo/PostStudent";
import UpdateStudents from "./components/StundentCompo/UpdateStudent";
import PostTeacher from "./components/Teacher/PostTeacher";
import SingleTeacher from "./components/Teacher/SingleTeacher";
import { AuthProvider } from "./context/AuthContext";
import Allumni from "./pages/Allumni";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Notice from "./pages/Notice";
import Student from "./pages/Student";

function App() {
  const [openSidebar, setOpenSidebar] = useState(false);

  const [user, setUser] = useState(false)

  const open = () => {
    setOpenSidebar(!openSidebar);
  };

  const close = () =>{
    setOpenSidebar(false)
  }
  
  useEffect(()=>{
    const storeUser = localStorage.getItem('user');
    if(storeUser) {
      setUser(JSON.parse(storeUser))
    }
  },[])


  return (
    <BrowserRouter>
      <AuthProvider>

        {
          user ? 
          <div className="grid-container">
          <Header open={open} setUser={setUser} />
          <Sidebar openSidebar={openSidebar} open={open} close={close} />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/notice" element={<Notice />}></Route>
            <Route
              path="/postnotice"
              element={
                <PrivateRoute>
                  <PostNotice />
                </PrivateRoute>
              }
            ></Route>
            <Route path="/gallery" element={<Gallery />}></Route>
            <Route
              path="/postevents"
              element={
                <PrivateRoute>
                  <PostGallery />
                </PrivateRoute>
              }
            ></Route>
            {/* <Route path="/post" element={<PrivateRoute><Post /></PrivateRoute>}></Route> */}
            <Route path="/students" element={<Student />}></Route>
            <Route path="/routine" element={<Routine />}></Route>
            <Route path="/routinedetails" element={<RoutineComponent />}></Route>
            <Route path="/addteacher" element={<PostTeacher />}></Route>
            <Route path="/:name/:id" element={<SingleTeacher />}></Route>
            <Route
              path="/poststudents"
              element={
                <PrivateRoute>
                  <PostStudent />
                </PrivateRoute>
              }
            ></Route>
            <Route
              path="/updatestudent/:id"
              element={
                <PrivateRoute>
                  <UpdateStudents />
                </PrivateRoute>
              }
            ></Route>
            <Route path="/allumni" element={<Allumni />}></Route>
            <Route path="/multifile" element={<MultiplePost />}></Route>
            <Route path="/collegenotice" element={<MultiNoticeCard />}></Route>
            <Route path="/updateroutine/:id" element= {<RoutineUpdate />}></Route>
            <Route
              path="/updateallumni/:id"
              element={
                <PrivateRoute>
                  <UpdateAllumni />
                </PrivateRoute>
              }
            ></Route>
            <Route
              path="/login"
              element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              }
            ></Route>
          </Routes>
        </div>
         :
         <Login setUser={setUser} />
        }
      
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
