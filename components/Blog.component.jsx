import React from "react";
import Image from "next/image";

import style from "../styles/Blog.module.css";

const BlogComponent = () => {
  return (
    <div className={style.container}>
      <div className={style.img_container}>
        <Image
          src="https://images.unsplash.com/photo-1587554801471-37976a256db0?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
          alt="Picture of the author"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className={style.img_container}>
        <Image
          src="https://images.unsplash.com/photo-1593642634443-44adaa06623a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=925&q=80"
          alt="Picture of the author"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className={style.img_container}>
        <Image
          src="https://images.unsplash.com/photo-1593642634402-b0eb5e2eebc9?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          alt="Picture of the author"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default BlogComponent;
