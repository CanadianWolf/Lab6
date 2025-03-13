//2d array of just projects
var projects = [
    ["3d unity game: ", ["Simple 3d game I made and it was an fps game that I made during highschool. Used unity to make it and vs code programming with C#, I did some cool stuff like adding night vision", "I created the game"]],
    ["2d unity cyberpunk platformer: ", ["I made a game during high school that was a 2d unity cyberpunk themed game as in the genre so the buildings had neon lights, dark city, and oppressive atmosphere but as you got into the building it got surreal in ways with the same room constantly but things changed such as rotation or obstacles", "I created the game"]],
    ["2d walking unity game: ", ["I worked on this one alone using unity and vs code which was c#, I made a cosmic horror themed walking game that was simple with assets I made myself too. I made this in highschool"]],
    ["CS2691 mikmaw Kinamatnewey unity game: ", ["I was supposed to sign an nda but they never sent it so I might not disclose too much", "I was a junior developer who worked in a role developing and trying to learn, I had more experience with unityso I did a lot more work", "we used the unity engine to develop it and I learned about working in a team and I used git along with visual studios code to program in C#"]],
    ["CS3691 gambit game: ", ["I signed an NDA so I cannot disclose too many details", "I was a senior developer in a team and I was mentoring junior developers while working a lot because I had experience in unity and vs code so I tackled some tough tasks", "We used visual studios code using c#, unity, git, and a arduino uno ide"]],
    ["Game jame 2025 Halifax", ["I worked in a team on it and the link is <a href='https://cycoclash25.itch.io/bubble-bath-battle/'>This is the link to bubble bath battle</a>", "I was the programmer, I helped with level design, and gameplay mechanics also other stuff", "we used unity and vs code using c#, we did this in 48 hours roughly"]],
    ["Game Jam 2020", ["Idk, I worked on this one a long time ago and it is somewhere I lost, sorry but maybe it's for the best"]]
];

for(var a = 0; a < projects.length; a++){
    let name = projects[a][0];
    let misc = projects[a][1];
    writeIntoBook(name, misc);
}

//print out stuff with this function
function writeIntoBook(name, misc){
    //log projects
    console.log("Project: " + name);
    console.log("Details about project: "+ misc);
    var projectDetailsString = "";
    for(var a = 0; a < misc.length; a++){
        projectDetailsString = projectDetailsString + "<td>"+ misc[a] + "</td> ";
    }
    document.getElementById("ProjectTable").innerHTML += '<tr> <td>' + name + ": </td>" + " " +  projectDetailsString + " </tr>";

}

