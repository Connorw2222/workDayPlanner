//Creates current day and year
$(document).ready(function () {
    // Current Day + Month + year
    $("#currentDay").text(moment().format('MMMM Do YYYY'));

    // create time blocks
    var loopArray = [
        "9", "10", "11", "12", "1", "2", "3", "4", "5", "6"
    ]
    //StorageArray
    var storageArray = []
    //creates elements consol log plannerNotes
    for (let index = 0; index < loopArray.length; index++) {
        var timeBlocks = $("<div>").addClass("timeBlocks").attr("id", loopArray[index])
        timeBlocks.append($("<sect>").addClass("timeZone").text(loopArray[index]).attr("id",loopArray[index]+"timeZone"));
        timeBlocks.append($("<textarea>").addClass("plannerNotes").text("notes").attr("id",loopArray[index]+"plannerNotes"));
        timeBlocks.append($("<button>").addClass("save").text("Save").click(function () {
            var val = $("#"+loopArray[index]+"plannerNotes").val();
            console.log(val)
            console.log($(this).siblings())
            var timeSaveLS = $(this).siblings("")
            console.log(timeSaveLS)
        }))
        $(".container").append(timeBlocks)
    }
    //setting up local storage
    localStorage.setItem("storageArray",storageArray)



    //saved
    // Save btm conole log = text area value


    // event listener http://html-tuts.com/jquery-this-selector/ worse case use event listern for every item

    // Set up local storage

    // comments in time appropate block; using indavidual blocks for local storage (10 total)

    // on page load show all notes in approtiate* time blocks

    //edit time blocks

    //store in local storage! 

    //delete local storaga after the work day is done! 

    //color distiction for past prez and future. 

    //css and bootstrap styling! 


})