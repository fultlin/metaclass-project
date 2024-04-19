import { MouseEventHandler } from "react";
import Card from "../components/card/Card";
import { Link } from "react-router-dom";


interface ListProps {
    currentRepos: any[];
    onClickPrev: MouseEventHandler<HTMLButtonElement>;
    onClickNext: MouseEventHandler<HTMLButtonElement>;
    indexOfFirstRepo: number;
    indexOfLastRepo: number;
    result: any[];
}

const List = ({ currentRepos, onClickPrev, onClickNext, indexOfFirstRepo, indexOfLastRepo, result }: ListProps) => {
    return (
        <div className="main">
            <h1>List of organization repositories</h1>
            <div>
                <ul className="repos">
                    {currentRepos.map(repo => (
                        <Link to={'/repo/:name'}>
                            <Card key={repo.id} id={repo.id} owner={repo.owner} name={repo.name} description={repo.description} />
                        </Link>
                    ))}
                </ul>
            </div>
            <div className="repos__navigation">
                <button onClick={onClickPrev} disabled={indexOfFirstRepo === 0} className="button">
                    <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.62 26.5599L11.9267 17.8666C10.9 16.8399 10.9 15.1599 11.9267 14.1333L20.62 5.43994" stroke="#151411" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
                <button onClick={onClickNext} disabled={indexOfLastRepo >= result.length} className="button">
                    <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.38 26.5599L21.0733 17.8666C22.1 16.8399 22.1 15.1599 21.0733 14.1333L12.38 5.43994" stroke="#151411" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default List;