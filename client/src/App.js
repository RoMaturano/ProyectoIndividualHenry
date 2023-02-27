
import { Formulario,Home,Detail,Landing,Nav,About } from './components/indexViews';
import React  from 'react';

import {Route, useLocation} from 'react-router-dom'
import { get_by_name } from './Redux/accions';
import { useDispatch } from 'react-redux';

//import Nav from './components/Nav/Nav';
//import Filter from "./components/Filter/Filter"





function App() {
//const[names, setNames]=useState()
const dispatch= useDispatch()




  const onSearch= (name)=>{
    if(name){
      dispatch(get_by_name(name))

    }else{
     alert("There is not recipe with that name :( ") 
    }

   
}






  const location= useLocation()
  return (
    <div >
      
      {(location.pathname !=="/" && location.pathname !=="/create") &&  <Nav onSearch={onSearch} />}
        
        
        <Route exact path="/" render={()=><Landing/>}></Route>
        <Route path="/home" render={()=><Home/>}></Route>
        <Route exact path="/detail/:id" render={()=><Detail/>}></Route>
        <Route path="/create" render={()=><Formulario/>}></Route>
        <Route path="/landing" render={()=><About></About>}></Route>
        <Route></Route>
     
    
    </div>
  );
}

export default App;
