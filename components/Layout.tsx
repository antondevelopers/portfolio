import React, { ReactNode } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import discord from "/assets/svg/discord.svg";
import instagram from "/assets/svg/instagram.svg";
import linkedin from "/assets/svg/linkedin.svg";
import github from "/assets/svg/github.svg";

type Props = {
    children?: ReactNode;
    title?: string;
    className?: string;
};

const Layout = ({ children, title = "This is the default title", className}: Props) => ( 
    <div className={className}>
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8" />
            <meta
                name="viewport"
                content="initial-scale=1.0, width=device-width"
            />
        </Head>
        <header className="absolute left-0 right-0 overflow-hidden">
            <nav className="flex justify-center lg:justify-between xl:px-16 lg:px-12 h-12 font-poppins items-center py-4 text-antonTextWhite  font-extralight">
                <div className="hidden lg:flex text-xl xl:text-2xl py-4">ANTON DEVS</div>
                <div className="h-full flex gap-4 lg:gap-12 justify-between lg:justify-end items-center lg:tracking-[6px] lg:font-normal [text-shadow:_1px_2px_0_rgb(0_0_0_/_40%)]">
                    <div
                        className=" lg:text-xl cursor-pointer"
                        onClick={() =>
                            document
                                .getElementById("tecnologias")
                                .scrollIntoView({
                                    behavior: "smooth",
                                    block: "center",
                                    inline: "nearest",
                                })
                        }
                    >
                        Tecnologias
                    </div>
                    <div className="h-full bg-white w-[1px]  " />
                    <div
                        className=" lg:text-xl cursor-pointer "
                        onClick={() =>
                            document
                                .getElementById("sobre-nos")
                                .scrollIntoView({
                                    behavior: "smooth",
                                    block: "start",
                                    inline: "nearest",
                                })
                        }
                    >
                        Sobre Nos
                    </div>
                    <div className="h-full bg-white w-[1px]  " />
                    <div
                        className="lg:text-xl cursor-pointer"
                        onClick={() =>
                            document.getElementById("contato").scrollIntoView({
                                behavior: "smooth",
                                block: "center",
                                inline: "nearest",
                            })
                        }
                    >
                        Fale Conosco
                    </div>
                </div>
            </nav>
        </header>
        {children}
        <footer className="flex flex-col w-full justify-center items-center">
            <div className="flex justify-center bg-antonSecondary text-antonTextWhite text-xl tracking-widest font-poppins w-full py-4 mb-10 ">antondevelopers@gmail.com</div>
            <div className="flex w-full justify-center">
                <Link href={""}>
                    <Image
                        src={discord}
                        className="p-2"
                        alt="Figura de Fundo Laranja"
                        width={60}
                        height={60}
                    />
                </Link>
                <Link href={"https://github.com/antondevelopers/portfolio"}>
                    <Image
                        src={github}
                        className="p-2"
                        alt="Figura de Fundo Laranja"
                        width={60}
                        height={60}
                    />
                </Link>
                <Link href={"https://www.linkedin.com/in/gabrielmunck/"}>
                    <Image
                        src={linkedin}
                        className="p-2"
                        alt="Figura de Fundo Laranja"
                        width={60}
                        height={60}
                    />
                </Link>
                <Link href={""}>
                    <Image
                        src={instagram}
                        className="p-2 mb-16"
                        alt="Figura de Fundo Laranja"
                        width={60}
                        height={60}
                    />
                </Link>
            </div>
            <span className="font-poppins text-sm pb-10">© 2024 Anton Developers. All rights reserved.</span>
        </footer>
    </div>
);

export default Layout;
