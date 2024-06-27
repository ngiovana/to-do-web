import { FastifyRequest, FastifyReply } from 'fastify'
import { UpdateActivityService } from '../../services/activities/UpdateActivityService'

class UpdateActivityController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.query as { id: string }
    const { title, description, deadline, userId } = request.body as { title: string, description: string, deadline: Date, userId: string }

    const updateActivityService = new UpdateActivityService()

    const activity = await updateActivityService.execute({ id, title, description, deadline, userId });
    
    reply.send(activity)
  }
}

export { UpdateActivityController };