"use client";
import React, { useState, useEffect } from "react";
import { Facebook, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const TopofNavbar = () => {
  const { t } = useTranslation()
  return (
    <ul className=" flex gap-3 bg-[#084a79] w-full items-center justify-end pr-[8%] h-8">
      <li>
        <p className="text-white text-xs">
         {t('call_us_now')} :
          <a href="tel:+201066506004"> +201066506004</a>
        </p>
      </li>
      <li>
        <a href="mailto:info@armana-pharma.com" className="h-full hover:">
          <Mail size={"18px"} color="white" />
        </a>
      </li>
    </ul>
  );
};

export default TopofNavbar;
