export default function TeamMember(props){
    return(
        <div className="flex flex-col justify-center items-center">
            <div className="rounded-xl overflow-hidden mb-2">
                <img src={props.avatar} className="aspect-square w-full max-w-[200px] object-cover rounded-xl hover:scale-105 duration-200 cursor-pointer"></img>
            </div>
            <p className="text-primary font-bold text-xl h-8">{props.name}</p>
            <p className="text-blue-500 font-semibold text-lg">{props.role}</p>
        </div>
    )
}