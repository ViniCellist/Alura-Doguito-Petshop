const http = new XMLHttpRequest();

http.open('GET', 'http://localhost:300/profile');

http.send();

http:onload = () => {
    const data = http.response;
    console.log(data);
};