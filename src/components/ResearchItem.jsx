export default function ResearchItem(props){
    return(
        <div className="bg-gradient-to-b from-blue-500/20 via-gray-100 to-white rounded-lg p-10 cursor-pointer hover:scale-105 duration-200">
            <div className="relative h-16">
                <div className="w-8 h-10 bg-blue-500 blur-lg absolute"></div>
                {props.icon}
            </div>
            <p className="font-semibold text-primary text-2xl lg:text-3xl h-12">{props.title}</p>
            <p className="font-semibold text-sm text-primary/60 lg:text-lg ">{props.description}</p>
        </div>
    )
}