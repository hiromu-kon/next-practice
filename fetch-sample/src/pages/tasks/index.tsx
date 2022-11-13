import { Task, TaskList } from '@/types/Task';
import { useEffect, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';

const TaskListPage = () => {
  // const [tasks, setTasks] = useState<TaskList>();

  // useEffect(() => {
  //   fetch('/api/tasks', { method: 'GET' }).then(async (response) => {
  //     const data = await response.json();
  //     setTasks(data);
  //   });
  // }, []);

  const fetchTasks: () => Promise<Task[]> = async () => {
    const response = await fetch('/api/tasks', { method: 'GET' });
    return await response.json();
  };

  const queryClient = useQueryClient();
  const { data: tasks, isLoading } = useQuery('tasks', fetchTasks);

  const doneTask = async ({ id: taskId, index: index }: { id: number; index: number }) => {
    await fetch('/api/done', {
      method: 'POST',
      body: JSON.stringify({ id: taskId }),
      headers: { 'Content-Type': 'application/json' },
    });
  };

  const mutation = useMutation(doneTask, {
    onMutate: async ({ id: newTaskId, index: index }) => {
      queryClient.cancelQueries('tasks');
      const previousTaskData: Task[] | undefined = queryClient.getQueryData('tasks');

      previousTaskData![index].status = '済';
      return { previousTaskData };
    },
    onSuccess: () => {
      queryClient.invalidateQueries('tasks');
    },
  });

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div>
      <h1>タスク一覧</h1>

      {tasks?.map((task, index) => (
        <table key={index}>
          <thead>
            <tr>
              <th>ID</th>
              <th>なまえ</th>
              <th>状態</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.name}</td>
              <td>{task.status}</td>
              <td>
                <button onClick={() => mutation.mutate({ id: task.id, index: index })}>
                  Done!
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      ))}
    </div>
  );
};

export default TaskListPage;
