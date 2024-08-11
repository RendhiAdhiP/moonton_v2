import React from "react";
import Authenticated from "@/Layouts/Authenticated/Index";
import SubscriptionCard from "@/Components/SubscriptionCard";
const SubscriptionPlan: React.FC = () => {

    return (
        <Authenticated>
            <div className="py-20 flex flex-col items-center">
                <div className="text-black font-semibold text-[26px] mb-3">
                    Pricing for Everyone
                </div>
                <p className="text-base text-gray-1 leading-7 max-w-[302px] text-center">
                    Invest your little money to get a whole new experiences from movies.
                </p>

                <div className="flex justify-center gap-10 mt-[70px]">

                    <SubscriptionCard name="Basic" price={10000} durationInMonth={3} features={['feature 1', 'feature 1', 'feature 1']} />
                    <SubscriptionCard isPremium name="Premium" price={890000} durationInMonth={6} features={['180 subtitles available', 'Unlock 200 awards movies', 'iOS, Android, TV',' Support 24/7 ready', 'Up to 20 users' ]} />

                </div>
            </div>
        </Authenticated>
    )
}

export default SubscriptionPlan