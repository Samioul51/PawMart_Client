import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const ListingDetailsPage = () => {
    const data=useLoaderData();
    console.log(data);
    return (
        <div>
        </div>
    );
};

export default ListingDetailsPage;