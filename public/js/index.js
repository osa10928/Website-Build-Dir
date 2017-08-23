$(document).ready(function(){
	landingPage.animateEntry()
	$('nav button').click(navbar.adjustName)
	$('.about-category').click(function(){
		aboutPage.loadArticle(this)
	})
})

//text/javascript" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/85807/typed.js"

var navbar = {
	adjustName: function(){
		$('nav a#name').toggleClass("text-center")
		$('a#name').toggleClass("self-center")
	}
}

var page = {
	fadePageIn: function(){
		$('body').animate({
			opacity: '1'
		}, 1000)
	}
}


var landingPage = {

	animateEntry: function(){

		page.fadePageIn()
		setTimeout(function(){
		    $('.navbar').transition({
			    y: '0px'
		    }, 750);
		    setTimeout(function(){
			    $('#me-suited').transition({
				    opacity: '1', x: '0px'
			    }, 750);
			    setTimeout(function(){
				    landingPage.startTyping();
			    }, 1500)
		    }, 450)
	    }, 1000)
	},

	startTyping: function(){
		var script = ['Hello! My name is Stephen Agwu.', "I'm a budding UX/UI Frontend Webdeveloper.", "I love challenging and expanding my javascript skill while creating sleek efficient design.", "I'm self-taught, ^1000 self determined, ^1000 and SELF-MADE! ^2000", "Use the navigation below to find out more about me!"]
		$('#typing-container').animate({
			height: '2%',
			width: '60%'
		}, 1000).animate({
			height: '80%',
			padding: '3%'
		}, 1000)
		setTimeout(function(){
			$('#typing').typed({
				strings: script,
				typeSpeed: 30,
				backSpeed: -10,
				smartBackspace: true,
				backDelay: 1000,
				showCursor: false
			})
			setTimeout(function(){
				landingPage.endTyping()
			}, 40000)
		}, 2500)
	},

	endTyping: function(){
		$('#typing').text('')
		console.log($('#typing').text())
		$('#typing-container').animate({
			padding: '0%',
			height: '2%'
		}, 1000).animate({
			width: '0%',
			height: '0%'
		}, 1000)
	}
}

var aboutPage = {

	loadArticle: function(el){
		movement.fadeOutBottom($('main'), 300)
		setTimeout(function(){
			$('main').children().hide()
			//console.log($('main').find())
			$("#"+el.id+"-article").show()
			//console.log($("#"+el.id+"-article"))
			movement.fadeInTop($('main'), 1000)
		}, 300)
	}
}



////////////////////
var movement = {
	fadeInRight: function(element, sec){
		element.transition({x: "25%"}, 0)
		element.transition({x: "0", opacity: '0'}, sec)
	},

	fadeInLeft: function(element, sec){
		element.transition({x: "-25%"}, 0)
		element.transition({x: "0", opacity: '1'}, sec)
	},

	fadeOutRight: function(element){
		element.transition({x: '25%', opacity: '0'})
	},

	fadeOutLeft: function(element){
		element.transition({x: '-25%', opacity: '0'})
	},

	fadeInTop: function(element, sec){
		element.transition({y: "-15%"}, 0)
		element.transition({y: "0", opacity: '1'}, sec)
	},

	fadeInBottom: function(element, sec){
		element.transition({y: "15%"}, 0)
		element.transition({y: "0", opacity: '1'}, sec)
	},

	fadeOutTop: function(element, sec){
		element.transition({y: '-25%', opacity: '0'}, sec)
	},

	fadeOutBottom: function(element, sec){
		element.transition({y: '25%', opacity: '0'}, sec)
	}
}

