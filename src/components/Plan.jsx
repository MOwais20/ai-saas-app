import React, { Suspense } from 'react'

// Lazy-load PricingTable to avoid requiring Clerk at startup
const PricingTable = React.lazy(() => import('@clerk/clerk-react').then(mod => ({ default: mod.PricingTable })).catch(() => ({ default: () => null })))

const Plan = () => {
  return (
    <div className='max-w-2xl mx-auto x-20 my-30'>
        <div className='text-center'>
            <h2 className='text-slate-700 text-[42px] font-semibold'>Choose Your Plan</h2>
            <p className='text-slate-500'>Select the plan that best fits your needs.</p>
        </div>
        <div className='mt-4 max-sm:mx-8'>
           <Suspense fallback={<div className='text-center text-gray-500'>Loading plans…</div>}>
            <PricingTable />
          </Suspense>
          {/* If Clerk isn't configured the lazy import will fail silently and render nothing; show a hint */}
          <div className='mt-4 text-sm text-gray-500'>
            If you don't see pricing plans, make sure Clerk is configured and the publishable key is set.
          </div>
        </div>
      
    </div>
  )
}

export default Plan
