
import {  
    BrowserRouter as Router,  
    Routes,  
    Route,  
    Link,  
    BrowserRouter
}   
  from 'react-router-dom';
import { Home, CreatePost } from "./pages/index.js"  
import {logo} from "./assets"

function App() {

  return (
    <BrowserRouter>
      <header className='w-full h-8 flex justify-between items-center bg-slate-200 p-8 '>
        <Link to="/" >
          <img src={logo} alt="logo" className='w-28'/>
        </Link>
        <Link to="/create-post" className=' bg-sky-500 rounded px-4 py-2 text-white'>
          Create
        </Link>
      </header>  
      <main className="sm:p-8 px-4 py-8 w-full min-h-[100vh-73px]">
        
      <Routes>  
        <Route path='/' element={<Home/>}></Route>
        <Route path='/create-post' element={<CreatePost/>}></Route>
      </Routes>
    </main>
    </BrowserRouter>
   
  )
}

export default App
