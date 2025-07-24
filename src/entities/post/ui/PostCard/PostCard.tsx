import Image from "next/image";
import s from "./styles.module.css";
import Link from "next/link";
import { PostPreview } from "@/src/entities/post";

const PostCard = ({ post }: PostCardProps) => {
  return (
    <article className={s.card}>
      <Link href={`/blog/${post.slug}/`} className={s.card__image}>
        <Image
          src={post.preview}
          alt={post.name}
          fill
          style={{ objectFit: "cover" }}
        />
      </Link>
      <time dateTime={post.created} className={s.card__date}>
        {new Intl.DateTimeFormat("ru-RU", {
          year: "numeric",
          month: "numeric",
          day: "numeric",
        }).format(new Date(post.created))}
      </time>
      <p className={s.card__title}>
        <Link href={`/blog/${post.slug}/`}>{post.name}</Link>
      </p>
      <p className={s.card__excerpt}>{post.excerpt}</p>
      <div className={s.card__link}>
        <Link href={`/blog/${post.slug}/`}>
          <span className={s.card__linkText}>Читать подробнее</span>
          <span className={s.card__linkIcon}>
            <svg
              width="19"
              height="8"
              viewBox="0 0 19 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.7357 0.106445V2.85841H0.0585938V4.69306H14.7357V7.44502L18.405 3.77573L14.7357 0.106445Z"
                fill="white"
              />
            </svg>
          </span>
        </Link>
      </div>
    </article>
  );
};

interface PostCardProps {
  post: PostPreview;
}

export default PostCard;
