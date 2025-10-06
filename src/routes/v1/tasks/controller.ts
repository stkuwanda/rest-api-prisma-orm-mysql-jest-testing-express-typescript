import { Request, Response } from 'express';
import { asyncHandler } from '../../../utils/error-handling.util';
// import EntityNotFoundError from '../../../errors/EntityNotFoundError';

export const listTasks = (req: Request, res: Response) => {
  // Logic to list all tasks
  res.status(200).json({ message: 'List of all tasks', tasks: [] });
};

export const getTask = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  // throw new EntityNotFoundError({
  //   message: 'Entity not found!',
  //   statusCode: 404,
  //   code: 'ERR_NF',
  // });

  // Logic to get a specific task by ID
  res.status(200).json({
    message: `Details of task with ID: ${id}`,
    task: { id, name: 'Task 1' },
  });
});
