
import * as React from 'react';

const InAccount = () => {
    return (
        <div>
            <h1>Войти</h1>
            <form>
                <input placeholder="Email"/>
                <input placeholder="Пароль"/>
            </form>
            <div>
                <h3>Нет аккаунта на Toxin</h3>
                <button className="inAccount">ВОЙТИ</button>
            </div>
        </div>
    );
};

export default InAccount;