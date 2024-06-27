import prismaClient from '../../prisma/index'

interface UpdateActivityProps {
  id: string;
  title: string;
  description?: string;
  deadline?: Date;
  userId: string;
}

class UpdateActivityService {
  async execute({ id, title, description, deadline, userId }: UpdateActivityProps) {
    if (!id) {
      throw new Error("Solicitação inválida");
    }

    if (!userId) {
      throw new Error('Usuário não encontrado')
    }

    if (!title) {
      throw new Error('Título é obrigatório')
    }

    const findActivity = await prismaClient.activity.findFirst({
      where: {
        id,
        userId
      }
    })

    if (!findActivity) {
      throw new Error("Atividade não encontrado");
    }

    const activity = await prismaClient.activity.update({
      where: {
        id: findActivity.id,
        userId: findActivity.userId
      },
      data: {
        title,
        description,
        deadline
      }
    })

    return activity
  }
}

export { UpdateActivityService }