import React from 'react'
import "./Widgets.css"

function Widgets() {
    return (
        <div className="widgets">
            <div class="mapouter"><div class="gmap_canvas"><iframe class="gmap_iframe" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%&amp;height=200&amp;hl=en&amp;q=thiruvanvadoor&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" width="100%" height="100%" style={{border:'none',overflow:'hidden'}} scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe></div> </div>
        </div>
    )
}

export default Widgets
