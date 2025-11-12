export default function Button({text}) {
    return(
        <button className="bg-[#1B56FD] hover:bg-[#3458FF] text-white font-bold py-3 px-8 rounded-2xl shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer">
            {text}
        </button>

    )
}