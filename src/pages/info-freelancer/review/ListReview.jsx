import React from 'react'
import ItemReview from './ItemReview'
import noReview from '../../../assests/imgs/no-review.png'
const ListReview = ({reviews}) => {
  return (
    <div>
        
        {reviews.length ?
         reviews.map((review) => <ItemReview key ={review._id} review = {review}/>)
         :
         <div>
            <h3 className='text-[#6C63FF] font-bold text-center text-xl'>Chưa có đánh giá nào</h3>
            <img src={noReview} alt="img" />
         </div>
        }
         
    </div>
  )
}

export default ListReview