$(document).ready(function(){
	$("body").append('<button type="button" class="btn btn-success register">Register Now!!!</button>');
	var addForm = $("body").append('<div class="container"><div class="row"><div class="col-sm-10 col-lg-offset-1 lastDiv"></div></div></div>');
		$(".lastDiv").append('<form action="" class="form-inline"><div class="form-group"><input type="text" class="form-control form-control-lg color" placeholder="First Name"/></div><div class="form-group"><input type="text" class="form-control form-control-lg color" placeholder="Last Name"/></div></form>');
		$(".lastDiv").append('<form action=""><div class="form-group mainDiv"><input type="email" class="form-control form-control-lg divStyle" placeholder="New Email"/><form></div>');
		$(".mainDiv").append('<input type="email" class="form-control form-control-lg divStyle" placeholder="Re-enter Email"/>');
		$(".mainDiv").append('<input type="password" class="form-control form-control-lg divStyle" placeholder="New Password"/>');
	$(".container").append('<button type="button" class="btn btn-success-outline">Sing Up!</button>');
	  $(".register").click(function(){
        $(".container").toggle(1000);
    });
});