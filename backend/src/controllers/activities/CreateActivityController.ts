import { FastifyRequest, FastifyReply } from 'fastify'
import { CreateActivityService } from '../../services/activities/CreateActivityService'

class CreateActivityController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { title, description, deadline, userId } = request.body as { title: string, description: string, deadline: Date, userId: string }

    const activityService = new CreateActivityService()
    const activity = await activityService.execute({ title, description, deadline, userId })

    reply.send(activity)
  }
}

export { CreateActivityController }
