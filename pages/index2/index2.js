// pages/index2/index2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    videoInfo: {},
    commentList: [],
    otherVideoList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getVideosDetail(options.id)
    this.getVideosother(options.id)
    this.getVideosComment(options.id)
  },
  // 视频详情
  getVideosDetail: function (id) {
    var that = this
    wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/videoDetail?id='+ id,
      success: function (res) {
        console.log(res)
        if (res.data.code === 0) {
          that.setData({
            videoInfo : res.data.data.videoInfo
          })
        } else {
          console.log(2)
        }
      }
    })
  },
  // 推荐视频
  getVideosother: function (id) {
    var that = this
    wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/othersList?id='+ id,
      success: function (res) {
        console.log(res)
        if (res.data.code === 0) {
          that.setData({
            otherVideoList: res.data.data.othersList
          })
        } else {
          console.log(2)
        }
      }
    })
  },
  // 评论列表
  getVideosComment: function (id) {
    var that = this
    wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/commentsList?id='+ id,
      success: function (res) {
        console.log(res)
        if (res.data.code === 0) {
          that.setData({
            commentList : res.data.data.commentData.commentList
          })
        } else {
          console.log(2)
        }
      }
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
