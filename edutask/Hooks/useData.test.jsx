import { renderHook, act } from '@testing-library/react-hooks';
import useData from './useData';

global.fetch = jest.fn();

const mockTasks = [
  { id: 1, task_type: 'Daily', completed: false, name: 'Daily Task 1' },
  { id: 2, task_type: 'Weekly', completed: false, name: 'Weekly Task 1' },
  { id: 3, task_type: 'Daily', completed: true, name: 'Completed Task 1' },
];

describe('useData hook', () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  test('fetches tasks on mount', async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ data: mockTasks }),
    });

    const { result, waitForNextUpdate } = renderHook(() => useData());

    expect(result.current.isLoading).toBe(true);

    await waitForNextUpdate();

    expect(result.current.isLoading).toBe(false);
    expect(result.current.tasks).toEqual(mockTasks);
    expect(result.current.error).toBe(null);
  });

  test('handles fetch tasks error', async () => {
    fetch.mockResolvedValueOnce({
      ok: false,
      status: 500,
    });

    const { result, waitForNextUpdate } = renderHook(() => useData());

    await waitForNextUpdate();

    expect(result.current.isLoading).toBe(false);
    expect(result.current.tasks).toEqual([]);
    expect(result.current.error).toBe('Failed to fetch tasks');
  });

  test('creates a new task', async () => {
    fetch
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({ data: mockTasks }),
      })
      .mockResolvedValueOnce({
        ok: true,
      })
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({ data: [...mockTasks, { id: 4, task_type: 'Daily', completed: false, name: 'New Task' }] }),
      });

    const { result, waitForNextUpdate } = renderHook(() => useData());

    await waitForNextUpdate();

    act(() => {
      result.current.createTask({ task_type: 'Daily', completed: false, name: 'New Task' });
    });

    await waitForNextUpdate();

    expect(result.current.tasks).toEqual([...mockTasks, { id: 4, task_type: 'Daily', completed: false, name: 'New Task' }]);
  });

  test('updates a task', async () => {
    fetch
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({ data: mockTasks }),
      })
      .mockResolvedValueOnce({
        ok: true,
      })
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({
          data: mockTasks.map(task => (task.id === 1 ? { ...task, name: 'Updated Task' } : task)),
        }),
      });

    const { result, waitForNextUpdate } = renderHook(() => useData());

    await waitForNextUpdate();

    act(() => {
      result.current.updateTask(1, { name: 'Updated Task' });
    });

    await waitForNextUpdate();

    expect(result.current.tasks).toEqual(
      mockTasks.map(task => (task.id === 1 ? { ...task, name: 'Updated Task' } : task))
    );
  });

  test('deletes a task', async () => {
    fetch
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({ data: mockTasks }),
      })
      .mockResolvedValueOnce({
        ok: true,
      })
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({
          data: mockTasks.filter(task => task.id !== 1),
        }),
      });

    const { result, waitForNextUpdate } = renderHook(() => useData());

    await waitForNextUpdate();

    act(() => {
      result.current.delTask(1);
    });

    await waitForNextUpdate();

    expect(result.current.tasks).toEqual(mockTasks.filter(task => task.id !== 1));
  });

  test('completes a task', async () => {
    fetch
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({ data: mockTasks }),
      })
      .mockResolvedValueOnce({
        ok: true,
      })
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({
          data: mockTasks.map(task => (task.id === 1 ? { ...task, completed: true } : task)),
        }),
      });

    const { result, waitForNextUpdate } = renderHook(() => useData());

    await waitForNextUpdate();

    act(() => {
      result.current.completeTask(1);
    });

    await waitForNextUpdate();

    expect(result.current.tasks).toEqual(
      mockTasks.map(task => (task.id === 1 ? { ...task, completed: true } : task))
    );
  });
});