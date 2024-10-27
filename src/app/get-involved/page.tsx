import { Donations } from "@/sections/Donations";
import Internships from "@/sections/Internships";
import Partnerships from "@/sections/Partnerships";

export default function GetInvolved() {
    return <div>
        <Internships />
        <Partnerships />
        <Donations />
    </div>
}