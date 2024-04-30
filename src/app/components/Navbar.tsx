"use client";
import React, { useEffect, useState } from "react";
import { Facebook, Linkedin, Menu, XIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollingUp, setScrollingUp] = useState(false);
  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };
  useEffect(() => {
    const handleScroll = () => {
      setScrollingUp(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="flex flex-col max-w-full transition-all">
      <div
        className={`bg-white max-w-full flex justify-around items-center w-full transition-all h-20 ${
          scrollingUp ? "fixed top-0 h-12 z-[999]" : "relative z-50"
        }`}
      >
        <Link href="/">
          <Image
            alt="logo"
            src={"/logo_icon.jpg"}
            width={100}
            height={100}
            className={`rounded-full ${
              scrollingUp
                ? "w-[50px] mr-10 transition-all"
                : "w-[70px] transition-all"
            }`}
          />
        </Link>
        <div className="md:hidden flex gap-5">
                  <div>
            <Select onValueChange={(e: any) => changeLanguage(e)}>
              <SelectTrigger className="w-[100px]">
                <SelectValue placeholder={`${i18n.language != undefined ? i18n.language : "Loading..."}`} />
              </SelectTrigger>
              <SelectContent className="relative z-[999] ring-offset-transparent border-none outline-none">
                <SelectGroup>
                  <SelectItem value="English">English</SelectItem>
                  <SelectItem value="French">French</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <XIcon className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
        <ul
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } absolute md:h-full h-[300px] max-w-full flex-col bg-white z-[999] top-full left-0 w-full md:w-fit md:static md:flex md:flex-row md:gap-5 text-[#073e63] items-center md:items-center`}
        >
          <li className="h-full flex items-center border-[2px] border-transparent hover:border-b-[#073e63]">
            <Link
              href="/"
              className=""
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              
               {t('home')}
            </Link>
          </li>
          <li className="hidden md:block">|</li>
          <li className="h-full flex items-center border-[2px] border-transparent hover:border-b-[#073e63]">
            <Link
              href="/about"
              className=""
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
               {t('about')}
            </Link>
          </li>
          <li className="hidden md:block">|</li>
          <li className="h-full flex items-center border-[2px] border-transparent hover:border-b-[#073e63]">
            <Link
              href="/products"
              className=""
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
               {t('products')}
            </Link>
          </li>
          <li className="hidden md:block">|</li>
          <li className="h-full flex items-center border-[2px] border-transparent hover:border-b-[#073e63]">
            <Link
              href="/contact"
              className=""
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {t('contact')}
            </Link>
          </li>
          <li className="hidden md:block">|</li>
          <li className="hidden md:block">
            <Select onValueChange={(e: any) => changeLanguage(e)}>
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder={`${i18n.language != undefined ? i18n.language : "Loading..."}`} />
              </SelectTrigger>
              <SelectContent className="relative z-[999] ring-offset-transparent border-none">
                <SelectGroup>
                  <SelectItem value="English">English</SelectItem>
                  <SelectItem value="French">French</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
