export default function ProjectItem(props){
    return(
        <div className="bg-white border-gray-300 border-[1px] rounded-xl p-6 group">
            <div className="mb-4 overflow-hidden rounded-xl">
                <img src={props.img} className="aspect-square rounded-xl h-52 w-full object-cover group-hover:scale-105 duration-200"></img>
            </div>
            <p className="text-primary font-semibold text-2xl h-10">{props.title}</p>
            <p className="text-primary/60 font-semibold text-md mb-4 max-w-[350px]">{props.description}</p>
            <div className="flex justify-between items-center">
                <p className="text-blue-600 font-semibold hover:underline cursor-pointer"><a href="">Xem chi tiết</a></p>
                <p className="text-pink-600 bg-pink-500/20 px-2 py-1 rounded-lg">{props.type}</p>
            </div>
        </div>
    )
}