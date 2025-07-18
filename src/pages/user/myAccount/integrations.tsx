import { Link } from "react-router"
import Menu from "@components/myAccount/hoverMenu"
import Card from '@components/card/card'
import { useState } from "react";
import Jira from '@assets/jira-work.svg'
import Inferno from '@assets/inferno.svg'
import Evernote from '@assets/evernote.svg'
import Gitlab from '@assets/gitlab.svg'
import GoogleWeb from '@assets/google-webdev.svg'
import Invision from '@assets/invision.svg'
import Dualingo from '@assets/duolingo.svg'
import GoogleAnalytics from '@assets/google-analytics.svg'
import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { LuSquareMousePointer } from "react-icons/lu";
import Switch from "@components/switch";
import MultiTasking from '@assets/multitasking.svg'
import MultiTaskingDark from '@assets/multitasking-dark.svg'
import FAQ from "@components/myAccount/faq";
import Questions from "@components/myAccount/questions";

interface Integration {
    id: number;
    integrationName: string;
    icon: React.ReactElement;
    description: string;
    status: boolean;
}

const Integrations = () => {
    const location = window.location.pathname
    const [integrations, setIntegrations] = useState<Integration[]>([
        {
            id: 1,
            integrationName: "Jira",
            description: "Project management for agile teams, tracking issues and tasks.",
            icon: <img src={Jira} className="size-[46px]" />,
            status: true
        },
        {
            id: 2,
            integrationName: "Inferno",
            description: "Ensures healthcare app compatibility with FHIR standards.",
            icon: <img src={Inferno} className="size-[46px]" />,
            status: false
        },
        {
            id: 3,
            integrationName: "Evernote",
            description: "Organizes personal and professional documents, ideas, tasks.",
            icon: <img src={Evernote} className="size-[46px]" />,
            status: true
        },
        {
            id: 4,
            integrationName: "Gitlab",
            description: "DevOps platform for code control, project management, CI/CD.",
            icon: <img src={Gitlab} className="size-[46px]" />,
            status: true
        },
        {
            id: 5,
            integrationName: "Google webdev",
            description: "Tools for building quality web experiences, focusing on performance.",
            icon: <img src={GoogleWeb} className="size-[46px]" />,
            status: true
        },
        {
            id: 6,
            integrationName: "Invision",
            description: "Digital design platform for prototyping and design workflow.",
            icon: <img src={Invision} className="size-[46px]" />,
            status: false
        },
        {
            id: 7,
            integrationName: "Duolingo",
            description: "Interactive exercises for fun, effective language learning.",
            icon: <img src={Dualingo} className="size-[46px]" />,
            status: false
        },
        {
            id: 8,
            integrationName: "Google Analytics",
            description: "Insights into website traffic and marketing effectiveness.",
            icon: <img src={GoogleAnalytics} className="size-[46px]" />,
            status: false
        },
    ])

    return (
        <div className="flex flex-col gap-[30px]">
            {/* {Sub  menu} */}
            <Menu />

            <div className="flex flex-row items-center justify-between">
                <div className="flex flex-col gap-[14px] ">
                    <h1 className='text-gray-900 text-h-24-24-600'>Integrations</h1>
                    <span className='text-b-14-14-500 text-gray-700'>Enhance Workflows with Advanced Integrations.</span>
                </div>
                <a href="#" className="px-3 py-2.5 flex flex-row items-center rounded-md bg-light text-b-12-12-500 text-gray-800 border gap-1 cursor-pointer">
                    Add New Integration
                </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[30px] z-1">
                {
                    integrations.map((integration) => (
                        <React.Fragment key={integration.id}>
                            <Card
                                dotStatus={false}
                                buttonStatus={false}
                                content={
                                    <>
                                        <div className="flex flex-col gap-5">
                                            <div className="flex flex-row items-center justify-between  pt-[30px] px-[30px]">
                                                {integration.icon}
                                                <a href="#" className="p-[7px] hover:bg-gray-200 text-animation rounded-md">
                                                    <FaExternalLinkAlt className="size-[18px] text-gray-600" />
                                                </a>
                                            </div>
                                            <div className="flex flex-col gap-2.5 pb-2.5  px-[30px]">
                                                <Link to={location} className="text-b-16-16-500 text-gray-900 hover:text-primary text-animation w-max">{integration.integrationName}</Link>
                                                <p className="text-b-13-20-400 text-gray-700">{integration.description}</p>
                                            </div>
                                            <div className="px-[30px] py-[14px] flex flex-row items-center justify-between border-t">
                                                <a href="#" className="px-3 py-2.5 flex flex-row items-center rounded-md bg-light text-b-12-12-500 text-gray-800 border gap-1 cursor-pointer">
                                                    <LuSquareMousePointer className="text-gray-500 size-[14px]" />
                                                    Connect
                                                </a>
                                                <Switch
                                                    status={integration.status}
                                                    size="medium"
                                                    setSwitch={() =>
                                                        setIntegrations((prev) =>
                                                            prev.map((item) =>
                                                                item.id === integration.id
                                                                    ? { ...item, status: !item.status }
                                                                    : item
                                                            )
                                                        )
                                                    }
                                                />
                                            </div>

                                        </div>
                                    </>
                                }
                            />

                        </React.Fragment>
                    ))
                }

            </div>

            {/* Add New integration Area*/}

            <Card
                dotStatus={false}
                buttonStatus={false}
                content={
                    <>
                        <div className="flex flex-col items-center justify-center gap-2.5 p-[30px]">
                            <img src={MultiTasking} alt="multi-tasking" className="dark:hidden" />
                            <img src={MultiTaskingDark} alt="multi-tasking-dark" className="dark:flex hidden" />
                            <div className="flex flex-col gap-3 items-center justify-center pb-10">
                                <h2 className="text-h-24-24-600 text-gray-900">Add New Integration</h2>
                                <p className="text-center text-b-14-22-400 text-gray-800">
                                    Explore New Integration: Expand Your Toolkit with Cutting-Edge,
                                    User-Friendly Solutions Tailored for Efficient and Innovative Project Management.
                                </p>
                            </div>
                            <a href="#" className="px-4 py-[13px] flex flex-row items-center rounded-md bg-primary text-b-12-12-500 text-white border gap-1 cursor-pointer">
                                Start Now
                            </a>
                        </div>
                    </>
                }
            />
            {/* FAQ area */}

            <FAQ />

            {/* Questions area */}

            <Questions />

        </div >
    )
}
export default Integrations