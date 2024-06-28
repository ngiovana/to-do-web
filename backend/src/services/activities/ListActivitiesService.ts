import prismaClient from '../../prisma/index'

interface ListActivitiesProps {
  userId: string;
}

class ListActivitiesService {
  async execute({ userId }: ListActivitiesProps) {
    if (!userId) {
      throw new Error('User deve ser informado')
    }

    // Find all activities from a user
    const activities = await prismaClient.activity.findMany({
      where: {
        userId
      }
    })

    if (!activities) {
      throw new Error('Nenhuma atividade encontrada')
    }

    return activities
  }
}

export { ListActivitiesService }
