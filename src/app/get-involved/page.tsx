import { Donations } from "@/components/get-involved/Donations";
import Internships from "@/components/get-involved/Internships";
import Partnerships from "@/components/get-involved/Partnerships";

export default function GetInvolved() {
    return <div>
        <Internships />
        <Partnerships />
        <Donations />
    </div>
}