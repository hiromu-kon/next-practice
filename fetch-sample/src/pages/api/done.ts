import { NextApiRequest, NextApiResponse } from 'next';
import tasks from '../../../data/tasks.json';
import * as fs from 'fs';
import * as path from 'path';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.body;
  const savedTasks = tasks.map((task) => {
    if (task.id === id) task.status = '済';
    return task;
  });

  fs.writeFileSync(
    path.resolve(__dirname, '../../../../data/tasks.json'),
    JSON.stringify(savedTasks)
  );
  res.status(200).json('OK');
}
