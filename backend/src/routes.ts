import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from 'fastify'

import { CreateUserController } from './controllers/users/CreateUserController'
import { ListUsersController } from './controllers/users/ListUsersController'
import { DeleteUserController } from  './controllers/users/DeleteUserController'
import { UpdateUserController } from  './controllers/users/UpdateUserController'

import { CreateActivityController } from './controllers/activities/CreateActivityController'
import { GetActivityController } from './controllers/activities/GetActivityController'
import { ListActivitiesController } from './controllers/activities/ListActivitiesController'
import { UpdateActivityController } from './controllers/activities/UpdateActivityController'
import { DeleteActivityController } from './controllers/activities/DeleteActivityController'

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
  fastify.post('/activity', async (request: FastifyRequest, reply: FastifyReply) => {
    return new CreateActivityController().handle(request, reply)
  })

  fastify.get('/activity', async (request: FastifyRequest, reply: FastifyReply) => {
    return new GetActivityController().handle(request, reply)
  })

  fastify.get('/activities', async (request: FastifyRequest, reply: FastifyReply) => {
    return new ListActivitiesController().handle(request, reply)
  })

  fastify.put('/activity', async (request: FastifyRequest, reply: FastifyReply) => {
    return new UpdateActivityController().handle(request, reply)
  })

  fastify.delete('/activity', async (request: FastifyRequest, reply: FastifyReply) => {
    return new DeleteActivityController().handle(request, reply)
  })

  // Task routes
}
