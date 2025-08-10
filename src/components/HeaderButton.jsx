import { Link, useLocation } from 'react-router'

const buttons = [
    {
        "location": "/",
        "name": "Trang chủ"
    },
    {
        "location": "/Research",
        "name": "Nghiên cứu"
    },
    {
        "location": "/Project",
        "name": "Dự án"
    },
    {
        "location": "/Team",
        "name": "Thành viên"
    },
]

const buttonColor = {
    activeColor: "bg-gray-100/50 text-primary",
    normalColor: "text-primary/60 hover:bg-gray-100"
};

export default function HeaderButton(){
    const location = useLocation();

    return(
        <>
            {buttons.map((button,index) => {
                const isActive= location.pathname === button.location;

                return(
                    <li
                        key={index}
                    >
                        <Link
                            to={button.location}
                            className= {`p-3 rounded-md duration-100 ${isActive? buttonColor.activeColor : buttonColor.normalColor }`}
                        >
                            {button.name}
                        </Link>
                    </li>
                )
            })}
        </>
    )
}