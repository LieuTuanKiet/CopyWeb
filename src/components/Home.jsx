import img from '../assets/astro.webp'

export default function Home(){
    return(
        <div className="grid grid-cols-1 mt-20 overflow-hidden lg:flex lg:container lg:mx-auto lg:justify-center lg:items-center lg:mt-56 h-full pb-20">
            <div className="md:w-1/2 order-2 lg:order-1 mx-auto">
                <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-blue-500 to-pink-500 bg-clip-text 
                    text-transparent w-fit h-12 lg:h-14 mx-auto lg:mx-0">Đổi mới - Sáng tạo
                </p>
                <p className="text-4xl lg:text-5xl text-primary w-fit h-14 mx-auto lg:mx-0">Vươn tới tương lai</p>
                <p className="text-lg lg:text-xl text-primary/40 h-24 lg:h-16 mx-auto w-5/6 lg:w-full lg:mx-0"><span className="text-2xl font-semibold text-primary">
                    Crush your backlog</span> with us AI engineering team.
                </p>
                <div className="flex flex-col lg:flex-row justify-center items-center gap-y-4 lg:gap-y-0 lg:justify-normal">
                    <button className="w-5/6 lg:w-48 rounded-lg bg-blue-500 text-white font-semibold p-2 shadow-lg shadow-blue-500/50 
                        hover:scale-95 duration-200">Dự án của chúng tôi
                    </button>
                    <button className="w-5/6 lg:w-44 rounded-lg text-pink-600 font-semibold border-solid border-pink-600 border-2 p-2 lg:ml-6 
                        hover:scale-95 duration-200">Tìm hiểu thêm
                    </button>
                </div>
            </div>
            <div className="md:w-1/2 order-1 lg:order-2">
                <div className="w-11/12 relative mx-auto">
                    <img src={img} className="w-full max-h-[600px] h-full aspect-square object-cover rounded-2xl"></img>
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-x-4">
                        <button className="bg-white/50 rounded-lg p-2"><svg className="w-6 h-6 text-primary" 
                            ari-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12l4-4m-4 4 4 4"/></svg>
                        </button>
                        <button className="bg-white/50 rounded-lg p-2"><svg className="w-6 h-6 text-primary" 
                            aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4"/></svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}