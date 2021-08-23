//Creates current day and year
$(document).ready(function () {
    // Current Day + Month + year
    $("#currentDay").text(moment().format('MMMM Do YYYY'));

    // create time blocks
    var loopArray = [
        "9", "10", "11", "12", "13", "14", "15", "16", "17", "18"
    ]
    for (let index = 0; index < loopArray.length; index++) {
        localStorage.getItem(loopArray[index]) ? null : localStorage.setItem(loopArray[index], "")
        var timeBlocks = $("<div>").addClass("timeBlocks").attr("id", loopArray[index])
        timeBlocks.append($("<section>").addClass("timeZone").text(loopArray[index]).attr("id", loopArray[index] + "timeZone"));
        timeBlocks.append($("<textarea>").addClass("plannerNotes").attr("id", loopArray[index] + "plannerNotes").addClass(" row container-fluid m-1"));
        timeBlocks.append($("<button>").addClass("save").text("Save").addClass("row m-1 btn btn-primary btn-lg btn-block active").click(function () {
            let val;
            let key;
            console.log($("#" + loopArray[index] + "plannerNotes").val())
            console.log($("#" + loopArray[index] + "plannerNotes").siblings(".timeZone").text())
            val = $("#" + loopArray[index] + "plannerNotes").val()
            key = $("#" + loopArray[index] + "plannerNotes").siblings(".timeZone").text()
            localStorage.setItem(key, val)

        }))
        $(".container").append(timeBlocks)
    }
    // get from local storage

    // loads Local storage on page
    function loadLS() {
        for (let i = 0; i < loopArray.length; i++) {
            $("#" + loopArray[i] + "plannerNotes").text(localStorage.getItem(loopArray[i]))

        }
    }
    loadLS()

    // For Colors
    function color() {
        var currentHour = moment().hours()
        for (let i = 0; i < loopArray.length; i++) {
            if (currentHour === loopArray[i]) {
                $("#" + loopArray[i] + "plannerNotes").addClass("red")
                $("#" + loopArray[i] + "plannerNotes").removeClass("grey")
            }
            else if (currentHour > loopArray[i]) {
                $("#" + loopArray[i] + "plannerNotes").addClass("grey")
            }
            else {
                $("#" + loopArray[i] + "plannerNotes").addClass("green")
                $("#" + loopArray[i] + "plannerNotes").removeClass("red")
                $("#" + loopArray[i] + "plannerNotes").removeClass("grey")
            }
        }
    };
    setInterval(color,36000)
    color()




})