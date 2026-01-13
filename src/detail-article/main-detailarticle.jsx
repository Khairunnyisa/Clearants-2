import { useParams } from "react-router-dom";
import useGetDetailArticle from "../hooks/queries/article/getArticleDetail";
import CardDetailArticle from "./components/card-article";
import ContentArticle from "./components/content-article";
import DetailHero from "./components/hero";

export function DetailArticle() {
  const { articleId } = useParams();
  const { data: articleDetail } = useGetDetailArticle({
    condition: true,
    articleId: articleId,
  });

  console.log(articleId);

  return (
    <div className="min-h-screen w-full ">
      <DetailHero data={articleDetail} />
      <ContentArticle data={articleDetail} />
      <CardDetailArticle />
    </div>
  );
}
