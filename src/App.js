import Hero from "./pages/app/hero/Hero";
import Nav from "./components/nav/Nav";
import Courses from "./pages/app/courses/Courses";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Page404 from "./pages/misc/Page404/Page404";
import Details from "./pages/app/details/Details";
import Learn from "./pages/app/learn/Learn";
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Nav />,errorElement:<Page404/>,
      children: [
        {
          index: true,
          element: <Hero />,
        },
        {
          path: '/courses',
          children: [
            {
              index: true,element: <Courses />
            },
            {
              path:':courseId',element:<Details />
            }
          ]
         
        },
        {
          path:'/learn/:courseId' ,element:<Learn/>,
        }
      ],
    },
  ]);

  // const route= createRoutesFromElements(

  //   <Route path="/" element={<Nav />} errorElement={<Page404/>}>
  //     <Route index={true} element={<Hero/>}/>
  //     <Route path="courses" element={<Courses/>}/>
  //     <Route path='details' element={<Details/>}/>
  //     </Route>

  // )

  // const router=createBrowserRouter(route);
  return <RouterProvider router={router} />;
}

export default App;
