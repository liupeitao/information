function getCookie(name) {
    var r = document.cookie.match("\\b" + name + "=([^;]*)\\b");
    return r ? r[1] : undefined;
}


$(function () {
    $(".pic_info").submit(function (e) {
        e.preventDefault()

        //TODO 上传头像
        // 上传头像,表单提交和其他提交方式不一样
        // /*
        $(this).ajaxSubmit({
            url: "/user/pic_info",
            type: "POST",
            headers: {
                "X-CSRFToken": getCookie('csrf_token')
            },
            success: function (resp) {
                if (resp.errno == "0") {
                    $(".now_user_pic").attr("src", resp.data.avatar_url)
                    $(".user_center_pic>img", parent.document).attr("src", resp.data.avatar_url)
                    $(".user_login>img", parent.document).attr("src", resp.data.avatar_url)
                    alert('修改成功！');
                }else {
                    alert(resp.errmsg)
                }
            }
        })
        // */
    })
})