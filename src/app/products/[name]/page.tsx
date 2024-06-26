"use client";
import Footer from "@/app/components/Footer";
import GallerySwiper from "@/app/components/GallerySwiper";
import { data } from "@/data";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const page = ({ params }: { params: { name: string } }) => {
  const { i18n, t } = useTranslation();
  const product = data.filter((product) => product.id == params.name);
  const currentLanguage = i18n.language === "English" ? "en" : "fr";
                      
  return (
    <div>
      <div
        className={` header  relative ${
          product[0].banner ? "bg-black h-fit" : "bg-white h-[350px]"
        }`}
      >
        {product[0].banner ? (
          <img
            src={`/${product[0].banner}`}
            className=" w-full h-fit max-h-[500px] object-cover object-center"
            alt=""
          />
        ) : (
          <>
            <div className="w-full h-full bg-opacity-60 bg-[#084a79]"></div>
            <h1 className="w-full absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] text-center text-white text-3xl md:text-5xl">
              <p className="drop-shadow-md">
                {" "}
                {product[0].name[currentLanguage]}
              </p>
            </h1>
          </>
        )}
      </div>

      <div
        className="product flex md:flex-row flex-col justify-between max-w-full mx-auto md:h-[600px] min-h-[600px]"
        style={{
          background:
            product[0].color || "linear-gradient(to right,#ffffff,#b2f0e6)",
        }}
      >
        <div className="left w-full min-h-full p-3 md:w-[75%] my-5 md:p-10 md:my-0">
          <div>
            <div>
              <h1
                className={`text-2xl md:text-3xl my-4 font-semibold ${
                  product[0].styles ? `text-${product[0].styles}` : "text-black"
                }`}
              >
                {product[0].name[currentLanguage]}
              </h1>
              <div className="flex w-full min-h-fit py-5 mt-10 mx-auto items-center flex-col md:flex-row">
                <div className="flex items-start gap-4">
                  <div className="flex">
                    <div
                      className={` self-stretch ${
                        product[0].styles
                          ? `bg-${product[0].styles}`
                          : "bg-black"
                      }`}
                      style={{ width: "6px" }}
                    ></div>
                    <p
                      className={`text-lg md:text-xl md:w-[80%] min-h-fit font-semibold ml-4 ${
                        product[0].styles
                          ? `text-${product[0].styles}`
                          : "text-black"
                      }`}
                    >
                      {product[0].desc[currentLanguage]}

                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right flex flex-col justify-center items-center gap-5 min-h-full py-10 w-full md:w-[25%]">
          <div className="max-w-full flex gap-[2px] p-2">
            <GallerySwiper
              images={
                Array.isArray(product[0].img)
                  ? product[0].img
                  : [product[0].img]
              }
            />
          </div>

          <Link
            href={"/contact"}
            className="bg-black text-white p-4 px-8 rounded-full"
          >
            {t("call_us_now")}
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default page;
