import Layout from "../components/Layout";
import HeroCardHome from "../components/HeroCardHome"
import Tecnologias from "../components/Tecnologias";
import ReactSvg from "../components/ReactSvg";
import Feedback from "../components/Feedback";
import SobreNos from "../components/SobreNos";
import Contact from "../components/Contact";



const IndexPage = () => (
    <Layout title="Anton Devs | Seu Futuro começa aqui" className="">
        <HeroCardHome/>
        <ReactSvg/>
        <Tecnologias/>
        <Feedback/>
        <SobreNos/>
        <Contact/>
    </Layout>
);

export default IndexPage;
