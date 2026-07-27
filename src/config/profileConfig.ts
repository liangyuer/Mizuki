import type { ProfileConfig } from "../types/config";

// 个人资料配置
export const profileConfig: ProfileConfig = {
	avatar: "assets/images/photo.webp", // 相对于 /src 目录。如果以 '/' 开头，则相对于 /public 目录
	name: "凉月儿 如青莲",
	bio: "与你的日常，就是奇迹",
	typewriter: {
		enable: true, // 启用个人简介打字机效果
		speed: 80, // 打字速度（毫秒）
	},
	links: [
		{
			name: "Bilibili",
			icon: "fa7-brands:bilibili",
			url: "https://space.bilibili.com/524952851",
		},
		{
			name: "GitHub",
			icon: "fa7-brands:github",
			url: "https://github.com/liangyuer",
		},
		{
			name: "QQ",
			icon: "fa7-brands:qq",
			url: "https://qm.qq.com/q/dpIebYWd2w",
		},
	],
};
