import { createHashRouter } from "react-router-dom";
import { MainLanding } from "../landing-page/main-landing";
import { MainArticle } from "../article-page/main-article";
import { DetailArticle } from "../detail-article/main-detailarticle";
import { Asoc } from "../asoc-pages/main-asoc";
import { Faq } from "../faq-page/main-faq";
import MainLayout from "../MainLayout";
export const router = createHashRouter([
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <MainLanding /> },
      {
        path: "/article",
        children: [
          { path: true, element: <MainArticle /> },
          { path: ":articleId", element: <DetailArticle /> },
        ],
      },
      { path: "/asoc", element: <Asoc /> },
      { path: "/faq", element: <Faq /> },
    ],
  },
]);
