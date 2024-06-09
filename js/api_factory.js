const BASE_URL = "http://web-02.moleculesoft.tech:5000/api/v1/"

async function fetchCandidate(candidateID) {
    const url = `${BASE_URL}candidates/${candidateID}`;
    await fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            localStorage.setItem("candidate", JSON.stringify(data));
            window.location.href = "./candidate";
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
}

async function fetchRegistrations(gecId) {
    const url = `${BASE_URL}registrations/${gecId}`;
    await fetch(url)
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
        });
    return false;
}

async function fetchCandidateSubjects(regId) {
    const url = `${BASE_URL}candidate_subjects/${regId}`;
    await fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            localStorage.setItem("candidate_subjects-" + regId, JSON.stringify(data));
            return true;
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
    return false;
}