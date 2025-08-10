import HeaderButton from "./HeaderButton"
import { useState } from "react"

export default function MobileHeaderButton(){
    const [active, setActive] = useState(false)

    return(
        <button onClick={() => setActive(!active)}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" 
                strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu text-primary/50 block lg:hidden" aria-hidden="true"><path d="M4 12h16">
                </path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
                <ul className={`flex-col absolute w-[30vw] top-16 right-2 gap-y-6 bg-white rounded-xl p-4 border-gray-300 border-2 ${active? "flex" : "hidden"} `}>
                    <HeaderButton />
                </ul>
        </button>
    )
}