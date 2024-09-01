import Input from "@/Components/TextInput";
import { Link } from "@inertiajs/react";
import React from "react";

type Props = {
    auth: any
}


const Topbar: React.FC<Props> = ({ auth }) => {
    // console.log(auth)
    return (
        <div className="flex justify-between items-center">
            <input
                type="text"
                className="top-search bg-[url('/icons/ic_search.svg')] bg-no-repeat pl-10 py-2 border border-gray-300 rounded"
                placeholder="Search movie, cast, genre"
            />
            <div className="flex items-center gap-4">
                <span className="text-black text-sm font-medium">{auth.name}</span>
                <div className="collapsible-dropdown flex flex-col gap-2 relative">
                    <div
                        className="outline outline-2 outline-gray-2 p-[5px] rounded-full w-[60px] dropdown-button"
                        data-target="#dropdown-button" id="dropdown-button">
                        <img src="/images/avatar.png" className="rounded-full object-cover w-full" alt="" />
                    </div>
                    <div className="bg-white rounded-2xl text-black font-medium flex flex-col gap-1 absolute z-[999] right-0 top-[80px] min-w-[180px] hidden overflow-hidden"
                        id="dropdown-target">
                        <a href="#!" className="transition-all hover:bg-sky-100 p-4">Dashboard</a>
                        <a href="#!" className="transition-all hover:bg-sky-100 p-4">Settings</a>
                        <Link href={route('logout')} method="post" className="transition-all hover:bg-sky-100 p-4">Sign Out</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar