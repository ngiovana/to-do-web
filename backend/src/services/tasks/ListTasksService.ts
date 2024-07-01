import prismaClient from '../../prisma/index'

interface ListTasksProps {
  activityId: string;
}

class ListTasksService {
  async execute({ activityId }: ListTasksProps) {
    if (!activityId) {
      throw new Error('Id da atividade não foi informado')
    }

    const tasks = await prismaClient.task.findMany({
      where: {
        activityId
      }
    })

    if (!tasks || tasks.length == 0) {
      return
    }

    return tasks
  }
}

export { ListTasksService }
