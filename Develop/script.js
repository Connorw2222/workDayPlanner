$(document).ready(function () {
    // Current Day + Month + year
    $("#currentDay").text(moment().format('MMMM Do YYYY'));

    // create time zones
    var loopArray = [
        "9", "10", "11", "12", "1", "2", "3", "4", "5", "6"
    ]
    for (let index = 0; index < loopArray.length; index++) {
        var timeBlocks = $("<div>").addClass("timeBlocks")
        var timeZone = $("<sect>").addClass("timeZone").text("timezone")
        var plannerNotes = $("<input>").addClass("plannerNotes").text("notes")
        var save = $("<button>").addClass("save").text("save")
        timeBlocks.attr("id", loopArray[index]);
        timeZone.text(loopArray[index]);
        plannerNotes.attr("dataPlanner", loopArray[index]);
        save.attr("dataSave", loopArray[index]);
        timeBlocks.append(timeZone)
        timeBlocks.append(plannerNotes)
        timeBlocks.append(save)
        $(".container").append(timeBlocks)
    }
    //can be edited

    //saved
})