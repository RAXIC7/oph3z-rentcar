//Arrays
var CarCategories = [];

//Other things
let ScriptName = "oph3z-rentcar";

var CC = 0;
var startMovingRight = false;
var startMovingLeft = false;

//Codes

$(function() {
    window.addEventListener('message', function(event) {
        let data = event.data;
        if (data.type == "Open") {
            $(`.background`).css("display", "flex");
            GetData(data);
        } else if (data.type == "Close") {
            $(`.background`).css("display", "none");
        }
    });
});

function GetData(data) {
    locf = data.loc; // Buradaki "Loc" büyük harfle yazıldı
    CC = 0;
    CarCategories = [];

    $(".header-text").html(locf.name)

    $.each(locf.Vehicles, function (key, val) {  CarCategories[CarCategories.length] = key; });
   
    LoadCC(CC);
}

function NextCategory() {
    if(CC == CarCategories.length -1) {
      CC = 0; 
    } else {
      CC = CC + 1;
    }
    
    LoadCC(CC);
 }
 function PreviousCategory() {
    if(CC == 0) {
      CC = CarCategories.length -1; 
    } else {
      CC = CC - 1;
    }	
    
    LoadCC(CC);
 }

function LoadCC(x) {
    $(".category-item-container").html("");
    $.each(locf.Vehicles[CarCategories[x]], function(key, val) {
        var active = ``;

        if(key == 0) {
            active = `active`;
            $.post("https://"+ ScriptName +"/SCars", JSON.stringify({ name: val.name }), function(x){});
            // setPrice(val.price);
        }
        $(".category-item-container").append(`
        <div class="category-item ${active}" data-name="${val.name}" data-price="${val.price}">
            <img src="../html/car-image/${val.name}.png" class="car-img">
            <span class="ci-text">${val.label}</span>
            <span class="ci-price-text">PRICE PER HOUR</span>
            <span class="ci-price">$${val.price}</span>
            <span class="ci-rental-time-text">RENTAL TIME</span>
            <div class="time-box">
                <span class="tb-text">${val.rental}</span>
            </div>
        </div>
        `);
    });
    $(".category").html(CarCategories[x]);
}

function Rent() {
    $.post("https://"+ ScriptName +"/rent", JSON.stringify({}), function(x){ 
        if(x == true) {  
            $(`.background`).css("display", "none");
        }
    }); 
}

$(document).on("click", ".category-item", function(e) {
    $(".category-item").removeClass("active");
    setTimeout(() => {
        $(this).addClass("active");  
    }, 100);  
    $.post("https://"+ ScriptName +"/SCars", JSON.stringify({ name: $(this).data("name") }), function(x){});
    $("#test-falan").html($(this).data("name"));
})

async function moveRight(){
    startMovingRight = true;
    while (startMovingRight){
        $.post('https://'+ ScriptName +'/moveright');
        await sleep(5);
    }
    
}

function stopMovingRight(){
    startMovingRight = false;
}

async function moveLeft(){
    startMovingLeft = true;
    while (startMovingLeft){
        $.post('https://'+ ScriptName +'/moveleft');
        await sleep(5);
    }
    
}

function stopMovingLeft(){
    startMovingLeft = false;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

$(document).on('keydown', function() {
    switch(event.keyCode) {
        case 27: // ESCAPE
        $(`.background`).fadeOut(300);
        $.post('https://'+ ScriptName +'/CloseUI', JSON.stringify({}));
        break;
    }
});
