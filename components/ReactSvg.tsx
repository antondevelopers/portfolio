import Image from "next/image";
import ReactSymbol from "/assets/svg/REACTSYMBOL.svg";

const ReactSvg = () => (
    <div className="w-full h-full z-10">
        <div className="absolute top-[700px] -left-[450px] md:top-[1000px] md:-left-[600px] overflow-hidden ">
            <div className="">
                <Image
                    src={ReactSymbol}
                    className="animate-spin-slow"
                    alt="Simbolo do Framework React"
                    width={1200}
                    height={1200}
                />
            </div>
        </div>
    </div>
);
export default ReactSvg;
