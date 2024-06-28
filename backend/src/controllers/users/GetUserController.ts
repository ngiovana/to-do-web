import { FastifyReply, FastifyRequest } from 'fastify'
import { GetUserService } from '../../services/users/GetUserService'

class GetUserController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.query as { id: string }

    const getUserService = new GetUserService()

    const user = await getUserService.execute({ id })

    reply.send(user)
  }
}

export { GetUserController }