import type { FriendLink, FriendsPageConfig } from "../types/config";

// 可以在src/content/spec/friends.md中编写友链页面下方的自定义内容

// 友链页面配置
export const friendsPageConfig: FriendsPageConfig = {
	// 页面标题，如果留空则使用 i18n 中的翻译
	title: "",

	// 页面描述文本，如果留空则使用 i18n 中的翻译
	description: "",

	// 是否显示底部自定义内容（friends.mdx 中的内容）
	showCustomContent: true,

	// 是否显示评论区，需要先在commentConfig.ts启用评论系统
	showComment: true,

	// 是否开启随机排序配置，如果开启，就会忽略权重，构建时进行一次随机排序
	randomizeSort: false,
};

// 友链配置
export const friendsConfig: FriendLink[] = [
	{
		title: "Xzy 的未知屋",
		imgurl:
			"https://cdn.luogu.com.cn/upload/usericon/1062508.png",
		desc: "Xzy の Profile",
		siteurl: "https://xzy404.me/",
		tags: ["Blog"],
		weight: 10, // 权重，数字越大排序越靠前
		enabled: true, // 是否启用
	},
	{
		title: "zhangyimin12345 的博客",
		imgurl: "https://cdn.luogu.com.cn/upload/usericon/1393230.png",
		desc: "zhangyimin12345 的博客",
		siteurl: "https://zym2013.github.io/",
		tags: ["Blog"],
		weight: 9,
		enabled: true,
	},
	{
		title: "tsh_qwq",
		imgurl: "https://cdn.luogu.com.cn/upload/usericon/1485346.png",
		desc: "awa",
		siteurl: "https://tsh1203.github.io/web/",
		tags: ["Blog"],
		weight: 8,
		enabled: true,
	},
	{
		title: "hsl-beat 的博客",
		imgurl: "https://cdn.luogu.com.cn/upload/usericon/816987.png",
		desc: "hsl-beat 的博客",
		siteurl: "https://hsl-beat.github.io/",
		tags: ["Blog"],
		weight: 7,
		enabled: true,
	},
];

// 获取启用的友链并进行排序
export const getEnabledFriends = (): FriendLink[] => {
	const friends = friendsConfig.filter((friend) => friend.enabled);

	if (friendsPageConfig.randomizeSort) {
		return friends.sort(() => Math.random() - 0.5);
	}

	return friends.sort((a, b) => b.weight - a.weight);
};
