$(document).ready(function() {
	/*Hiển thị phần tùy chọn khi di chuyển chuột vào button "Điện thoại" trên thanh menu*/
	$("#phone-menu-div-button").mouseover(function() {
		$("#box-option-for-phone-btn").css("display", "block");
	});
	$("#phone-menu-div-button").mouseout(function() {
		$("#box-option-for-phone-btn").css("display", "none");
	});
	$("#box-option-for-phone-btn").mouseover(function() {
		$("#box-option-for-phone-btn").css("display", "block");
	});
	$("#box-option-for-phone-btn").mouseout(function() {
		$("#box-option-for-phone-btn").css("display", "none");
	});

	/*Hiển thị phần tùy chọn khi di chuyển chuột vào button "Phụ kiện" trên thanh menu*/
	$("#accessories-div-menu-button").mouseover(function() {
		$("#box-option-for-accessories-btn").css("display", "block");
	});
	$("#accessories-div-menu-button").mouseout(function() {
		$("#box-option-for-accessories-btn").css("display", "none");
	});
	$("#box-option-for-accessories-btn").mouseover(function() {
		$("#box-option-for-accessories-btn").css("display", "block");
	});
	$("#box-option-for-accessories-btn").mouseout(function() {
		$("#box-option-for-accessories-btn").css("display", "none");
	});

	/*Hiệu ứng khi di chuột lên sản phẩm*/
	
	$(".prds").mouseover(function() {
		$(this).css("box-shadow", "0px 0px 10px 0px #a7a7a7");
		$(this).css("border-radius", "3px");
		$(this).children("h5").css("color", "blue");
		$(this).children("b").css("color", "red");
	});
	$(".prds").mouseout(function() {
		$(this).css("box-shadow", "none");
		$(this).css("border-radius", "0px");
		$(this).children("h5").css("color", "black");
		$(this).children("b").css("color", "#b10000");
	});

	/*Hiển thị các thuộc tính của bộ lọc trong phần kết quả tìm kiếm*/
	$("#display-phone-company-filter-btn").click( function() {
		$(this).css("display", "none");
		$("#undisplay-phone-company-filter-btn").css("display", "block");
		$("#phone-company-filter").css("display", "block");
	});
	$("#display-phone-price-filter-btn").click( function() {
		$(this).css("display", "none");
		$("#undisplay-phone-price-filter-btn").css("display", "block");
		$("#phone-price-filter").css("display", "block");
	});
	$("#display-phone-operating-sys-filter-btn").click( function() {
		$(this).css("display", "none");
		$("#undisplay-phone-operating-sys-filter-btn").css("display", "block");
		$("#phone-operating-sys-filter").css("display", "block");
	});

	$("#undisplay-phone-company-filter-btn").click( function() {
		$(this).css("display", "none");
		$("#display-phone-company-filter-btn").css("display", "block");
		$("#phone-company-filter").css("display", "none");
	});
	$("#undisplay-phone-price-filter-btn").click( function() {
		$(this).css("display", "none");
		$("#display-phone-price-filter-btn").css("display", "block");
		$("#phone-price-filter").css("display", "none");
	});
	$("#undisplay-phone-operating-sys-filter-btn").click( function() {
		$(this).css("display", "none");
		$("#display-phone-operating-sys-filter-btn").css("display", "block");
		$("#phone-operating-sys-filter").css("display", "none");
	});


	$("#display-acc-type-filter-btn").click( function() {
		$(this).css("display", "none");
		$("#undisplay-acc-type-filter-btn").css("display", "block");
		$("#acc-type-filter").css("display", "block");
	});
	$("#display-acc-price-filter-btn").click( function() {
		$(this).css("display", "none");
		$("#undisplay-acc-price-filter-btn").css("display", "block");
		$("#acc-price-filter").css("display", "block");
	});

	$("#undisplay-acc-type-filter-btn").click( function() {
		$(this).css("display", "none");
		$("#display-acc-type-filter-btn").css("display", "block");
		$("#acc-type-filter").css("display", "none");
	});
	$("#undisplay-acc-price-filter-btn").click( function() {
		$(this).css("display", "none");
		$("#display-acc-price-filter-btn").css("display", "block");
		$("#acc-price-filter").css("display", "none");
	});

	/*Xử lý hiển thị khi click vào nút phụ kiện, điện thoại trong khung bộ lọc*/
	$("#phone-filter-btn").click( function() {
		$(this).css("background-color", "white");
		$(this).css("color", "#05a90c");
		$(this).css("font-weight", "bold");
		$("#accessories-filter-btn").css("background-color", "white");
		$("#accessories-filter-btn").css("color", "black");
		$("#accessories-filter-btn").css("font-weight", "normal");
		$("#phone-filter").css("display", "block");
		$("#accessories-filter").css("display", "none");
	});
	$("#accessories-filter-btn").click( function() {
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
	$("#logIn-btn-option").click( function() {
		$("#logIn-form").css("display", "block");
		$("#signIn-form").css("display", "none");
	});
	$("#signIn-btn-option").click( function() {
		$("#logIn-form").css("display", "none");
		$("#signIn-form").css("display", "block");
	});


	/*Hiển thị nhập bình luận khi click vào nút trả lời*/
	$(".reply-comment-btn").click( function() {

		$(this).closest(".comment").children(".comment-input-area").css("display", "block");

		console.log($(this).closest(".comment").children(".comment-input-area"));

	});
	
});