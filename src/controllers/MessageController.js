import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default {
    async createMessage(request, response){

        const { client_name, client_email, client_message, userId} = request.body;

        try{

            let message = await prisma.messages.findFirst({
                where: {client_email}
            });

            if(message){
                return response.json({
                    error: true,
                    message: "Mensagem já cadastrada, aguarde resposta do anunciante"
                });
            }

            message = await prisma.messages.create({
                data: {
                    client_name,
                    client_email,
                    client_message,
                    userId
                }
            });

            return response.json({
                error: false,
                message: "Sucesso: Mensagem cadastrada com sucesso"
            });
        }catch(error){
            return response.json({message: error.message});
        }
    },

    async findMessage(request, response){
        try{

            const { id } = request.params;

            const messagem = await prisma.messages.findMany({
                where: { userId: Number(id) }
            });

            return response.json({
                messagem
            });

        }catch(error){
            return response.json({
                message:error.message
            });
        }
    }
};