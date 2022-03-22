
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import TodoListProvider from './contexts/TodoListContext';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Calories from './components/Calories/Calories';
import MernayaTab from './components/MernayaTab/MernayaTab';
import PageNotFound from './components/404/404';


function App() {
  return (

    <TodoListProvider>
       <BrowserRouter>
       <Header />
       <div className="container py-5">
    <Routes>
      <Route path="/" element={<Main />}/>
          <Route path="/calories" element={<Calories />} />
          <Route path="/mernayatab" element={<MernayaTab />} />
          <Route path="*" element={<PageNotFound />} />
    </Routes>
    

    
    </div>
    
  </BrowserRouter>   
 </TodoListProvider>
 
  
  );
}

export default App;






