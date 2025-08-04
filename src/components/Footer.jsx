import logo from '../assets/logo.svg'

export default function Footer(){
    return (
        <div className="border-t-[1px] border-gray-300 mt-16">
            <div className="flex h-16 container mx-auto justify-between items-center">
            <a className="flex flex-row items-center cursor-pointer gap-2 container mx-auto">
                <img src={logo} className="h-8"></img>
                <span className="font-bold text-xl text-primary">AIAI</span>
            </a>
            <ul className="flex gap-x-4 font-semibold container mx-auto">
                <li><a href="" className="text-primary/60 hover:text-black cursor-pointer duration-200">Nghiên cứu</a></li>
                <li><a href="" className="text-primary/60 hover:text-black cursor-pointer duration-200">Dự án</a></li>
                <li><a href="" className="text-primary/60 hover:text-black cursor-pointer duration-200">Thành viên</a></li>
                <li><a href="" className="text-primary/60 hover:text-black cursor-pointer duration-200">Liên hệ</a></li>
                <li><span className="text-primary/60">© 2025 AIAI. All rights reserved.</span></li>
            </ul>
            </div>
        </div>
        
    )
}