import {
  REQUEST_ADD_TASK,
  REQUEST_DELETE_TASK,
  REQUEST_EDIT_TASK,
  REQUEST_GET_TASK,
  TASK_SELECTOR_COLLECTION,
} from "@simple-quicks/app/redux/task";
import {
  useAppDispatch,
  useAppSelector,
} from "@simple-quicks/app/redux/useRedux";
import { useCallback } from "react";
import useResponse from "../function/useResponse";
import {
  IParamsTask,
  ITask,
} from "@simple-quicks/app/interface/task.interface";

const useTask = () => {
  const dispatch = useAppDispatch();
  const { taskError, taskIsEmpty, taskList, taskPending, refetch } =
    useAppSelector(TASK_SELECTOR_COLLECTION);
  const { handleError, handleSuccess } = useResponse();

  const getTaskList = useCallback(
    (params: IParamsTask) => {
      dispatch(REQUEST_GET_TASK(params)).then((result) => {
        if (result.meta.requestStatus === "rejected") {
          handleError(
            result.payload?.response?.status,
            result.payload?.response?.data.message
          );
        }
      });
    },
    [dispatch, handleError]
  );

  const addTask = useCallback(
    (payload: ITask) => {
      dispatch(REQUEST_ADD_TASK(payload)).then((result) => {
        if (result.meta.requestStatus === "fulfilled") {
          handleSuccess("Task Successfully Added !");
        } else if (result.meta.requestStatus === "rejected") {
          handleError(
            result.payload?.response?.status,
            result.payload?.response?.data.message
          );
        }
      });
    },
    [dispatch, handleError, handleSuccess]
  );

  const editTask = useCallback(
    (payload: ITask) => {
      dispatch(REQUEST_EDIT_TASK(payload)).then((result) => {
        if (result.meta.requestStatus === "fulfilled") {
          handleSuccess("Task has been updated");
        } else if (result.meta.requestStatus === "rejected") {
          handleError(
            result.payload?.response?.status,
            result.payload?.response?.data.message
          );
        }
      });
    },
    [dispatch, handleError, handleSuccess]
  );

  const deleteTask = useCallback(
    (id: string) => {
      dispatch(REQUEST_DELETE_TASK(id)).then((result) => {
        if (result.meta.requestStatus === "fulfilled") {
          handleSuccess("Task has been deleted !");
        } else if (result.meta.requestStatus === "rejected") {
          handleError(
            result.payload?.response?.status,
            result.payload?.response?.data.message
          );
        }
      });
    },
    [dispatch, handleError, handleSuccess]
  );

  return {
    taskError,
    taskIsEmpty,
    taskList,
    taskPending,
    refetch,
    getTaskList,
    addTask,
    editTask,
    deleteTask,
  };
};

export default useTask;
