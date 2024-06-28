import prismaClient from '../../prisma/index'

interface LoginUserProps {
  email: string;
  password: string;
}

class LoginUserService {
  async execute({ email, password }: LoginUserProps) {
    if (!email || !password) {
      throw new Error('Preencha todos os campos')
    }

    const findUser = await prismaClient.user.findFirst({
      where: {
        email,
        password
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
        email, 
        password
      }
    })

    return user
  }
}

export { LoginUserService }