import prismaClient from '../../prisma/index'

interface GetUserProps {
  id: string;
}

class GetUserService {
  async execute({ id }: GetUserProps) {
    const user = await prismaClient.user.findFirst({
      where: {
        id
      }
    })

    if (!user) {
      throw new Error("Usuário não encontrad0")
    }

    return user
  }
}

export { GetUserService }
