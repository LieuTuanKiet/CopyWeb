export default function About(){
    return(
        <div className="py-16 mb-16">
            <div className="container mx-auto min-h-[350px] rounded-lg bg-gradient-to-tr from-pink-200 via-pink-100 to-gray-100 relative">
                <div className="bg-blue-500 blur-3xl h-20 w-32 absolute left-[600px] top-[20px]"></div>
                <div className="bg-pink-500 blur-3xl h-20 w-32 absolute left-[600px]  top-[120px]"></div>
                <div className="bg-orange-600 blur-3xl h-20 w-32 absolute left-[600px] top-[220px]"></div>
                <div className="flex flex-col items-center justify-center">
                    <p className="text-primary text-3xl h-12 mt-16 z-20">Luôn chào đón mọi người</p>
                    <p className="text-primary font-bold text-5xl h-28 z-20">Tham gia cùng team chúng tôi</p>
                    <button className="bg-primary text-white px-6 py-2 font-bold rounded-md hover:scale-95 duration-200 mb-4 z-20">Điền thông tin vào đây</button>
                    <a className="text-primary cursor-pointer hover:underline z-20">Thêm thông tin về chúng tôi?</a>

                </div>
            </div>
        </div>
    )
}