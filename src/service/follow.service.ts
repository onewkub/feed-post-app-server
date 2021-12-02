import prisma from "../utils/prisma";

// Service สร้างเพื่อ Action การกด Follow ของผุ้ใช้

const followUser = async (userId: string, target: string) => {

};

// Service สร้างเพื่อ Action การกด UnFollow ของผุ้ใช้

const unFollowUser = async (userId: string, target: string) => {

};

const followingService = { followUser, unFollowUser };

export default followingService;
