import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default{

    async createImobi(request, response){

        try{
            const { id, tipo, endereco, cidade, uf, valor, descricao} = request.body;

            const user = await prisma.user.findUnique({where: {id: Numer(id)}});

            if(!user){
                return response.json({message: "usuario não encontrado!"});
            }

            const imobi = await prisma.imobi.create({
                data:{
                    tipo,
                    endereco,
                    cidade,
                    uf,
                    valor,
                    descricao,
                    userId: user.id,
                }
            });

            return response.json(imobi);
            
        }catch(error){

            return response.json({message: error.message});
        }
    }
}