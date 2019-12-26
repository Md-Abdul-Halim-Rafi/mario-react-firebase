import React from 'react'

const ProjectDetails = props => {
    const id = props.match.params.id;
    return (
        <div className='container section project-details'>
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title" style={{fontWeight: "bold"}}>
                        Project Title - {id}
                    </span>
                    <p>
                    He determined to drop his litigation with the monastry, and relinguish his claims to the wood-cuting and fishery rihgts at once. He was the more ready to do this becuase the rights had becom much less valuable, and he had indeed the vaguest idea where the wood and river in quedtion were.
                    </p>
                </div>
                <div className="card-action gret lighten-4 grey-text">
                    <div>Posted by MeeFee</div>
                    <div>25 Dec, 1998</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails;
