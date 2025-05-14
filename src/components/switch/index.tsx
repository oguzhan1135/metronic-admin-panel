interface SwitchProps{
    status:boolean;
    setSwitch: (value: React.SetStateAction<boolean>) => void
    size:string;
}

const Switch:React.FC<SwitchProps>=({status,setSwitch,size})=>{
    return(
        <div onClick={()=> setSwitch(!status)} className={`rounded-[30px] cursor-pointer border border-gray-300 ${status? 'bg-primary':'bg-gray-300'}  relative ${size==="small"?' w-[30px] h-[18px]':size==="medium"?' w-[34px] h-[22px]':size==="large"?' w-[38px] h-[26px]':''} transition-all  duration-300 ease-in-out`}>
                <span className={`absolute bg-gray-100 dark:bg-gray-500 rounded-full ${size==="small"?'size-3':size==="medium"?'size-4':size==="large"?'size-5':''} top-[2px] ${status?'left-[14px]':'left-[3px]'} transition-all  duration-300 ease-in-out`}></span>
        </div>
    )
}
export default Switch;