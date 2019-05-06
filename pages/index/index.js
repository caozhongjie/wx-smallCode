Page({

    /**
     * 页面的初始数据
     */
    data: {
        currentIndex: 0,
        // 首页导航列表
        navList: [],
        // 轮播图列表
        bannerList: [],
        //　视频列表
        videosList: []
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.getNavList()
        this.getBannerList()
        this.getVideosList()
    },
    getNavList: function () {
        var that = this
        wx.request({
            url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/navList',
            success: function (res) {
                if (res.data.code === 0) {
                    that.setData({
                        navList: res.data.data.navList
                    })
                } else {
                    console.log(res)
                }
            }
        })
    },
    getBannerList: function () {
        var that = this
        wx.request({
            url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/swiperList',
            success: function (res) {
                if (res.data.code === 0) {
                    that.setData({
                        bannerList: res.data.data.swiperList
                    })
                } else {
                    console.log(2)
                }
            }
        })
    },
    getVideosList: function () {
        var that = this
        wx.request({
            url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/videosList',
            success: function (res) {
                if (res.data.code === 0) {
                    that.setData({
                        videosList: res.data.data.videosList
                    })
                } else {
                    console.log(2)
                }
            }
        })
    },
    getIndex: function (event) {
        this.setData({
            currentIndex: event.currentTarget.dataset.index
        })
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})
