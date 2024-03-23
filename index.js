function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}
console.log(saturdayFun()); 

const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
};
console.log(mondayWork()); 
console.log(mondayWork("work on a project")); 

function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
        return `You are ${flair}${adjective}${flair}!`;
    };
}

const encouragingPromptFunction = wrapAdjective("!!!"); 
console.log(encouragingPromptFunction("awesome")); 
console.log(encouragingPromptFunction()); 

const sparklingPromptFunction = wrapAdjective("~*~"); 
console.log(sparklingPromptFunction("fantastic")); 
console.log(sparklingPromptFunction());

