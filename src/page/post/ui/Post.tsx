import s from "./styles.module.css";
import cn from "classnames";
import "@/src/shared/styles/ck.css";
import { PostContent } from "@/src/entities/post";

const Post = ({ post }: PostProps) => {
  return (
    <div className="page hero">
      <div className="container">
        <main className={s.post}>
          <h1 className={cn(s.post__title, "page-title")}>{post.name}</h1>
          <div
            className={cn(s.post__content, s.ckContent, "ck")}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </main>
      </div>
    </div>
  );
};

interface PostProps {
  post: PostContent;
}

export default Post;
