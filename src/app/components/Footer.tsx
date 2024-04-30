"use client";
import React, { useState } from "react";
import { Facebook, Linkedin, Mail, MailIcon } from "lucide-react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { sendEmail } from "./sendemail";
import { useForm } from "react-hook-form";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { CiMail } from "react-icons/ci";


type FormValues = {
  email: string;
};
const Footer = () => {
  const form = useForm<FormValues>();
  const { t } = useTranslation();
  const { register, handleSubmit, formState, reset } = form;
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { errors } = formState;
  const onSubmit = (data: FormValues) => {
    setIsLoading(true);
    sendEmail(data.email).then(
      (res: false | { status: boolean; data: any }) => {
        setIsLoading(false);
        if (res === false) {
          console.error("Failed to send email");
          setIsSuccess(false);
        } else {
          setIsSuccess(res.status);
          reset();
        }
      }
    );
  };
  return (
    <>
      <div className="bg-[#222222] justify-around min-h-96 py-10 md:py-0 flex items-center">
        <div className="flex md:gap-[5%] justify-between flex-col md:flex-row gap-20 mx-5 lg:justify-around  w-full">
          <div className="flex flex-col justify-center items-center gap-14">
            <img src="/logo_icon.jpg" className="w-[150px] rounded-full" alt="" />
            <ul className="flex gap-5">
              <li className="flex cursor-pointer rounded-lg bg-[#3b5998]  items-center h-12 w-32">
                <Link
                  target="_blank"
                  href={
                    "https://www.facebook.com/profile.php?id=61558577132403"
                  }
                >
                  <div className="bg-black linkicon relative flex items-center justify-center h-12 w-8">
                    <Facebook color="white" size={"18px"} />
                  </div>
                </Link>
                <Link
                  target="_blank"
                  href={
                    "https://www.facebook.com/profile.php?id=61558577132403"
                  }
                  className="text-white text-sm w-full flex justify-center"
                >
                  Facebook
                </Link>{" "}
              </li>
              <Link href="https://wa.me/22671341523" className="flex cursor-pointer rounded-lg bg-[#25D366]  items-center h-12 w-32">
                <div>
                  <div className="bg-black linkicon relative flex items-center justify-center h-12 w-8">
                    <FaWhatsapp color="white" size={"18px"} />
                  </div>
                </div>
                <h3 className="text-white text-sm w-full flex justify-center">
                  Whatsapp
                </h3>{" "}
              </Link>
            </ul>
          </div>
          <form onChange={() => {
            setIsSuccess(false);
          }} onSubmit={handleSubmit(onSubmit)} noValidate className="md:w-1/4">
            <h3 className="text-lg text-white font-medium">
              {t("newsletter")}
            </h3>
            <input
              type="text"
              disabled={isLoading}
              {...register("email", {
                required: {
                  value: true,
                  message: "Email required",
                },
                
           pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  message: "Invalid email format" // Custom error message for pattern validation
                },              })}
              className="p-3 rounded-md w-full"
              placeholder={`${t("email_address")}*`}
            />
            <div className="text-red-500 my-2 text-sm">
              <p>{errors.email?.message}</p>
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full bg-[#3b5998]  p-3 text-sm text-white ${!errors.email?.message && 'mt-2'}`}
            >
              {isSuccess ? t("subscribed") : t("subscribe")}
              
            </button>
          </form>
          <div>
            <div>
              <h3 className="text-lg text-white font-medium">
                {t("business_hours")}
              </h3>
              <div className="flex flex-col gap-1">
                <h3 className="text-sm text-white">
                  {t("monday_to_friday")}
                </h3>
                <p className="text-[#b0b0b0] text-xs">8am to 5pm</p>
                <h3 className="text-sm text-white">
                  {t("saturday_to_sunday")}
                </h3>
                <p className="text-[#b0b0b0] text-xs">{t("closed")}</p>
              </div>
              <div className="flex flex-col gap-1 mt-14">
                <h3 className="text-sm text-white">{t("contactinfo")}</h3>
                <a href="mailto:info@armana-pharma.com" className="text-sm text-white flex gap-1 items-center"><CiMail size={'16px'} />info@armana-pharma.com</a>
                <a href="tel:+201066506004" className="text-[#b0b0b0] text-xs my-1 flex gap-1 items-center"><FaPhoneAlt size={'14px'} />+20 1066506004</a>
                <a href="https://wa.me/22671341523" className="text-[#b0b0b0] text-xs flex gap-1 items-center"><FaWhatsapp size={'16px'} />+226 71 34 15 23</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <ul className=" flex gap-3 bg-white text-black w-full items-center justify-between pr-[5%] h-8">
          <li>
            <p className="text-black text-xs ml-5 md:ml-20">
              <a href="#">{t("developed_by")}</a>
            </p>
          </li>
          <li className="flex gap-3">
            <a
              href="https://www.linkedin.com/in/abdallh-elzayat-924a00259/"
              target="_blank"
              className="h-full "
            >
              <Linkedin size={"14px"} color="black" fill="black" />
            </a>
            <a
              href="mailto:abdallhelzayat.dev@gmail.com"
              target="_blank"
              className="h-full"
            >
              <Mail size={"16px"} color="black" />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Footer;
