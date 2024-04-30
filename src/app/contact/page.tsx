"use client";
import React from "react";
import Footer from "../components/Footer";
import { Phone } from "lucide-react";
import { useTranslation } from "react-i18next";
import Image from "next/image";

const page = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="flex md:flex-row mt-10  flex-col md:m-10 w-full md:w-[90%] gap-10">
        <div className="left px-5 w-full md:w-1/2">
          <h1 className="text-3xl mb-5">{t("find_us_here")}</h1>

          <div className="contacts">
            <ul className="flex flex-wrap gap-5 mt-10">
              <li className="flex items-center justify-center gap-4 md:w-[45%]">
                <Image
                  src="/icon_1.svg"
                  width={50}
                  height={50}
                  alt=""
                />
                <div className="info">
                  <p className="text-lg md:text-xl font-bold">{t("phone")}</p>
                  <p className="text-lg md:text-xl">Burkina Faso : +226 71 34 15 23</p>
                  <p className="text-lg md:text-xl">Egypt : +20 1066506004</p>
                </div>
              </li>
              <li className="flex items-center justify-center gap-4 md:w-[45%]">
                <Image
                  src="/whatsApp1.svg"
                  width={50}
                  height={50}
                  alt=""
                />
                <div className="info">
                  <p className="text-lg md:text-xl font-bold">
                    {t("whatsapp")}
                  </p>
                  <p className="text-lg md:text-xl">
                    {t("burkina_faso")} : +226 71 34 15 23
                  </p>
                  <p className="text-lg md:text-xl">
                    {t("egypt")} : +20 1117873445
                  </p>
                </div>
              </li>
              <li className="flex items-center justify-center gap-4 md:w-[45%]">
                <Image
                  src="/icon_2.svg"
                  width={50}
                  height={50}
                  alt=""
                />
                <div className="info w-fit">
                  <p className="text-2xl font-bold">Email</p>
                  <a className="text-xl" href="emailto:info@armana-pharma.com">
                    info@armana-pharma.com
                  </a>
                </div>
              </li>
              <li className="flex items-center justify-center gap-4 md:w-[45%]">
                <Image
                  src="/icon_3.svg"
                  width={50}
                  height={50}
                  alt=""
                />
                <div className="info">
                  <p className="text-2xl font-bold">{t("location")}</p>
                  <p className="text-xl">{t("location_egypt")}</p>
                  <p className="text-sm">{t("location_burkina_faso")}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mapouter my-10">
        <div className="gmap_canvas">
          <iframe
            width={600}
            height={500}
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=Ouagadougou, Burkina Faso&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameBorder={0}
            scrolling="no"
            marginHeight={0}
            marginWidth={0}
            className="w-[90%] mx-auto"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default page;
