import Exposition from '@/components/Exposition'
import React from 'react'

const Mission = () => {
  return (
    <div className="responsive">
      <div className="section">
        <Exposition title='Our Mission'
          children={
            <div className="flex flex-col gap-3">
              <p className="">
              Mission of the trust is to imagine, design, and initiate practical programmes to support conservation and communities living within and alongside the African plains where we have tourism businesses
              </p>
            </div>
          }
        />
    </div>
    </div>
  )
}

export default Mission