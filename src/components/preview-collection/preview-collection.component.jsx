import React from 'react';
import './preview-collection.styles.scss';
import CollectionItem from '../collection-items/collection-item.component';

const PreviewCollection = ({title, items}) => {
    return(
        <div className='collection-preview'>
            <h1 className='title'>
            {title.toUpperCase()}
            </h1>
            <div className='preview'>
                {
                    items
                    .filter((item,idx) => idx<4)
                    .map(({id, ...otherIemProps}) => (
                        <CollectionItem key={id} {...otherIemProps} />
                    ))
                }
            </div>
        </div>
    )
};

export default PreviewCollection;