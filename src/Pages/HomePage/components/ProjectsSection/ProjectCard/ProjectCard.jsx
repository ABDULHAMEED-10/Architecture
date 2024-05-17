import "./ProjectCard.css"
export const ProjectCard = (project) => {
  return (
      <>
          <div className="project">
                <div className='project_card'>
                    <img src={project.image} alt='project' />
                    <div className='project_card_content'>
                    </div>
                </div>
          </div>
    </>
  )
}
