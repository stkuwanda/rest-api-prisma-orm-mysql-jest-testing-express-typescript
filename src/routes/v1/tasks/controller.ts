import { Request, Response } from 'express';
import { asyncHandler } from '../../../utils/error-handling.util';
import EntityNotFoundError from '../../../errors/EntityNotFoundError';
import prisma from '../../../prisma-client';

export const listTasks = asyncHandler(async (req: Request, res: Response) => {
  // Logic to list all tasks
  const tasks = await prisma.task.findMany({
    where: { user_id: req.auth?.payload.sub as string },
  });
  res.status(200).json({ message: 'List of all tasks', tasks });
});

export const getTask = asyncHandler(async (req: Request, res: Response) => {
  const task = await prisma.task.findUnique({
    where: { id: req.params.id },
  });

  if (!task) {
    throw new EntityNotFoundError({
      message: 'Task not found!',
      statusCode: 404,
      code: 'ERR_NF',
    });
  }

  // Logic to get a specific task by ID
  res.status(200).json({
    message: `Details of task with ID: ${req.params.id}`,
    task,
  });
});
