import express, { Router } from 'express';
import tasks from './tasks';
import projects from './projects';

const v1: Router = express.Router();

v1.use('/tasks', tasks); // Mount the tasks router at /tasks
v1.use('/projects', projects); // Mount the projects router at /projects

export default v1;
