import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    app: {
        margin: 0,
        width: '100vw',
        height: '100vh',
        background: '#f5f5f5'
    },

    flex: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

    heading: {
        fontSize: '200px',
        fontWeight: 'bold',
        textAlign: 'center',
    },

    input_todo: {
        width: '80%'
    },

    submit: {
        height: "40px"
    },

    task_container: {
        margin: '10px 0',
        cursor: 'pointer'
    },

    container: {
        width: '500px',
        minHeight: '300px',
        padding: '10px'
    },
    
    task: {
        flexGrow: 1,
        marginLeft: '10px'
    },

    line_through: {
        textDecoration: 'line-through'
    }
}))