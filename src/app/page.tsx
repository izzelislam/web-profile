'use client'

import { Spotlight } from "@/components/ui/Spotlight";
import NavbarSection from "./_parts/navbar";
import WorkSection from "./_parts/work";
import EducationSection from "./_parts/education";
import TechSection from "./_parts/texh";
import ContactSection from "./_parts/contac";
import ProfileSection from "./_parts/profile";
import PortofolioSection from "./_parts/portofolio-section";




export default function Home() {



  return (
   <>
    <div className="min-h-[28rem] py-10 md:py-20 w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex flex-col ">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">
      </div>
      <Spotlight/>
      
      <NavbarSection/>

      <ProfileSection/>

      <ContactSection/>
    </div>

    <WorkSection/>

    <EducationSection/>

    <TechSection/>

    <PortofolioSection/>
   </>
  );
}
