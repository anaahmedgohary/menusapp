useEffect(() =>
{
    fetch("/api").then(
        response => response.json()
    ).then(
        data =>
        {
            setBackendData(data);
            console.log(data);
        }
    )
}, [])







const handelSubmit = (e) =>
{
    e.preventDefault();
    //const newuser = {username: "llcoolj", password: "icetea"};

    axios
        .post(baseURL, { username: "llcoolj", password: "icetea" })
        .then((response) =>
        {
            setPost(response.data)
            // setUsername(response.data.username);
            // setPassword(response.data.password)
        })
}
