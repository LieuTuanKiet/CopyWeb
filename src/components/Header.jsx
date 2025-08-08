import logo from '../assets/logo.svg'
import { Link } from 'react-router'

export default function Header(){
    return(
        <div className="flex col justify-between mx-auto h-16 container bg-white/90 fixed top-0 right-2 left-2 z-50">
            <a className="flex flex-row items-center cursor-pointer gap-2">
                <img src={logo} className="h-8"></img>
                <span className="font-bold text-xl text-primary">AIAI</span>
            </a>
            <ul className="flex flex-row justify-center items-center gap-x-4 font-medium">
                <li><Link to="/" className="bg-gray-100/50 p-3 rounded-md text-primary duration-100">Trang chủ</Link></li>
                <li><Link to="/Research" className="p-3 rounded-md text-primary/60 hover:bg-gray-100 duration-100">Nghiên cứu</Link></li>
                <li><Link to="/Project" className="p-3 rounded-md text-primary/60 hover:bg-gray-100 duration-100">Dự án</Link></li>
                <li><Link to="/Team" className="p-3 rounded-md text-primary/60 hover:bg-gray-100 duration-100">Thành viên</Link></li>
            </ul>
            <button className="flex items-center justify-center bg-blue-500 my-3 px-6 text-white rounded-md 
                shadow-blue-500/70 shadow-lg font-semibold hover:scale-95 duration-100"><svg xmlns="http://www.w3.org/2000/svg" 
                width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" 
                strokeLinejoin="round" className="lucide lucide-chevron-right w-5 h-5 md:w-6 md:h-6" aria-hidden="true"><path d="m9 18 6-6-6-6">
                </path></svg> Liên hệ
            </button>
        </div>
    )
}