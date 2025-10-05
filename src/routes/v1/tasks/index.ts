import express, { Router } from 'express';
import { listTasks, getTask } from './controller';

const tasks: Router = express.Router();

tasks.get('/', listTasks); // GET /tasks - List all tasks
tasks.get('/:id', getTask); // GET /tasks/:id - Get a specific task by ID

export default tasks;
