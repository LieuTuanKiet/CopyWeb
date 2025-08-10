import { Link } from "react-router"

export default function Error(){
    return(
        <Link to="/" className="w-screen h-screen flex flex-col justify-center items-center cursor-pointer">
            <h1 className="font-bold text-6xl h-32 lg:h-20 text-center">404 - Page Not Found</h1>
            <p className="font-semibold text-lg text-primary/60 text-center">Click để quay lại trang chủ hoặc liên hệ với chúng tôi nếu bạn cần trợ giúp.</p>
        </Link>
    )
}