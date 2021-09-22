import React from 'react';

const Skills = ({skills}) => {
    return (
        <>
        <section className="skills-section" id="skills">
            <div className="container">
                <div className="skills-section__heading main-text">
                    <h2 className="main-title">Skills</h2>
                    <blockquote className="quote">Growth occurs when individuals confront problems, struggle to master them, and through that struggle develop new aspects of their skills, capacities, views about life.</blockquote>
                </div>

                <div className="skills-section__card grid gap-2 col-4">
                     {skills.map((skill) => {
                         return (
                            <div className="skill-card grid" key={skill.id}>
                            {skill.img}
                            <h3 className="icon-text">{skill.skill}</h3>
                          </div>
                          
                         )
                        
                     })}
                </div>
            </div>
        </section>
        </>
    )
};

export default Skills;