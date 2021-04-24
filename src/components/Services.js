import React from "react"
import Title from "./Title"
import services from "../constants/services"
const Services = () => {
  return <section className="section bg-gray">
    <Title title="Services" />
    <div className="section-center services-center">
      {services.map((service) => (
        <article key={service.id} className="service">
          {service.icon}
          <h4>{service.title}</h4>
          <div className="underline" />
          <p>{service.text}</p>
        </article>
      ))}
    </div>
  </section>
}

export default Services
