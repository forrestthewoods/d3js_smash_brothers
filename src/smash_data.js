var smash_data = {
    "n64" : {
        "dates" : [ 
            "March '08",
            "Sept, '09",
            "Sept '11"
        ],

        "groups" : {
            "all" : [   "Pikachu", "Kirby", "Ness", "Fox", "Captain Falcon", "Jigglypuff",
                        "Mario", "Yoshi", "Donkey Kong", "Luigi", "Samus", "Link"
            ],
        },

        "tiers" : {
            "March '08" : [
                { "title": "S", "range": [1,3], "color":"red" },
                { "title": "A", "range": [4,6], "color":"yellow" },
                { "title": "B", "range": [7,9], "color":"green" },
                { "title": "C", "range": [10,12], "color":"blue" }
            ],
            "Sept, '09" : [
                { "title": "S", "range": [1,2], "color":"red" },
                { "title": "A", "range": [3,5], "color":"yellow" },
                { "title": "B", "range": [6,9], "color":"green" },
                { "title": "C", "range": [10,12], "color":"blue" }
            ],
            "Sept '11" : [
                { "title": "S", "range": [1,1], "color":"red" },
                { "title": "A", "range": [2,3], "color":"orange" },
                { "title": "B", "range": [4,5], "color":"yellow" },
                { "title": "C", "range": [6,9], "color":"green" },
                { "title": "D", "range": [10,12], "color":"blue" }
            ]
        },

        "characters" : [
            { "name":"Pikachu", "rankings":[1,1,1], "color":"#ffed6f" },
            { "name":"Kirby", "rankings":[2,3,2], "color":"#FFA8BB" },
            { "name":"Ness", "rankings":[3,8,9], "color":"#FF5005" },
            { "name":"Fox", "rankings":[4,2,3], "color":"#FFA405" },
            { "name":"Captain Falcon", "rankings":[5,4,4], "color":"#003380" },
            { "name":"Jigglypuff", "rankings":[6,9,8], "color":"#fb9a99" },
            { "name":"Mario", "rankings":[7,5,5], "color":"#FF0010" },
            { "name":"Yoshi", "rankings":[8,6,6], "color":"#005C31" },
            { "name":"Donkey Kong", "rankings":[9,7,7], "color":"#b15928" },
            { "name":"Luigi", "rankings":[10,10,11], "color":"#2BCE48" },
            { "name":"Samus", "rankings":[11,12,12], "color":"#990000" },
            { "name":"Link", "rankings":[12,11,10], "color":"#00998F" },
        ]
    },
    

    "gamecube" : {

        // Non-even distribution of dates represented by ranks
        "dates" : [
            "Oct '02",
            "Dec '02",
            "June '03",
            "July '03",
            "Oct '03",
            "April '04",
            "March '05",
            "July '06",
            "Oct '08",
            "Sept '10",
            "Dec '10",
            "July '13"
        ],

        // Groupings of characters to enable display of subsets
        "groups":{
            "all" : [ "Sheik", "Falco", "Fox", "Marth", "Samus", "Dr. Mario",
                      "Ganondorf", "Young Link", "Roy", "Kirby", "Game & Watch",
                      "Pichu", "Bowser", "Link", "Pikachu", "Luigi", "Ness", 
                      "Yoshi", "Mario", "Zelda", "Ice Climbers", "Jigglypuff",
                      "Peach", "Captain Falcon", "Donkey Kong", "Mew Two"
                       ],

            "hall_of_fame": [ "Sheik", "Falco", "Fox", "Marth" ],
            
            "steady": [ "Samus", "Dr. Mario", "Ganondorf", "Game & Watch", "Pichu", "Bowser" ],

            "journeymen" : [ "Pikachu", "Link", "Young Link", "Yoshi", "Roy" ],

            "busts" : [ "Ness", "Yoshi", "Mario", "Zelda", "Luigi" ],

            "diamonds_in_the_rough" : [ "Ice Climbers", "Jigglypuff", "Peach", 
                        "Captain Falcon", "Donkey Kong", "Mew Two"],

            "players" : [ "Captain Falcon", "Donkey Kong", "Ice Climbers", "Jigglypuff", 
                            "Mewtwo", "Peach", "Pikachu", "Yoshi"]
        },

        "tier_lists": [
            
            {
                "date" : "June '03",
                "tiers" : [
                    { "title": "Top", "range": [1, 5], "color": "red" },
                    { "title": "Upper", "range": [6, 12], "color": "yellow" },
                    { "title": "Middle", "range": [13, 21], "color": "green" },
                    { "title": "Bottom", "range": [22, 26], "color": "blue" }
                ]
            },

            {
                "date" : "July '03",
                "tiers" : [
                    { "title": "Top", "range": [1, 4], "color": "red"},
                    { "title": "Upper", "range": [5, 12], "color": "orange"},
                    { "title": "Middle", "range": [13, 20], "color": "yellow"},
                    { "title": "Low", "range": [21, 23], "color": "green"},
                    { "title": "Bottom", "range": [24, 26], "color": "blue"}
                ]    
            },
     
            {
                "date" : "Oct '03",
                "tiers" : [
                    { "title": "Top", "range": [1, 2], "color": "red"},
                    { "title": "Upper", "range": [3, 5], "color": "orange"},
                    { "title": "High", "range": [6, 12], "color": "yellow"},
                    { "title": "Middle", "range": [13, 19], "color": "green"},
                    { "title": "Low", "range": [20, 23], "color": "blue"},
                    { "title": "Bottom", "range": [24, 26], "color": "magenta"}
                ]
            },
            
            {
                "date" : "April '04",
                "tiers" : [
                    { "title": "Top", "range": [1, 3], "color": "red"},
                    { "title": "Upper", "range": [4, 8], "color": "orange"},
                    { "title": "High", "range": [9, 12], "color": "yellow"},
                    { "title": "Middle", "range": [13, 19], "color": "green"},
                    { "title": "Low", "range": [20, 24], "color": "blue"},
                    { "title": "Bottom", "range": [25, 26], "color": "magenta"}
                ]
            },

            {
                "date" : "April '04",
                "tiers" : [
                    { "title": "Top", "range": [1, 3], "color": "red"},
                    { "title": "Upper", "range": [4, 7], "color": "orange"},
                    { "title": "High", "range": [8, 12], "color": "yellow"},
                    { "title": "Middle", "range": [13, 18], "color": "green"},
                    { "title": "Low", "range": [19, 24], "color": "blue"},
                    { "title": "Bottom", "range": [25, 26], "color": "magenta"}
                ]
            },

            {
                "date" : "Oct '08",
                "tiers" : [            
                    { "title": "Top", "range": [1, 4], "color": "red"},
                    { "title": "High", "range": [5, 8], "color": "orange"},
                    { "title": "Middle", "range": [9, 14], "color": "yellow"},
                    { "title": "Low", "range": [15, 20], "color": "green"},
                    { "title": "Bottom", "range": [21, 26], "color": "blue"}
                ]
            },

            {
                "date" : "Sept '10",
                "tiers" : [               
                    { "title": "Top", "range": [1, 3], "color": "red"},
                    { "title": "High", "range": [4, 5], "color": "orange"},
                    { "title": "Upper", "range": [6, 7], "color": "yellow"},
                    { "title": "Middle", "range": [8, 11], "color": "green"},
                    { "title": "Low", "range": [12, 16], "color": "cyan"},
                    { "title": "Bottom", "range": [17, 21], "color": "blue"},
                    { "title": "Neglible", "range": [22, 26], "color": "magenta"}
                ]
            },

            {
                "date" : "Dec '10",
                "tiers" : [               
                    { "title": "S", "range": [1, 4], "color": "red"},
                    { "title": "A", "range": [5, 7], "color": "orange"},
                    { "title": "B", "range": [8, 8], "color": "yellow"},
                    { "title": "C", "range": [9, 11], "color": "green"},
                    { "title": "D", "range": [12, 15], "color": "cyan"},
                    { "title": "E", "range": [16, 17], "color": "blue"},
                    { "title": "F", "range": [18, 22], "color": "magenta"},
                    { "title": "G", "range": [23, 26], "color": "purple"}
                ]
            },

            {
                "date" : "July '13",
                "tiers" : [                         
                    { "title": "S", "range": [1, 8], "color": "red"},
                    { "title": "A", "range": [9, 14], "color": "yellow"},
                    { "title": "B", "range": [15, 22], "color": "green"},
                    { "title": "F", "range": [23, 26], "color": "blue"}
                ]
            }
        ],

        // Per character data
        "characters" : [
            { "name":"Sheik", "rankings":[1,1,1,1,1,1,1,3,3,4,4,3], "color":"#F0A3FF" },
            { "name":"Falco", "rankings":[2,3,3,5,5,4,5,2,4,2,2,2], "color":"#0075DC" },
            { "name":"Fox", "rankings":[3,2,2,2,3,2,2,1,1,1,1,1], "color":"#FFA405" },
            { "name":"Marth", "rankings":[4,5,4,3,2,3,3,4,2,5,5,4], "color":"#4C005C" },
            { "name":"Mario", "rankings":[5,6,6,7,9,10,11,11,14,12,13,14], "color":"#FF0010" },
            { "name":"Zelda", "rankings":[6,14,20,16,19,17,18,20,19,17,18,19], "color":"#8F7C00" },
            { "name":"Samus", "rankings":[7,8,9,6,6,7,7,8,9,9,11, 11], "color":"#990000" },
            { "name":"Luigi", "rankings":[8,9,8,12,12,12,13,14,12,14,14,13], "color":"#2BCE48" },
            { "name":"Peach", "rankings":[9,4,5,4,4,5,4,5,5,6,6,6], "color":"#FFCC99" },
            { "name":"Dr. Mario", "rankings":[10,7,7,8,10,11,9,9,10,11,9,9], "color":"#808080" },
            { "name":"Ice Climbers", "rankings":[11,13,13,15,18,15,12,7,8,8,8,8], "color":"#5EF1F2" },
            { "name":"Ganondorf", "rankings":[12,10,12,10,8,9,10,12,11,10,10,12], "color":"#9DCC00" },
            { "name":"Pikachu", "rankings":[13,17,16,13,16,14,17,18,16,13,12,10], "color":"#ffed6f" },
            { "name":"Link", "rankings":[14,16,18,18,14,13,14,13,15,16,16,16], "color":"#00998F" },
            { "name":"Captain Falcon", "short_name": "Cpt. Falcon", "rankings":[15,12,11,11,7,6,6,6,6,7,7,7], "color":"#003380" },
            { "name":"Young Link", "rankings":[16,19,19,19,17,18,20,17,17,20,17,15], "color":"#94FFB5" },
            { "name":"Jigglypuff", "rankings":[17,11,10,9,11,8,8,10,7,3,3,5], "color":"#fb9a99" },
            { "name":"Ness", "rankings":[18,15,15,17,20,20,19,22,21,25,23,23], "color":"#FF5005" },
            { "name":"Yoshi", "rankings":[19,18,14,14,13,19,21,19,22,22,21,18], "color":"#005C31" },
            { "name":"Donkey Kong", "short_name": "D.K.", "rankings":[20,21,21,21,22,21,16,15,13,15,15,17], "color":"#b15928" },
            { "name":"Roy", "rankings":[21,20,17,20,15,16,15,16,18,19,19,20], "color":"#426600" },
            { "name":"Kirby", "rankings":[22,23,23,23,21,22,22,24,25,26,25,26], "color":"#FFA8BB" },
            { "name":"Game & Watch", "short_name": "G & W", "rankings":[23,22,22,22,24,23,23,21,20,21,22,22], "color":"#191919" },
            { "name":"Pichu", "rankings":[24,26,25,25,25,26,26,25,26,23,26,25], "color":"#E6E62E" },
            { "name":"Bowser", "rankings":[25,24,26,26,26,25,24,23,23,24,24,24], "color":"#C20088" },
            { "name":"Mew Two", "rankings":[26,25,24,24,23,24,25,26,24,18,20,21], "color":"#740AFF" }
        ]
    },

    "wii" : {
        "dates" : [ 
            "Sept '08",
            "Jan '09",
            "June '09",
            "Feb '10",
            "Sept '10", 
            "July '11",
            "April '12", 
            "April '13"
        ],

        "groups" : {
            "all" : [   "Meta Knight", "Snake", "King Dedede", "Game & Watch", "Falco",
                        "R.O.B.", "Marth", "Wario", "Lucario", "Donkey Kong", "Diddy Kong", 
                        "Pikachu", "Ice Climbers", "Kirby", "Pit", "Toon Link", "Olimar", "Fox",
                        "Zelda", "ZeroSuitSamus", "Bowser", "Luigi", "Peach", "Ike", "Wolf", 
                        "Sheik", "Lucas", "Ness", "Mario", "Pokemon Kid", "Samus", "Yoshi",
                        "Sonic", "Jigglypuff", "Ganondorf", "Link", "Captain Falcon", "Zelda/Sheik"
            ],

            "hall_of_fame": [ "Meta Knight", "Snake", "Falco", "Marth" ],
            
            "steady": [ "Lucario", "Pikachu", "Toon Link", "Peach", "Sheik", "Lucas", "Ness", "Mario", 
                        "Samus", "Yoshi", "Jugglypuff", "Ganondorf", "Link", "Captain Falcon", "Steady"],

            "journeymen" : [ "Pit", "Wolf", "Luigi", "Ike", "Pokemon Kid", "Fox" ],

            "busts" : [ "King Dedede", "Game & Watch", "R.O.B.", "Donkey Kong", "Zelda", "Bowser"],

            "diamonds_in_the_rough" : [ "Diddy Kong", "Ice Climbers", "Olimar", "ZeroSuitSamus", "Sonic", "Zelda/Sheik"],

            "kongs" : [ "Donkey Kong", "Diddy Kong"]
        },

        "tiers" : {

            "Sept '08" : [
                { "title": "Top", "range": [1,6], "color":"red" },
                { "title": "High", "range": [7,16], "color":"yellow" },
                { "title": "Middle", "range": [17,26], "color":"green" },
                { "title": "Low", "range": [27,37], "color":"blue" }
            ],
            "Jan '09" : [
                { "title": "SS", "range": [1,1], "color":"red" },
                { "title": "S", "range": [2,2], "color":"orange" },
                { "title": "A", "range": [3,7], "color":"yellow" },
                { "title": "B", "range": [8,11], "color":"olive" },
                { "title": "C", "range": [12,15], "color":"green" },
                { "title": "D", "range": [16,20], "color":"cyan" },
                { "title": "E", "range": [21,26], "color":"blue" },
                { "title": "F", "range": [27,33], "color":"magenta" },
                { "title": "G", "range": [34,37], "color":"purple" }
            ],
            "June '09" : [
                { "title": "S", "range": [1,6], "color":"red" },
                { "title": "A", "range": [7,13], "color":"orange" },
                { "title": "B", "range": [14,18], "color":"yellow" },
                { "title": "C", "range": [19,24], "color":"green" },
                { "title": "D", "range": [25,28], "color":"cyan" },
                { "title": "E", "range": [29,33], "color":"blue" },
                { "title": "F", "range": [34,37], "color":"magenta" }
            ],
            "Feb '10" : [
                { "title": "S", "range": [1,1], "color":"red" },
                { "title": "A", "range": [2,7], "color":"orange" },
                { "title": "B", "range": [8,12], "color":"yellow" },
                { "title": "C", "range": [13,17], "color":"green" },
                { "title": "D", "range": [18,22], "color":"cyan" },
                { "title": "E", "range": [23,27], "color":"blue" },
                { "title": "F", "range": [28,34], "color":"magenta" },
                { "title": "G", "range": [35,37], "color":"purple" }
            ],
            "Sept '10" : [
                { "title": "S", "range": [1,1], "color":"red" },
                { "title": "A", "range": [2,7], "color":"orange" },
                { "title": "B", "range": [8,13], "color":"yellow" },
                { "title": "C", "range": [14,20], "color":"green" },
                { "title": "D", "range": [21,28], "color":"cyan" },
                { "title": "E", "range": [29,32], "color":"blue" },
                { "title": "F", "range": [33,37], "color":"magenta" },
                { "title": "G", "range": [38,38], "color":"purple" }
            ],
            "July '11" : [
                { "title": "S", "range": [1,1], "color":"red" },
                { "title": "A", "range": [2,4], "color":"orange" },
                { "title": "B", "range": [5,9], "color":"yellow" },
                { "title": "C", "range": [10,14], "color":"olive" },
                { "title": "D", "range": [15,17], "color":"green" },
                { "title": "E", "range": [18,22], "color":"cyan" },
                { "title": "F", "range": [23,29], "color":"blue" },
                { "title": "G", "range": [30,34], "color":"magenta" },
                { "title": "H", "range": [35,38], "color":"purple" }
            ],
            "April '12" : [
                { "title": "SS", "range": [1,1], "color":"red" },
                { "title": "S", "range": [2,2], "color":"orange" },
                { "title": "A+", "range": [3,4], "color":"light-orange" },
                { "title": "A-", "range": [5,7], "color":"yellow" },
                { "title": "B", "range": [8,10], "color":"olive" },
                { "title": "C+", "range": [11,13], "color":"green" },
                { "title": "C", "range": [14,17], "color":"cyan" },
                { "title": "C-", "range": [18,19], "color":"ice-blue" },
                { "title": "D", "range": [20,27], "color":"blue" },
                { "title": "E", "range": [28,30], "color":"magenta" },
                { "title": "F", "range": [31,38], "color":"purple" }
            ],
            "April '13" : [
            ]
        },

        "characters" : [
            { "name":"Meta Knight", "rankings":[1,1,1,1,1,1,1,1] },
            { "name":"Snake", "rankings":[2,2,2,2,2,3,5,6] },
            { "name":"King Dedede", "rankings":[3,4,6,8,10,11,12,12] },
            { "name":"Game & Watch", "rankings":[4,5,8,12,11,13,15,16] },
            { "name":"Falco", "rankings":[5,3,4,4,4,4,6,7] },
            { "name":"R.O.B.", "rankings":[6,9,12,17,17,20,19,18] },
            { "name":"Marth", "rankings":[7,6,7,6,6,5,7,5] },
            { "name":"Wario", "rankings":[8,8,3,7,5,6,9,10] },
            { "name":"Lucario", "rankings":[9,10,14,11,12,10,11,11] },
            { "name":"Donkey Kong", "rankings":[10,14,18,18,20,18,23,21] },
            { "name":"Diddy Kong", "rankings":[11,7,5,3,3,2,3,4] },
            { "name":"Pikachu", "rankings":[12,10,9,9,9,9,8,8] },
            { "name":"Ice Climbers", "rankings":[13,15,11,5,7,7,4,2] },
            { "name":"Kirby", "rankings":[14,13,13,16,15,19,20,20] },
            { "name":"Pit", "rankings":[15,18,17,13,18,21,18,17] },
            { "name":"Wolf", "rankings":[16,20,22,22,22,16,14,14] },
            { "name":"Toon Link", "rankings":[17,17,16,14,14,14,13,13] },
            { "name":"Olimar", "rankings":[18,11,10,10,8,8,2,3] },
            { "name":"Fox", "rankings":[19,24,21,20,16,15,16,15] },
            { "name":"Zelda", "rankings":[20,22,26,35,37,37,37,37] },
            { "name":"ZeroSuitSamus", "rankings":[21,16,15,15,13,12,10,9] },
            { "name":"Bowser", "rankings":[22,23,25,27,32,32,33,33] },
            { "name":"Luigi", "rankings":[23,21,20,21,21,25,29,28] },
            { "name":"Peach", "rankings":[24,19,19,19,19,17,17,19] },
            { "name":"Ike", "rankings":[25,26,28,29,25,23,24,23] },
            { "name":"Sheik", "rankings":[26,25,24,23,26,26,25,25] },
            { "name":"Lucas", "rankings":[27,28,29,28,30,30,30,30] },
            { "name":"Ness", "rankings":[28,29,31,26,27,27,27,26] },
            { "name":"Mario", "rankings":[29,27,30,31,31,31,31,31] },
            { "name":"Pokemon Kid", "rankings":[30,32,27,24,28,29,28,29] },
            { "name":"Samus", "rankings":[31,30,33,33,34,33,32,32] },
            { "name":"Yoshi", "rankings":[32,33,32,30,29,28,26,27] },
            { "name":"Sonic", "rankings":[33,31,23,25,24,22,22,22] },
            { "name":"Jigglypuff", "rankings":[34,35,34,34,35,36,35,36] },
            { "name":"Ganondorf", "rankings":[35,36,37,37,38,38,38,38] },
            { "name":"Link", "rankings":[36,34,36,36,36,35,36,35] },
            { "name":"Captain Falcon", "rankings":[37,37,35,32,33,34,34,34] },
            { "name":"Zelda/Sheik", "rankings":[-1,-1,-1,-1,23,24,21,24] }
        ]
    }
}
