/* eslint-disable no-unused-vars */
import { projectsData } from "../../../../demodata"
import { ProjectCard } from "./ProjectCard/ProjectCard"
import "./ProjectsSection.css"
import { useState } from "react"
export const ProjectsSection = () => {
  const [showMore, setShowMore] = useState(false);
  const visibleProjects = showMore ? projectsData : projectsData.slice(0, 6);

  const handleLoadMore = () => {
    setShowMore(true);
  };

  return (
    <>
      <div className='project_wrapper'>
        <div className='d_flex_text'>
          <h3 className='text_h3'>Projects</h3>
          <h1 className='text_h1'>Our Projects</h1>
        </div>
        <div className='project_section'>
          {visibleProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
        {!showMore && (
          <button className='btn_primary' onClick={handleLoadMore}>
            Load More
          </button>
        )}
        {showMore && (
          <button className='btn_primary' onClick={() => setShowMore(false)}>
            Load Less
          </button>
        )}
      </div>
    </>
  );
}
