import "./work.css"
import Works from "../Works/Works"

const Work = () => {
    return (
        <div className="p1">
            <div className="pi-texts">
                <h1 className="pi-title">My Work</h1>
                <p className="pi-desc">
                    These are the works I done
                </p>
            </div>
            <div className="p1-list">
                <Works/>
                <Works/>
            </div>
        </div>
    )
}

export default Work