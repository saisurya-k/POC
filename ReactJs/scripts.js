class App extends React.Component {
    render() {
        return (<Clock></Clock>)

    }
}

class Clock extends React.Component {
    constructor(props) {
        super(props);
        const currentTime = new Date();
        this.state = {
            hours: currentTime.getHours(),
            minutes: currentTime.getMinutes(),
            seconds: currentTime.getSeconds(),
            amOrPm: currentTime.getHours() >= 12 ? 'pm' : 'am'
        };
      this.setTimer()  
    }
    updateClock() {
        const currentTime = new Date();
        this.setState({
            hours: currentTime.getHours(),
            minutes: currentTime.getMinutes(),
            seconds: currentTime.getSeconds(),
            amOrPm: currentTime.getHours() >= 12 ? 'pm' : 'am'
        });
    }

    render() {
        const { hours, minutes, seconds, amOrPm } = this.state;
        return (<div className="clock">

{hours ==0?12:((hours>12)?(hours-12):hours)}:
{minutes>9 ? minutes : `0${minutes}`}:
{seconds>9?seconds:`0${seconds}`} {amOrPm}
        	</div>);
    }

    setTimer() {
        setInterval(this.updateClock.bind(this), 1000);
    }

}

/*
class Header extends React.Component {
    render() {
    	const title = this.props.title;
    	console.log("title",title);
        return (<div className="header">
                <div className="fa fa-more"></div>
         <span className="title">{title.name}</span>
                <input type="text" placeholder="search......" className="searchInput"/>
                <div className="fa fa-search searchIcon"></div>
                </div>)

    }
}
class Content extends React.Component {
    render() {
        return (<div className="Content"><div className="line">
        </div>
        <div className="item"><div className="avatar">
        <img src="http://www.croop.cl/UI/twitter/images/doug.jpg" alt="avatar"/>
        Doug</div>
        <span className="time">An hour ago</span>
        <p>Ate lunch</p>
        <div className="commentCount">2</div>
        </div>
        </div>)

    }
}

*/
var mount = document.querySelector('#app');
ReactDOM.render(<App/>, mount);
