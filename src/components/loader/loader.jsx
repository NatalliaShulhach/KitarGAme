import Loader from "react-loader-spinner";

const Spinner = (prop) => {
    const {timeout} = prop;
    return (
        <Loader
            type="Grid"
            color="#56B4D3"
            height={100}
            width={100}
            timeout={timeout}
        />
    )
}

export default Spinner;