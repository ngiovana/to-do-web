import prismaClient from '../../prisma/index'

interface CreateUserProps {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  async execute({ name, email, password }: CreateUserProps) {
    
    if (!name || !email || !password) {
      throw new Error('Preencha todos os campos')
    }

    const userExist = await prismaClient.user.findFirst({
      where: {
        email
      }
    })

    if (userExist) {
      throw new Error('Já existe um usuário com esse email')
    }

    const user = await prismaClient.user.create({
      data: {
        name,
        email,
        password
      }
    })

    return user
  }
}

export { CreateUserService }
