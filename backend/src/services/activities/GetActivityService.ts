import prismaClient from '../../prisma/index'

interface GetActivityProps {
  id: string;
}

class GetActivityService {
  async execute({ id }: GetActivityProps) {
    const activity = await prismaClient.activity.findFirst({
      where: {
        id
      }
    })

    if (!activity) {
      throw new Error("Atividade não encontrada")
    }

    return activity
  }
}

export { GetActivityService }
