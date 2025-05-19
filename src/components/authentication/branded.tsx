import { Link } from "react-router"
import Card from "../card/card"
import MetronicIcon from "../../assets/icon/M-logo.svg"
import ConnectionsCard from '../../assets/icon/connections.svg'
import GitlabCard from '../../assets/icon/gitlabCard.svg'
import AppearanceCard from '../../assets/icon/appearanceCard.svg'
import IntegrationsCard from '../../assets/icon/integrationsCard.svg'
import BrandingCard from '../../assets/icon/brandingCard.svg'

const Branded = () => {
    return (
        <Card
            dotStatus={false}
            buttonStatus={false}
            content={
                <>
                    <div className="flex flex-col gap-[30px] pt-[30px] overflow-hidden bg-branded-bg dark:bg-branded-dark dark:bg-cover bg-contain dark:min-h-[860px]">
                        <div className="flex flex-col gap-5 px-[30px]">
                            <Link to={"/"}>
                                <img src={MetronicIcon} alt="m" className="size-10" />
                            </Link>

                            <h3 className="text-h-24-24-600 text-gray-900">Secure Access Portal</h3>
                            <p className="text-gray-700">A robust authentication gateway ensuring secure <b className="text-gray-900">efficient user access</b> to the Metronic Dashboard interface.</p>
                        </div>
                        <div className="flex flex-col gap-[30px] dark:hidden ">
                            <div className="md:flex hidden flex-row items-end ">
                                <img src={ConnectionsCard} alt="" />
                                <img src={GitlabCard} alt="" />
                                <img src={AppearanceCard} alt="" />
                            </div>
                            <div className="md:flex hidden flex-row items-end ">
                                <img src={BrandingCard} alt="" />
                                <img src={IntegrationsCard} alt="" />
                            </div>
                        </div>
                    </div>
                </>
            }
        />
    )
}
export default Branded