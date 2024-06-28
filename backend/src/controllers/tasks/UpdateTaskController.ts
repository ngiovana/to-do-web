import { FastifyRequest, FastifyReply } from 'fastify'
import { UpdateTaskService } from '../../services/tasks/UpdateTaskService'

class UpdateTaskController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.query as { id: string }
    const { title, status, activityId } = request.body as { title: string, status: boolean, activityId: string }

    const updateTaskService = new UpdateTaskService()

    const task = await updateTaskService.execute({ id, title, status, activityId });
    
    reply.send(task)
  }
}

export { UpdateTaskController };