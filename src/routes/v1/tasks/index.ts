import express, { Router } from 'express';
import { listTasks, getTask } from './controller';
import authenticateUser from '../../../middleware/authenticate-user.middleware';

const tasks: Router = express.Router();

tasks.use(authenticateUser); // Apply authentication middleware to all task routes
tasks.get('/', listTasks); // GET /tasks - List all tasks
tasks.get('/:id', getTask); // GET /tasks/:id - Get a specific task by ID

export default tasks;
