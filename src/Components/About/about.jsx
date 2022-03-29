import "./about.css"
import Mine from "../../img/me2.jpg"

const About = () => { 
    return (
           <div className="a">
               <div className="a-left">
                   <div className="a-card bg"></div>
                   <div className="a-card">
                       <img src={Mine} alt="" className="a-img" />
                   </div>
               </div>
               <div className="a-right">
                   <h1 className="a-title">
                        About Me
                   </h1>
                   <p className="a-sub">
                        Myself Anubhav Mohandas, Co-Founder of STH
                   </p>
                   <p className="a-desc">
                   Programming and Cybersecurity has always been a craze of mine. I have been lucky enough to have the best opportunity to learn about these and implement in my daily life. I am Keen and quick Learner, I am highly organized and an ambious person. I also thrive on challenge and constantly set goals for myself, so I have something to strive towards. I'm not comfortable with settling, and I'm always looking for an opportunity to do better and achieve greatness. I also have experience of basic level of cybersecurity as I am working with an ED_TECH Cybersecurity Company and am also helping more than 800 Students to reach their goal. I am also a Mental Health counsellor, and has some 15 to 20 clients.
                   </p>
               </div>
           </div>
    )
}
export default About