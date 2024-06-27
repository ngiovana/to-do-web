import { FastifyReply, FastifyRequest } from 'fastify'
import { ListActivitiesService } from '../../services/activities/ListActivitiesService'

class ListActivitiesController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { userId } = request.query as { userId: string }

    const listActivitiesService = new ListActivitiesService()

    const activities = await listActivitiesService.execute({ userId })

    reply.send(activities)
  }
}

export { ListActivitiesController }