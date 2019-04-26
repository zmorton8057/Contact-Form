//Submit on Click
$(document).ready(function () {
    $('.submit').click(function (event) {
        event.preventDefault()
        console.log('Clicked button')
    //Grabbing HTML Class        
        var email = $('.email').val()
        var subject = $('.subject').val()
        var message = $('.message').val()
        var statusElm = $(".status")
        statusElm.empty();

    //EMail Box
        if(email.length > 5 && email.includes('@') && email.includes('.')) {
            statusElm.append('<div>Email is valid</div>')
        } else {
            event.preventDefault()
            statusElm.append('<div>Email is not Valid</div>')
        }

    //Subject Box
        if(subject.length >= 2) {
            statusElm.append('<div>Subject is valid</div>')
        } else {
            event.preventDefault()
            statusElm.append('<div>Subject is not Valid</div>')
        }

    //Message Box
        if(message.length > 20) {
            statusElm.append('<div>Message is valid</div>')
        } else {
            event.preventDefault()
            statusElm.append('<div>Message is not Valid</div>')
        }
    })
})