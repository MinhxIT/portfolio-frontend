import React from "react"
import Title from "./Title"
import Blog from "./Blog"
import { Link } from "gatsby"
export const Blogs = ({ blogs, title, showLink }) => {
  return <section className="section">
    <Title title={title} />
    <div className="section-center blogs-center">
      {blogs.map((blog) => (
        <Blog key={blog.id} {...blog} />
      ))}
    </div>
    {showLink && <Link className="btn center-btn" to="/blog">Blog</Link>}
  </section>
}
export default Blogs
