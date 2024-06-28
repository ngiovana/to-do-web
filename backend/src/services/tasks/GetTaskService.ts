import prismaClient from '../../prisma/index'

interface GetTaskProps {
  id: string;
}

class GetTaskService {
  async execute({ id }: GetTaskProps) {
    const task = await prismaClient.task.findFirst({
      where: {
        id
      }
    })

    if (!task) {
      throw new Error("Tarefa não encontrada")
    }

    return task
  }
}

export { GetTaskService }
