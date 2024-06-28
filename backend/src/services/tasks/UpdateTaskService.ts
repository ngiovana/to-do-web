import prismaClient from '../../prisma/index'

interface CreateTaskProps {
  id: string;
  title: string;
  status?: boolean;
  activityId: string;
}

class UpdateTaskService {
  async execute({ id, title, status, activityId }: CreateTaskProps) {
    if (!id) {
      throw new Error("Solicitação inválida");
    }

    if (!activityId) {
      throw new Error('Atividade não encontrada')
    }

    if (!title) {
      throw new Error('Título é obrigatório')
    }

    const findTask = await prismaClient.task.findFirst({
      where: {
        id,
        activityId
      }
    })

    if (!findTask) {
      throw new Error("Tarefa não encontrada");
    }

    const task = await prismaClient.task.update({
      where: {
        id: findTask.id,
        activityId: findTask.activityId
      },
      data: {
        title,
        status
      }
    })

    return task
  }
}

export { UpdateTaskService }