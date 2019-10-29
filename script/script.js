$(document).ready(function () {
    /*Hiển thị phần tùy chọn khi di chuyển chuột vào button "Điện thoại" trên thanh menu*/
    $("#phone-menu-div-button").mouseover(function () {
        $("#box-option-for-phone-btn").css("display", "block");
    });
    $("#phone-menu-div-button").mouseout(function () {
        $("#box-option-for-phone-btn").css("display", "none");
    });
    $("#box-option-for-phone-btn").mouseover(function () {
        $("#box-option-for-phone-btn").css("display", "block");
    });
    $("#box-option-for-phone-btn").mouseout(function () {
        $("#box-option-for-phone-btn").css("display", "none");
    });

    /*Hiển thị phần tùy chọn khi di chuyển chuột vào button "Phụ kiện" trên thanh menu*/
    $("#accessories-div-menu-button").mouseover(function () {
        $("#box-option-for-accessories-btn").css("display", "block");
    });
    $("#accessories-div-menu-button").mouseout(function () {
        $("#box-option-for-accessories-btn").css("display", "none");
    });
    $("#box-option-for-accessories-btn").mouseover(function () {
        $("#box-option-for-accessories-btn").css("display", "block");
    });
    $("#box-option-for-accessories-btn").mouseout(function () {
        $("#box-option-for-accessories-btn").css("display", "none");
    });

    /*Hiệu ứng khi di chuột lên sản phẩm*/

    $(".prds").mouseover(function () {
        $(this).css("box-shadow", "0px 0px 10px 0px #a7a7a7");
        $(this).css("border-radius", "3px");
        $(this).children("h5").css("color", "blue");
        $(this).children("b").css("color", "red");
    });
    $(".prds").mouseout(function () {
        $(this).css("box-shadow", "none");
        $(this).css("border-radius", "0px");
        $(this).children("h5").css("color", "black");
        $(this).children("b").css("color", "#b10000");
    });

    /*Hiển thị các thuộc tính của bộ lọc trong phần kết quả tìm kiếm*/
    $("#display-phone-company-filter-btn").click(function () {
        $(this).css("display", "none");
        $("#undisplay-phone-company-filter-btn").css("display", "block");
        $("#phone-company-filter").css("display", "block");
    });
    $("#display-phone-price-filter-btn").click(function () {
        $(this).css("display", "none");
        $("#undisplay-phone-price-filter-btn").css("display", "block");
        $("#phone-price-filter").css("display", "block");
    });
    $("#display-phone-operating-sys-filter-btn").click(function () {
        $(this).css("display", "none");
        $("#undisplay-phone-operating-sys-filter-btn").css("display", "block");
        $("#phone-operating-sys-filter").css("display", "block");
    });

    $("#undisplay-phone-company-filter-btn").click(function () {
        $(this).css("display", "none");
        $("#display-phone-company-filter-btn").css("display", "block");
        $("#phone-company-filter").css("display", "none");
    });
    $("#undisplay-phone-price-filter-btn").click(function () {
        $(this).css("display", "none");
        $("#display-phone-price-filter-btn").css("display", "block");
        $("#phone-price-filter").css("display", "none");
    });
    $("#undisplay-phone-operating-sys-filter-btn").click(function () {
        $(this).css("display", "none");
        $("#display-phone-operating-sys-filter-btn").css("display", "block");
        $("#phone-operating-sys-filter").css("display", "none");
    });


    $("#display-acc-type-filter-btn").click(function () {
        $(this).css("display", "none");
        $("#undisplay-acc-type-filter-btn").css("display", "block");
        $("#acc-type-filter").css("display", "block");
    });
    $("#display-acc-price-filter-btn").click(function () {
        $(this).css("display", "none");
        $("#undisplay-acc-price-filter-btn").css("display", "block");
        $("#acc-price-filter").css("display", "block");
    });

    $("#undisplay-acc-type-filter-btn").click(function () {
        $(this).css("display", "none");
        $("#display-acc-type-filter-btn").css("display", "block");
        $("#acc-type-filter").css("display", "none");
    });
    $("#undisplay-acc-price-filter-btn").click(function () {
        $(this).css("display", "none");
        $("#display-acc-price-filter-btn").css("display", "block");
        $("#acc-price-filter").css("display", "none");
    });

    /*Xử lý hiển thị khi click vào nút phụ kiện, điện thoại trong khung bộ lọc*/
    $("#phone-filter-btn").click(function () {
        $(this).css("background-color", "white");
        $(this).css("color", "#05a90c");
        $(this).css("font-weight", "bold");
        $("#accessories-filter-btn").css("background-color", "white");
        $("#accessories-filter-btn").css("color", "black");
        $("#accessories-filter-btn").css("font-weight", "normal");
        $("#phone-filter").css("display", "block");
        $("#accessories-filter").css("display", "none");
    });
    $("#accessories-filter-btn").click(function () {
        $(this).css("background-color", "white");
        $(this).css("color", "#05a90c");
        $(this).css("font-weight", "bold");
        $("#phone-filter-btn").css("background-color", "white");
        $("#phone-filter-btn").css("color", "black");
        $("#phone-filter-btn").css("font-weight", "normal");
        $("#phone-filter").css("display", "none");
        $("#accessories-filter").css("display", "block");
    });

    /*Xử lý khung đăng nhập, đăng ký*/
    $("#logIn-btn-option").click(function () {
        $("#logIn-form").css("display", "block");
        $("#signIn-form").css("display", "none");
    });
    $("#signIn-btn-option").click(function () {
        $("#logIn-form").css("display", "none");
        $("#signIn-form").css("display", "block");
    });

    /*function canSubmitLogIn() {
        var canSubmit = true;
        var username = $("#username-input-logIn").val();
        var password = $("#password-input-logIn").val();

        if(username == "") {
            canSubmit = false;
            $("#error-username-logIn").css("display", "block");
        }
        if(password == "") {
            canSubmit = false;
            $("#error-password-logIn").css("display", "block");
        }

        return canSubmit
    }

    function canSubmitSignIn() {
        var canSubmit = true;
        var username = $("#username-input-signIn").val();
        var password = $("#password-input-signIn").val();
        var passwordAgain = $("#password-input-signIn-again").val();
        if(username == "") {
            canSubmit = false;
            $("#error-username-signIn").css("display", "block");
        }
        if(password == "") {
            canSubmit = false;
            $("#error-password-logIn").css("display", "block");
        }
        if(passwordAgain == "") {
            canSubmit = false;
            $("#error-password-signIn-again").css("display", "block");
        }

        return canSubmit;
    }*/


    /*Hiển thị nhập bình luận khi click vào nút trả lời*/
    $(".reply-comment-btn").click(function () {

        $(this).closest(".comment").children(".comment-input-area").css("display", "block");

        console.log($(this).closest(".comment").children(".comment-input-area"));

    });

    /*Xử lý phần thanh toán mua hàng*/
    var prdsAmount = Number($("#prd-amount").text());
    if (prdsAmount == 1) {
        $("#plus-prd-btn").css({
            "cursor": "pointer",
            "color": "#288ad6"  //Blue
        });
        $("#minus-prd-btn").css({
            "cursor": "default",
            "color": "#afafaf"  //Gray
        });
    } else if (prdsAmount > 1) {
        $("#plus-prd-btn").css({
            "cursor": "pointer",
            "color": "#288ad6"  //Blue
        });
        $("#minus-prd-btn").css({
            "cursor": "pointer",
            "color": "#288ad6"  //Gray
        });
    }

    $("#plus-prd-btn").click(function () {
        var n = Number($("#prd-amount").text()) + 1;
        $("#prd-amount").text(n);
        if (n > 1) {
            $("#plus-prd-btn").css({
                "cursor": "pointer",
                "color": "#288ad6"  //Blue
            });
            $("#minus-prd-btn").css({
                "cursor": "pointer",
                "color": "#288ad6"  //Gray
            });
        } else if (n == 1) {
            $("#plus-prd-btn").css({
                "cursor": "pointer",
                "color": "#288ad6"  //Blue
            });
            $("#minus-prd-btn").css({
                "cursor": "default",
                "color": "#afafaf"  //Gray
            });
        }
    });
    $("#minus-prd-btn").click(function () {
        var n = Number($("#prd-amount").text()) - 1;
        if (n > 0) {
            $("#prd-amount").text(n);
            if (n > 1) {
                $("#plus-prd-btn").css({
                    "cursor": "pointer",
                    "color": "#288ad6"  //Blue
                });
                $("#minus-prd-btn").css({
                    "cursor": "pointer",
                    "color": "#288ad6"  //Gray
                });
            } else if (n == 1) {
                $("#plus-prd-btn").css({
                    "cursor": "pointer",
                    "color": "#288ad6"  //Blue
                });
                $("#minus-prd-btn").css({
                    "cursor": "default",
                    "color": "#afafaf"  //Gray
                });
            }
        }
        
    });



});