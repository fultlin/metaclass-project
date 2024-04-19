import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RepoPage = () => {
    const { name } = useParams<{ name: string }>(); // Получаем параметр маршрута "name"
    
    const [repoInfo, setRepoInfo] = useState<any>(null);

    useEffect(() => {
        axios.get(`https://api.github.com/repos/ktsstudio/${name}`).then(response => {
            setRepoInfo(response.data);
        }).catch(error => {
            console.error("Error fetching repository info:", error);
        });
    }, [name]); 

    if (!repoInfo) {
        return <div>Loading...</div>; 
    }

    return (
        <div className="repo__page">
            <h2>{repoInfo.name}</h2>
            <p>{repoInfo.description}</p>
            <p>Owner: {repoInfo.owner.login}</p>
            <p>Stars: {repoInfo.stargazers_count}</p>
        </div>
    );
};

export default RepoPage;