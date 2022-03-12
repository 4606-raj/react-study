const ErrorMessage = (props) => {
    return (
        <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
            <div className="error-message">
                <h1 className="error-header">Error</h1>
                <p className="error">{ props.error }</p>
            </div>
        </div>
    );
}

export default ErrorMessage;