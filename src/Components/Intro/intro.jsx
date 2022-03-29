import "./intro.css"
import Me from "../../img/Me.png"

const Intro = () => { 
    return (
         <div className="i">
             <div className="i-left">
                 <div className="i-left-wrapper">
                 <h2 className = "i-intro">Hello My name is </h2>
                 <h1 className = "i-name">Anubhav Mohandas</h1>
                 <div className="i-title">
                     <div className="i-title-wrapper">
                         <div className="i-title-item">Cyber Security Researcher</div>
                         <div className="i-title-item">Cyber Forensic Researcher</div>
                         <div className="i-title-item">Web Developer</div>
                         <div className="i-title-item">Mental Health Counsellor</div>
                         <div className="i-title-item">Public Speaker</div>
                     </div>
                 </div>
                 <p className="i-desc">
                 Programming and Cybersecurity has always been a craze of mine. I have been lucky enough to have the best opportunity to learn about these and implement in my daily life. I am Keen and quick Learner, I am highly organized and an ambious person. I also thrive on challenge and constantly set goals for myself, so I have something to strive towards. I'm not comfortable with settling, and I'm always looking for an opportunity to do better and achieve greatness. I also have experience of basic level of cybersecurity as I am Co-Founder of an ED_TECH Cybersecurity Company and am also helping more than 800 Students to reach their goal. I am also a Mental Health counsellor, and has 15 to 20 clients.
                 </p>
                 </div>
             </div>
             <div className="i-right">
                 <div className="i-bg"></div>
                 <img src={Me} alt="" className="i-img" />
             </div>
         </div>
    )
}

export default Intro