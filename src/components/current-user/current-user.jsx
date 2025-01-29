import classes from "./current-user.module.css";


export default function CurrentUser({userName, avatar}) {

    return (
        <div className={classes.container}>
            <img src={avatar} alt="" className={classes.avatar} />
            {userName != "" && <p className={classes.userName}>{userName}</p>}
        </div>
    );
}