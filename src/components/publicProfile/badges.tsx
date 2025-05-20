import BadgeOne from '@assets/badge-1.svg'
import BadgeTwo from '@assets/badge-2.svg'
import BadgeThree from '@assets/badge-3.svg'
import BadgeFour from '@assets/badge-4.svg'
import BadgeOneDark from '@assets/badge-1-dark.svg'
import BadgeTwoDark from '@assets/badge-2-dark.svg'
import BadgeThreeDark from '@assets/badge-3-dark.svg'
import BadgeFourDark from '@assets/badge-4-dark.svg'
import Card from '@components/card/card'

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
                <div className="flex-col dark:bg-coal-300 flex gap-5">
                    <div className="flex flex-row items-center justify-start gap-[14px] flex-wrap px-[30px] py-5">
                        <img src={BadgeOne} alt="badge-1-light" className='dark:hidden' />
                        <img src={BadgeTwo} alt="badge-2-light" className='dark:hidden' />
                        <img src={BadgeThree} alt="badge-3-light" className='dark:hidden' />
                        <img src={BadgeFour} alt="badge-4-light" className='dark:hidden' />
                        <img src={BadgeOneDark} alt="badge-1-dark" className='dark:flex hidden' />
                        <img src={BadgeTwoDark} alt="badge-2-dark" className='dark:flex hidden' />
                        <img src={BadgeThreeDark} alt="badge-3-dark" className='dark:flex hidden' />
                        <img src={BadgeFourDark} alt="badge-4-dark" className='dark:flex hidden' />
                    </div>
                </div>
            }
        />
    )
}
export default Badges;