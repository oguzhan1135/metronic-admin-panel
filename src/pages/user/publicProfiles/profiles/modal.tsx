import { GiAbstract080 } from 'react-icons/gi';
import Jennifer from '@assets/jennifer.svg'
import Verify from '@assets/verify.svg'
import { SlLocationPin } from 'react-icons/sl';
import { CiMail } from 'react-icons/ci';
import Jira from '@assets/jira-work.svg'
import Pesto from '@assets/paccion.svg'
import Perrier from '@assets/perrier.svg'
import DonutChart from '@components/charts/donutChart';
import Contributors from '@components/publicProfile/contributors';
import Card from '@components/card/card';
import Menu from '@components/publicProfile/hovermenu';
import { Link } from 'react-router';
import ProjectTable from '@components/publicProfile/projectTable';
import Badges from '@components/publicProfile/badges';
import { metronicContext } from '@context/layoutContet';

interface ModalProps {
    children: React.ReactNode;
}

const ModalContent: React.FC<ModalProps> = ({ children }) => {
    const { modalOpen, setModalOpen } = metronicContext()

    if (!modalOpen) return null;

    return (
        <div
            className="fixed inset-0 flex items-center justify-center "
            style={{ zIndex: 10000000000000 }}
            onClick={() => setModalOpen(false)}
        >
            <div
                className="relative bg-light rounded-lg shadow-lg w-[90%] max-w-[1200px] max-h-[800px] overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className="absolute top-4 right-4 text-gray-600 z-20"
                    onClick={() => setModalOpen(false)}
                    style={{ zIndex: 9999 }}  // 
                >
                    ✖
                </button>
                {children}
            </div>
        </div>
    );
};

const Modal = () => {
    const location = window.location.pathname;
    const { modalOpen } = metronicContext()

    return (
        <div className="flex flex-col gap-10">
            <div className={`flex flex-col gap-10 ${modalOpen ? 'blur' : 'none'}`}>
                <div className="flex py-10 flex-col gap-3 items-center justify-center relative bg-map bg-cover  dark:bg-map-dark z-10">
                    <div className="rounded-full border border-success">
                        <img src={Jennifer} alt="" className="size-[100px]" />
                    </div>
                    <div className="flex flex-row items-center gap-1">
                        <span className="text-b-18-18-600 text-gray-900">Jennifer Klabber</span>
                        <img src={Verify} alt="" />
                    </div>
                    <div className="flex md:flex-row flex-col items-center gap-5">
                        <div className="flex flex-row items-center gap-[5px]">
                            <GiAbstract080 className="text-gray-600 text-b-14-14-500" />
                            <span className="text-gray-600 text-b-14-14-500">KeenThemes</span>
                        </div>
                        <div className="flex flex-row items-center gap-[5px]">
                            <SlLocationPin className="text-gray-600 text-b-14-14-500" />
                            <span className="text-gray-600 text-b-14-14-500">SF, Bay Area</span>
                        </div>
                        <div className="flex flex-row items-center gap-[5px]">
                            <CiMail className="text-gray-600 text-b-14-14-500" />
                            <Link to={location} className="text-gray-600 text-b-14-14-500 hover:text-primary text-animation">
                                jenny@kteam.com
                            </Link>
                        </div>
                    </div>
                </div>
                {/* Sub menu */}
                <Menu />

            </div>
            <ModalContent>
                <div className="flex flex-col gap-10 ">
                    <div className="flex py-10 flex-col gap-3 items-center justify-center relative bg-map dark:bg-map-dark bg-cover z-10">
                        <div className="rounded-full border border-success">
                            <img src={Jennifer} alt="" className="size-[100px]" />
                        </div>
                        <div className="flex flex-row items-center gap-1">
                            <span className="text-b-18-18-600 text-gray-900">Jennifer Klabber</span>
                            <img src={Verify} alt="" />
                        </div>
                        <div className="flex md:flex-row flex-col items-center gap-5">
                            <div className="flex flex-row items-center gap-[5px]">
                                <GiAbstract080 className="text-gray-600 text-b-14-14-500" />
                                <span className="text-gray-600 text-b-14-14-500">KeenThemes</span>
                            </div>
                            <div className="flex flex-row items-center gap-[5px]">
                                <SlLocationPin className="text-gray-600 text-b-14-14-500" />
                                <span className="text-gray-600 text-b-14-14-500">SF, Bay Area</span>
                            </div>
                            <div className="flex flex-row items-center gap-[5px]">
                                <CiMail className="text-gray-600 text-b-14-14-500" />
                                <Link to={location} className="text-gray-600 text-b-14-14-500 hover:text-primary text-animation">
                                    jenny@kteam.com
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* Sub menu */}
                    <Menu />
                    <div className="grid grid-cols-1 xl:grid-cols-3 gap-[30px] p-4 max-h-[600px] overflow-y-scroll custom-scroll">
                        <div className="xl:col-span-1 flex flex-col gap-[30px]">
                            {/* {Community Badge} */}
                            <Badges title='Community Badges' />
                            {/* {About} */}
                            <Card
                                dotStatus={false}
                                buttonStatus={false}
                                title={"About"}
                                content={<>
                                    <div className="flex-col flex gap-5 pt-[30px]">
                                        <div className="flex flex-row gap-4 pl-[30px] pb-[30px] pr-[50px]">
                                            <div className="flex flex-col  gap-5">
                                                <span className='text-gray-600 text-b-14-14-400'>Age:</span>
                                                <span className='text-gray-600 text-b-14-14-400'>City:</span>
                                                <span className='text-gray-600 text-b-14-14-400'>State:</span>
                                                <span className='text-gray-600 text-b-14-14-400'>Country:</span>
                                                <span className='text-gray-600 text-b-14-14-400'>Postcode:</span>
                                                <span className='text-gray-600 text-b-14-14-400'>Phone:</span>
                                                <span className='text-gray-600 text-b-14-14-400'>Email:</span>
                                            </div>
                                            <div className="flex flex-col  gap-5">
                                                <span className='text-b-14-14-400 text-gray-900'>32</span>
                                                <span className='text-b-14-14-400 text-gray-900'>Amsterdam</span>
                                                <span className='text-b-14-14-400 text-gray-900'>North Holland</span>
                                                <span className='text-b-14-14-400 text-gray-900'>Netherlands</span>
                                                <span className='text-b-14-14-400 text-gray-900'>1092 NL</span>
                                                <span className='text-b-14-14-400 text-gray-900'>+31 6 1234 56 78</span>
                                                <Link to={location} className='text-b-14-14-400 text-gray-900 hover:text-primary text-animation'>jenny@ktstudio.com</Link>
                                            </div>
                                        </div>

                                    </div>
                                </>}
                            />
                            {/* {Work experience} */}
                            <Card
                                title={"Work Experience"}
                                dotStatus={false}
                                buttonStatus={true}
                                buttonTitle='Open to Work'
                                content={
                                    <>
                                        <div className="flex-col flex gap-5">
                                            <div className="flex flex-col gap-5 p-[30px]">
                                                <div className="flex flex-row items-start gap-[14px]">
                                                    <img src={Jira} alt="" />
                                                    <div className="flex flex-col gap-[7px]">
                                                        <Link to={location} className='text-b-14-14-500 text-primary'>Esprito Studios</Link>
                                                        <span className='text-b-14-14-500 text-gray-900'>Senior Project Manager</span>
                                                        <span className='text-b-12-12-400 text-gray-700'>2019 - Present</span>
                                                    </div>
                                                </div>
                                                <span className='text-b-14-14-500 text-gray-600'>Previous Jobs</span>
                                                <div className="flex flex-row items-start gap-[14px]">
                                                    <img src={Pesto} alt="" />
                                                    <div className="flex flex-col gap-[7px]">
                                                        <Link to={location} className='text-b-14-14-500 text-primary'>Previous Jobs</Link>
                                                        <span className='text-b-14-14-500 text-gray-900'>CRM Product Lead </span>
                                                        <span className='text-b-12-12-400 text-gray-700'>2012 - 2019</span>
                                                    </div>
                                                </div>
                                                <div className="flex flex-row items-start gap-[14px]">
                                                    <img src={Perrier} alt="" />
                                                    <div className="flex flex-col gap-[7px]">
                                                        <Link to={location} className='text-b-14-14-500 text-primary'>Perrier Technologies</Link>
                                                        <span className='text-b-14-14-500 text-gray-900'>UX Research</span>
                                                        <span className='text-b-12-12-400 text-gray-700'>2010 - 2012</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                }
                            />
                        </div>

                        <div className="lg:col-span-2 flex flex-col gap-[30px]">



                            <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
                                {/* {Contributors} */}

                                <Card
                                    dotStatus={true}
                                    buttonStatus={true}
                                    title='Contributors'
                                    buttonTitle='All Contributors'
                                    content={<Contributors />}
                                />
                                {/* {Assistance} */}
                                <Card
                                    title='Assistance'
                                    buttonStatus={false}
                                    dotStatus={true}
                                    content={<DonutChart />}
                                />
                            </div>
                            {/* {Projects} */}
                            <ProjectTable />
                        </div>
                    </div>
                </div>
            </ModalContent>
        </div>
    );
};

export default Modal;
