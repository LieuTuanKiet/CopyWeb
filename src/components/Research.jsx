export default function Research(){
    return(
        <div className="my-16">
            <div className="flex flex-col items-center justify-center h-full">
                <div className="relative h-20">
                    <div className="bg-pink-600/80 blur-lg w-8 h-10 absolute left-1/2 -translate-x-1/2"></div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-flask-conical md:w-10 md:h-10 
                        w-8 h-8 bg-transparent text-pink-600" aria-hidden="true"><path d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 
                        22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2"></path><path d="M6.453 15h11.094"></path><path d="M8.5 2h7"></path>
                    </svg>
                </div>
                <p className="font-bold text-5xl bg-gradient-to-r from-blue-600 via-blue-500 to-pink-500 bg-clip-text text-transparent 
                    h-16">Chuyên môn của chúng tôi
                </p>
                <p className="text-primary/60 font-semibold text-lg h-20">Chúng tôi tập trung vào các lĩnh vực nghiên cứu tiên tiến</p>
            </div>
            <div className="flex container mx-auto flex-wrap w-11/12 justify-between">
                <div className="bg-gradient-to-b from-blue-500/20 via-gray-100 to-white rounded-lg p-10 cursor-pointer hover:scale-105 duration-200">
                    <div className="relative h-16">
                        <div className="w-8 h-10 bg-blue-500 blur-lg absolute"></div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" 
                            strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-brain w-8 h-8 text-blue-500" aria-hidden="true">
                            <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path>
                            <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path>
                            <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path>
                            <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path>
                            <path d="M19.938 10.5a4 4 0 0 1 .585.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path>
                            <path d="M19.967 17.484A4 4 0 0 1 18 18"></path>
                        </svg>
                    </div>
                    <p className="font-semibold text-primary text-3xl h-12">Trí tuệ nhân tạo</p>
                    <p className="font-semibold text-primary/60 text-lg max-w-[320px]">Chúng tôi chuyên về trí tuệ nhân tạo, cung cấp các giải pháp AI 
                        tiên tiến để tối ưu hóa quy trình kinh doanh và nâng cao hiệu suất.
                    </p>
                </div>
                <div className="bg-gradient-to-b from-blue-500/20 via-gray-100 to-white rounded-lg p-10 cursor-pointer hover:scale-105 duration-200">
                    <div className="relative h-16">
                        <div className="w-8 h-10 bg-blue-500 blur-lg absolute"></div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" 
                            strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code w-8 h-8 text-blue-500" aria-hidden="true">
                            <path d="m16 18 6-6-6-6"></path><path d="m8 6-6 6 6 6"></path>
                        </svg>
                    </div>
                    <p className="font-semibold text-primary text-3xl h-12">Phần mềm ứng dụng</p>
                    <p className="font-semibold text-primary/60 text-lg max-w-[320px]">Chúng tôi phát triển phần mềm tùy chỉnh, từ ứng dụng di động đến 
                        hệ thống quản lý doanh nghiệp, đáp ứng nhu cầu đa dạng của khách hàng
                    </p>
                </div>
                <div className="bg-gradient-to-b from-blue-500/20 via-gray-100 to-white rounded-lg p-10 cursor-pointer hover:scale-105 duration-200">
                    <div className="relative h-16">
                        <div className="w-8 h-10 bg-blue-500 blur-lg absolute"></div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" 
                            strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-book w-8 h-8 text-blue-500" aria-hidden="true">
                            <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"></path>
                        </svg>
                    </div>
                    <p className="font-semibold text-primary text-3xl h-12">Giáo dục và đào tạo</p>
                    <p className="font-semibold text-primary/60 text-lg max-w-[320px]">Chúng tôi cung cấp các giải pháp giáo dục trực tuyến, bao gồm khóa 
                        học, nền tảng học tập và công cụ hỗ trợ giảng dạy.
                    </p>
                </div>
            </div>
        </div>
    )
}