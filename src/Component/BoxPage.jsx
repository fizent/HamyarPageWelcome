export default function Desc({title, desc, srcI}) {
    return(
        <div className="mr-6 flex">
            <div>
                <h2 className='text-3xl mt-24 font-bold text-0118D8 mb-6 text-start'>{title}</h2>
                <p className="text-lg font-bold text-black">{desc}</p>
            </div>
            <div>
                <img className="hidden md:block w-300" src={srcI} alt="" />
            </div>
        </div>

    )
}