
interface WidgetProps {
    image: string;
    name: string;
    count: number;
}

const Widget: React.FC<WidgetProps> = ({ image, name, count }) => {
    return (
        <div className="p-5 rounded-xl  flex flex-col gap-[30px] h-max border border-gray-300 w-full ">
            <img className="w-7 h-7" src={image} alt="" />
            <div className="flex flex-col gap-2 h-max ">
                <div className=" text-h-30-30-600 text-gray-900">
                    {
                        count > 1000 ?
                            <>{count / 1000}k</> :
                            <>{count}</>
                    }
                </div>
                <div className="flex flex-wrap  text-b-13-14-400 text-gray-700">{name}</div>
            </div>
        </div>
    )
}
export default Widget