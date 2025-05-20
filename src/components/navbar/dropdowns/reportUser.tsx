import { metronicContext } from '@context/layoutContet';
import React from "react";
import Esther from '@assets/jennifer.svg'
import Verify from '@assets/verify.svg'


interface ModalProps {
    children: React.ReactNode;
}

const ModalContent: React.FC<ModalProps> = ({ children }) => {
    const { reportModal, setReportModal } = metronicContext()

    if (!reportModal) return null;

    return (
        <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 "
            style={{ zIndex: 10000000000000 }}
            onClick={() => setReportModal(false)}
        >
            <div
                className="relative bg-light shadow-lg w-[90%] max-w-[550px]  overflow-hidden rounded-xl"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className="absolute top-4 right-4 text-gray-600 z-20"
                    onClick={() => setReportModal(false)}
                    style={{ zIndex: 9999 }}  // 
                >
                    ✖
                </button>
                {children}
            </div>
        </div>
    );
};

const ReportUser = () => {
    const { setReportModal } = metronicContext()

    return (
        <div className="flex flex-col gap-10">
            <ModalContent>
                <div className="flex flex-col  bg-white dark:bg-coal-500 max-w-[550px]  rounded-xl">
                    <div className="flex flex-col">
                        <div className="border-b p-5">
                            <h3 className='text-b-14-14-600 text-gray-900'>Report User</h3>
                        </div>
                        <div className="border-b p-5">
                            <div className="flex flex-col items-center gap-3">
                                <div className="rounded-full border border-success">
                                    <img src={Esther} alt="esther" className='size-[55px]' />
                                </div>
                                <div className="flex flex-row items-center gap-1 ">
                                    <span className="text-b-18-18-600 text-gray-900">Jennifer Klabber</span>
                                    <img src={Verify} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="border-b p-5">
                            <div className="flex flex-col gap-5">
                                <span className='text-b-13-14-500 text-gray-900'>Let us know why you’re reporing this person</span>
                                <div className="flex flex-col gap-[14px]">
                                    <div className="flex flex-row items-center gap-2">
                                        <input type="radio" name="Impersonation" id="Impersonation" className='bg-transparent size-[18px]' />
                                        <div className="flex flex-col gap-2">
                                            <span className='text-b-14-14-500 text-gray-900'>Impersonation</span>
                                            <span className='text-b-13-14-400 text-gray-700'>It looks like this profile might be impersonating someone else</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-row items-center gap-2">
                                        <input type="radio" name="spammy" id="Impersonation" className='bg-transparent size-[18px]' />
                                        <div className="flex flex-col gap-2">
                                            <span className='text-b-14-14-500 text-gray-900'>Spammy</span>
                                            <span className='text-b-13-14-400 text-gray-700'>This person's profile, comments or posts contain misleading text</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-row items-center gap-2">
                                        <input type="radio" name="off" id="Impersonation" className='bg-transparent size-[18px]' />
                                        <div className="flex flex-col gap-2">
                                            <span className='text-b-14-14-500 text-gray-900'>Off bumble behavior</span>
                                            <span className='text-b-13-14-400 text-gray-700'>This person has engaged in behavior that is abusive, bullying</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-row items-center gap-2">
                                        <input type="radio" name="something" id="Impersonation" className='bg-transparent size-[18px]' />
                                        <div className="flex flex-col gap-2">
                                            <span className='text-b-14-14-500 text-gray-900'>Something else</span>
                                            <span className='text-b-13-14-400 text-gray-700'>None of the reasons listed above are suitable</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="border-y p-5">
                            <p className='max-w-[460px] text-gray-800 text-b-13-20-400 text-center'>Don't worry, your report is completely anonymous; the person you're reporting will not be informed that you've submitted it</p>
                        </div>
                        <div className="flex flex-row items-center justify-end p-5">
                            <div className="flex flex-row items-center gap-2.5">
                                <button onClick={() => setReportModal(false)} className='text-white text-b-13-14-500 py-[13px] px-4 rounded-md bg-primary flex items-center justify-center'>Report this person</button>
                                <button onClick={() => setReportModal(false)} className='text-gray-700 text-b-13-14-500 py-[13px] px-4 rounded-md bg-light border-gray-300 border flex items-center justify-center'>Cancel</button>
                            </div>
                        </div>

                    </div>

                </div>
            </ModalContent>
        </div>
    );
};

export default ReportUser;
