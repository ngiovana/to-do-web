import prismaClient from '../../prisma/index'

interface DeleteActivityProps {
  id?: string;
  userId?: string;
}

class DeleteActivityService {
  async execute({ id, userId }: DeleteActivityProps) {
    if (!id && !userId) {
      throw new Error("Solicitação inválida");
    }

    const findActivity = await prismaClient.activity.findFirst({
      where: {
        id,
        userId
      }
    })

    if (!findActivity) {
      throw new Error("Atividade não encontrada");
    }

    await prismaClient.activity.delete({
      where: {
        id: findActivity.id,
        userId: findActivity.userId
      }
    })

    return { message: "Atividade deletada com sucesso" }
  }
}

export { DeleteActivityService }
