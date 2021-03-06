import style from './show-pwd.module.scss'

interface IOpenPwd {
    handle: () => void
}

function ShowPwd({handle}) {

    return (
        <div role="button" tabIndex={0} className={style.btn} onClick={handle}>
            <svg viewBox="0 0 32 32" className={style.icon}>
                <path d="M16.006 25.812c8.863 0 14.994-7.17 14.994-9.406C31 14.16 24.858 7 16.006 7 7.252 7 1 14.16 1 16.406c0 2.236 6.252 9.406 15.006 9.406zm0-3.242a6.194 6.194 0 01-6.197-6.164c-.012-3.452 2.744-6.164 6.197-6.164 3.419 0 6.185 2.711 6.185 6.164 0 3.364-2.766 6.164-6.185 6.164zm0-3.94c1.228 0 2.246-1.007 2.246-2.224 0-1.228-1.018-2.235-2.246-2.235-1.24 0-2.258 1.007-2.258 2.235 0 1.217 1.018 2.224 2.258 2.224z"></path>
            </svg>
        </div>
    )
}

export default ShowPwd