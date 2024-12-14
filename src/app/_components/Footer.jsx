import { Copyright } from "lucide-react"

export default function Footer() {
    return (
        <div className="bg-[#efb67e] py-6 rounded-lg">
            <p className="text-primary font-semibold flex items-center justify-center gap-2">
                <Copyright className="w-5 h-5 inline-block" /> 2024. All rights reserved.
            </p>
        </div>
    )
}