import { FastifyReply, FastifyRequest } from 'fastify'
import { ListTasksService } from '../../services/tasks/ListTasksService'

class ListTasksController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { activityId } = request.query as { activityId: string }

    const listTasksService = new ListTasksService()

    const tasks = await listTasksService.execute({ activityId })

    reply.send(tasks)
  }
}

export { ListTasksController }