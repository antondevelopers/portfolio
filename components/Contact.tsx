import { useState, ChangeEvent, FormEvent } from "react";

import axios from "axios";
import Image from "next/image";
import littlepc from "/assets/svg/littlepc.svg";
import idea from "/assets/svg/Group.svg";
import landing from "/assets/svg/GroupLanding.svg";

interface FormData {
    name: string;
    email: string;
    message: string;
}

const Contact = () => {
    const [selectedProduct, setSelectedProduct] =
        useState<string>("landingPage");
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        message: "",
    });

    const [responseMessage, setResponseMessage] = useState<string>("");
    const [isLoading, setIsLoading] = useState(false);

    const handleProductChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSelectedProduct(event.target.value); 
    };

    const handleInputChange = ( 
        event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> 
    ) => { 
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }; 

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        setIsLoading(true); // Ativando o loading
        try {
            if (!formData.name || !formData.email || !formData.message) { // Validando se todos os campos foram preenchidos
                setResponseMessage("Preencha todos os campos");
                return;
            }
            const response = await axios.post("/api/sendEmail", { // Enviando dados para o backend
                ...formData,
                selectedProduct,
            });
            setResponseMessage(response.data.message);
            setFormData({    // Limpando os dados do formulário
                name: "",
                email: "",
                message: "",
            });
            setSelectedProduct("landingPage"); // Voltando ao estado inicial
        } catch (error) {
            setResponseMessage("Erro ao enviar email");
        } finally {
            setIsLoading(false); // Desativando o loading
        }
    };

    return (
        <section id="contato" className="bg-antonSalmon-darksalmon w-full">
            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-4">
                <h1 className="flex justify-center text-4xl pt-5 text-center text-antonTextWhite font-normal font-poppins mb-12 ">
                    Entre em contato e tenha seu orçamento.
                </h1>
                <h2 className="flex justify-center text-lg md:text-2xl text-antonTextWhite font-normal font-poppins mb-2 ">
                    Escolha o modelo do seu projeto:
                </h2>
                <div className="flex border-[2px] h-24 md:w-full border-antonBackgroundcolor rounded-xl select-none mb-6">
                    <label className="radio flex flex-grow w-[100px] items-center justify-center rounded-lg p-1 cursor-pointer group relative">
                        <input
                            type="radio"
                            name="radio"
                            value="fullStackApp"
                            className="peer hidden"
                            checked={selectedProduct === "fullStackApp"}
                            onChange={handleProductChange}
                        />
                        <span className="flex font-poppins w-full font-bold text-center h-full justify-center items-center tracking-widest peer-checked:bg-antonSecondary peer-checked:text-white text-antonSecondary p-2 rounded-lg transition duration-150 ease-in-out">
                            <Image
                                src={littlepc}
                                className="hidden md:inline-block mr-4"
                                alt="Figura ilustrativa do botao"
                                width={30}
                                height={30}
                            />
                            Full Stack App
                        </span>
                        <div className="absolute font-poppins bottom-full left-[170px] transform -translate-x-1/2 bg-antonTextWhite text-antonTextBlack p-3 rounded hidden group-hover:block text-sm w-[320px] text-pretty">
                            Várias páginas interconectadas. Envolve o que você vê (frontend) e como funciona por trás (backend), como armazenar dados, processar informações, etc.
                        </div>
                    </label>

                    <label className="radio flex flex-grow w-[120px] items-center justify-center rounded-lg p-1 cursor-pointer group relative">
                        <input
                            type="radio"
                            name="radio"
                            value="landingPage"
                            className="peer hidden "
                            checked={selectedProduct === "landingPage"}
                            onChange={handleProductChange}
                        />
                        <span className="flex font-poppins w-full font-bold text-center h-full justify-center items-center tracking-widest peer-checked:bg-antonSecondary peer-checked:text-white text-antonSecondary p-2 rounded-lg transition duration-150 ease-in-out">
                            <Image
                                src={landing}
                                className="hidden md:inline-block mr-4"
                                alt="Figura ilustrativa do botao"
                                width={30}
                                height={30}
                            />
                            Landing Page
                        </span>
                        <div className="absolute font-poppins bottom-full left-1/2 transform -translate-x-1/2 bg-antonTextWhite text-antonTextBlack p-3 rounded hidden group-hover:block text-sm w-[320px] text-pretty">
                            É como uma única página. Tem um propósito específico, como informar ou vender algo, e geralmente não interage com outras partes.
                        </div>
                    </label>

                    <label className="radio flex flex-grow w-[100px] items-center justify-center rounded-lg p-1 cursor-pointer group relative">
                        <input
                            type="radio"
                            name="radio"
                            value="outros"
                            className="peer hidden"
                            checked={selectedProduct === "outros"}
                            onChange={handleProductChange}
                        />
                        <span className="flex justify-center items-center font-poppins w-full font-bold text-center h-full tracking-widest  peer-checked:bg-antonSecondary peer-checked:text-white text-antonSecondary p-2 rounded-lg transition duration-150 ease-in-out">
                            <Image
                                src={idea}
                                className="hidden md:inline-block mr-4 peer-checked:white"
                                alt="Figura ilustrativa do botao"
                                width={20}
                                height={20}
                            />
                            Outros
                        </span>
                        <div className="absolute font-poppins bottom-full -left-[65px] transform -translate-x-1/2 bg-antonTextWhite text-antonTextBlack p-3 rounded hidden group-hover:block text-sm w-[320px] text-pretty">
                            Possui alguma ideia incomum? Sinta-se livre para descreve-la aqui.
                        </div>
                    </label>
                </div>

                <div className="mb-4 font-poppins">
                    <label className="block mb-2 text-antonTextWhite ">
                        Nome
                    </label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Seu Nome"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full p-2 rounded"
                    />
                </div>

                <div className="mb-4 font-poppins">
                    <label className="block mb-2 text-antonTextWhite ">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        placeholder="seuemail@email.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full p-2 rounded"
                    />
                </div>

                <div className="mb-8 font-poppins">
                    <label className="block mb-2 text-antonTextWhite">
                        Mensagem
                    </label>
                    <textarea
                        name="message"
                        placeholder="Digite um breve resumo de como voçê imagina seu projeto:"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full p-2 rounded"
                    />
                </div>

                <button
                    type="submit"
                    className="bg-antonSecondary w-full font-poppins font-bold tracking-widest text-xl text-white p-2 rounded mb-12 relative"
                    disabled={isLoading}
                >
                    {isLoading ? ( 
                        <>
                            <span className="opacity-0">Enviar</span>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-white"></div>
                            </div>
                        </>
                    ) : (
                        "Enviar"
                    )}
                </button>

                {responseMessage && (
                    <p className="mt-4 text-center text-antonTextWhite font-poppins">
                        {responseMessage}
                    </p>
                )}
            </form>
        </section>
    );
};

export default Contact;
