import prisma from "../db";

export const getAllProjects = async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: req.user.id,
      },
      include: {
        projects: {
          include: {
            task: true,
          },
        },
      },
    });

    res.json({
      data: user.projects,
    });
  } catch (error) {
    res.json({
      message: error,
    });
  }
};

export const getOneProject = async (req, res) => {
  try {
    const project = await prisma.projects.findUnique({
      where: {
        id_belongsToId: {
          id: req.params.id,
          belongsToId: req.user.id,
        },
      },
      include: {
        task: true,
      },
    });
    res.json({
      data: project,
    });
  } catch (error) {
    res.json({
      message: error,
    });
  }
};

export const createProject = async (req, res) => {
  try {
    const newProject = await prisma.projects.create({
      data: {
        title: req.body.title,
        description: req.body.description,
        belongsToId: req.user.id,
      },
    });
    res.json({
      data: newProject,
    });
  } catch (error) {
    res.json({
      messge: error,
    });
  }
};

export const updateProject = async (req, res) => {
  try {
    const update = await prisma.projects.update({
      where: {
        id_belongsToId: {
          id: req.params.id,
          belongsToId: req.user.id,
        },
      },
      data: {
        title: req.body.title,
        description: req.body.description,
      },
    });
    res.json({
      data: update,
    });
  } catch (error) {
    res.json({
      message: error,
    });
  }
};
export const deleteProject = async (req, res) => {
  try {
    const deleted = await prisma.projects.delete({
      where: {
        id_belongsToId: {
          id: req.params.id,
          belongsToId: req.user.id,
        },
      },
    });
    res.json(deleted);
  } catch (error) {
    res.json({
      message: error,
    });
  }
};
