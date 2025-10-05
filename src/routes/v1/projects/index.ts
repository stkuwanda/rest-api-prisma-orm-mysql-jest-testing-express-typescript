import express, { Router } from 'express';
import { listProjects, getProject, listProjectTasks } from './controller';

const projects: Router = express.Router();

projects.get('/', listProjects); // GET /projects - List all projects
projects.get('/:id', getProject); // GET /projects/:id - Get a specific project by ID
projects.get('/:id/tasks', listProjectTasks); // GET /projects/:id/tasks - Get all tasks for a specific project;

export default projects;
