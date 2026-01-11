import { PatientForm } from "@/components/Forms/PatientForm";
import PasskeyModal from "@/components/PasskeyModal";
import { Link } from "lucide-react";
import Image from "next/image";
export default function Home({ searchParams }: SearchParamProps) {
  const isAdmin = searchParams.admin === "true";
  return (
    <div className="flex h-screen max-h-screen">
      {isAdmin && <PasskeyModal /> }
      <section className=" remove-scrollbar container my-auto">
        <div className="sub container max-w-496">
          <Image
            src="/assets/icons/logo-full.svg"
            height={1000}
            width={1000}
            alt="Patient"
            className="mb-12 h-10 w-fit"   
           />
          <PatientForm />
          <div className="mt-20 flex items-center justify-between text-sm">
            <p className="text-dark-600"> © CarePulse. All rights reserved.</p>
            <Link href="/?admin=true" className="text-green-500">Admin</Link>
          </div>

        </div>
      </section>
      <Image
        src="/assets/images/onboarding-img.png"
        height={900}
        width={1000}
        alt="Patient"
        className="side-img max-w-[50%] hidden md:block object-cover"
      />
    </div>
  )
}
