import Carousel from "./Carousel";

const Tecnologias = () => (
    <section id="tecnologias" className="flex-col mb-32 z-30">
        <div className="flex justify-center text-center w-full">
            <div className="flex flex-col text-center lg:w-[700px] h-auto mb-20">
                <span className="font-poppins tracking-widest  text-3xl lg:text-6xl [text-shadow:_1px_3px_0_rgb(0_0_0_/_40%)]">
                    Porque contratar a
                </span>
                <strong className="font-poppins tracking-widest text-3xl lg:text-6xl [text-shadow:_1px_3px_0_rgb(0_0_0_/_40%)]">
                    Anton Devs?🤔
                </strong>
            </div>
        </div>
        <div className=" flex flex-col md:flex-row justify-center md:justify-center items-center">
            <div className="bg-square w-[371px] h-[360px] mb-8 md:mx-10 z-30 ">
                <span className="flex justify-center pt-8 text-antonTextWhite font-poppins font-normal text-4xl mb-14 ">
                    Tecnologias
                </span>
                <Carousel/>
                <span className="flex justify-center pt-8 text-antonTextWhite font-poppins font-normal text-3xl text-center ">
                    Mais usadas do mercado!
                </span>
            </div>
            <div className="bg-square w-[371px] h-[360px] mb-8 md:mx-10 drop-shadow-lg">
                <span className="flex justify-center pt-8 text-antonTextWhite font-poppins font-normal text-3xl mb-10 ">
                    Mais de
                </span>
                <span className="flex justify-center pt-5 text-antonTextWhite font-audio font-normal text-8xl mb-10 animate-bounce-slow">
                    42
                </span>
                <span className="flex justify-center pt-5 text-antonTextWhite font-poppins font-normal text-3xl">
                    Projetos Realizados
                </span>
            </div>
        </div>
    </section>
);
export default Tecnologias;
