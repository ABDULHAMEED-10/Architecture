/* eslint-disable no-unused-vars */
import React from 'react'
import { ServiceCard } from './ServiceCard/ServiceCard'
import { serviceSectionData } from '../../demodata'
import './ServiceSection.css'
export const ServiceSection = () => {
return (
    <div className='service'>
        <div className='service_wrapper'>
            <div className='d_flex_text'>
                <h3 className='text_h3'>Services</h3>
                <h1 className='text_h1'>
                    Our Services
                </h1>
            </div>
            <div className='service_section'>
                {serviceSectionData.map((service, index) => (
                    <div key={index}>
                        <ServiceCard 
                            icon={service.image}
                            title={service.title}
                            desc={service.desc}
                        />
                    </div>
                ))}
            </div>
        </div>
    </div>
)
}
