const baseUrl =
  "https://crudcrud.com/api/ca615cf312ef4cd284586cac17e376e5/tasks";

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

export const fetchTaskList = () =>
  fetch(baseUrl)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .then((taskList) =>
      taskList.map(({ _id, ...task }) => ({ id: _id, ...task }))
    );

export const removeTask = (id) =>
  fetch(`${baseUrl}/${id}`, {
    method: "DELETE",
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Failed to delete task");
    }
  });

export const editTask = (id, updatedTask) =>
  fetch(`${baseUrl}/${id}`, {
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
