"use client";
import React from "react";
import Footer from "../components/Footer";
import {
  Accessibility,
  Book,
  Check,
  Globe,
  Lightbulb,
  Recycle,
  ShieldCheck,
  Sun,
  TrendingUp,
  Users,
} from "lucide-react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import EventSwiper from "../components/EventSwiper";
import { Reveal } from "@/lib/Reveal";
const page = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="header relative">
        <img
          src="/aboutus.png"
          alt=""
          className="w-full h-[400px] object-cover flex items-center"
        />
        <div className="overlay w-full absolute left-0 top-0 h-[400px] bg-black"></div>
        <h1 className="w-full absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] text-center text-white text-3xl md:text-5xl">
          {t("about_our_company")}
        </h1>
      </div>
      <div className="w-full flex max-w-full justify-around items-center py-20">
        <div className="flex mt-10 gap-5 flex-col md:flex-row">
          <div className="w-full md:w-1/3 max-w-[90%] mx-auto min-h-[300px] p-6 flex flex-col justify-center items-center bg-[#094978]">
            <div className="header text-center text-white mb-3 text-3xl">
              {t("vision_heading")}
            </div>
            <p className="text-sm md:text-xl text-center text-white font-medium">
              {t("vision_description")}
            </p>
          </div>
          <div className="w-full md:w-1/3  max-w-[90%] mx-auto min-h-[300px] p-6 flex flex-col justify-center items-center bg-[#094978]">
            <div className="header text-center text-white mb-3 text-3xl">
              {t("mission_heading")}
            </div>
            <p className="text-sm md:text-xl text-center text-white font-medium">
              {t("mission_description")}
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="event my-5 md:w-[80%] mx-auto">
          <h1 className="w-full text-center text-black text-3xl mb-8 md:text-5xl">
            Our Events
          </h1>
          <EventSwiper />
        </div>
        <div
          className="p-10 min-h-[45vh]"
          style={{
            background: 'url("/ourvalues.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
          }}
        >
          <h1 className="w-full text-center text-black text-3xl md:text-5xl">
            {t("ourvalues")}
          </h1>
          <div className="min-h-full min-w-full gap-20 flex flex-wrap justify-center md:flex-row md:justify-evenly mt-20">
            <Reveal>
              <div className="bg-white shadow-lg rounded-md relative flex p-5 flex-col items-center h-fit min-w-[250px] max-w-[300px]">
                <div className="w-full absolute -top-5">
                  <div className="bg-[#084a79] mx-auto flex justify-center items-center rounded-full w-11 h-11">
                    <Accessibility color="white" />
                  </div>
                </div>
                <p className="w-[150px]  text-[13px] h-auto text-center text-black p-1">
                  <h1 className="text-lg my-4">{t("inclusivity_heading")}</h1>
                  {t("inclusivity_description")}
                </p>
              </div>
            </Reveal>
            <Reveal>
              <div className="bg-white shadow-lg rounded-md relative flex p-5 flex-col items-center h-fit min-w-[250px] max-w-[300px]">
                <div className="w-full absolute -top-5">
                  <div className="bg-[#084a79] mx-auto flex justify-center items-center rounded-full w-11 h-11">
                    <Book color="white" />
                  </div>
                </div>
                <p className="w-[150px] text-[13px] text-center text-black p-1">
                  <h1 className="text-lg my-4">{t("education_heading")}</h1>
                  {t("education_description")}
                </p>
              </div>
            </Reveal>
            <Reveal>
              <div className="bg-white shadow-lg rounded-md relative flex p-5 flex-col items-center h-fit min-w-[250px] max-w-[300px]">
                <div className="w-full absolute -top-5">
                  <div className="bg-[#084a79] mx-auto flex justify-center items-center rounded-full w-11 h-11">
                    <Recycle color="white" />
                  </div>
                </div>
                <p className="w-[150px] text-[13px] text-center text-black p-1">
                  <h1 className="text-lg my-4">
                    {t("sustainability_heading")}
                  </h1>
                  {t("sustainability_description")}
                </p>
              </div>
            </Reveal>
            <Reveal>
              <div className="bg-white shadow-lg rounded-md relative flex p-5 flex-col items-center h-fit min-w-[250px] max-w-[300px]">
                <div className="w-full absolute -top-5">
                  <div className="bg-[#084a79] mx-auto flex justify-center items-center rounded-full w-11 h-11">
                    <Globe color="white" />
                  </div>
                </div>
                <p className="w-[150px] text-[13px] text-center text-black p-1">
                  <h1 className="text-lg my-4">
                    {t("cultural_sensitivity_heading")}
                  </h1>
                  {t("cultural_sensitivity_description")}
                </p>
              </div>
            </Reveal>
            <Reveal>
              <div className="bg-white shadow-lg rounded-md relative flex p-5 flex-col items-center h-fit min-w-[250px] max-w-[300px]">
                <div className="w-full absolute -top-5">
                  <div className="bg-[#084a79] mx-auto flex justify-center items-center rounded-full w-11 h-11">
                    <TrendingUp color="white" />
                  </div>
                </div>
                <p className="w-[150px] text-[13px] text-center text-black p-1">
                  <h1 className="text-lg my-4">
                    {t("economic_empowerment_heading")}
                  </h1>
                  {t("economic_empowerment_description")}
                </p>
              </div>
            </Reveal>
          </div>
          <h1 className="w-full text-center text-black text-3xl md:text-5xl mt-10">
            {t("burkinafasochallenges")}
          </h1>
          <div className="min-h-full min-w-full gap-20 flex flex-wrap justify-center md:flex-row md:justify-evenly mt-20">
            <Reveal>
              <div className="bg-white shadow-lg rounded-md relative flex p-5 flex-col items-center h-fit min-w-[250px] max-w-[300px]">
                <div className="w-full absolute -top-5">
                  <div className="bg-[#084a79] mx-auto flex justify-center items-center rounded-full w-11 h-11">
                    <Accessibility color="white" />
                  </div>
                </div>
                <p className="w-[150px]  text-[13px] h-auto text-center text-black p-1">
                  <h1 className="text-lg my-4">{t("accessibility_heading")}</h1>
                  {t("accessibility_description")}
                </p>
              </div>
            </Reveal>
            <Reveal>
              <div className="bg-white shadow-lg rounded-md relative flex p-5 flex-col items-center h-fit min-w-[250px] max-w-[300px]">
                <div className="w-full absolute -top-5">
                  <div className="bg-[#084a79] mx-auto flex justify-center items-center rounded-full w-11 h-11">
                    <Sun color="white" />
                  </div>
                </div>
                <p className="w-[150px] text-[13px] text-center text-black p-1">
                  <h1 className="text-lg my-4">
                    {t("sun_protection_heading")}
                  </h1>
                  {t("sun_protection_description")}
                </p>
              </div>
            </Reveal>
            <Reveal>
              <div className="bg-white shadow-lg rounded-md relative flex p-5 flex-col items-center h-fit min-w-[250px] max-w-[300px]">
                <div className="w-full absolute -top-5">
                  <div className="bg-[#084a79] mx-auto flex justify-center items-center rounded-full w-11 h-11">
                    <Sun color="white" />
                  </div>
                </div>
                <p className="w-[150px] text-[13px] text-center text-black p-1">
                  <h1 className="text-lg my-4">{t("skin_health_heading")}</h1>
                  {t("skin_health_description")}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
