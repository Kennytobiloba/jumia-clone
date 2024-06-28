import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSearchProducts, getSearchProductsStatus, fetchAsyncSearchProduct } from '../../store/searchSlice';
import { useParams } from 'react-router';
import { STATUS } from '../../Utils/status';
import ProductDisplay from '../../Components/ProductDisplay/ProductDisplay';

const SearchPage = () => {
    const { searchTerm } = useParams();
    const dispatch = useDispatch();
    const searchProducts = useSelector(getSearchProducts);
    const searchProductsStatus = useSelector(getSearchProductsStatus);
    console.log(searchProducts)

    useEffect(() => {
        if (searchTerm) {
            dispatch(fetchAsyncSearchProduct(searchTerm));
        }
    }, [dispatch, searchTerm]);

    return (
        <div className="p-4 mt-20 py-10">
            <h1 className="text-2xl font-bold mb-4">Search Results for "{searchTerm}"</h1>
            
            {searchProductsStatus === STATUS.LOADING && <p>Loading...</p>}
            {searchProductsStatus === STATUS.FAILED && <p>Failed to fetch products</p>}
            {searchProductsStatus === STATUS.SUCCEEDED && (
                <div>
                   <ProductDisplay products={searchProducts}/>
                </div>
            )}
        </div>
    );
}

export default SearchPage;
