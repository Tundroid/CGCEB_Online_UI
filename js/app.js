function checkAdminSession(){
    ses = localStorage.getItem("admin_session");
    if (ses){
        console.log("Found")
    } else {
        location.href = "./login"
    }
}