const Cards = () => {
    const arr = new Array(8);

    arr.fill({name: 'Alex Morgan', balance: '100 TON'});

    return (
        <ul className="cards">
            {arr.map(({name, balance}) => (
                <li className="cards__item">
                    <span className="cards__user">{name}</span>
                    <span className="cards__balance">{balance}</span>
                </li>
            ))}
        </ul>
    );
}

export default Cards
