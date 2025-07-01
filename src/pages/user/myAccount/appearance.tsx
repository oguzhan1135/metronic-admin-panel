import { Link } from "react-router"
import Menu from "@components/myAccount/hoverMenu"
import Card from '@components/card/card'
import { useEffect, useState } from "react"
import FAQ from "@components/myAccount/faq"
import Service from '@assets/service.svg'
import ServiceDark from '@assets/service-dark.svg'
import Switch from "@components/switch"
import { MdOutlineLocationOn } from "react-icons/md"
import { AiOutlineDesktop } from "react-icons/ai"
import DarkBg from '@assets/dark-bg.svg'
import LightTheme from '@assets/light-theme.svg'
import Systemtheme from '@assets/system-theme.svg'
import Hexlab from '@assets/hexlab.svg'
import HexlabIcon from '@assets/hexlabIcon.svg'
import { RiComputerFill } from "react-icons/ri"
import { IoExitOutline, IoPlayForwardOutline } from "react-icons/io5"
import { IoIosColorPalette } from "react-icons/io"
import { HiOutlineEmojiHappy } from "react-icons/hi"
import { SlPicture } from "react-icons/sl"
import { LuSquareMousePointer } from "react-icons/lu"

const Appearance = () => {
    const location = window.location.pathname
    const [shortCut, setShortCut] = useState(true)
    const [selectionTheme, setSelectionTheme] = useState("Light");
    const [tranparentSidebar, setTransparentSidebar] = useState(true)
    const [security, setSecurity] = useState(false)
    const [email, setEmail] = useState(true)
    const [vendor, setVendor] = useState(true)
    const [branding, setBranding] = useState(false)
    const [highColor, setHighColor] = useState(false)
    const [openLinks, setOpenLinks] = useState(true)

    useEffect(() => {
        const html = document.documentElement;

        if (selectionTheme === "dark") {
            localStorage.setItem("theme", "dark");
            html.classList.add("dark");
        } else if (selectionTheme === "light") {
            localStorage.setItem("theme", "light");
            html.classList.remove("dark");
        } else if (selectionTheme === "system") {
            localStorage.removeItem("theme")
            const isSystemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            if (isSystemDark) {
                html.classList.add("dark");
            } else {
                html.classList.remove("dark");
            }
        }
    }, [selectionTheme]);

    return (
        <div className="flex flex-col gap-[30px]  ">
            {/* {Sub  menu} */}
            <Menu />
            <div className="flex flex-row items-center justify-between">
                <div className="flex flex-col gap-[14px] ">
                    <h1 className='text-gray-900 text-h-24-24-600'>Appearances</h1>
                    <span className='text-b-14-14-500 text-gray-700'>Central Hub for Personal Customization</span>
                </div>
                <a href="#" className="px-3 py-2.5 flex flex-row items-center rounded-md bg-light text-b-12-12-500 text-gray-800 border gap-1 cursor-pointer">
                    Privacy Settings
                </a>
            </div>
            <div className="grid grid-cols-3 xl:grid-cols-5 gap-[30px]">
                <div className="lg:col-span-3 col-span-5 flex flex-col gap-[30px]">

                    {/* Theme area */}
                    <Card
                        title="Appearance"
                        dotStatus={false}
                        buttonStatus={false}
                        content={
                            <>
                                <div className="flex flex-col p-[30px] gap-[30px]">
                                    <div className="flex flex-col gap-5">
                                        <div className="flex flex-col gap-1">
                                            <span className="text-b-15-16-500 text-gray-900">Them Mode</span>
                                            <span className="text-gray-700 text-b-13-20-400">Select or customize your ui theme</span>
                                        </div>
                                        <div className="flex flex-row flex-wrap gap-[30px] border-b pb-[30px]">
                                            <div className="flex flex-col gap-2.5">
                                                <div onClick={() => setSelectionTheme("dark")} className={`overflow-hidden rounded-xl ${selectionTheme === "Dark" ? "border-4 border-success" : "border-4"} cursor-pointer`}>
                                                    <img src={DarkBg} alt="dark-bg" className="scale-[1.05]" />
                                                </div>
                                                <span className="text-gray-900 text-b-14-14-500">Dark</span>
                                            </div>

                                            <div className="flex flex-col gap-2.5">
                                                <div onClick={() => setSelectionTheme("light")} className={`overflow-hidden rounded-xl ${selectionTheme === "Light" ? "border-4 border-success" : "border-4"} cursor-pointer`}>
                                                    <img src={LightTheme} alt="light-theme" className="scale-[1.05]" />
                                                </div>
                                                <span className="text-gray-900 text-b-14-14-500">Light</span>
                                            </div>
                                            <div className="flex flex-col gap-2.5">
                                                <div onClick={() => setSelectionTheme("system")} className={`overflow-hidden rounded-xl ${selectionTheme === "System" ? "border-4 border-success" : "border-4"} cursor-pointer`}>
                                                    <img src={Systemtheme} alt="system-theme" className="scale-[1.05]" />
                                                </div>
                                                <span className="text-gray-900 text-b-14-14-500">System</span>
                                            </div>
                                        </div>
                                        <div className="flex flex-col md:flex-row py-2.5 md:gap-0 gap-4">
                                            <span className="min-w-[220px] text-b-13-14-400 text-gray-800 ">Transparent sidebar</span>
                                            <div className="flex flex-col md:flex-row gap-5  w-full">
                                                <div className="flex flex-row items-center gap-2.5">
                                                    <span className="text-b-14-14-500 text-gray-700">Active</span>
                                                    <Switch status={tranparentSidebar} setSwitch={() => setTransparentSidebar(!tranparentSidebar)} size="medium" />
                                                </div>
                                                <p className="text-b-13-20-400 text-gray-800">Toggle the transparent sidebar for a sleek interface. Switch it on for transparency or off for a solid background.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex ml-auto ">
                                        <a href="#" className="px-4 py-[13px] flex items-center rounded-md bg-primary text-b-12-12-500 w-max text-white gap-1">
                                            Save Changes
                                        </a>
                                    </div>
                                </div>
                            </>
                        }
                    />
                    {/* Branding */}
                    <Card
                        title="Branding"
                        buttonStatus={false}
                        dotStatus={false}
                        dotContentStatus={true}
                        dotContent={<>
                            <div className="flex flex-row items-center gap-2.5">
                                <span className="text-b-13-14-500 text-gray-700">Publish</span>
                                <Switch status={branding} setSwitch={() => setBranding(!branding)} size={"medium"} />
                            </div></>}
                        content={
                            <>
                                <div className="flex flex-col px-[30px]">
                                    <div className="flex flex-col md:flex-row gap-[30px] py-[30px] border-b">
                                        <div className="flex flex-col gap-[6px] w-full">
                                            <span className="text-b-14-14-500 text-gray-900">Company Logo</span>
                                            <span className="text-b-13-20-400 text-gray-700">Emblematic Corporate Identity Symbol</span>
                                        </div>
                                        <div className="flex flex-col md:flex-row items-start w-full gap-[30px] ">
                                            <img src={Hexlab} alt="hexlab" />
                                            <div className="border border-dotted rounded-xl flex items-center justify-center flex-col p-[30px] bg-mask bg-cover">
                                                <img src={HexlabIcon} alt="hexlabIcon" />
                                                <span className="text-b-12-12-500 text-gray-900">Click or Drag & Drop</span>
                                                <span className="text-b-11-12-400 text-gray-700">SVG,PNG, JPG (max. 800x400)</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col md:flex-row gap-[30px] py-[30px] border-b">
                                        <div className="flex flex-col gap-[6px] w-full">
                                            <span className="text-b-14-14-500 text-gray-900">Brand Color</span>
                                            <span className="text-b-13-20-400 text-gray-700">Signature Palette Branding Element</span>
                                        </div>
                                        <div className="flex flex-row items-start w-full gap-[30px] ">
                                            <div className="border bg-gray-100 rouynded-md p-[14px] flex flex-row items-center gap-[6px] w-full">
                                                <RiComputerFill className="text-success size-[18px]" />
                                                <input type="text" className=" outline-none bg-transparent text-13-14-400 text-gray-800" placeholder="#BA35A0" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col md:flex-row gap-[30px] py-[30px] border-b">
                                        <div className="flex flex-col gap-[6px] w-full">
                                            <span className="text-b-14-14-500 text-gray-900">Branding</span>
                                            <span className="text-b-13-20-400 text-gray-700">Comprehensive Image Identity Design</span>
                                        </div>
                                        <div className="flex flex-col  w-full gap-5 ">
                                            <div className="flex flex-col gap-2.5">
                                                <div className="flex items-center flex-row gap-[6px]">
                                                    <input type="checkbox" name="security" id="security" className="size-[18px]" checked={security} onChange={() => setSecurity(!security)} />
                                                    <span className="text-b-13-14-500 text-gray-800">Security Questionaries</span>
                                                </div>
                                                <span className="text-b-12-12-500 text-gray-600">Detailed Risk Assessment & Compliance Verification</span>
                                            </div>
                                            <div className="flex flex-col gap-2.5">
                                                <div className="flex items-center flex-row gap-[6px]">
                                                    <input type="checkbox" name="security" id="security" className="size-[18px]" checked={email} onChange={() => setEmail(!email)} />
                                                    <span className="text-b-13-14-500 text-gray-800">Email</span>
                                                </div>
                                                <span className="text-b-12-12-500 text-gray-600">Electronic Message Communication</span>
                                            </div>
                                            <div className="flex flex-col gap-2.5">
                                                <div className="flex items-center flex-row gap-[6px]">
                                                    <input type="checkbox" name="security" id="security" className="size-[18px]" checked={vendor} onChange={() => setVendor(!vendor)} />
                                                    <span className="text-b-13-14-500 text-gray-800">Vendor Reports</span>
                                                </div>
                                                <span className="text-b-12-12-500 text-gray-600">Supplier Performance & Reliability Evaluationsn</span>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="flex ml-auto py-[30px]">
                                        <a href="#" className="px-4 py-[13px] flex items-center rounded-md bg-primary text-b-12-12-500 w-max text-white gap-1">
                                            Save Changes
                                        </a>
                                    </div>
                                </div>
                            </>
                        }
                    />

                    {/* Accessibility */},
                    <Card
                        title={"Accessibility"}
                        dotStatus={false}
                        buttonStatus={false}
                        content={
                            <>
                                <div className="flex flex-col">
                                    <div className="flex md:flex-row flex-col items-center justify-between gap-2 px-[30px] py-4 border">
                                        <div className="flex md:flex-row items-center flex-col gap-[14px]">
                                            <div className="relative size-[50px] shrink-0">
                                                <svg className="w-full h-full stroke-gray-300 fill-gray-100" fill="none" height="48" viewBox="0 0 44 48" width="44" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M16 2.4641C19.7128 0.320509 24.2872 0.320508 28 2.4641L37.6506 8.0359C41.3634 10.1795 43.6506 14.141 43.6506
            18.4282V29.5718C43.6506 33.859 41.3634 37.8205 37.6506 39.9641L28 45.5359C24.2872 47.6795 19.7128 47.6795 16 45.5359L6.34937
            39.9641C2.63655 37.8205 0.349365 33.859 0.349365 29.5718V18.4282C0.349365 14.141 2.63655 10.1795 6.34937 8.0359L16 2.4641Z" fill="">
                                                    </path>
                                                    <path d="M16.25 2.89711C19.8081 0.842838 24.1919 0.842837 27.75 2.89711L37.4006 8.46891C40.9587 10.5232 43.1506 14.3196 43.1506
            18.4282V29.5718C43.1506 33.6804 40.9587 37.4768 37.4006 39.5311L27.75 45.1029C24.1919 47.1572 19.8081 47.1572 16.25 45.1029L6.59937
            39.5311C3.04125 37.4768 0.849365 33.6803 0.849365 29.5718V18.4282C0.849365 14.3196 3.04125 10.5232 6.59937 8.46891L16.25 2.89711Z" stroke="">
                                                    </path>
                                                </svg>
                                                <div className="absolute leading-none start-2/4 top-2/4 -translate-y-2/4 -translate-x-2/4 rtl:translate-x-2/4">
                                                    <IoExitOutline className="text-gray-500 size-[22px]" />
                                                </div>
                                            </div>
                                            <div className="flex flex-col md:items-start items-center gap-[6px]">
                                                <span className="text-b-14-14-500 text-gray-900">Shortcuts require modifier</span>
                                                <span className="text-b-13-14-400 text-gray-700">Enable modifier keys for quick keyboard shortcuts.</span>
                                            </div>
                                        </div>
                                        <Switch size="medium" status={shortCut} setSwitch={() => setShortCut(!shortCut)} />
                                    </div>
                                    <div className="flex md:flex-row flex-col items-center justify-between gap-2 px-[30px] py-4 border">
                                        <div className="flex md:flex-row items-center flex-col gap-[14px]">
                                            <div className="relative size-[50px] shrink-0">
                                                <svg className="w-full h-full stroke-gray-300 fill-gray-100" fill="none" height="48" viewBox="0 0 44 48" width="44" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M16 2.4641C19.7128 0.320509 24.2872 0.320508 28 2.4641L37.6506 8.0359C41.3634 10.1795 43.6506 14.141 43.6506
            18.4282V29.5718C43.6506 33.859 41.3634 37.8205 37.6506 39.9641L28 45.5359C24.2872 47.6795 19.7128 47.6795 16 45.5359L6.34937
            39.9641C2.63655 37.8205 0.349365 33.859 0.349365 29.5718V18.4282C0.349365 14.141 2.63655 10.1795 6.34937 8.0359L16 2.4641Z" fill="">
                                                    </path>
                                                    <path d="M16.25 2.89711C19.8081 0.842838 24.1919 0.842837 27.75 2.89711L37.4006 8.46891C40.9587 10.5232 43.1506 14.3196 43.1506
            18.4282V29.5718C43.1506 33.6804 40.9587 37.4768 37.4006 39.5311L27.75 45.1029C24.1919 47.1572 19.8081 47.1572 16.25 45.1029L6.59937
            39.5311C3.04125 37.4768 0.849365 33.6803 0.849365 29.5718V18.4282C0.849365 14.3196 3.04125 10.5232 6.59937 8.46891L16.25 2.89711Z" stroke="">
                                                    </path>
                                                </svg>
                                                <div className="absolute leading-none start-2/4 top-2/4 -translate-y-2/4 -translate-x-2/4 rtl:translate-x-2/4">
                                                    <IoIosColorPalette className="text-gray-500 size-[22px]" />
                                                </div>
                                            </div>
                                            <div className="flex flex-col md:items-start items-center gap-[6px]">
                                                <span className="text-b-14-14-500 text-gray-900">High color contrast</span>
                                                <span className="text-b-13-14-400 text-gray-700">Improve readability with high-contrast interface colors.</span>
                                            </div>
                                        </div>
                                        <Switch size="medium" status={highColor} setSwitch={() => setHighColor(!highColor)} />
                                    </div>
                                    <div className="flex md:flex-row flex-col items-center justify-between gap-2 px-[30px] py-4 border">
                                        <div className="flex md:flex-row items-center flex-col gap-[14px]">
                                            <div className="relative size-[50px] shrink-0">
                                                <svg className="w-full h-full stroke-gray-300 fill-gray-100" fill="none" height="48" viewBox="0 0 44 48" width="44" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M16 2.4641C19.7128 0.320509 24.2872 0.320508 28 2.4641L37.6506 8.0359C41.3634 10.1795 43.6506 14.141 43.6506
            18.4282V29.5718C43.6506 33.859 41.3634 37.8205 37.6506 39.9641L28 45.5359C24.2872 47.6795 19.7128 47.6795 16 45.5359L6.34937
            39.9641C2.63655 37.8205 0.349365 33.859 0.349365 29.5718V18.4282C0.349365 14.141 2.63655 10.1795 6.34937 8.0359L16 2.4641Z" fill="">
                                                    </path>
                                                    <path d="M16.25 2.89711C19.8081 0.842838 24.1919 0.842837 27.75 2.89711L37.4006 8.46891C40.9587 10.5232 43.1506 14.3196 43.1506
            18.4282V29.5718C43.1506 33.6804 40.9587 37.4768 37.4006 39.5311L27.75 45.1029C24.1919 47.1572 19.8081 47.1572 16.25 45.1029L6.59937
            39.5311C3.04125 37.4768 0.849365 33.6803 0.849365 29.5718V18.4282C0.849365 14.3196 3.04125 10.5232 6.59937 8.46891L16.25 2.89711Z" stroke="">
                                                    </path>
                                                </svg>
                                                <div className="absolute leading-none start-2/4 top-2/4 -translate-y-2/4 -translate-x-2/4 rtl:translate-x-2/4">
                                                    <IoPlayForwardOutline className="text-gray-500 size-[22px]" />
                                                </div>
                                            </div>
                                            <div className="flex flex-col md:items-start items-center gap-[6px]">
                                                <span className="text-b-14-14-500 text-gray-900">Autoplay videos</span>
                                                <span className="text-b-13-14-400 text-gray-700">Choose preferences for automatic video playback.</span>
                                            </div>
                                        </div>
                                        <select className="px-3 py-[9px] border outline-none rounded-md text-b-13-14-400 text-gray-800 bg-light-active">
                                            <option className=" text-b-13-14-400 text-gray-800" value="System Preferences" >System Preferences</option>
                                            <option className=" text-b-13-14-400 text-gray-800" value="Sound">Sound</option>
                                            <option className=" text-b-13-14-400 text-gray-800" value="Focus">Focus</option>
                                        </select>
                                    </div>
                                    <div className="flex md:flex-row flex-col items-center justify-between gap-2 px-[30px] py-4 border">
                                        <div className="flex md:flex-row items-center flex-col gap-[14px]">
                                            <div className="relative size-[50px] shrink-0">
                                                <svg className="w-full h-full stroke-gray-300 fill-gray-100" fill="none" height="48" viewBox="0 0 44 48" width="44" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M16 2.4641C19.7128 0.320509 24.2872 0.320508 28 2.4641L37.6506 8.0359C41.3634 10.1795 43.6506 14.141 43.6506
            18.4282V29.5718C43.6506 33.859 41.3634 37.8205 37.6506 39.9641L28 45.5359C24.2872 47.6795 19.7128 47.6795 16 45.5359L6.34937
            39.9641C2.63655 37.8205 0.349365 33.859 0.349365 29.5718V18.4282C0.349365 14.141 2.63655 10.1795 6.34937 8.0359L16 2.4641Z" fill="">
                                                    </path>
                                                    <path d="M16.25 2.89711C19.8081 0.842838 24.1919 0.842837 27.75 2.89711L37.4006 8.46891C40.9587 10.5232 43.1506 14.3196 43.1506
            18.4282V29.5718C43.1506 33.6804 40.9587 37.4768 37.4006 39.5311L27.75 45.1029C24.1919 47.1572 19.8081 47.1572 16.25 45.1029L6.59937
            39.5311C3.04125 37.4768 0.849365 33.6803 0.849365 29.5718V18.4282C0.849365 14.3196 3.04125 10.5232 6.59937 8.46891L16.25 2.89711Z" stroke="">
                                                    </path>
                                                </svg>
                                                <div className="absolute leading-none start-2/4 top-2/4 -translate-y-2/4 -translate-x-2/4 rtl:translate-x-2/4">
                                                    <AiOutlineDesktop className="text-gray-500 size-[22px]" />
                                                </div>
                                            </div>
                                            <div className="flex flex-col md:items-start items-center gap-[6px]">
                                                <span className="text-b-14-14-500 text-gray-900">Open links in Desktop</span>
                                                <span className="text-b-13-14-400 text-gray-700">Links open in the desktop app for convenience.</span>
                                            </div>
                                        </div>
                                        <Switch size="medium" status={openLinks} setSwitch={() => setOpenLinks(!openLinks)} />
                                    </div>
                                </div>
                            </>
                        }
                    />

                    {/* FAQ */}
                    <FAQ />

                    {/* Question */}
                    <Card
                        buttonStatus={true}
                        buttonTitle="Contact Support"
                        dotStatus={false}
                        content={
                            <>
                                <div className="flex flex-col md:flex-row gap-10 px-10 items-center py-[30px]">
                                    <div className="flex flex-col gap-3">
                                        <span className="text-b-20-30-500 text-gray-900 ">Questions?</span>
                                        <p className=" text-b-14-22-400 text-gray-800">Need assistance? Contact our support team for prompt, personalized help your queries & concerns.</p>
                                    </div>
                                    <img src={Service} alt="service" className="dark:hidden" />
                                    <img src={ServiceDark} alt="service-dark" className="dark:flex hidden" />
                                </div>
                            </>
                        }
                    />
                </div>
                <div className="lg:col-span-2 col-span-5 flex flex-col gap-[30px]">
                    {/* right area */}

                    {/* Project API keys area*/}
                    <Card
                        title={<div className="flex flex-row items-center gap-[6px]">
                            <h3 className="text-b-16-16-500 text-gray-900">Disable default Branding</h3>
                            <div className="rounded-[4px] flex items-center justify-center px-[6px] py-[5px] bg-primary-light border border-primary border-opacity-20 text-primary text-b-10-10-500">Pro</div>
                        </div>}
                        dotStatus={false}
                        buttonStatus={false}
                        content={
                            <>
                                <div className="flex flex-col gap-6">
                                    <div className="flex flex-col gap-2.5 px-[30px] pt-[30px]">
                                        <p className="text-b-13-20-400 text-gray-800">Remove any ktstudio.io branding and media.
                                            I.e. powered by ktstudio.io</p>
                                        <Link to={location} className="text-primary border-b border-dotted border-b-primary w-max text-b-12-12-500">View Plans</Link>
                                        <div className="relative opacity-50 z-0 cursor-not-allowed">
                                            <div className="absolute inset-0 z-10"></div>
                                            <Switch status={highColor} size="medium" setSwitch={() => null} />
                                        </div>


                                    </div>

                                    <div className="border-t py-[14px] flex items-center justify-center">
                                        <button disabled className="px-3 py-2.5 flex items-center rounded-md bg-light text-b-12-12-500 text-gray-800 border opacity-50">
                                            Update
                                        </button>
                                    </div>
                                </div>
                            </>
                        }
                    />


                    <Card
                        dotStatus={false}
                        buttonStatus={false}
                        content={<>
                            <div className="flex flex-col px-[30px] ">
                                <div className="flex flex-col gap-5 py-[30px] border-b">
                                    <div className="relative size-[50px] shrink-0">
                                        <svg className="w-full h-full stroke-warning-clarity opacity-80 dark:opacity-20 fill-[#FFF5EF] " fill="none" height="48" viewBox="0 0 44 48" width="44" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16 2.4641C19.7128 0.320509 24.2872 0.320508 28 2.4641L37.6506 8.0359C41.3634 10.1795 43.6506 14.141 43.6506 
            18.4282V29.5718C43.6506 33.859 41.3634 37.8205 37.6506 39.9641L28 45.5359C24.2872 47.6795 19.7128 47.6795 16 45.5359L6.34937 
            39.9641C2.63655 37.8205 0.349365 33.859 0.349365 29.5718V18.4282C0.349365 14.141 2.63655 10.1795 6.34937 8.0359L16 2.4641Z" fill="">
                                            </path>
                                            <path d="M16.25 2.89711C19.8081 0.842838 24.1919 0.842837 27.75 2.89711L37.4006 8.46891C40.9587 10.5232 43.1506 14.3196 43.1506 
            18.4282V29.5718C43.1506 33.6804 40.9587 37.4768 37.4006 39.5311L27.75 45.1029C24.1919 47.1572 19.8081 47.1572 16.25 45.1029L6.59937 
            39.5311C3.04125 37.4768 0.849365 33.6803 0.849365 29.5718V18.4282C0.849365 14.3196 3.04125 10.5232 6.59937 8.46891L16.25 2.89711Z" stroke="">
                                            </path>
                                        </svg>
                                        <div className="absolute leading-none start-2/4 top-2/4 -translate-y-2/4 -translate-x-2/4 rtl:translate-x-2/4">
                                            <HiOutlineEmojiHappy className="text-[#FF6F1E] size-[22px]" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2.5">
                                        <Link to={location} className="text-gray-900 text-b-16-25-500">Enhancing Usability: Adaptive Shortcut Controls</Link>
                                        <p className="text-b-13-20-400 text-gray-800">Integrate modifier keys for activating shortcuts to streamline your navigation and enhance productivity without disrupting your typing flow.</p>
                                        <Link to={location} className="text-primary border-b border-dotted border-b-primary w-max text-b-12-12-500">Learn more</Link>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-5 py-[30px] border-b">

                                    <div className="relative size-[50px] shrink-0">
                                        <svg className="w-full h-full stroke-warning-clarity opacity-80 dark:opacity-20 fill-[#FFF5EF] " fill="none" height="48" viewBox="0 0 44 48" width="44" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16 2.4641C19.7128 0.320509 24.2872 0.320508 28 2.4641L37.6506 8.0359C41.3634 10.1795 43.6506 14.141 43.6506 
            18.4282V29.5718C43.6506 33.859 41.3634 37.8205 37.6506 39.9641L28 45.5359C24.2872 47.6795 19.7128 47.6795 16 45.5359L6.34937 
            39.9641C2.63655 37.8205 0.349365 33.859 0.349365 29.5718V18.4282C0.349365 14.141 2.63655 10.1795 6.34937 8.0359L16 2.4641Z" fill="">
                                            </path>
                                            <path d="M16.25 2.89711C19.8081 0.842838 24.1919 0.842837 27.75 2.89711L37.4006 8.46891C40.9587 10.5232 43.1506 14.3196 43.1506 
            18.4282V29.5718C43.1506 33.6804 40.9587 37.4768 37.4006 39.5311L27.75 45.1029C24.1919 47.1572 19.8081 47.1572 16.25 45.1029L6.59937 
            39.5311C3.04125 37.4768 0.849365 33.6803 0.849365 29.5718V18.4282C0.849365 14.3196 3.04125 10.5232 6.59937 8.46891L16.25 2.89711Z" stroke="">
                                            </path>
                                        </svg>
                                        <div className="absolute leading-none start-2/4 top-2/4 -translate-y-2/4 -translate-x-2/4 rtl:translate-x-2/4">
                                            <SlPicture className="text-[#FF6F1E] size-[22px]" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2.5">
                                        <Link to={location} className="text-gray-900 text-b-16-25-500">Visual Accessibility: High Contrast Theme Activation</Link>
                                        <p className="text-b-13-20-400 text-gray-800">Switch to a high-contrast color scheme to improve on-screen text readability, reduce eye strain, and facilitate better visual ergonomics for long work sessions.</p>
                                        <Link to={location} className="text-primary border-b border-dotted border-b-primary w-max text-b-12-12-500">Learn more</Link>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-5 py-[30px] border-b">
                                    <div className="relative size-[50px] shrink-0">
                                        <svg className="w-full h-full stroke-warning-clarity opacity-80 dark:opacity-20 fill-[#FFF5EF] " fill="none" height="48" viewBox="0 0 44 48" width="44" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16 2.4641C19.7128 0.320509 24.2872 0.320508 28 2.4641L37.6506 8.0359C41.3634 10.1795 43.6506 14.141 43.6506 
            18.4282V29.5718C43.6506 33.859 41.3634 37.8205 37.6506 39.9641L28 45.5359C24.2872 47.6795 19.7128 47.6795 16 45.5359L6.34937 
            39.9641C2.63655 37.8205 0.349365 33.859 0.349365 29.5718V18.4282C0.349365 14.141 2.63655 10.1795 6.34937 8.0359L16 2.4641Z" fill="">
                                            </path>
                                            <path d="M16.25 2.89711C19.8081 0.842838 24.1919 0.842837 27.75 2.89711L37.4006 8.46891C40.9587 10.5232 43.1506 14.3196 43.1506 
            18.4282V29.5718C43.1506 33.6804 40.9587 37.4768 37.4006 39.5311L27.75 45.1029C24.1919 47.1572 19.8081 47.1572 16.25 45.1029L6.59937 
            39.5311C3.04125 37.4768 0.849365 33.6803 0.849365 29.5718V18.4282C0.849365 14.3196 3.04125 10.5232 6.59937 8.46891L16.25 2.89711Z" stroke="">
                                            </path>
                                        </svg>
                                        <div className="absolute leading-none start-2/4 top-2/4 -translate-y-2/4 -translate-x-2/4 rtl:translate-x-2/4">
                                            <LuSquareMousePointer className="text-[#FF6F1E] size-[22px]" />
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-2.5">
                                        <Link to={location} className="text-gray-900 text-b-16-25-500">Media Handling: Autoplay Videos Customization Options</Link>
                                        <p className="text-b-13-20-400 text-gray-800">Customize your video engagement experience with user-centric autoplay settings that align with your system preferences or manual selection for a tailored approach.</p>
                                        <Link to={location} className="text-primary border-b border-dotted border-b-primary w-max text-b-12-12-500">Learn more</Link>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-5 py-[30px] border-b">
                                    <div className="relative size-[50px] shrink-0">
                                        <svg className="w-full h-full stroke-warning-clarity opacity-80 dark:opacity-20 fill-[#FFF5EF] " fill="none" height="48" viewBox="0 0 44 48" width="44" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16 2.4641C19.7128 0.320509 24.2872 0.320508 28 2.4641L37.6506 8.0359C41.3634 10.1795 43.6506 14.141 43.6506 
            18.4282V29.5718C43.6506 33.859 41.3634 37.8205 37.6506 39.9641L28 45.5359C24.2872 47.6795 19.7128 47.6795 16 45.5359L6.34937 
            39.9641C2.63655 37.8205 0.349365 33.859 0.349365 29.5718V18.4282C0.349365 14.141 2.63655 10.1795 6.34937 8.0359L16 2.4641Z" fill="">
                                            </path>
                                            <path d="M16.25 2.89711C19.8081 0.842838 24.1919 0.842837 27.75 2.89711L37.4006 8.46891C40.9587 10.5232 43.1506 14.3196 43.1506 
            18.4282V29.5718C43.1506 33.6804 40.9587 37.4768 37.4006 39.5311L27.75 45.1029C24.1919 47.1572 19.8081 47.1572 16.25 45.1029L6.59937 
            39.5311C3.04125 37.4768 0.849365 33.6803 0.849365 29.5718V18.4282C0.849365 14.3196 3.04125 10.5232 6.59937 8.46891L16.25 2.89711Z" stroke="">
                                            </path>
                                        </svg>
                                        <div className="absolute leading-none start-2/4 top-2/4 -translate-y-2/4 -translate-x-2/4 rtl:translate-x-2/4">
                                            <MdOutlineLocationOn className="text-[#FF6F1E] size-[22px]" />
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-2.5">
                                        <Link to={location} className="text-gray-900 text-b-16-25-500">Navigation Preferences: Desktop App Link Integration Features</Link>
                                        <p className="text-b-13-20-400 text-gray-800">Enhance your workflow integration by configuring external links to open seamlessly within the desktop application, providing a unified and efficient user experience.</p>
                                        <Link to={location} className="text-primary border-b border-dotted border-b-primary w-max text-b-12-12-500">Learn more</Link>
                                    </div>
                                </div>
                            </div>
                        </>}
                    />
                </div>
            </div>
        </div >
    )
}
export default Appearance