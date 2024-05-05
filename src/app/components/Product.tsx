'use client'
import { data } from "@/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

const Product = ({ imgSrc, href }: { imgSrc: string; href: string }) => {
  const {t, i18n} = useTranslation()
   const product = data.filter((product) => product.id == href);
    const currentLanguage = i18n.language === "English" ? "en" : "fr";
  return (
    <Link
      href={`products/${href}`}
      className="product relative cursor-pointer justify-center flex flex-col items-center w-[330px] h-[500px]"
      style={{ boxShadow: "0 0 4px 0px #105e96" }}
    >
      <div className="w-full h-full bg-black">
      <img
        loading="lazy"
        src={`/${imgSrc}`}
        alt={href}
        className="w-full h-full object-cover"
        />
      </div>
      <Link href={`products/${href}`} className="bg-[#307bc4] absolute text-white  top-[-18px] text-center w-1/2 p-1">{t('more_details')}</Link>
      <Link href={`products/${href}`} style={{
        borderRadius: '5px 5px 0 0'
      }} className="bg-[#307bc4] absolute text-white bottom-0  text-center w-fit p-2">{product[0].name[currentLanguage]}</Link>

    </Link>
  );
};

export default Product;
