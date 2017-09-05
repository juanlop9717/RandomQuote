$(document).ready(function(){

	var all = $("body");
	var newo = $("#new");
	var quote =  $("#quote");
	var autor = $("#autor")
	var bgcolors = ["MediumBlue", "SeaGreen ","Tomato ","#2980b9","#34495e","green","coral","#e67e22","CadetBlue","Chocolate","DarkSlateGray","DarkOliveGreen ","DarkGreen","DarkRed","DarkGray","DarkGoldenRod","DeepSkyBlue"];
	var i = 0;
	var quotes = ["For 50 years, WWF has been protecting the future of nature. The world's leading conservation organization, WWF works in 100 countries and is supported by 1.2 million members in the United States and close to 5 million globally.",
	"I have always imagined that Paradise will be a kind of library. ","I love you the more in that I believe you had liked me for my own sake and for nothing else. ",
	"But man is not made for defeat. A man can be destroyed but not defeated. ","When you reach the end of your rope, tie a knot in it and hang on. ","There is nothing permanent except change. ",
	"You cannot shake hands with a clenched fist.","Let us sacrifice our today so that our children can have a better tomorrow.", 
	"It is better to be feared than loved, if you cannot be both. ", "The most difficult thing is the decision to act, the rest is merely tenacity. The fears are paper tigers. You can do anything you decide to do. You can act to change and control your life; and the procedure, the process is its own reward. ",
	"Do not mind anything that anyone tells you about anyone else. Judge everyone and everything for yourself. ","Learning never exhausts the mind. ",
	" All that we see or seem is but a dream within a dream. "
	];

	var autors = ["WWF","Jorge Luis Borges","John Keats","Ernest Hemingway","Franklin Roosevelt","Heraclitus","Ghandi","A. P. J. Abdul Kalam ", "Niccolo Machiavelli ","Amelia Earhart ","Henry James ","Leonardo Da Vinci","Edgar Allan Poe"];

	// Numero random <10

	var numero = 0; 
	var numero2 = 0;
	console.log(quotes.length)
	newo.click(function(){
			numero = Math.floor(Math.random()*quotes.length);	
			numero2 = Math.floor(Math.random()*bgcolors.length)
			all.animate({
				opacity: 0
			},200,function(){
				all.css({
				background: bgcolors[numero2]
			}).animate({
					opacity: 1
				});
			});
			


			quote.animate({
				opacity: 0
			},200,function(){
				quote.text('"'+quotes[numero]+'"').animate({
					opacity: 1
				})
				
			});

			quote.css({
				color: bgcolors[numero2]
			},200);

			autor.css({
				color: bgcolors[numero2]
			},200)
			
			
					
			autor.animate({
				opacity: 0
			},200,function(){
				autor.text(autors[numero]).animate({
					opacity: 1
				})
				
			});

     });
})

