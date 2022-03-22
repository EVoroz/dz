
import { Link, NavLink } from "react-router-dom";
import './styles.css'
const Header = () => {

    return (
<>
<header className="header">
<div class="bg_image d-flex justify-content-center" >
<img className = "banner-image" src="./img/logopovar.png" alt="banner"/>
               <h1>Книга рецептов</h1>
                </div> 

                </header>       
               
     
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Главная страница</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
        <li className="nav-item">
          
          <NavLink className="nav-link" to="calories">Таблицы калорийности</NavLink>
        </li>
        <li className="nav-item dropdown">
          <NavLink className="nav-link" to="mernayatab">Мерная таблица</NavLink>
          
        </li>
       </ul>
       </div>
       </div>
       </nav>
       </>  
   
    )
    
}


export default Header
