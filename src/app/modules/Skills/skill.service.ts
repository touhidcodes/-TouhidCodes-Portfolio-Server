import { Prisma, Skill } from "@prisma/client";
import prisma from "../../utils/prisma";
import { paginationHelper } from "../../utils/paginationHelpers";
import { TPaginationOptions } from "../../interfaces/pagination";
import { skillSearchableFields } from "./skill.constants";

const getSkills = async (params: any, options: TPaginationOptions) => {
  const { page, limit, skip } = paginationHelper.calculatePagination(options);
  const { searchTerm, skillCategoryId, ...filterData } = params;

  const andConditions: Prisma.SkillWhereInput[] = [];

  if (params.searchTerm) {
    andConditions.push({
      OR: skillSearchableFields.map((field) => ({
        [field]: {
          contains: params.searchTerm,
          mode: "insensitive",
        },
      })),
    });
  }

  if (skillCategoryId) {
    andConditions.push({
      skillCategoryId: skillCategoryId,
    });
  }

  if (Object.keys(filterData).length > 0) {
    andConditions.push({
      AND: Object.keys(filterData).map((key) => ({
        [key]: {
          equals: (filterData as any)[key],
        },
      })),
    });
  }

  const whereConditions: Prisma.SkillWhereInput =
    andConditions.length > 0 ? { AND: andConditions } : {};

  const result = await prisma.skill.findMany({
    where: whereConditions,
    skip,
    take: limit,
    orderBy:
      options.sortBy && options.sortOrder
        ? {
            [options.sortBy]: options.sortOrder,
          }
        : {
            createdAt: "desc",
          },
    include: {
      skillCategory: true,
    },
  });

  const total = await prisma.skill.count({
    where: whereConditions,
  });

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

const createSkill = async (skillData: Skill) => {
  const result = await prisma.skill.create({
    data: skillData,
  });
  return result;
};

const updateSkill = async (skillId: string, skillData: Partial<Skill>) => {
  const result = await prisma.skill.update({
    where: {
      id: skillId,
    },
    data: skillData,
  });
  return result;
};

const deleteSkill = async (skillId: string) => {
  await prisma.skill.delete({
    where: {
      id: skillId,
    },
  });
};

export const skillServices = {
  getSkills,
  createSkill,
  updateSkill,
  deleteSkill,
};
