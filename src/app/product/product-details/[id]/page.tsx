import React from 'react';

export default async function Product ({params} : {params : {id: string}}) {
    const id = (await params).id
    return (
      <div>
        product details 1
      </div>
    ); 
}