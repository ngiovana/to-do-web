import { FastifyReply, FastifyRequest } from 'fastify'
import { DeleteUserService } from '../../services/users/DeleteUserService'

class DeleteUserController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.query as { id: string }

    const deleteUserService = new DeleteUserService()

    const user = await deleteUserService.execute({ id })

    reply.send(user)
  }
}

export { DeleteUserController }
