import prismaClient from '../../prisma/index'

class ListUsersService {
  async execute() {
    const users = await prismaClient.user.findMany()

    return users
  }
}

export { ListUsersService }