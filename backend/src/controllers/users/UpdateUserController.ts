import { FastifyRequest, FastifyReply } from 'fastify'
import { UpdateUserService } from '../../services/users/UpdateUserService'

class UpdateUserController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.query as { id: string }
    const { name, email, password } = request.body as { name: string, email: string, password: string }

    const updateUserService = new UpdateUserService()

    const user = await updateUserService.execute({id, name, email, password });
    
    reply.send(user)
  }
}

export { UpdateUserController };