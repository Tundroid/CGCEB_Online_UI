function checkAdminSession(){
    ses = localStorage.getItem("admin-session");
    if (ses){
        console.log("Found")
    } else {
        location.href = "./login"
    }
}

function checkCandidateSession(){
    ses = localStorage.getItem("candidate-session");
    if (ses){
        console.log("Found")
    } else {
        location.href = "./login"
    }
}