import { FastifyReply, FastifyRequest } from 'fastify'
import { GetTaskService } from '../../services/tasks/GetTaskService'

class GetTaskController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.query as { id: string }

    const getTaskService = new GetTaskService()

    const task = await getTaskService.execute({ id })

    reply.send(task)
  }
}

export { GetTaskController }