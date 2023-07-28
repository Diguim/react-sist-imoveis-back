import { PrismaClient } from "@prisma/client"
import { hash } from "bcrypt";
const prisma = new PrismaClient();


export default {

    async createUser(req, res){
        
        const { name, email, password } = req.body;
        
        try{   
            let user = await prisma.user.findUnique({ where: {email} });
            
            if(user){
                return res.json({
                    error: true,
                    message: "Usuário já existe"
                });
            }

            const HashPassword = await hash(password, 8);

            user = await prisma.user.create({
                data: {
                    name, 
                    email, 
                    password: HashPassword
                }
            });
            return res.json({
                error: false,
                message: "Sucesso: Usuário cadastrado com sucesso!",
                user
            });
            
        }catch(error){
            return res.json({message: error.message});
        }
    },

    async findAllUser(req, res){
        

        try {

            const user = await prisma.user.findMany();

            return res.json(user);
        }catch(error){

            return res.json({ message: error.message});
        }
    }
}