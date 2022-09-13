import React from 'react'

const Product = () => {
  return (
    <div className='product'>
        <div className="productContainer">
            <div className="productCard">
                <div className="productCardInner">
                    <div className="productCardOuter">
                        <img src="https://www.bing.com/th?id=OSK.HEROzua62locusuQxk8gA2TuuvT0Ip3fOpnvhAZXd_xme6g&w=472&h=280&c=13&rs=2&o=6&pid=SANGAM" alt="avatar" className='avater' />
                    </div>
                    <div className="productCardBack">
                        <h1 className="productName">Rice</h1>
                        <p className="productDiscription">High Quality Sri Lankan Rice</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Product