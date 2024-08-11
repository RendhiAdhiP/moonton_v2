import React, { ReactNode } from "react";

type PropTypes = {
    type?: "button" | "submit" | "reset";
    className?: string;
    variant: "primary" | "warning" | "danger" | "light-outline" | "white-outline";
    processing: boolean;
    children: ReactNode;
};

export default function Button({
    type = "submit",
    className = "",
    variant = "primary",
    processing,
    children,
}: PropTypes) {
    return (
        <button
            type={type}
            className={`rounded-2xl py-[13px] text-center w-full btn-${variant} ${processing ? "opacity-30" : ""
                } ${className}`}
            disabled={processing}
        >
            {children}
        </button>
    );
}
