import axios from "axios";
import { useEffect, useState } from "react";

const base_url = "https://randomuser.me/api/?results=100";

function UserGenerator() {
    const [post, setPost] = useState(null);

    useEffect(() => {
        axios.get(base_url).then((response) => {
            setPost(response.data.results);
        });
    }, []);

    console.log(post);
}

export default UserGenerator;
