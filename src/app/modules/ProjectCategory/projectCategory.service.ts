import { ProjectCategory } from "@prisma/client";
import prisma from "../../utils/prisma";

const createProjectCategory = async (categoryData: ProjectCategory) => {
  const result = await prisma.projectCategory.create({
    data: categoryData,
  });
  return result;
};

const getProjectCategories = async () => {
  const result = await prisma.projectCategory.findMany();
  return result;
};

const deleteProjectCategory = async (categoryId: string) => {
  const result = await prisma.projectCategory.delete({
    where: {
      id: categoryId,
    },
  });
  return result;
};

export const projectCategoryServices = {
  createProjectCategory,
  getProjectCategories,
  deleteProjectCategory,
};
