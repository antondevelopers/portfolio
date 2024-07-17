const HeroButton = () => (
    <div className="flex animate-bounce-slow ">
        <div
            className=" flex clip-path-button cursor-pointer justify-center pt-6 tracking-[0.2em] w-[300px] h-[100px] text-xl bg-antonSalmon-darksalmon rounded-md text-white relative font-audio after:-z-20 after:absolute after:h-1 after:w-1 after:bg-antonGrey after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 "
            onClick={() =>
                document.getElementById("contato").scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                    inline: "nearest",
                })
            }
        >
            Quero começar
        </div>
    </div>
);

export default HeroButton;
