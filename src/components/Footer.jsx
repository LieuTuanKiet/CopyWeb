import logo from '../assets/logo.svg'
import { Link } from 'react-router'

export default function Footer(){
    return (
        <div className="border-t-[1px] border-gray-300 mt-16 pb-12 lg:pb-0">
            <div className="flex flex-col lg:flex-row lg:h-16 container mx-auto justify-between items-center">
                <a className="flex flex-row items-center justify-center cursor-pointer gap-2 container mx-auto text-center h-20 lg:h-full lg:justify-normal">
                    <img src={logo} className="h-8"></img>
                    <span className="font-bold text-xl text-primary">AIAI</span>
                </a>
                <ul className="flex flex-col lg:flex-row text-center font-semibold gap-x-4 container mx-auto">
                    <div className="flex justify-center gap-4 lg:justify-normal">
                        <li><Link to="/Research" className="text-primary/60 hover:text-black cursor-pointer duration-200">Nghiên cứu</Link></li>
                        <li><Link to="/Project" className="text-primary/60 hover:text-black cursor-pointer duration-200">Dự án</Link></li>
                        <li><Link to="/Team" className="text-primary/60 hover:text-black cursor-pointer duration-200">Thành viên</Link></li>
                        <li><Link to="/Contact" className="text-primary/60 hover:text-black cursor-pointer duration-200">Liên hệ</Link></li>
                    </div>
                    <li><span className="text-primary/60">© 2025 AIAI. All rights reserved.</span></li>
                </ul>
            </div>
        </div>
        
    )
}