import { FastifyReply, FastifyRequest } from 'fastify'
import { GetActivityService } from '../../services/activities/GetActivityService'

class GetActivityController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.query as { id: string }

    const getActivityService = new GetActivityService()

    const activity = await getActivityService.execute({ id })

    reply.send(activity)
  }
}

export { GetActivityController }