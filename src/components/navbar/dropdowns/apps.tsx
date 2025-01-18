import { useState } from "react"
import Jira from '../../../assets/icon/jira.svg'
import Inferno from '../../../assets/icon/inferno.svg'
import Evernote from '../../../assets/icon/evernote.svg'
import Gitlab from '../../../assets/icon/gitlab.svg'
import Webdev from '../../../assets/icon/webdev.svg'
import Switch from "../../switch"
const DropdownApps = () => {
    const [apps, setApps] = useState([
        {
            name: "Jira",
            description: "Project management",
            status: false,
            icon: <img src={Jira} alt="" />
        },
        {
            name: "Inferno",
            description: "Ensures healthcare app",
            status: false,
            icon: <img src={Inferno} alt="" />
        },
        {
            name: "Evernote",
            description: "Notes management app",
            status: false,
            icon: <img src={Evernote} alt="" />
        },
        {
            name: "Gitlab",
            description: "DevOps platform",
            status: false,
            icon: <img src={Gitlab} alt="" />
        },
        {
            name: "Google webdev",
            description: "Building web expierences",
            status: false,
            icon: <img src={Webdev} alt="" />
        }
    ])
    const toggleApps = (key: string) => {
        setApps((prevApps) =>
            prevApps.map((app) =>
                app.name === key ? { ...app, status: !app.status } : app
            )
        );
    };
    const [appSwitch, setAppSwitch] = useState(false)
    return (
        <div className="absolute  top-12 right-20 w-80">
            <div className="flex bg-white rounded-xl border-gray-300 border  flex-col">
                <div className=" px-5 py-3 border-b">
                    <div className="flex flex-row items-center justify-between">
                        <span className="text-gray-700 text-b-11-12-400">Apps</span>
                        <span className="text-gray-700 text-b-11-12-400">Enabled</span>
                    </div>
                </div>
                <div className="flex flex-col">
                    {
                        apps.map((item) => (
                            <div className="border-b border-gray-200 px-5 py-[14px]">
                                <div className="flex flex-row items-center justify-between ">
                                    <div className="flex flex-row gap-2 items-center">
                                        {item.icon}
                                        <div className="flex flex-col gap-1.5">
                                            <span className="text-gray-900 text-b-13-14-500">{item.name}</span>
                                            <span className="text-gray-700 text-b-11-12-400">{item.description}</span>
                                        </div>
                                    </div>

                                    <Switch status={item.status}
                                        setSwitch={() => toggleApps(item.name)}
                                        size="small" />
                                </div>
                            </div>
                        ))
                    }
                    <div className="px-5 py-[14px]">
                        <div className="flex border rounded-md  border-gray-300 h-8 items-center justify-center cursor-pointer hover:bg-primary text-animation hover: group">
                            <span className='text-gray-700 text-b-12-12-500 group-hover:text-white text-animation'>Go to Apps</span>
                        </div>
                    </div>

                </div>


            </div>
        </div>
    )
}
export default DropdownApps