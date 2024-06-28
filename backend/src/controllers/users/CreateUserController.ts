import { FastifyRequest, FastifyReply } from 'fastify'
import { CreateUserService } from '../../services/users/CreateUserService'

class CreateUserController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { name, email, password } = request.body as { name: string, email: string, password: string }

    const userService = new CreateUserService()
    try {
      const user = await userService.execute({ name, email, password })
      reply.send(user)
    } catch (error: any) {
      throw new Error(error.message)
    }
  }
}

export { CreateUserController }