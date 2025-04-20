import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
    return (
        <React.StrictMode>
            {
                robots.map((user, i) => {
                    return (
                        <Card 
                            key={i} 
                            id={user.id} 
                            name={user.name} 
                            email={user.email}
                        />
                    );
                })
            }
        </React.StrictMode>
    );
}

export default CardList;