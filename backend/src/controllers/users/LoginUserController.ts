import { FastifyRequest, FastifyReply } from 'fastify'
import { LoginUserService } from '../../services/users/LoginUserService'

class LoginUserController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { email, password } = request.body as { email: string, password: string }

    const loginUserService = new LoginUserService()

    const user = await loginUserService.execute({ email, password });
    
    reply.send(user)
  }
}

export { LoginUserController };