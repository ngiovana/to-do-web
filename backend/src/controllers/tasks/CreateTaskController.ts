import { FastifyRequest, FastifyReply } from 'fastify'
import { CreateTaskService } from '../../services/tasks/CreateTaskService'

class CreateTaskController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { title, status, activityId } = request.body as { title: string, status: boolean, activityId: string }

    const taskService = new CreateTaskService()
    const task = await taskService.execute({ title, status, activityId })

    reply.send(task)
  }
}

export { CreateTaskController }
