import React from 'react';
import Card from './Card';

const Blog = ({ blogs }) => {

    return (
        <>
        <section className="skills-section blog-section" id="blogs">
          <div className="container">
            <div className="skills-section__heading main-text">
              <h2 className="main-title">Blogs</h2>
              <blockquote className="quote">Writing is a continuous process of learning, carefully gathering, sifting, organizing, and assessing, all while trying to craft something that makes sense for others.</blockquote>
            </div>

            <div className="blog-section__card content-filter grid gap-2 col-3">    
              {blogs.map((blog) => {
                return (
                <Card 
                  data={blog}
                  key={blog.id}
                  mediumLink = {true}
                />
                )
                })}
            </div>
          </div>
        </section>
        </>
    )
};

export default Blog;
 