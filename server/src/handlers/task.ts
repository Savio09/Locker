import prisma from "../db";

export const getAllTasks = async (req, res) => {
  const project = await prisma.projects.findMany({
    where: {
      belongsToId: req.user.id,
      id: req.params.id,
    },
    include: {
      task: true,
    },
  });
  res.json({
    data: project[0].task,
  });
};

export const createTask = async (req, res) => {
  const specificProject = await prisma.projects.findUnique({
    where: {
      id: req.params.id,
      belongsToId: req.user.id,
    },
  });

  console.log(specificProject);

  if (!specificProject) {
    return res.json({
      message: "You don't have permission to change this file.",
    });
  }
  const task = await prisma.task.create({
    data: {
      task: req.body.task,
      taskId: specificProject.id,
    },
  });

  res.json({
    data: task.task,
  });
  //   try {
  //     const task = await prisma.task.create({
  //       data: {
  //         task: req.body.task,
  //       },
  //     });
  //     res.json({
  //       data: task,
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
};

export const deleteTask = async (req, res) => {
  try {
    const specificProject = await prisma.projects.findUnique({
      where: {
        id: req.params.proj,
        belongsToId: req.user.id,
      },
      include: {
        task: true,
      },
    });

    if (!specificProject) {
      return res.status(403).json({
        error: "You do not have the permission to write this file",
      });
    }
    const taskToDelete = specificProject.task.find(
      (task) => task.id === req.params.id
    );
    if (!taskToDelete) {
      return res.status(404).json({
        error: "Task not found",
      });
    }
    const deleted = await prisma.task.delete({
      where: {
        id: taskToDelete.id,
      },
    });
    res.status(200).json({
      data: deleted,
    });
  } catch (err) {
    res.json({
      error: err.message,
    });
  }
};
