import Card from "../../../components/publicProfile/card"
import Verify from '../../../assets/icon/verify.svg'
import {  CiMail } from "react-icons/ci"
import { GiAbstract080 } from "react-icons/gi"
import { SlLocationPin } from "react-icons/sl"
import { Link } from "react-router"
import Menu from "../../../components/publicProfile/hovermenu"
import { useState } from "react"
import AccountDeactiveted from '../../../assets/icon/account-deactived.svg'

import Jennifer from '../../../assets/icon/jennifer.svg'

const Empty = () => {
    const location = window.location.pathname


    const [selectedCardView, setSelectedCardView] = useState("card");

    return (
        <div className="flex flex-col gap-10  ">
            <div className="flex flex-col gap-3 items-center justify-center bg-mask bg-cover">
                <div className="rounded-full border-success border-2">
                    <img src={Jennifer} alt="" className='size-[100px]' />
                </div>
                <div className="flex flex-row items-center gap-1 ">
                    <span className="text-b-18-18-600 text-gray-900">Jennifer Klabber</span>
                    <img src={Verify} alt="" />
                </div>
                <div className="flex md:flex-row flex-col items-center gap-5">
                    <div className="flex flex-row items-center gap-[5px]">
                        <GiAbstract080 className='text-gray-600 text-b-14-14-500' />
                        <span className='text-gray-600 text-b-14-14-500'>KeenThemes</span>
                    </div>
                    <div className="flex flex-row items-center gap-[5px]">
                        <SlLocationPin className='text-gray-600 text-b-14-14-500' />
                        <span className='text-gray-600 text-b-14-14-500'>SF, Bay Area</span>
                    </div>
                    <div className="flex flex-row items-center gap-[5px]">
                        <CiMail className='text-gray-600 text-b-14-14-500' />
                        <Link to={location} className='text-gray-600 text-b-14-14-500 hover:text-primary text-animation'>jenny@kteam.com</Link>
                    </div>
                </div>
            </div>
            {/* {Sub  menu} */}
            <Menu />
            <Card
                dotStatus={false}
                buttonStatus={false}
                content={
                    <div className="flex flex-col items-center gap-2.5 pb-10">
                        <img src={AccountDeactiveted} alt="account-deactiveted" />
                        <span className="text-b-18-18-500 text-gray-900">Upload Item to Get Started</span>
                        <span>Begin by crafting your inaugural list in minutes. <Link to={location} className="text-primary">Get Started!</Link></span>
                    </div>
                }
            />


            <div className="flex items-center justify-center">
                <Link to={location} className="border-b-primary border-b border-dotted text-b-13-14-500 text-primary">Check ready Templates</Link>
            </div>
        </div >
    )
}
export default Empty