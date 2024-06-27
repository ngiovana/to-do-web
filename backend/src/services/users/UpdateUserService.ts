import prismaClient from '../../prisma/index'

interface UpdateUserProps {
  id: string;
  name: string;
  email: string;
  password: string;
}

class UpdateUserService {
  async execute({ id, name, email, password }: UpdateUserProps) {
    if (!id) {
      throw new Error("Solicitação inválida");
    }

    if (!name || !email || !password) {
      throw new Error('Preencha todos os campos')
    }

    const findUser = await prismaClient.user.findFirst({
      where: {
        id
      }
    })

    if (!findUser) {
      throw new Error("Usuário não encontrado");
    }

    const user = await prismaClient.user.update({
      where: {
        id: findUser.id
      },
      data: {
        name,
        email, 
        password
      }
    })

    return user
  }
}

export { UpdateUserService }