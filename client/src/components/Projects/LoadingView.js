import React from 'react'

const LoadingView = ()=>{
    return (
        <div style = {styles.container}>
            <i style = {styles.text} class="fas fa-spinner fa-spin"/>
        </div>
    )
}

const styles = {
    container: {
        minHeight: '20vh',
        backgroundColor: '#222831',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottom: '3px solid #D65A31',
        zIndex: 'auto'
    },
    text: {
        fontSize: '40px',
        color: 'white',
        zIndex: 'auto'
    }
}

export default LoadingView