import axios from "axios";
import { useEffect, useState } from "react";
import styles from './showblog.module.scss';

const Blogpost = ({ thumb, title, postlink }) => {
  return (
    <>
      <div className={styles.singlepost}><a href={postlink}>
        <img src={thumb} alt=""></img>
        <h4 className={styles.posthead}>{title}</h4>
      </a>
      </div>
    </>
  );
};

const ShowBlog = () => {
  const [response, setResponse] = useState({ posts: [] });

  const mediumURL =
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@mayowageorge";

  useEffect(() => {
    axios.get(mediumURL).then(
        (data) => {
          const BlogData = data.data.items;
          console.log(BlogData);
          setResponse({posts: BlogData});
          console.log('test1', response.posts)
        },
      );
  }, )

  console.log('test2', response);
  const showposts = response.posts.map((posts, index) => <Blogpost key={index} postlink={posts.link} thumb={posts.thumbnail} title={posts.title}></Blogpost>)

  return (
    <>
        <div className={styles.postsbox}>
      {showposts}
      </div>
    </>
  );
};

export default ShowBlog;
