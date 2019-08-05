module.exports = {
    base: '/blog/',
    title: 'Duziteng',
    description: 'This is one demo about Vuepress blog demo',

    themeConfig: {
        //导航栏

        // 你的GitHub仓库，请正确填写

        repo: 'https://github.com/duyi0518/blog/',
        // 自定义仓库链接文字。
        repoLabel: 'My GitHub',
        nav: [
            {text: 'Home', link: '/'},
            {text: 'FirstBlog', link: '/blog/FirstBlog.md'},
            {text: 'SecondBlog', link: '/blog/SecondBlog.md'},
            { text: 'github',        // 这里是下拉列表展现形式。
                items: [
                    // { text: 'Zenki-nav导航', link: 'https://nav.zenki.cn/'},
                    { text: 'SSO-单点登录', link: 'https://sso.zenki.cn/homePeo'},
                    { text: 'LB-域名负载系统', link: 'https://lb.zenki.cn/homeAdmin/domainAdmin'},
                    { text: 'PMS-权限角色系统', link: 'https://pms.zenki.cn/homeAdmin/personnel'},
                    { text: 'T-HR-人力资源系统', link: 'https://t-hr.zenki.cn/homeAdmin/personnelAdmin'},
                    { text: 'DOLPHIN-项目部署系统', link: 'https://dolphin.zenki.cn/homeAdmin/defaultPage'},
                ]
            }
        ],
        serviceWorker: true, //PWA配置


        //侧边栏
        sidebar: [
            ['/', '首页'],
            ['/blog/FirstBlog.md', 'Earth-FirstBlog'],
            ['/blog/SecondBlog.md', 'SeaWave-SecondBlog'],
        ],

    }
}
