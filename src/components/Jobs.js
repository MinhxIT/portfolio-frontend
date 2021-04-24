import React, { useState } from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

const query = graphql`
{
  allStrapiJobs(sort: {fields: strapiId, order: ASC}) {
    nodes {
      company
      date
      desc {
        id
        name
      }
      position
      strapiId
    }
  }
}
`

const Jobs = () => {
  const data = useStaticQuery(query);
  const [companyIndex, setCompanyIndex] = useState(0);
  const { allStrapiJobs: { nodes: jobs } } = data;
  const { company, position, date, desc } = jobs[companyIndex]

  return <section className="section jobs">
    <Title title="Kinh nghiem" />
    <div className="jobs-center">
      <div className="btn-container">
        {jobs.map((job, index) => (
          <button className={`job-btn ${companyIndex === index ? 'active-btn' : ''}`} key={job.strapiId} onClick={() => setCompanyIndex(index)}>{job.company}</button>
        ))}
      </div>
      <article className="job-info">
        <h3>{position}</h3>
        <h4>{company}</h4>
        <p className="job-date">{date}</p>
        {
          desc.map((item) => (
            <div className="job-desc" key={item.id}>
              <FaAngleDoubleRight className="job-icon" />
              <p>{item.name} </p>
            </div>
          ))
        }
      </article>
    </div>
    <Link to="/about" className="btn center-btn">More Info</Link>
  </section>
}

export default Jobs
