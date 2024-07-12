import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

type Data = {
    message: string;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    if (req.method === "POST") {
        const { name, email, message, selectedProduct } = req.body;

        // Configuração do transporte de email usando nodemailer
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.GMAIL_USER,
            to: process.env.RECEIVER_EMAIL, // E-mail que receberá a mensagem
            subject: `Novo contato de ${name}`,
            text: `
                Produto selecionado: ${selectedProduct}
                Nome: ${name}
                Email: ${email}
                Mensagem: ${message}
                `,
        };

        try {
            await transporter.sendMail(mailOptions);
            res.status(200).json({ message: "Email enviado com sucesso!" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Erro ao enviar email" });
        }
    } else {
        res.status(405).json({ message: "Método não permitido" });
    }
}
