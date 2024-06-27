import prismaClient from '../../prisma/index'

interface ListActivitiesProps {
  userId: string;
}

class ListActivitiesService {
  async execute({ userId }: ListActivitiesProps) {
    const activities = await prismaClient.activity.findMany({
      where: {
        userId
      }
    })

    return activities
  }
}

export { ListActivitiesService }
