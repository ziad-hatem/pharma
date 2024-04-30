"use client";
import React from "react";
import { useTranslation } from "react-i18next";

const Pharmaceutical = () => {
  const { t } = useTranslation();
  return (
    <div className="py-10">
      <h1 className="text-4xl text-center">{t("pharmaceutical")}</h1>

      <div className="mt-10 w-[90%] mx-auto">
        <div className="flex w-full min-h-[300px] mt-10 mx-auto items-center flex-col md:flex-row">
          <div className="flex items-start gap-4">
            <div className="flex">
              <div
                className="bg-black self-stretch"
                style={{ width: "6px" }}
              ></div>
              <p className="text-xl min-h-fit font-semibold ml-4">
                {t("armana_industry_description")}
              </p>
            </div>
          </div>
          <img
            loading="lazy"
            src="/pharma.png"
            alt=""
            className="mr-10 max-w-[200px]"
          />
        </div>
        <div className="flex w-full min-h-[300px] mt-10 mx-auto items-center flex-col md:flex-row">
          <img
            loading="lazy"
            src="/pepole.png"
            alt=""
            className="mr-10 max-w-[200px]"
          />
          <div className="flex items-start gap-4">
            <div className="flex">
              <div
                className="bg-black self-stretch"
                style={{ width: "6px" }}
              ></div>
              <p className="text-xl min-h-fit font-semibold ml-4">
                {t("armana_description")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pharmaceutical;
