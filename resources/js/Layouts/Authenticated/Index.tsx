import React from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import Featured from "./Featured";

type Props = {
    auth: any
    children: React.ReactNode
}

const Authenticated: React.FC<Props> = ({ auth ,children }) => {
    return (
        <>
            <div className="mx-auto max-w-screen hidden lg:block">
                {/* Sidebar */}
                <Sidebar/>
                {/* End Sidebar */}

                {/* Content */}
                <div className="ml-[300px] px-[50px]">
                    <div className="py-10 flex flex-col gap-[50px]">
                        {/* Top Bar */}
                              <Topbar auth={auth}/>
                        {/* End Top Bar */}
                        {/* End Fetured */}
                        <main>{children}</main>
                    </div>
                </div>

                {/* End Content */}
            </div>
            <div className="mx-auto px-4 w-full h-screen lg:hidden flex bg-black">
                <div className="text-white text-2xl text-center leading-snug font-medium my-auto">
                    Sorry, this page only supported on 1024px screen or above
                </div>
            </div>

            
        </>
    )
}


export default Authenticated