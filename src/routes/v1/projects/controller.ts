import { Request, Response } from 'express';
import prisma from '../../../prisma-client';
import EntityNotFoundError from '../../../errors/EntityNotFoundError';
import { asyncHandler } from '../../../utils/error-handling.util';

export const listProjects = asyncHandler(
  async (req: Request, res: Response) => {
    // Logic to list all projects
    const projects = await prisma.project.findMany();
    res.status(200).json({ message: 'List of all projects', projects });
  },
);

export const getProject = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  // Logic to get a specific project by ID
  const project = await prisma.project.findUnique({
    where: { id },
  });

  if (!project) {
    throw new EntityNotFoundError({
      message: 'Project not found!',
      statusCode: 404,
      code: 'ERR_NF',
    });
  }

  res.status(200).json({
    message: `Details of project with ID: ${id}`,
    project,
  });
});

export const listProjectTasks = asyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.params;

    // Logic to list all tasks for a specific project
    const tasks = await prisma.task.findMany({
      where: { project_id: id },
    });

    res.status(200).json({
      message: `List of tasks for project with ID: ${id}`,
      tasks,
    });
  },
);
