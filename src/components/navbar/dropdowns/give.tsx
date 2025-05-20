import { metronicContext } from '@context/layoutContet';
import React from "react";
import { FaBasketball, FaCircleInfo, FaCopy, FaUser } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import Tyler from '@assets/tyler-hero.svg'
import Esther from '@assets/ester-hoeard.svg'
import Jonathan from '@assets/jonathan-taylor.svg'


interface ModalProps {
    children: React.ReactNode;
}

const ModalContent: React.FC<ModalProps> = ({ children }) => {
    const { giveModal, setGiveModal } = metronicContext()

    if (!giveModal) return null;

    return (
        <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 "
            style={{ zIndex: 10000000000000 }}
            onClick={() => setGiveModal(false)}
        >
            <div
                className="relative bg-light shadow-lg w-[90%] max-w-[550px] max-h-[650px] overflow-hidden rounded-xl"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className="absolute top-4 right-4 text-gray-600 z-20"
                    onClick={() => setGiveModal(false)}
                    style={{ zIndex: 9999 }}  // 
                >
                    ✖
                </button>
                {children}
            </div>
        </div>
    );
};

const Give = () => {
    const { setGiveModal } = metronicContext()

    return (
        <div className="flex flex-col gap-10">
            <ModalContent>
                <div className="flex flex-col  bg-white dark:bg-coal-500 max-w-[550px] max-h-[650px] rounded-xl">
                    <div className="flex flex-col">
                        <div className="border-b p-5">
                            <h3 className='text-b-14-14-600 text-gray-900'>Give Awards</h3>
                        </div>
                        <div className="border-b p-5">
                            <div className="flex flex-col gap-2.5">
                                <div className="flex flex-row items-center gap-[6px]">
                                    <span className='text-b-13-14-500 text-gray-900'>Share read-only link</span>
                                    <FaCircleInfo className='text-gray-500 size-[14px]' />
                                </div>
                                <div className="px-3 py-[13px] flex flex-row items-center gap-5 justify-between border rounded-md bg-light-active">
                                    <input type="text" className='bg-transparent outline-none text-gray-800' placeholder='https://metronic.com/profiles/x7g2vA3kZ5' />
                                    <FaCopy className='text-gray-600 size-4 cursor-pointer' />
                                </div>
                            </div>
                        </div>
                        <div className="border-b p-5">
                            <div className="flex flex-col gap-2.5">
                                <div className="flex flex-row items-center gap-[6px]">
                                    <span className='text-b-13-14-500 text-gray-900'>Share via email</span>
                                    <FaCircleInfo className='text-gray-500 size-[14px]' />
                                </div>
                                <div className="flex flex-col gap-5">
                                    <div className="flex flex-row items-center gap-2.5">
                                        <div className="px-3 py-[13px] flex flex-row items-center  border rounded-md w-full bg-light-active">
                                            <input type="text" className='bg-transparent outline-none text-gray-800' placeholder='https://metronic.com/profiles/x7g2vA3kZ5' />
                                        </div>
                                        <div className="px-4 py-[13px] bg-primary text-white text-b-13-14-500 flex items-center justify-center rounded-md">Share</div>
                                    </div>
                                    <div className="flex flex-col gap-[14px]">
                                        <div className="flex flex-row items-center  justify-between rounded-md ">
                                            <div className="flex flex-row items-center gap-2.5">
                                                <img src={Tyler} alt="tyler" className='size-9' />
                                                <div className="flex flex-col gap-2">
                                                    <Link to={location.pathname} className='text-gray-900 text-b-14-14-500 hover:text-primary text-animation'>Tyler Hero</Link>
                                                    <span className='text-b-11-12-400 text-gray-700'>tyler.hero@gmail.com</span>
                                                </div>
                                            </div>
                                            <select defaultValue={"Owner"} className='bg-light-active text-b-9-10-400 text-gray-800 px-2 py-2.5 border border-gray-300 rounded-md outline-none'>
                                                <option value="Owner">Owner</option>
                                                <option value="Editor">Editor</option>
                                                <option value="Viewer">Viewer</option>
                                            </select>
                                        </div>
                                        <div className="flex flex-row items-center  justify-between rounded-md ">
                                            <div className="flex flex-row items-center gap-2.5">
                                                <img src={Esther} alt="Esther" className='size-9' />
                                                <div className="flex flex-col gap-2">
                                                    <Link to={location.pathname} className='text-gray-900 text-b-14-14-500 hover:text-primary text-animation'>Esther Howard</Link>
                                                    <span className='text-b-11-12-400 text-gray-700'>esther.howard@gmail.com</span>
                                                </div>
                                            </div>
                                            <select defaultValue={"Editor"} className='bg-light-active text-b-9-10-400 text-gray-800 px-2 py-2.5 border border-gray-300 rounded-md outline-none'>
                                                <option value="Editor">Editor</option>
                                                <option value="Owner">Owner</option>
                                                <option value="Viewer">Viewer</option>
                                            </select>
                                        </div>
                                        <div className="flex flex-row items-center  justify-between rounded-md ">
                                            <div className="flex flex-row items-center gap-2.5">
                                                <img src={Jonathan} alt="Jonathan" className='size-9' />
                                                <div className="flex flex-col gap-2">
                                                    <Link to={location.pathname} className='text-gray-900 text-b-14-14-500 hover:text-primary text-animation'>Jacob Jones</Link>
                                                    <span className='text-b-11-12-400 text-gray-700'>jacob.jones@gmail.com</span>
                                                </div>
                                            </div>
                                            <select defaultValue={"Viewer"} className='bg-light-active text-b-9-10-400 text-gray-800 px-2 py-2.5 border border-gray-300 rounded-md outline-none'>
                                                <option value="Viewer">Viewer</option>
                                                <option value="Editor">Editor</option>
                                                <option value="Owner">Owner</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="border-b p-5">
                            <div className="flex flex-col gap-2.5">
                                <div className="flex flex-row items-center gap-[6px]">
                                    <span className='text-b-13-14-500 text-gray-900'>Settings</span>
                                </div>
                                <div className="flex flex-col gap-5">
                                    <div className="flex flex-col gap-4">
                                        <div className="flex flex-row items-center justify-between">
                                            <div className="flex flex-row items-center gap-[6px]">
                                                <FaUser className='size-4 text-gray-500' />
                                                <span className='text-b-12-12-400 text-gray-800'>Anyone at  <Link to={location.pathname}>KeenThemes</Link> can view</span>
                                            </div>
                                            <Link to={location.pathname} className='text-primary border-b border-b-primary text-b-12-12-500 border-dotted'>Change Access</Link>
                                        </div>
                                        <div className="flex flex-row items-center justify-between">
                                            <div className="flex flex-row items-center gap-[6px]">
                                                <FaBasketball className='size-4 text-gray-500' />
                                                <span className='text-b-12-12-400 text-gray-800'>Anyone with link can edit</span>
                                            </div>
                                            <Link to={location.pathname} className='text-primary border-b border-b-primary text-b-12-12-500 border-dotted'>Set Password</Link>
                                        </div>
                                    </div>
                                    <button onClick={() => setGiveModal(false)} className='text-white text-b-13-14-500 py-[13px] rounded-md bg-primary flex items-center justify-center'>Done</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </ModalContent>
        </div>
    );
};

export default Give;
