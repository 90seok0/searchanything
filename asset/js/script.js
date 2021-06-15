$(".clickHead").on("click", function() {
    var $input = $(".search .input").find("input");
    var text = $input.attr("placeholder");
    console.log(text);
    
    $(".search .input a .icon").addClass("on");
    if(text === '현재 무슨일') {
        $input.attr("placeholder", "1999년 8월 28일을 입력하세요.")
    } else if(text === '1999년 8월 28일') {
        $input.attr("placeholder", "함께 검색한 항목에서 임자를 클릭하세요.")
    } else if(text === '임자') {
        $input.attr("placeholder", "이전 페이지에서 무료 사주궁합을 입력하세요.")
    }
});

