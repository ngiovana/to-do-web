import { FastifyReply, FastifyRequest } from 'fastify'
import { DeleteTaskService } from '../../services/tasks/DeleteTaskService'

class DeleteTaskController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { id, activityId } = request.query as { id: string, activityId: string}

    const deleteTaskService = new DeleteTaskService()

    const task = await deleteTaskService.execute({ id, activityId })

    reply.send(task)
  }
}

export { DeleteTaskController }
