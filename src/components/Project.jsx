import froggit from '../assets/froggit.webp'
import whale from '../assets/whale.webp'
import vue from '../assets/vue.webp'
import ProjectItem from './ProjectItem'

const projects = [
    {
        "img": froggit,
        "title": "Du An 1",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique fugiat perferendis hic sequi consequatur sed nulla, officia sunt aliquid assumendam. Quis!",
        "type": "AI"
    },
    {
        "img": whale,
        "title": "Du An 2",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique fugiat perferendis hic sequi consequatur sed nulla, officia sunt aliquid assumendam. Quis!",
        "type": "Application"
    },
    {
        "img": vue,
        "title": "Du An 3",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique fugiat perferendis hic sequi consequatur sed nulla, officia sunt aliquid assumendam. Quis!",
        "type": "Website"
    },
]

export default function Project(){
    return(
        <div className="my-16 pt-32">
            <div className="flex flex-col justify-center items-center">
                <div className="relative h-16">
                    <div className="bg-pink-600 blur-lg absolute w-8 h-10"></div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" 
                        strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-package inline-block md:w-10 md:h-10 w-8 h-8 bg-transparent
                        text-pink-600" aria-hidden="true"><path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 
                        4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path><path d="M12 22V12"></path><polyline points="3.29 7 12 12 20.71 7"></polyline>
                        <path d="m7.5 4.27 9 5.15"></path>
                    </svg>
                </div>
                <p className="font-bold bg-gradient-to-r from-blue-600 via-blue-500 to-pink-600 text-5xl bg-clip-text text-transparent 
                h-16">Dự án của chúng tôi</p>
                <p className="font-semibold text-primary/60 text-lg h-16">Chúng tôi đã thực hiện nhiều dự án công nghệ và nghiên cứu, mang lại giá trị 
                    cho cộng đồng và khách hàng.
                </p>
            </div>
            <div className="container mx-auto grid grid-cols-3 gap-x-6 mb-6">
                {/*
                <div className="w-1/3 bg-white border-gray-300 border-[1px] rounded-xl p-6 group">
                    <div className="mb-4 overflow-hidden rounded-xl">
                        <img src={froggit} className="aspect-square rounded-xl h-52 w-full object-cover group-hover:scale-105 duration-200"></img>
                    </div>
                    <p className="text-primary font-semibold text-2xl h-10">Du An 1</p>
                    <p className="text-primary/60 font-semibold text-md mb-4 max-w-[350px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Similique fugiat perferendis hic sequi consequatur sed nulla, officia sunt aliquid assumendam. Quis!
                    </p>
                    <div className="flex justify-between items-center">
                        <p className="text-blue-600 font-semibold hover:underline cursor-pointer"><a href="">Xem chi tiết</a></p>
                        <p className="text-pink-600 bg-pink-500/20 px-2 py-1 rounded-lg">AI</p>
                    </div>
                </div>
                <div className="w-1/3 bg-white border-gray-300 border-[1px] rounded-xl p-6 group">
                    <div className="mb-4 overflow-hidden rounded-xl">
                        <img src={whale} className="aspect-square rounded-xl h-52 w-full object-cover group-hover:scale-105 duration-200"></img>
                    </div>
                    <p className="text-primary font-semibold text-2xl h-10">Du An 2</p>
                    <p className="text-primary/60 font-semibold text-md mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique 
                        fugiat perferendis hic sequi consequatur sed nulla, officia sunt aliquid assumendam. Quis!
                    </p>
                    <div className="flex justify-between items-center">
                        <p className="text-blue-600 font-semibold hover:underline cursor-pointer"><a href="">Xem chi tiết</a></p>
                        <p className="text-pink-600 bg-pink-500/20 px-2 py-1 rounded-lg">Application</p>
                    </div>
                </div>
                <div className="w-1/3 bg-white border-gray-300 border-[1px] rounded-xl p-6 group">
                    <div className="mb-4 overflow-hidden rounded-xl">
                        <img src={vue} className="aspect-square rounded-xl h-52 w-full object-cover group-hover:scale-105 duration-200"></img>
                    </div>
                    <p className="text-primary font-semibold text-2xl h-10">Du An 3</p>
                    <p className="text-primary/60 font-semibold text-md mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Similique fugiat perferendis hic sequi consequatur sed nulla, officia sunt aliquid assumendam. Quis!
                    </p>
                    <div className="flex justify-between items-center">
                        <p className="text-blue-600 font-semibold hover:underline cursor-pointer"><a href="">Xem chi tiết</a></p>
                        <p className="text-pink-600 bg-pink-500/20 px-2 py-1 rounded-lg">Website</p>
                    </div>
                </div>
                */}
                {projects.map((project,index) => (
                    <ProjectItem 
                        key={index}
                        img={project.img}
                        title={project.title}
                        description={project.description}
                        type={project.type}
                    />
                ))}
            </div>
            <div className="container mx-auto flex justify-center items-center">
                <button className="bg-blue-500 text-white rounded-md px-6 py-2 font-bold text-lg shadow-blue-500/80 shadow-lg hover:scale-95 
                    duration-200">Tất cả dự án
                </button>
            </div>
        </div>
    )
}