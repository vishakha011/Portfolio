import React, { useState, useEffect } from 'react';
import Card from './Card';
import {Loader} from './loader/Loader';
import { Projects } from '../data';

const Work = ({ workSection }) => {
  const [projects, setProjects] = useState(Projects);
  const [activeTag, setActiveTag] = useState('Highlight');
  const [loading, setLoading] = useState(true);


  let tags = [...new Set(Projects.reduce((acc, cv) => {
    acc = acc.concat(cv.tags);
    return acc; 
  }, []))];

  const [uniqueTags, setUniqueTags] = useState(tags);

  const renderProjects = () => {
    const filterProjects = Projects.filter((project) => {
      if(project.tags.includes("Highlight")) {
        return project;
      }
    })
    setProjects(filterProjects);
  }
 

  const handleFilterProjects = (tag) => {
    const filterProjects = Projects.filter((project) => {
        if(project.tags.includes(tag)) {
          return project;
        }
      })
    setActiveTag(tag);
    setProjects(filterProjects);
  }

  useEffect(() => {
    renderProjects();
    setLoading(false);
  }, []);

  if(loading) {
    return (
      <Loader />
    )
  };

  return (
      <>
      <section className="work-section" id="work" ref={workSection}>
        <div className="container">
          <div className="work-section__heading main-text">            
            <h2 className="main-title">Work</h2>    
          </div>
            <div className="work-section__card">
              <div className="projects-filter">
                <ul className="flex">
                  {uniqueTags.map((tag) => {
                    return (
                    <li 
                      className={activeTag === tag ? "filters active" : "filters"}
                      onClick={() => handleFilterProjects(tag)}
                      >
                      {tag}
                    </li>
                  )
                  })}
                </ul>
              </div>
              <div className="content-filter grid gap-2 col-3">    
                {projects.map((project) => {
                  return (
                  <Card 
                    data={project}
                    cardLink = {true}
                    key={project.id}
                  />
                  )
                })}
              </div>
            </div>
        </div>
      </section>
      </>  
  )
};

export default Work;