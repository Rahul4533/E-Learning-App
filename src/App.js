import Hero from "./pages/app/hero/Hero";
import Nav from "./components/nav/Nav";
import Courses from "./pages/app/courses/Courses";
import {createBrowserRouter,RouterProvider,Route,createRoutesFromElements} from "react-router-dom";
import Page404 from "./pages/misc/Page404/Page404";
function App() {
// const router= createBrowserRouter([
//   {
//     path: "/", element:<Nav/>,
//     children:[
//       {
//         index:true,element:<Hero/>
//       },
//       {
//         path:"/courses",element:<Courses />
//       }
//     ]
//   }
// ])

const route= createRoutesFromElements(

  <Route path="/" element={<Nav />} errorElement={<Page404/>}> 
    <Route index={true} element={<Hero/>}/>
    <Route path="courses" element={<Courses/>}/>
    </Route>


)

const router=createBrowserRouter(route);
  return (
    <RouterProvider router={router} />
  );
}

export default App;
