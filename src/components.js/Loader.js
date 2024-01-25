import React from 'react'

function Loader() {
  return (
    <div className='loader'>
    	<svg height="40" width="40" class="loader loader-3">
			<g class="cir">
				<path d="m 20 5 a 1 1 0 0 0 0 30 a 1 1 0 0 0 0 -30" stroke="rgba(0,0,0,0.2)" stroke-width="3" fill="none" stroke-linecap="round"/>
			</g>
			<g class="go">
				<path d="m 20 35 a 1 1 0 0 1 0 -30 c 0 0 15 0 15 15" stroke="#54ff5a" stroke-width="3" fill="none" stroke-linecap="round"/>
			</g>
		</svg>
        </div>
  )
}

export default Loader
