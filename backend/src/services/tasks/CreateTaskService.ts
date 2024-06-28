import prismaClient from '../../prisma/index'

interface CreateTaskProps {
  title: string;
  status?: boolean;
  activityId: string;
}

class CreateTaskService {
  async execute({ title, status, activityId }: CreateTaskProps) {
    
    if (!activityId) {
      throw new Error('Atividade não encontrada')
    }

    if (!title) {
      throw new Error('O título é obrigatório')
    }

    const findActivity = await prismaClient.activity.findFirst({
      where: {
        id: activityId
      }
    })

    if (!findActivity) {
      throw new Error('Atividade não encontrada')
    }

    const task = await prismaClient.task.create({
      data: {
        title,
        status,
        activityId
      }
    })

    return task
  }
}

export { CreateTaskService }
