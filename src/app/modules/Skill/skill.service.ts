import { Skill } from "@prisma/client";
import prisma from "../../utils/prisma";

const getSkills = async () => {
  const result = await prisma.skill.findMany({
    include: {
      skillCategory: true,
    },
    orderBy: {
      name: "asc",
    },
  });

  return result;
};

const createSkill = async (skillData: Skill) => {
  const result = await prisma.skill.create({
    data: skillData,
  });
  return result;
};

const updateSkill = async (skillId: string, skillData: Partial<Skill>) => {
  const { skillCategoryId, ...data } = skillData;

  const result = await prisma.skill.update({
    where: {
      id: skillId,
    },
    data: {
      ...data,
      skillCategory: {
        connect: {
          id: skillCategoryId,
        },
      },
    },
  });

  return result;
};

const deleteSkill = async (skillId: string) => {
  const result = await prisma.skill.delete({
    where: {
      id: skillId,
    },
  });
  return result;
};

export const skillServices = {
  getSkills,
  createSkill,
  updateSkill,
  deleteSkill,
};
