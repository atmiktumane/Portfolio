import { CiCalendar } from 'react-icons/ci';
import { SlLocationPin } from 'react-icons/sl';
import { TbPointFilled } from 'react-icons/tb';
import prodtLogo from "../assets/prodtLogo.jpeg"
import maqLogo from "../assets/maqLOgo.jpg"


export const Experience = () => {
    return (
        <div className="h-[100%] px-4 md:px-9 py-20">
            {/* Heading */}
            <h2 className="text-2xl font-medium text-purple-300">Work Experience</h2>

            {/* Border line */}
            <div className="mt-3 mb-7 w-8 h-[3px] bg-purple-500 rounded-2xl"></div>

            {/* Cards - Experience */}
            <div className='flex flex-col gap-6'>
                {/* ProDT */}
                <div className='w-full bg-zinc-900 px-4 py-6 rounded-2xl hover:shadow-2xl hover:shadow-purple-500/20'>
                    <div className="flex items-start gap-3">
                        {/* Icon */}
                        <img src={prodtLogo} alt="prodtLogo" className='h-8 w-8' />

                        {/* Content */}
                        <div className="flex flex-col gap-2">
                            <p className="text-md">Software Engineer</p>
                            <p className="text-purple-300">ProDT Consulting Services</p>
                            <div className='flex items-center gap-6'>
                                <div className='flex items-center gap-1 text-zinc-400 text-xl'><CiCalendar /> <span className='!text-sm'>July 2024 - Present</span></div>
                                <div className='flex items-center gap-1 text-zinc-400 text-md'><SlLocationPin /> <span className='!text-sm'>Pune (Hybrid)</span></div>
                            </div>
                        </div>
                    </div>

                    <div className='mt-5 flex flex-col gap-1'>
                        <div className='flex items-center gap-1 text-sm'> <TbPointFilled /> Improved application performance by 35% through component optimization and bug resolution.</div>
                        <div className='flex items-center gap-1 text-sm'> <TbPointFilled /> Reduced production issues through improved error handling and validation mechanisms.</div>
                        <div className='flex items-center gap-1 text-sm'> <TbPointFilled /> Increased deployment reliability through better modularization and streamlined processes.</div>
                    </div>
                </div>

                {/* MAQ Software */}
                <div className='w-full bg-zinc-900 px-4 py-6 rounded-2xl hover:shadow-2xl hover:shadow-purple-500/20'>
                    <div className="flex items-start gap-3">
                        {/* Icon */}
                        <img src={maqLogo} alt="prodtLogo" className='h-8 w-8' />

                        {/* Content */}
                        <div className="flex flex-col gap-2">
                            <p className="text-md">Software Engineer 1</p>
                            <p className="text-purple-300">MAQ Software</p>
                            <div className='flex items-center gap-6'>
                                <div className='flex items-center gap-1 text-zinc-400 text-xl'><CiCalendar /> <span className='!text-sm'>Sept 2023 - Feb 2024</span></div>
                                <div className='flex items-center gap-1 text-zinc-400 text-md'><SlLocationPin /> <span className='!text-sm'>Hyderabad</span></div>
                            </div>
                        </div>
                    </div>

                    <div className='mt-5 flex flex-col gap-1'>
                        <div className='flex items-center gap-1 text-sm'> <TbPointFilled /> Enhanced system efficiency and scalability, reducing load times by 30% and improving response speed.</div>
                        <div className='flex items-center gap-1 text-sm'> <TbPointFilled /> Strengthened product usability and consistency, leading to boost in user satisfaction scores.</div>
                        <div className='flex items-center gap-1 text-sm'> <TbPointFilled /> Accelerated feature delivery by 20% through collaboration in Agile sprints and efficient task planning.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

