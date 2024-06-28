import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from 'fastify'

import { CreateUserController } from './controllers/users/CreateUserController'
import { LoginUserController } from './controllers/users/LoginUserController'
import { GetUserController } from './controllers/users/GetUserController'
import { ListUsersController } from './controllers/users/ListUsersController'
import { DeleteUserController } from  './controllers/users/DeleteUserController'
import { UpdateUserController } from  './controllers/users/UpdateUserController'

import { CreateActivityController } from './controllers/activities/CreateActivityController'
import { GetActivityController } from './controllers/activities/GetActivityController'
import { ListActivitiesController } from './controllers/activities/ListActivitiesController'
import { UpdateActivityController } from './controllers/activities/UpdateActivityController'
import { DeleteActivityController } from './controllers/activities/DeleteActivityController'

import { CreateTaskController } from './controllers/tasks/CreateTaskController'
import { GetTaskController } from './controllers/tasks/GetTaskController'
import { ListTasksController } from './controllers/tasks/ListTasksController'
import { UpdateTaskController } from './controllers/tasks/UpdateTaskController'
import { DeleteTaskController } from './controllers/tasks/DeleteTaskController'

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {

  // User routes
  fastify.post('/user', async (request: FastifyRequest, reply: FastifyReply) => {
    return new CreateUserController().handle(request, reply)
  })

  fastify.post('/user/login', async (request: FastifyRequest, reply: FastifyReply) => {
    return new LoginUserController().handle(request, reply)
  })

  fastify.get('/user', async (request: FastifyRequest, reply: FastifyReply) => {
    return new GetUserController().handle(request, reply)
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
  fastify.post('/task', async (request: FastifyRequest, reply: FastifyReply) => {
    return new CreateTaskController().handle(request, reply)
  })

  fastify.get('/task', async (request: FastifyRequest, reply: FastifyReply) => {
    return new GetTaskController().handle(request, reply)
  })

  fastify.get('/tasks', async (request: FastifyRequest, reply: FastifyReply) => {
    return new ListTasksController().handle(request, reply)
  })

  fastify.put('/task', async (request: FastifyRequest, reply: FastifyReply) => {
    return new UpdateTaskController().handle(request, reply)
  })

  fastify.delete('/task', async (request: FastifyRequest, reply: FastifyReply) => {
    return new DeleteTaskController().handle(request, reply)
  })
}
