import BadgeOne from '../../assets/icon/badge-1.svg'
import BadgeTwo from '../../assets/icon/badge-2.svg'
import BadgeThree from '../../assets/icon/badge-3.svg'
import BadgeFour from '../../assets/icon/badge-4.svg'
import Card from '../card/card'

interface BadgesProps {
    title: string;
}

const Badges: React.FC<BadgesProps> = ({ title }) => {

    return (
        <Card
            dotStatus={false}
            buttonStatus={false}
            title={title}
            content={
                <div className="flex-col flex gap-5">
                    <div className="flex flex-row items-center justify-start gap-[14px] flex-wrap px-[30px] py-5">
                        <img src={BadgeOne} alt="" />
                        <img src={BadgeTwo} alt="" />
                        <img src={BadgeThree} alt="" />
                        <img src={BadgeFour} alt="" />

                    </div>
                </div>
            }
        />
    )
}
export default Badges;