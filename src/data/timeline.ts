// Timeline data configuration file
// Used to manage data for the timeline page

export interface TimelineItem {
	id: string;
	title: string;
	description: string;
	type: "education" | "work" | "project" | "achievement";
	startDate: string;
	endDate?: string; // If empty, it means current
	location?: string;
	organization?: string;
	position?: string;
	skills?: string[];
	achievements?: string[];
	links?: {
		name: string;
		url: string;
		type: "website" | "certificate" | "project" | "other";
	}[];
	icon?: string; // Iconify icon name
	color?: string;
	featured?: boolean;
}

export const timelineData: TimelineItem[] = [
	{
		id: "current-study",
		title: "持续学习刷绩点",
		description:
			"刷刷绩点，保保研研.",
		type: "education",
		startDate: "2025-09-01",
		location: "威海",
		organization: "山东大学",
		skills: [],
		achievements: [
			"",
			"",
			"",
		],
		icon: "material-symbols:school",
		color: "#059669",
		featured: true,
	},
	{
		id: "drive-license",
		title: "考取驾照",
		description:
			"考取C1驾驶证",
		type: "achievement",
		startDate: "2025-06-15",
		endDate: "2025-08-20",
		location: "周口",
		organization: "新潮驾校",
		skills: [],
		achievements: [
			"license",
			"",
			"",
		],
		icon: "mdi:drivers-license-outline",
		color: "#1e56b7ff",
		featured: true,
	},
	{
		id: "cet-4",
		title: "获得英语四级证书",
		description:
			"通过大学英语四级考试 (CET-4)，具备基本的英语听说读写能力",
		type: "achievement",
		startDate: "2025-12-01",
		endDate: "2025-12-01",
		location: "威海",
		organization: "山东大学",
		skills: [],
		achievements: [
			"CET-4 通过",
		],
		icon: "mdi:translate",
		color: "#4A90D9",
		featured: true,
	},
	{
		id: "semester-1-gpa",
		title: "第一学期绩点 3.9",
		description:
			"大一上学期取得平均绩点 3.9 的好成绩，为保研打下坚实基础",
		type: "achievement",
		startDate: "2026-01-01",
		endDate: "2026-01-01",
		location: "威海",
		organization: "山东大学",
		skills: [],
		achievements: [
			"GPA 3.9",
		],
		icon: "mdi:chart-bar",
		color: "#059669",
		featured: true,
	},
	{
		id: "xuechuangbei-2026",
		title: "学创杯综合模拟山东省二等奖",
		description:
			`参加"学创杯"全国大学生创业综合模拟大赛，获得山东省二等奖`,
		type: "achievement",
		startDate: "2026-05-01",
		endDate: "2026-05-01",
		location: "山东",
		organization: "学创杯组委会",
		skills: [],
		achievements: [
			"山东省二等奖",
		],
		icon: "mdi:trophy",
		color: "#F59E0B",
		featured: true,
	},
	{
		id: "ms-office-cert",
		title: "获得 MS Office 高级应用证书",
		description:
			"通过全国计算机等级考试二级 MS Office 高级应用，熟练掌握 Word、Excel、PowerPoint",
		type: "achievement",
		startDate: "2026-06-01",
		endDate: "2026-06-01",
		location: "威海",
		organization: "教育部教育考试院",
		skills: [],
		achievements: [
			"NCRE 二级通过",
		],
		icon: "mdi:microsoft-office",
		color: "#D83B01",
		featured: true,
	},
	{
		id: "semester-2-gpa",
		title: "第二学期绩点 3.823",
		description:
			"大一下学期保持优异成绩，平均绩点 3.823，持续稳步前进",
		type: "achievement",
		startDate: "2026-07-01",
		endDate: "2026-07-01",
		location: "威海",
		organization: "山东大学",
		skills: [],
		achievements: [
			"GPA 3.823",
		],
		icon: "mdi:chart-line",
		color: "#059669",
		featured: true,
	},
	{
		id: "banking-cert",
		title: "考取银行从业证",
		description:
			"正在备考银行业专业人员职业资格考试，系统学习银行业务知识与法律法规",
		type: "education",
		startDate: "2026-07-01",
		location: "威海",
		organization: "山东大学",
		skills: [],
		achievements: [],
		icon: "mdi:bank",
		color: "#8B5CF6",
		featured: true,
	},
];

// Get timeline statistics
export const getTimelineStats = () => {
	const total = timelineData.length;
	const byType = {
		education: timelineData.filter((item) => item.type === "education").length,
		work: timelineData.filter((item) => item.type === "work").length,
		project: timelineData.filter((item) => item.type === "project").length,
		achievement: timelineData.filter((item) => item.type === "achievement")
			.length,
	};

	return { total, byType };
};

// Get timeline items by type
export const getTimelineByType = (type?: string) => {
	if (!type || type === "all") {
		return timelineData.sort(
			(a, b) =>
				new Date(b.startDate).getTime() - new Date(a.startDate).getTime(),
		);
	}
	return timelineData
		.filter((item) => item.type === type)
		.sort(
			(a, b) =>
				new Date(b.startDate).getTime() - new Date(a.startDate).getTime(),
		);
};

// Get featured timeline items
export const getFeaturedTimeline = () => {
	return timelineData
		.filter((item) => item.featured)
		.sort(
			(a, b) =>
				new Date(b.startDate).getTime() - new Date(a.startDate).getTime(),
		);
};

// Get current ongoing items
export const getCurrentItems = () => {
	return timelineData.filter((item) => !item.endDate);
};

// Calculate total work experience
export const getTotalWorkExperience = () => {
	const workItems = timelineData.filter((item) => item.type === "work");
	let totalMonths = 0;

	workItems.forEach((item) => {
		const startDate = new Date(item.startDate);
		const endDate = item.endDate ? new Date(item.endDate) : new Date();
		const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
		const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30));
		totalMonths += diffMonths;
	});

	return {
		years: Math.floor(totalMonths / 12),
		months: totalMonths % 12,
	};
};
