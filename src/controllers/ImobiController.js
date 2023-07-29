import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default {

    async createImobi(request, response){

        try{
            const thumb = request.file.filename;

            const { id, name, email, telefone, tipo, endereco, cidade, uf, valor, descricao} = request.body;

            const user = await prisma.user.findUnique({ where: { id: Number(id) } });

            if(!user){
                return response.json({message: "usuario não encontrado!"});
            }

            const slugify = str => 
                str.toLowerCase()
                .trim()
                .replace(/[^\w\s-]/g, '')
                .replace(/[\s_-]+/g, '-')
                .replace(/^-+|-+$/g, '');
            
            const slug = slugify(tipo);

            let imobis = await prisma.imobi.create({
                data: {
                    thumb,
                    tipo,
                    endereco,
                    cidade,
                    uf,
                    valor,
                    descricao,
                    name,
                    email,
                    telefone,
                    slug,
                    userId: user.id,
                }
            });

            return response.json(imobis);
            
        }catch(error){

            return response.json({message: error.message});
        }
    },

    async findAllImobi(request, response){

        try{
            
            const imobis = await prisma.imobi.findMany();

            return response.json(imobis);
            
        }catch(error){

            return response.json({message: error.message});
        }
    },

    async findImobi(request, response){

        try{
            const { slug } = request.params;

            const imobiSearch = await prisma.imobi.findFirst({ 
                where: {slug: slug}
            });

            if(!imobiSearch){
                return response.json({ message: "Imovel inexistente"});
            }

            return response.json(imobiSearch);

        }catch(error){
            return response.json({message: error.message});
        }
    }
}