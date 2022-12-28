import { Audio } from  'react-loader-spinner';

const Loading = ()=> {
    return(
        <div style={
            {
            width: "100vw",
            height: "100vh",

            position:"fixed",
            top: "50%",
            left: "50%",
            transform: "translate ( -50%, 50% )"
        }
        }>
            <Audio
                height="150"
                width="150"
                color="#240b36"
                ariaLabel="audio-loading"
                wrapperStyle={{}}
                wrapperClass="wrapper-class"
                visible={true}
            />
        </div>

    )
};

export default Loading;

