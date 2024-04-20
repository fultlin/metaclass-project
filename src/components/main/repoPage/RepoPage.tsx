import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RepoPage = () => {
    const { name } = useParams<{ name: string }>();
    const [repoInfo, setRepoInfo] = useState<any>(null);
    const [lang, setLang] = useState<string | null>('')
    const [contributors, setContributors] = useState<string | null>('')
    const [topics, setTopics] = useState<any>(null)

    useEffect(() => {
        axios.get(`https://api.github.com/repos/ktsstudio/${name}`).then(response => {
            setRepoInfo(response.data);
            setTopics(response.data.topics)
        }).catch(error => {
            console.error("Error fetching repository info:", error);
        });
    }, [name]); 

    useEffect(() => {
        axios.get(`https://api.github.com/repos/ktsstudio/${name}/languages`).then(response => {
            console.log('lang ', response.data)
            setLang(response.data)
        })
    }, [repoInfo])

    useEffect(() => {
        axios.get(`https://api.github.com/repos/ktsstudio/${name}/contributors`).then(response => {
            console.log('contributors', response.data)
            setContributors(response.data)
        })
    }, [repoInfo])
    
    console.log('topics', topics)
    

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