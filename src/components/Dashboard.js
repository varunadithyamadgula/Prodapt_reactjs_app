import premiumPhoto from '../premium_photo-1664301427534-28b6a53a9c4f.jpg';
import sportifyImg from '../sportify2.webp';
import sportifyImg2 from '../sportify3.webp';
import './Dashboard.css';

function Dashboard() {
    return (
        <div
            style={{
                backgroundImage: `url(${premiumPhoto})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '100vh',
                width: '100%',
                opacity: 0.8,
                padding: '20px',
                color: 'black',
                marginBottom: '40px',
                overflow: 'auto',
                maxHeight: '100vh',
                backgroundBlendMode: 'darken',
                backgroundColor: 'rgba(0, 0, 0, 0.5)'
            }}
        >
            <b><marquee behavior="scroll" scrollamount="15" direction="left" onmouseover="this.stop();" onmouseout="this.start();" style={{ color: 'yellow', fontSize: '40px' }}>
                What Play Sportify does ?
            </marquee></b>
            <b style={{ color: 'white', textAlign: 'left', fontSize: '22px' }}>
Our app calculates your fitness score based on the sports you play — not just steps or gym reps. Whether you're into football, basketball, tennis, or casual walking, we track your activity, estimate calories burned, and measure intensity to give you a real-time fitness score. No need for wearables — just log your sports, and we’ll handle the rest. It's fitness that fits your lifestyle, one game at a time.
Unlike traditional fitness trackers, we focus on real movement, real effort, and real results. Each session is analyzed using sport-specific metrics to reflect the actual work your body does — because we believe a full-court game should count more than 10,000 passive steps. Our goal is to make fitness fun, fair, and focused on what you love: playing your sport.
Start logging today, compare your stats over time, and turn your passion for play into measurable progress. Your game is your workout — let us track it for you.            </b>
            <br />
            <div className="card-container" style={{ marginTop: '40px', gap: '40px', display: 'flex', justifyContent: 'center', flexWrap: 'wrap', minWidth: '700px', minHeight: '300px' }}>
                <div className="flip-card" style={{ width: '350px', height: '380px' }}>
                    <div className="flip-card-inner">
                        <div
                            className="flip-card-front"
                            style={{
                                backgroundImage: `url(${sportifyImg})`,
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                            }}
                        >
                            <h2 style={{  }}>Sports Activity</h2>
                        </div>
                        <div className="flip-card-back">
                            <p>
                                Track your sports sessions with ease. Just log what sport you played, for how long, and how intense it felt.<br /><br />
                                Our system evaluates your effort based on the type of sport and activity level — whether it's a casual walk or a competitive football match.<br /><br />
                                Get instant feedback on how active you've been, and how it contributes to your overall fitness journey.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flip-card" style={{ width: '350px', height: '380px' }}>
                    <div className="flip-card-inner">
                        <div
                            className="flip-card-front"
                            style={{
                                backgroundImage: `url(${sportifyImg2})`,
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                            }}
                        >
                            <h2>Fitness Score</h2>
                            <a href="/fitness-score"></a>
                        </div>
                        <div className="flip-card-back">
                            <p>
                                Your fitness score is calculated using:<br />
                                <b>Score = Duration × Intensity × Sport Factor</b><br /><br />
                                - <b>Duration</b>: Time played (min)<br />
                                - <b>Intensity</b>: 1 (Low) to 3 (High)<br />
                                - <b>Sport Factor</b>: e.g., Football = 1.5<br /><br />
                            
                            </p>
                            <div style={{ marginTop: '10px', textAlign: 'left' }}>
                                <span role="img" aria-label="target">🎯</span> <b>Example Score:</b><br />
                                For 60 minutes of high-intensity football:<br />
                                <b>60 × 3 × 1.5 = 270 fitness score</b>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Dashboard;