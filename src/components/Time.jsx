import Clock from 'react-live-clock';

const Time = () => {
return(
    <h1>
    <Clock  format={'h:mm:ss A'} interval={1000} ticking={true} />
    </h1>
)
};

export default Time;