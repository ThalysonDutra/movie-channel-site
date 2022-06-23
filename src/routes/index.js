import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import CreateCategory from "../pages/CreateCategory";
import CreateUser from "../pages/CreateUser";
import CreateMovie from "../pages/CreateMovie";

export default function RoutesComponent (){
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/createcategory' element={<CreateCategory />}/>;
        <Route path='/createuser' element={<CreateUser />}/>;
        <Route path='/createmovie' element={<CreateMovie />}/>;
      </Routes>
    </BrowserRouter>
  );
}
