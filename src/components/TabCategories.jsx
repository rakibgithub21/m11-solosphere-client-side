/* eslint-disable react/prop-types */
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import JobCard from './JobCard';
import { useEffect, useState } from 'react';
import axios from 'axios';

const TabCategories = () => {
    const [jobs, setJobs] = useState([])

    // const[job,setJob] = useState([]) 

    useEffect(() => {
        const getData = async () => {
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/jobs`)

            // const data = await axios(`${import.meta.env.VITE_API_URL}/jobs`)

            // setJobs(data.data)
            setJobs(data)
        }
        getData()
    }, [])



    // useEffect(() => {
    //     axios(`${import.meta.env.VITE_API_URL}/jobs`)
    //     .then(res =>setJob(res.data))
    // },[])

    
    return (
        <Tabs>
            <div className='container mx-auto py-10'>
                <h1 className='text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl '>
                    Browse Jobs By Categories
                </h1>

                <p className='max-w-2xl mx-auto my-6 text-center text-gray-500 '>
                    Three categories available for the time being. They are Web
                    Development, Graphics Design and Digital Marketing. Browse them by
                    clicking on the tabs below.
                </p>
                <div className='flex items-center justify-center'>
                    <TabList>
                        <Tab>Web Development</Tab>
                        <Tab>Graphics Design</Tab>
                        <Tab>Digital Marketing</Tab>
                    </TabList>
                </div>

                <TabPanel>
                    <div className='grid gap-8 mt-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'> 
                        {jobs.filter(job => job.category ==="Web Development").map(job => <JobCard
                            key={job._id}
                            job={job}
                        ></JobCard>)}
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className='grid gap-8 mt-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                        {jobs.filter(job => job.category === "Graphics Design").map(job => <JobCard
                            key={job._id}
                            job={job}
                        ></JobCard>)}
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className='grid gap-8 mt-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                        {jobs.filter(job => job.category === "Digital Marketing").map(job => <JobCard
                            key={job._id}
                            job={job}
                        ></JobCard>)}
                    </div>
                </TabPanel>
            </div>
        </Tabs>
    );
};

export default TabCategories;