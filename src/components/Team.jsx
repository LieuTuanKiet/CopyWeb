import An from '../assets/NguyenHuuAn.jpg'
import Dat from '../assets/DinhTienDat.png'
import Random1 from '../assets/RandomImg.png'
import Random2 from '../assets/RandomImg2.jpg'
import TeamMember from './TeamMember'

const members=[
    {
        "avatar": Dat,
        "name": "Đinh Tiến Đạt",
        "role": "Lập trình viên"
    },
    {
        "avatar": An,
        "name": "Nguyễn Hữu An",
        "role": "Cố vấn tối cao"
    },
    {
        "avatar": Dat,
        "name": "Đinh Tiến Đạt",
        "role": "Lập trình viên"
    },
    {
        "avatar": An,
        "name": "Nguyễn Hữu An",
        "role": "Cố vấn tối cao"
    },
    {
        "avatar": Dat,
        "name": "Đinh Tiến Đạt",
        "role": "Lập trình viên"
    },
]

export default function Team(){
    return(
        <div className="my-32">
            <div className="flex flex-col justify-center items-center mb-20">
                <div className="relative h-20">
                    <div className="bg-pink-600 blur-lg w-8 h-10 absolute"></div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" 
                        strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-group inline-block md:w-10 md:h-10 w-8 h-8 bg-transparent text-pink-500" 
                        aria-hidden="true"><path d="M3 7V5c0-1.1.9-2 2-2h2"></path><path d="M17 3h2c1.1 0 2 .9 2 2v2"></path><path d="M21 17v2c0 1.1-.9 2-2 2h-2"></path>
                        <path d="M7 21H5c-1.1 0-2-.9-2-2v-2"></path><rect width="7" height="5" x="7" y="7" rx="1"></rect><rect width="7" height="5" x="10" y="12" rx="1"></rect>
                    </svg>
                </div>
                <p className="text-3xl text-center bg-gradient-to-tr from-blue-600 via-blue-500 to-pink-600 bg-clip-text text-transparent font-bold lg:text-5xl h-12 lg:h-16">
                    Đội ngũ chuyên gia
                </p>
                <p className="w-5/6 mx-auto text-center lg:w-full lg:mx-0 font-semibold text-primary/60 lg:text-lg">Chúng tôi là một đội ngũ chuyên gia với nhiều năm kinh nghiệm trong lĩnh vực 
                    công nghệ và nghiên cứu.
                </p>
            </div>
            <div className="grid grid-cols-2 w-11/12 lg:grid-cols-3 container mx-auto lg:w-full max-w-[900px] gap-x-16 gap-y-24">
                {/*
                <div className="flex flex-col justify-center items-center">
                    <div className="rounded-xl overflow-hidden mb-2">
                        <img src={Dat} className="aspect-square w-full max-w-[200px] object-cover rounded-xl hover:scale-105 duration-200 cursor-pointer"></img>
                    </div>
                    <p className="text-primary font-bold text-xl h-8">Đinh Tiến Đạt</p>
                    <p className="text-blue-500 font-semibold text-lg">Lập trình viên</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <div className="rounded-xl overflow-hidden mb-2">
                        <img src={An} className="aspect-square w-full max-w-[200px] object-cover rounded-xl hover:scale-105 duration-200 cursor-pointer"></img>
                    </div>
                    <p className="text-primary font-bold text-xl h-8">Nguyễn Hữu An</p>
                    <p className="text-blue-500 font-semibold text-lg">Cố vấn tối cao</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <div className="rounded-xl overflow-hidden mb-2">
                        <img src={Dat} className="aspect-square w-full max-w-[200px] object-cover rounded-xl hover:scale-105 duration-200 cursor-pointer"></img>
                    </div>
                    <p className="text-primary font-bold text-xl h-8">Đinh Tiến Đạt</p>
                    <p className="text-blue-500 font-semibold text-lg">Lập trình viên</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <div className="rounded-xl overflow-hidden mb-2">
                        <img src={An} className="aspect-square w-full max-w-[200px] object-cover rounded-xl hover:scale-105 duration-200 cursor-pointer"></img>
                    </div>
                    <p className="text-primary font-bold text-xl h-8">Nguyễn Hữu An</p>
                    <p className="text-blue-500 font-semibold text-lg">Cố vấn tối cao</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <div className="rounded-xl overflow-hidden mb-2">
                        <img src={Dat} className="aspect-square w-full max-w-[200px] object-cover rounded-xl hover:scale-105 duration-200 cursor-pointer"></img>
                    </div>
                    <p className="text-primary font-bold text-xl h-8">Đinh Tiến Đạt</p>
                    <p className="text-blue-500 font-semibold text-lg">Lập trình viên</p>
                </div>
                */}
                {members.map((member,index) => (
                    <TeamMember 
                        key={index}
                        avatar={member.avatar}
                        name={member.name}
                        role={member.role}
                    />
                ))}
                <div className="flex justify-center items-center">
                    <div className="relative bg-gray-100 min-h-[170px] min-w-[160px] lg:min-w-[200px] lg:max-w-[200px] lg:min-h-[200px] lg:max-h-[200px] -mt-16 rounded-xl hover:bg-gray-200 cursor-pointer duration-200">
                        <img src={Random1} className="absolute aspect-square object-contain w-full h-full max-w-[40px] max-h-[40px] left-[60px] lg:left-[75px] top-[75px] 
                            -translate-x-1/2 -translate-y-1/2 rounded-xl border-white border-2">
                        </img>
                        <img src={Random2} className="absolute aspect-square object-contain w-full h-full max-w-[40px] max-h-[40px] left-[85px] lg:left-[100px] top-[75px] 
                            -translate-x-1/2 -translate-y-1/2 rounded-xl border-white border-2">
                        </img>
                        <div className="absolute w-10 h-10 bg-black border-white border-2 rounded-xl lg:left-[125px] top-[75px] left-[110px] -translate-x-1/2 
                            -translate-y-1/2 text-white items-center justify-center flex hover:bg-gray-500">+2
                        </div>
                        <p className="absolute left-[85px] lg:left-[100px] top-[125px] -translate-x-1/2 -translate-y-1/2 text-primary/50 font-semibold text-lg">Tất cả</p>
                    </div>
                </div>
            </div>
        </div>
    )
}