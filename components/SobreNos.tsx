import Image from "next/image";
import TeamPng from "/assets/png/time.png";

const SobreNos = () => (
    <section id="sobre-nos" className="flex justify-center w-full z-50 mb-40">
        <div className="flex w-full xl:w-[80%] h-[800px] xl:h-[540px] ">
            <div className="hidden lg:flex w-1/2 justify-end xl:pt-[109px] md:pt-[237px] ">
                <p className="font-poppins font-medium tracking-widest [text-shadow:_1px_3px_0_rgb(0_0_0_/_40%)] text-8xl text-antonSecondary pr-2">
                    Sobre
                </p>
            </div>
            <div className="relative w-full h-full">
                <div className="absolute inset-0">
                    <Image
                        src={TeamPng}
                        className="object-cover w-full h-full lg:rounded-2xl drop-shadow-2xl"
                        alt="Simbolo do Framework React"
                    />
                </div>
                <div className="absolute inset-0 flex flex-col justify-center items-center lg:items-start lg:pl-2">
                    <p className="flex lg:hidden w-full justify-center font-poppins font-medium tracking-widest [text-shadow:_1px_3px_0_rgb(0_0_0_/_40%)] text-6xl text-antonTextWhite py-8">
                        Sobre Nos
                    </p>
                    <div className="flex flex-col lg:flex-row w-full h-full lg:items-center">
                        <p className="hidden lg:flex font-poppins font-medium tracking-widest pt-24 lg:pb-80 [text-shadow:_1px_3px_0_rgb(0_0_0_/_40%)] text-8xl text-antonTextWhite">
                            Nós
                        </p>
                        <div className="flex flex-col justify-between w-full h-[80%] p-5 py-30 lg:py-2 lg:pl-20">
                            <p className="text-antonTextWhite font-poppins tracking-wide text-xl font-light text-balance mb-2 lg:mb-6">
                                A nossa equipe de desenvolvedores é altamente
                                apaixonada pelo que faz. Nos destacamos pela:
                            </p>
                            <strong className="text-antonTextWhite font-poppins tracking-widest font-semibold text-xl mb-3 lg:mb-6">
                                - Colaboração
                            </strong>
                            <strong className="text-antonTextWhite font-poppins tracking-widest font-semibold text-xl mb-3 lg:mb-6">
                                - Criatividade
                            </strong>
                            <strong className="text-antonTextWhite font-poppins tracking-widest font-semibold text-lg mb-3 lg:mb-6">
                                - Busca constante pela excelência
                            </strong>
                            <p className="text-antonTextWhite font-poppins tracking-wide font-light text-xl text-balance lg:mb-6">
                                Utilizando ferramentas modernas, como IA e
                                frameworks de última geração, criamos aplicações
                                web robustas e inovadoras, sempre oferecendo
                                experiências excepcionais aos nossos usuários.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);
export default SobreNos;
