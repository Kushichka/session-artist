import style from './AuthBtn.module.scss';

const AuthBtn = ({name, type}) => {

    const theme = type === 'fill' ? 
    ({
        color: '#fff',
        backgroundColor: '#007163',
        hover: {
            color: '#007163',
            backgroundColor: 'transparent'
        }
    })
    :
    ({
        color: '#007163',
        backgroundColor: 'transparent'
    })

    return (
        <>
            <button className={style.btn} style={theme}>{name}</button>
        </>
    );
}
 
export default AuthBtn;