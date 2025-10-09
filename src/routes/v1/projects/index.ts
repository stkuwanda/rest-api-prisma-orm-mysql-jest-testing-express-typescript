import express, { Router } from 'express';
import { listProjects, getProject, listProjectTasks } from './controller';
import authenticateUser from '../../../middleware/authenticate-user.middleware';

const projects: Router = express.Router();

projects.use(authenticateUser); // Apply authentication middleware to all project routes
projects.get('/', listProjects); // GET /projects - List all projects
projects.get('/:id', getProject); // GET /projects/:id - Get a specific project by ID
projects.get('/:id/tasks', listProjectTasks); // GET /projects/:id/tasks - Get all tasks for a specific project;

export default projects;
