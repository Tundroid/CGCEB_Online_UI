const BASE_URL = "http://web-02.moleculesoft.tech:5000/api/v1/"

function fetchCandidate(gceId, token) {
    const url = `${BASE_URL}candidates/${gceId}`;
    return fetch(url, {
        headers: {
            'Authorization': 'bearer ' + token
        }
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            localStorage.setItem("candidate", JSON.stringify(data));
            return true;
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
            return false;
        });
}

function login(data, type = "candidate") {
    const url = `${BASE_URL}${type}s/login`;

    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })

        .then(data => {
            localStorage.setItem(`${type}-session`, JSON.stringify(data));
            return true;
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
            return false;
        });
}

function fetchRegistrations(gecId, token) {
    const url = `${BASE_URL}registrations/${gecId}`;
    return fetch(url, {
        headers: {
            'Authorization': 'bearer ' + token
        }
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            localStorage.setItem("registrations", JSON.stringify(data));
            return true;
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
            return false;
        });
}

function fetchSubjects(examId, localDataKey, token) {
    const url = `${BASE_URL}subjects/${examId}`;
    return fetch(url, {
        headers: {
            'Authorization': 'bearer ' + token
        }
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            localStorage.setItem(localDataKey, JSON.stringify(data));
            return true;
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
            return false;
        });
}

function fetchCandidateSubjects(regId, localDataKey, token) {
    const url = `${BASE_URL}candidate_subjects/${regId}`;
    return fetch(url, {
        headers: {
            'Authorization': 'bearer ' + token
        }
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            localStorage.setItem(localDataKey, JSON.stringify(data));
            return true;
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
            return false;
        });
}

function addSubject(data, token) {
    const url = `${BASE_URL}subject_registrations`;

    return fetch(url, {
        method: 'POST',
        headers: {
            'Authorization': 'bearer ' + token,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return true;
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
            return false;
        });
}

function removeSubject(id, token) {
    const url = `${BASE_URL}subject_registrations/${id}`;

    return fetch(url, {
        method: 'DELETE',
        headers: {
            'Authorization': 'bearer ' + token
        },
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            location.reload();
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
}