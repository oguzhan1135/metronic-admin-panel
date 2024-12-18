import MetronicLogo from '../../../src/assets/icon/metronic-logo.svg'
import Dashboard_Icon from '../../assets/icon/dashboard.svg'

const Sidebar = () => {
    return (
        <div className="flex flex-col w-70">
            <div className="px-[30px] py-[30px]">
                <img src={MetronicLogo} alt="Metronic-Logo" />
            </div>
            <div className="flex flex-col gap-2 px-6.5">
                {/* Başlık */}
                <div className="flex flex-row justify-between items-center py-3">
                    <div className="flex flex-row gap-2.5 items-center">
                        <img src={Dashboard_Icon} alt="dashboard-icon" />
                        <span className="text-gray-700 font-medium text-b-14-14-600">Dashboards</span>
                    </div>
                    <span className="w-[10px] bg-gray-400 h-[1px]"></span>
                </div>

                {/* Aktif Menü (Light Sidebar) */}
                <div className="flex items-center gap-4 bg-gray-100 rounded-md pl-3 py-2 relative z-10">
                    <span className="w-[6px] h-[6px] rounded-full bg-blue-500 ml-[-4px]"></span>
                    <span className='absolute w-[1px] h-[38px] left-[10.5px] z-[-1] bg-gray-400'></span>
                    <span className="text-blue-500 font-medium text-sm">Light Sidebar</span>
                </div>

                {/* Diğer Menü Öğeleri */}
                <div className="flex items-center gap-2.5 pl-5 py-2">
                    <span className="text-gray-700 font-medium text-sm">Dark Sidebar</span>
                </div>

                <div className="flex items-center gap-2.5 pl-5 py-2">
                    <span className="text-gray-700 font-medium text-sm">Empty Dashboard</span>
                </div>
            </div>


        </div>
    );
}

export default Sidebar;