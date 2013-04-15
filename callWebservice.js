$.getJSON({
                    type: "POST", //访问WebService使用Post方式请求
                    contentType: "application/json;utf-8", //WebService 会返回Json类型
                    url: "/API/Service/UserValidate.asmx/UserLogout", //调用WebService
                    data: "{}", //Email参数
                    dataType: 'json',
                    beforeSend: function(x) { x.setRequestHeader("Content-Type", "application/json; charset=utf-8"); },
                    success: function(result) { //回调函数，result，返回值
                        $("#userloging").hide();
                        if (result.d > 0) {
                            $("#userloginsucced").hide();
                            $("#userloginbox").show();
                        }
                    }
                });