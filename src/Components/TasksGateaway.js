const baseUrl =
  "https://crudcrud.com/api/cbc5f41e9d2c4ea5a8eadd86573f3ed7/tasks";

export const createTask = (taskData) =>
  fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-type": "application/json;utc-8",
    },
    body: JSON.stringify(taskData),
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Failed to create task");
    }
  });

export const fetchTaskList = () => {
  return fetch(baseUrl)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .then((taskList) => {
      return taskList.map(({ _id, ...task }) => ({ id: _id, ...task }));
    });
};

export const removeTask = (id) => {
  return fetch(`${baseUrl}/${id}`, {
    method: "DELETE",
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Failed to delete task");
    }
  });
};

export const editTask = (id, updatedTask) => {
  return fetch(`${baseUrl}/${id}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json;utc-8",
    },
    body: JSON.stringify(updatedTask),
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Failed to edit task");
    }
  });
};
