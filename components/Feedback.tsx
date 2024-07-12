const Feedback = () => (
    <div className=" w-full flex flex-col justify-center items-center ">
        <div className="flex mb-44 lg:mx-32 md:w-[500px] lg:w-[900px] z-30">
            <p className="tracking-widest font-poppins text-3xl text-balance font-medium lg:text-6xl flex text-center">
                Confie na Anton Devs para transformar suas ideias em realidade
                digital.
            </p>
        </div>
        <div className="flex justify-center font-poppins text-2xl text-center w-[90%] h-auto mb-20">
            Confira a opniao de nossos clientes: 👇
        </div>
        <div className=" z-50 flex mb-36 lg:mb-52">
            <div className="card w-[344px] md:w-[410px] lg:w-[800px] h-[250px] lg:h-[190px] flex gap-[5px] p-[.4em]">
                <div className="flex-1 h-full overflow-hidden rounded-full cursor-pointer hover:rounded-md lg:mx-1 transition-all duration-300 bg-antonSalmon-darksalmon hover:bg-antonSecondary flex justify-center items-center hover:flex-[8]">
                    <span className="group min-w-[14em] p-[.5em]  text-center hover:text-left hover:p-5 transform -rotate-90 transition-all duration-500 text-antonOrange tracking-[.1em] hover:h-full hover:rotate-0 hover:transition-all hover:duration-1000">
                        <div className=" flex text-antonTextWhite tracking-[.2em] justify-center lg:text-xl">
                            ITALO
                        </div>
                        <div className="hidden group-hover:block hover:w-full h-full text-antonTextWhite">
                            <div className=" font-poppins text-pretty text-center pt-8 pb-20">
                                “Era exatamente o que eu precisava pra alcançar
                                mais clientes”
                            </div>
                        </div>
                    </span>
                </div>
                <div className="h-full flex-1 overflow-hidden rounded-full cursor-pointer hover:rounded-md mx-1 transition-all duration-500 bg-antonSalmon-darksalmon hover:bg-antonSecondary flex justify-center items-center hover:flex-[8]">
                    <span className="group min-w-[14em] p-[.5em]  text-center hover:text-left hover:p-5 transform -rotate-90 transition-all duration-500 text-antonOrange tracking-[.1em] hover:h-full hover:rotate-0 hover:transition-all hover:duration-1000">
                        <div className=" flex text-antonTextWhite tracking-[.2em] justify-center lg:text-xl">
                            ELIEL
                        </div>
                        <div className="hidden group-hover:block hover:w-full h-full text-antonTextWhite">
                            <div className=" font-poppins text-pretty text-center pt-8 pb-20">
                                “Estou impressionado com a qualidade!”
                            </div>
                        </div>
                    </span>
                </div>
                <div className="h-full flex-1 overflow-hidden rounded-full cursor-pointer hover:rounded-md mx-1 transition-all duration-500 bg-antonSalmon-darksalmon hover:bg-antonSecondary flex justify-center items-center hover:flex-[8]">
                    <span className="group min-w-[14em] p-[.5em]  text-center hover:text-left hover:p-5 transform -rotate-90 transition-all duration-500 text-antonOrange tracking-[.1em] hover:h-full hover:rotate-0 hover:transition-all hover:duration-1000">
                        <div className=" flex text-antonTextWhite tracking-[.2em] justify-center lg:text-xl">
                            PAULA
                        </div>
                        <div className="hidden group-hover:block hover:w-full h-full text-antonTextWhite">
                            <div className=" font-poppins text-pretty text-center pt-8 pb-20">
                                “Ótimo custo-benefício. Ficamos muito
                                satisfeitos.”
                            </div>
                        </div>
                    </span>
                </div>
                <div className="h-full flex-1 overflow-hidden rounded-full cursor-pointer hover:rounded-md mx-1 transition-all duration-500 bg-antonSalmon-darksalmon hover:bg-antonSecondary flex justify-center items-center hover:flex-[8]">
                    <span className="group min-w-[14em] p-[.5em] text-center hover:text-left hover:p-5 transform -rotate-90 transition-all duration-500 text-antonOrange tracking-[.1em] hover:h-full hover:rotate-0 hover:transition-all hover:duration-1000">
                        <div className=" flex text-antonTextWhite tracking-[.2em] justify-center lg:text-xl">
                            ROBERTO
                        </div>
                        <div className="hidden group-hover:block hover:w-full h-full text-antonTextWhite">
                            <div className=" font-poppins text-pretty text-center pt-8 pb-20">
                                “Surpreendente! Ótima qualidade e atendimento.”
                            </div>
                        </div>
                    </span>
                </div>
            </div>
        </div>
    </div>
);
export default Feedback;
