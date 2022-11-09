import { TaskList } from '@/types/Task';
import { NextApiRequest, NextApiResponse } from 'next';
import tasks from '../../../data/tasks.json';

export default function handler(req: NextApiRequest, res: NextApiResponse<TaskList>) {
  res.status(200).json(tasks);
}
