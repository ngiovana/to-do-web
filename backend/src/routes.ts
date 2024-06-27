import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from 'fastify'

import { CreateUserController } from './controllers/users/CreateUserController'
import { ListUsersController } from './controllers/users/ListUsersController'
import { DeleteUserController } from  './controllers/users/DeleteUserController'
import { UpdateUserController } from  './controllers/users/UpdateUserController'

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {

  // User routes
  fastify.post('/user', async (request: FastifyRequest, reply: FastifyReply) => {
    return new CreateUserController().handle(request, reply)
  })

  fastify.get('/users', async (request: FastifyRequest, reply: FastifyReply) => {
    return new ListUsersController().handle(request, reply)
  })

  fastify.put('/user', async (request: FastifyRequest, reply: FastifyReply) => {
    return new UpdateUserController().handle(request, reply)
  })

  fastify.delete('/user', async (request: FastifyRequest, reply: FastifyReply) => {
    return new DeleteUserController().handle(request, reply)
  })

  // Activity routes

  // Task routes
}
