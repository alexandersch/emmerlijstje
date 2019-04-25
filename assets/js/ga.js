import ReactGA from 'react-ga';

ReactGA.initialize('UA-63718351-1');
ReactGA.pageview(window.location.pathname + window.location.search);