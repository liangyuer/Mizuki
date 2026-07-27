// Skill data configuration file
// Used to manage data for the skill display page

export interface Skill {
	id: string;
	name: string;
	description: string;
	icon: string; // Iconify icon name
	category: "frontend" | "backend" | "database" | "tools" | "other";
	level: "beginner" | "intermediate" | "advanced" | "expert";
	experience: {
		years: number;
		months: number;
	};
	projects?: string[]; // Related project IDs
	certifications?: string[];
	color?: string; // Skill card theme color
}

export const skillsData: Skill[] = [
	{
		id: "drive",
		name: "C1 机动车驾驶证",
		description:
			"用于驾驶手动挡小汽车的驾驶证明",
		icon: "mdi:drivers-license-outline",
		category: "other",
		level: "beginner",
		experience: { years: 0, months: 6 },
		projects: [],
		color: "#F7DF1E",
	},
	{
		id: "cet4",
		name: "CET-4 大学英语四级",
		description:
			"大学英语四级考试 (CET-4)，具备基本的英语听说读写能力，能够进行日常英语交流与阅读",
		icon: "mdi:translate",
		category: "other",
		level: "intermediate",
		experience: { years: 0, months: 4 },
		projects: [],
		certifications: ["CET-4 (2026.03)"],
		color: "#4A90D9",
	},
	{
		id: "ncfe-ms-office",
		name: "计算机二级 MS Office",
		description:
			"全国计算机等级考试二级 MS Office 高级应用，熟练掌握 Word、Excel、PowerPoint 的高级功能与办公自动化",
		icon: "mdi:microsoft-office",
		category: "tools",
		level: "intermediate",
		experience: { years: 0, months: 2 },
		projects: [],
		certifications: ["NCRE Level 2 (2026.05)"],
		color: "#D83B01",
	},
];
