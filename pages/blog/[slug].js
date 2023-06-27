import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
import blogs from "../../data/blogs.js";

const Slug = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [blog, setBlog] = useState({});

  useEffect(() => {
    blogs.filter((blog) => {
      if (blog.slug === slug) {
        setBlog(blog);
      }
    })
  }, [slug]);

  return (
    <>
      {blog && (
        <Head>
          <title>{blog.title}</title>
          <meta name="title" content={blog.title} />
          <meta name="description" content={blog.desc} />
          <meta name="author" content={blog.author} />
        </Head>
      )}
      <div className="blog container mt-5">
        {blog && (
          <>
            <div className="my-2" aria-label="breadcrumb">
              <span>
                <Link href="/" className="text-muted">
                  Home
                </Link>
              </span>
              <span className="mx-2">/</span>
              <span>{blog.title}</span>
            </div>
            <div className="title text-capitalize">
              <h1>{blog.title}</h1>
            </div>
            <div className="author">
              {blog.author && (
                <p>
                  Author:
                  <span className="fw-bold mx-2">{blog.author}</span>
                </p>
              )}
            </div>
            <div className="content">
              <p>{blog.content}</p>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Slug;
