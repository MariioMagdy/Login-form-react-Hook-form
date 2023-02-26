import React, { useRef, useState } from "react";
import login from "../../assets/images/Login-img.png";
import LoginAr from "./LoginAr";
import LoginEn from "./LoginEn";

const Login = () => {
    const [lang, setLang] = useState(true);

    //This Fun swap between AR , EN
    const changLang = () => {
        setLang(!lang);
    };

    return (
        <>
            {lang ? (
                <LoginEn login={login} changLang={changLang} lang={lang} />
            ) : (
                <LoginAr login={login} changLang={changLang} lang={lang} />
            )}
        </>
    );
};
export default Login;
