"use client";
import { useTranslation } from "react-i18next";
import Footer from "../components/Footer";
import Product from "../components/Product";
import { data as products } from "@/data";
import { Reveal } from "@/lib/Reveal";

const page = () => {
  const { t } = useTranslation();
  return (
    <div>
      {" "}
      <div className="header relative">
        <div className="overlay w-full absolute left-0 top-0 h-full bg-opacity-60 bg-[#084a79]"></div>
        <div className="w-full h-[300px] xl:h-auto md:hidden">
          <img
            src="/ourproducts.png"
            alt="Our Products"
            className="h-full object-cover object-right"
          />
        </div>{" "}
        <div className="w-full hidden md:block min-h-fit xl:h-[450px] our-products-background"></div>
        <h1 className="w-full absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] text-center text-white text-3xl md:text-5xl">
          {t("our_products")}
        </h1>
      </div>
      <div className="py-20">
        <div className="header text-4xl text-center">{t("skin_care")}</div>
        <div className="products md:w-[80%] mx-auto flex-wrap gap-10 mt-14 flex flex-col items-center md:flex-row justify-center">
          {products.map((product) => (
            <Reveal>
              <Product
                imgSrc={product.img[0]}
                href={product.id}
                key={product.id}
              />
            </Reveal>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
