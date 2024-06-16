export const Button = ({name, icon, pad="rounded-[2em]", add, p="p-2", handler=()=>null})=>{
    return(
        <button className={`bg-zinc-800 ${p} text-xl text-gray-300 flex gap-2 items-center ${pad} ${add} font-serif hover:bg-custom-gradient hover:text-black hover:scale-105 duration-300 mt-[2em] ml-8 mr-8 font-bold p-[3rem]`} onClick={handler}>
            {icon}
            <p className="mx-auto">{name}</p>
        </button>
    )
}