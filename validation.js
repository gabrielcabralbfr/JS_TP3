let errorsCount = 0

function isNotNumber(element) {
    if (element.value == "" || element.value == undefined || element.value == null || isNaN(element.value)) {
        return true;
    }

    return false;
}

function hasNoError() {
    if (errorsCount == 0) {
        return true
    } else {
        return false
    }
}

function showErrorMessageAt(element, errorMessage) {

    element.innerHTML = errorMessage
    element.style.color = '#f00'

}

function removeErrorMessageAt(element) {
    element.innerHTML = ""
    element.style.color = '#f00'
}

function CleanErrorMessages() {
    errorsCount = 0
    let spans = document.querySelectorAll("span");

    for (let span of spans) {
        removeErrorMessageAt(span)

    }
}
export {
    isNotNumber,
    hasNoError,
    showErrorMessageAt,
    removeErrorMessageAt,
    CleanErrorMessages
}