import prismaClient from '../../prisma/index'

interface DeleteTaskProps {
  id?: string;
  activityId?: string;
}

class DeleteTaskService {
  async execute({ id, activityId }: DeleteTaskProps) {
    if (!id && !activityId) {
      throw new Error("Solicitação inválida");
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

    await prismaClient.task.delete({
      where: {
        id: findTask.id,
        activityId: findTask.activityId
      }
    })

    return { message: "Tarefa deletada com sucesso" }
  }
}

export { DeleteTaskService }
