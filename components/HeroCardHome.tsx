import HeroButton from "./HeroButton";
import Image from "next/image";
import heroImage from "/assets/svg/heroImage.svg";

const HeroCardHome = () => (
    
        <div className="mb-10">
            <div className="min-h-full bg-center bg-no-repeat bg-criancavr bg-cover">
                <div className="flex text-center justify-center lg:ml-10 lg:text-left mb-32">
                    <div className="flex-col max-w-[380px] md:max-w-[800px] pt-20 md:pt-56 md:ml-20 ">
                        <h1 className="text-4xl font-poppins tracking-[0.17em] md:text-6xl md:leading-snug mb-[65px] text-antonTextWhite font-bold">
                            Faça sua história na web do amanhã:
                        </h1>
                        <span className="font-poppins font-light tracking-[0.12em] text-2xl lg:text-5xl lg:leading-tight text-antonTextWhite drop-shadow-lg">
                            Comece já a sua jornada de transformação digital.
                        </span>
                    </div>
                    <div className="hidden xl:flex items-center mt-48 py-20 pl-32 drop-shadow-lg">
                        <Image
                            src={heroImage}
                            alt="Pessoas usando computador e trocando informações"
                            className="drop-shadow-lg"
                            width={500}
                            height={400}
                        />
                    </div>
                </div>
                <div className="flex justify-center pb-20 lg:pb-20 ">
                    <HeroButton />
                </div>
            </div>
            
        </div>
    );
export default HeroCardHome;
