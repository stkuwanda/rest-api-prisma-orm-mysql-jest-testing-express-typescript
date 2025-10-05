import { Request, Response } from 'express';

export const listTasks = (req: Request, res: Response) => {
  // Logic to list all tasks
  res.status(200).json({ message: 'List of all tasks', tasks: [] });
};

export const getTask = (req: Request, res: Response) => {
  const { id } = req.params;
  // Logic to get a specific task by ID
  res.status(200).json({
    message: `Details of task with ID: ${id}`,
    task: { id, name: 'Task 1' },
  });
};
