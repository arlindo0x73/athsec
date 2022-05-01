import style from './alert.module.css'


const Alert = ({error,setShowError}) => {
  return (
    <div className={style.alertContainer}>
  <div className={style.alertMessage}>
    <span onClick={()=>setShowError(false)}>X</span>
    <p>{error}</p>
  </div>
    </div>
  );
};

export default Alert;
