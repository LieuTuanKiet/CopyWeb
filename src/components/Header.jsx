import { useState } from 'react'
import logo from '../assets/logo.svg'
import { Link } from 'react-router'
import HeaderButton from './HeaderButton'

export default function Header(){
    return(
        <div className="bg-white/90 fixed top-0 z-50 w-screen">
            <div className="flex container justify-between mx-auto h-16">
                <a className="flex flex-row items-center cursor-pointer gap-2 px-4 lg:px-0">
                    <img src={logo} className="h-8"></img>
                    <span className="font-bold text-xl text-primary">AIAI</span>
                </a>
                <ul className="hidden lg:flex flex-row justify-center items-center gap-x-4 font-medium">
                    {/*
                    <li><Link to="/" className="bg-gray-100/50 p-3 rounded-md text-primary duration-100">Trang chủ</Link></li>
                    <li><Link to="/Research" className="p-3 rounded-md text-primary/60 hover:bg-gray-100 duration-100">Nghiên cứu</Link></li>
                    <li><Link to="/Project" className="p-3 rounded-md text-primary/60 hover:bg-gray-100 duration-100">Dự án</Link></li>
                    <li><Link to="/Team" className="p-3 rounded-md text-primary/60 hover:bg-gray-100 duration-100">Thành viên</Link></li>
                    */}
                    <HeaderButton />
                </ul>
                <div className="flex">
                    <button className="flex items-center justify-center bg-blue-500 my-3 px-4 md:px-6 text-white rounded-md 
                        shadow-blue-500/70 shadow-lg font-semibold hover:scale-95 duration-100"><svg xmlns="http://www.w3.org/2000/svg" 
                        width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" 
                        strokeLinejoin="round" className="lucide lucide-chevron-right w-5 h-5 md:w-6 md:h-6" aria-hidden="true"><path d="m9 18 6-6-6-6">
                        </path></svg> Liên hệ
                    </button>
                    <div className="flex lg:hidden items-center px-4">
                        <button><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" 
                            strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu text-primary/50 block lg:hidden" aria-hidden="true"><path d="M4 12h16">
                            </path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
                        </button>
                    </div>
                </div>
                
            </div>
        </div>
    )
}