import { createBrowserRouter } from "react-router-dom";
import { MainLanding } from "../landing-page/main-landing";
import { MainArticle } from "../article-page/main-article";
import { DetailArticle } from "../detail-article/main-detailarticle";
import { Asoc } from "../asoc-pages/main-asoc";
import { Faq } from "../faq-page/main-faq";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLanding />,
  },
  {
    path: "/article",
    element: <MainArticle />,
  },
  {
    path: "/detail-article",
    element: <DetailArticle />,
  },

  {
    path: "/asoc",
    element: <Asoc />,
  },

  {
    path: "/faq",
    element: <Faq />,
  },
]);
