import { TaskList } from '@/types/Task';
import { NextApiRequest, NextApiResponse } from 'next';
import tasks from '../../../data/tasks.json';

export default async function handler(req: NextApiRequest, res: NextApiResponse<TaskList>) {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  res.status(200).json(tasks);
}
