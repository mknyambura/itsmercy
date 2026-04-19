import React, { useEffect, useState } from 'react'

import data from '../../db.json'
import { FaCheck } from 'react-icons/fa'
import LandingNavbar from './LandingNavbar'
import { SlArrowLeft } from 'react-icons/sl'
import { Link } from 'react-router-dom'
import { HiDownload } from 'react-icons/hi'
import resume from '../components/MercyFaithKariukiResume.pdf'

const Resume = () => {
    const [expertise, setExpertise] = useState([])
    const [work, setWork] = useState([])
    const [projects, setProjects] = useState([])
    const [education, setEducation] = useState([])

    useEffect(() => {
        fetch('./react')
        .then((response) => response.json())
        .then(setExpertise)
    }, [])
    useEffect(() => {
      fetch('./dataScience')
      .then((response) => response.json())
      .then(setExpertise)
    }, [])
    useEffect(() => {
        fetch('./workExperiences')
        .then((response) => response.json())
        .then(setWork)
    }, [])
    useEffect(() => {
        fetch('./projects')
        .then((response) => response.json())
        .then(setProjects)
    }, [])
    useEffect(() => {
        fetch('./education')
        .then((response) => response.json())
        .then(setEducation)
    }, [])

    // const downloadButton = () => {
    //     fetch('/Mercy_Kariuki_Resume.pdf')
    //     .then((response) => {
    //         response.blob()
    //     })
    //     .then((blob) => {
    //         const fileURL = window.URL.createObjectURL(blob);
    //         let alink = document.create
    //     })
    // }
    const handleDownload = () => {
        const link = document.createElement('a');
        link.download = 'Example-PDF-File';

        link.href = ExamplePdf;
    
        link.click();
    }
    
  return (
    <div>
        <div className='px-6 flex flex-row items-center justify-between'>
            <Link to='/'>
                <div className='flex flex-row gap-3 items-center px-6 py-12'>
                    <Link to='/' className='bg-[#154360] rounded-full px-3 py-3'>
                        <SlArrowLeft className='  text-white '/>
                    </Link>
                    <h1 className='text-[#154360] font-bold text-2xl'>Go Back</h1>
                </div>
            </Link>
            <Link 
                to={resume} 
                className='active:translate-y-2 active:bg-white active:text-[#154360] flex flex-row items-center gap-3 px-12 font-bold bg-[#154360] text-white text-xl px-8 py-1'
                download="Resume"
                target='_blank'
                rel='noopener noreferrer'
                onClick={handleDownload}
            >
                    Resume
                    <HiDownload className='text-white'/>
            </Link>
        </div>
        <div className='px-6 flex flex-col gap-8 items-center'>
            <div className='py-8 w-full flex flex-col gap-8 items-center'>
                <h1 className='uppercase font-bold text-4xl text-[#154360]'>Mercy F Nyambura Kariuki</h1>
                <div className='w-3/4 flex flex-col gap-1'>
                    <div className='bg-[#154360] h-[4px] w-full'></div>
                    <div className='bg-[#154360] h-[2px] w-full'></div>
                </div>
            </div>
            <div className='gap-2 font-light flex flex-row justify-between'>
                <div className='flex flex-row flex-wrap w-1/2'>
                    <h1>
                        Middlesbrough, United Kingdom | Nairobi, Kenya |
                    </h1>
                    <h1>
                        Linkedin: <a href="https://www.linkedin.com/in/mercy-nyambura-kariuki/" className='text-[#154360]'>https://www.linkedin.com/in/mercy-nyambura-kariuki/</a>
                    </h1>
                </div>
                <div className='flex'>
                    <h1>
                        Email:<a href="mailto:kariuki.mercie@gmail.com" className='text-[#154360]'>kariuki.mercie@gmail.com</a> | 
                    </h1>
                </div>
            </div>
            <h1 className='font-bold text-xl'>React Developer || Data Scientist || Certified Data Analyst</h1>
        </div>
        {/* Summary  */}
        <div className='flex flex-col gap-3 sm:px-12 sm:py-6 md:px-12 md:py-6 lg:px-48 lg:py-4'>
            <h1 className='font-bold uppercase text-xl text-[#154360]'>Professional Summary</h1>
            <div className='bg-[#154360] h-[2px] w-full'></div>
            <p>
                Dedicated Data Scientist and Software Developer with a passion for technology. 2 years of experience effectively creating fast and responsive websites.
                Confident in ability to translate data into valuable and comprehensible insights in order to improve results, make the right decisions and save costs. 
                Committed to continuous improvement and impacting team success.
            </p>
        </div>
        {/* Skills  */}
        <div className='flex flex-col gap-3 sm:px-12 sm:py-6 md:px-12 md:py-6 lg:px-48 lg:py-4'>
            <h1 className='font-bold uppercase text-xl text-[#154360]'>Areas of Expertise</h1>
            <div className='bg-[#154360] h-[2px] w-full'></div>
            <div className='flex flex-row flex-wrap gap-3 '>
                {data.react.map((skills) => (
                    <div className='gap-1 flex flex-row items-center'>
                        <FaCheck/>
                        <h1>{skills.title}</h1>
                    </div>
                ))}
                {data.dataScience.map((skills) => (
                    <div className='gap-1 flex flex-row items-center'>
                        <FaCheck/>
                        <h1>{skills.title}</h1>
                    </div>
                ))}
            </div>
        </div>
        {/* Work Experience */}
        <div className='flex flex-col gap-3 sm:px-12 sm:py-6 md:px-12 md:py-6 lg:px-48 lg:py-4'>
            <h1 className='font-bold uppercase text-xl text-[#154360]'>Professional Experience</h1>
            <div className='bg-[#154360] h-[2px] w-full'></div>
            <div className='flex flex-col gap-5'>
                {data.workExperiences.map((experience) => (
                    <div className='flex flex-col gap-2'>
                        <div className='bg-[#154360]/20 flex flex-row justify-between items-center'>
                            <div className='mt-2 mb-2 flex flex-row justify-between gap-2 items-center'>
                                <h1 className='font-bold '>{experience.title},</h1>
                                <div className='flex flex-row gap-1'>
                                    <h1 className=''>{experience.company} | </h1>
                                    <h1 className='italic'>{experience.location}</h1>
                                </div>
                            </div>
                            <h1>{experience.duration}</h1>
                        </div>
                        <ul className='flex flex-col gap-1 list-disc '>
                            <li>{experience.task1}</li>
                            <li>{experience.task2}</li>
                            <li>{experience.task3}</li>
                        </ul>
                    </div>
                ))}
            </div>
        </div>
        {/* Projects */}
        <div className='flex flex-col gap-3 sm:px-12 sm:py-6 md:px-12 md:py-6 lg:px-48 lg:py-4'>
            <h1 className='font-bold uppercase text-xl text-[#154360]'>Projects</h1>
            <div className='bg-[#154360] h-[2px] w-full'></div>
            {data.projects.map((project) => (
                <div className='flex  flex-col gap-2'>
                    <h1 className='font-bold'>{project.title}</h1>
                    <ul className='flex flex-col list-disc'>
                        <li>{project.description1}</li>
                        <li>{project.description2}</li>
                    </ul>
                </div>
            ))}
        </div>
        {/* Education */}
        <div className='flex flex-col gap-3 sm:px-12 sm:py-6 md:px-12 md:py-6 lg:px-48 lg:py-4'>
            <h1 className='font-bold uppercase text-xl text-[#154360]'>Education</h1>
            <div className='bg-[#154360] h-[2px] w-full'></div>
            {data.education.map((education) => (
                <div className='flex flex-col justify-between'>
                    <div className='flex flex-row justify-between'>
                        <h1>{education.institution}</h1>
                        <h1>{education.location}</h1>
                    </div>
                    <ul className='flex flex-row'>
                        <li className='font-bold'>{education.title}</li>
                    </ul>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Resume