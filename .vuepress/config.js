module.exports = {
    base: '/blog/',
    title: 'blog',
    description: 'Vuepress blog demo',

    themeConfig: {
        //导航栏

        // 你的GitHub仓库，请正确填写

        repo: 'https://github.com/duyi0518/blog',
        // 自定义仓库链接文字。
        repoLabel: 'My GitHub',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'FirstBlog', link: './blog/FirstBlog.md' },
        ],
        // serviceWorker: true, //PWA配置


        //侧边栏
        sidebar: [
            ['/', '首页'],
            ['/blog/FirstBlog.md', '我的第一篇博客']
        ],

    }
};
