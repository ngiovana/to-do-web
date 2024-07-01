import prismaClient from '../../prisma/index'

interface CreateActivityProps {
  title: string;
  description?: string;
  deadline?: Date;
  userId: string;
}

class CreateActivityService {
  async execute({ title, description, deadline, status, userId }: CreateActivityProps) {
    
    if (!userId) {
      throw new Error('Usuário não encontrado')
    }

    if (!title) {
      throw new Error('O título é obrigatório')
    }

    const findUser = await prismaClient.user.findFirst({
      where: {
        id: userId
      }
    })

    if (!findUser) {
      throw new Error("Usuário não encontrado");
    }

    const activity = await prismaClient.activity.create({
      data: {
        title,
        description,
        deadline,
        status,
        userId
      }
    })

    return activity
  }
}

export { CreateActivityService }
