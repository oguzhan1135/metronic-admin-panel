import { Link } from "react-router";
import Card from "../../card/card";
import { useState } from "react";


interface Permission {
    id: number;
    name: string;
    view: boolean;
    modify: boolean;
    publish: boolean;
    configure: boolean;
}

const PermissionCheckTable = () => {

    const [permissions, setPermissions] = useState<Permission[]>(
        [
            {
                id: 1,
                name: "Workspace Settings",
                view: true,
                modify: true,
                publish: true,
                configure: true
            },
            {
                id: 2,
                name: "Billing Management",
                view: true,
                modify: false,
                publish: false,
                configure: false
            },
            {
                id: 3,
                name: "Integration Setup",
                view: true,
                modify: true,
                publish: false,
                configure: false
            },
            {
                id: 4,
                name: "Map Creation",
                view: true,
                modify: true,
                publish: true,
                configure: true
            },
            {
                id: 5,
                name: "Data Export",
                view: true,
                modify: false,
                publish: false,
                configure: false
            },
            {
                id: 6,
                name: "User Roles",
                view: true,
                modify: false,
                publish: false,
                configure: false
            },
            {
                id: 7,
                name: "Security Settings",
                view: true,
                modify: false,
                publish: false,
                configure: false
            },
            {
                id: 8,
                name: "Insights Access",
                view: false,
                modify: false,
                publish: false,
                configure: false
            },
            {
                id: 9,
                name: "Merchant List",
                view: true,
                modify: true,
                publish: false,
                configure: false
            },
        ]
    )
    const handlePermissionChange = (id: number, field: keyof Permission) => {
        setPermissions(prev =>
            prev.map(permission =>
                permission.id === id
                    ? { ...permission, [field]: !permission[field] }
                    : permission
            )
        );
    };
    return (

        <Card
            title={<h3 className="text-b-16-16-600 text-gray-900">Role Permissions for <Link to={location} className="text-primary text-b-16-16-600">Project Manager</Link> </h3>}
            dotContent={
                <>
                    <button className="px-3 py-2.5 flex flex-row items-center rounded-md bg-white text-b-12-12-500 text-gray-800 border gap-1 cursor-pointer">
                        New Permission
                    </button>
                </>
            }
            dotStatus={false}
            dotContentStatus={true}
            buttonStatus={false}
            content={
                <>
                    <div className="flex flex-col overflow-hidden ">
                        <div className="flex flex-col overflow-x-auto">
                            <table className=" border-collapse  min-w-[1000px]">
                                <thead>
                                    <tr className="bg-gray-100 ">
                                        <th className="px-[30px] py-[13px] text-left text-b-13-14-400 text-gray-700">Member</th>
                                        <th className="px-[30px] py-[13px] text-center text-b-13-14-400 text-gray-700 ">View</th>
                                        <th className="px-[30px] py-[13px] text-center text-b-13-14-400 text-gray-700">Modify</th>
                                        <th className="px-[30px] py-[13px] text-center text-b-13-14-400 text-gray-700">Publish</th>
                                        <th className="px-[30px] py-[13px] text-center text-b-13-14-400 text-gray-700">Configure</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        permissions.map((permission) => (
                                            <tr className="border-b">
                                                <td className="py-[26px] px-[30px] text-b-14-14-500 text-gray-900">{permission.name}</td>
                                                <td className="text-center"><input type="checkbox" className="size-[18px]" checked={permission.view} onChange={() => handlePermissionChange(permission.id, 'view')} /></td>
                                                <td className="text-center"><input type="checkbox" className="size-[18px]" checked={permission.modify} onChange={() => handlePermissionChange(permission.id, 'modify')} /></td>
                                                <td className="text-center"><input type="checkbox" className="size-[18px]" checked={permission.publish} onChange={() => handlePermissionChange(permission.id, 'publish')} /></td>
                                                <td className="text-center"><input type="checkbox" className="size-[18px]" checked={permission.configure} onChange={() => handlePermissionChange(permission.id, 'configure')} /></td>
                                            </tr>
                                        ))
                                    }

                                </tbody>

                            </table>

                        </div>
                        <div className="p-[30px] flex flex-row items-center justify-end gap-2.5">
                            <button className="px-4 py-[13px] flex flex-row items-center rounded-md bg-white text-b-12-12-500 text-gray-800 border gap-1 cursor-pointer">
                                Restore Defaults
                            </button>
                            <button className="px-4 py-[13px] flex flex-row items-center rounded-md bg-primary text-b-12-12-500 text-white border gap-1 cursor-pointer">
                                Save Changes
                            </button>
                        </div>
                    </div>
                </>
            }

        />

    )
}
export default PermissionCheckTable