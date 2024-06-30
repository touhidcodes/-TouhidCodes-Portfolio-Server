// skillCategory.service.ts
import { SkillCategory } from "@prisma/client";
import prisma from "../../utils/prisma";

const createSkillCategory = async (categoryData: SkillCategory) => {
  const result = await prisma.skillCategory.create({
    data: categoryData,
  });
  return result;
};

const getSkillCategories = async () => {
  const result = await prisma.skillCategory.findMany();
  return result;
};

const updateSkillCategory = async (
  categoryId: string,
  categoryData: Partial<SkillCategory>
) => {
  const result = await prisma.skillCategory.update({
    where: {
      id: categoryId,
    },
    data: categoryData,
  });
  return result;
};

const deleteSkillCategory = async (categoryId: string) => {
  await prisma.$transaction(async (transaction) => {
    await transaction.skill.deleteMany({
      where: {
        skillCategoryId: categoryId,
      },
    });

    await transaction.skillCategory.delete({
      where: {
        id: categoryId,
      },
    });
  });
};

export const skillCategoryServices = {
  createSkillCategory,
  getSkillCategories,
  updateSkillCategory,
  deleteSkillCategory,
};
