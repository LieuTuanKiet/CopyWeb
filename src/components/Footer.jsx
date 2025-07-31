import logo from '../assets/logo.svg'

export default function Footer(){
    return (
        <div className="flex h-16 container mx-auto justify-between items-center">
            <a className="flex flex-row items-center cursor-pointer gap-2 container mx-auto">
                <img src={logo} className="h-8"></img>
                <span className="font-bold text-xl text-primary">AIAI</span>
            </a>
            <ul className="flex gap-x-4 font-semibold container mx-auto">
                <li><a href="" className="text-primary/60 hover:text-black cursor-pointer">Nghiên cứu</a></li>
                <li><a href="" className="text-primary/60 hover:text-black cursor-pointer">Dự án</a></li>
                <li><a href="" className="text-primary/60 hover:text-black cursor-pointer">Thành viên</a></li>
                <li><a href="" className="text-primary/60 hover:text-black cursor-pointer">Liên hệ</a></li>
                <li><span className="text-primary/60">© 2025 AIAI. All rights reserved.</span></li>
            </ul>
        </div>
    )
}