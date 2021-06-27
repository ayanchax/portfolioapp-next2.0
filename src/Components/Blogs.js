import React from "react";
import BlogCard from "./BlogCard";
import "./Blogs.css";

function Blogs({ data }) {
    if (data) {
        var blogURL = data.mainURL;
        var blogClass = data.className;
        var blogs = data.blogs.map(function (blog) {
            return (
                <div key={blog.id} className="columns portfolio-item">
                    <BlogCard blog={blog} />
                </div>
            );
        });
    }

    return (
        <section id="blogs">
            <div className="text-container">
                <div className="row">
                    <br />
                    <br />
                    <p className="blog-header-short">
                        <i className="fa fa-pencil"></i> Check out few of my blogs here...
                    </p>
                    <div className="bgrid-quarters s-bgrid-thirds cf blog-wrapper">
                        {blogs}
                    </div>
                    <br />
                    <p className="blog-footer">
                        <i className={blogClass}></i> To read more of my blogs visit my
                        Blogger <a href={blogURL}>profile</a>
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Blogs;
