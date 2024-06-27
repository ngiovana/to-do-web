import { FastifyReply, FastifyRequest } from 'fastify'
import { DeleteActivityService } from '../../services/activities/DeleteActivityService'

class DeleteActivityController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { id, userId } = request.query as { id: string, userId: string}

    const deleteActivityService = new DeleteActivityService()

    const activity = await deleteActivityService.execute({ id, userId })

    reply.send(activity)
  }
}

export { DeleteActivityController }
