import { createBrowserRouter } from "react-router-dom";
import Main from '../Layouts/Main'
import Home from '../Pages/Home/Home/Home'
import Contact from '../Pages/Contact/Contact'
import Resume from "../Pages/Resume/Resume";


import ServicePage from "../Pages/ServicePage/ServicePage";
import PortfolioPage from "../Pages/PortfolioPage/PortfolioPage";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/resume',
          element: <Resume></Resume>
        },
        {
          path: '/services',
          element: <ServicePage></ServicePage>
        },
        {
          path: '/portfolio',
          element: <PortfolioPage></PortfolioPage>
        },
     
        {
          path: '/contact',
          element: <Contact></Contact>
        }
      ]
    },
  ]);

  export default router;