import React, { useEffect, useState } from 'react';

class Cookie {
    static getCookie() {
        const cookieString = document.cookie;
        const cookies = cookieString.split("; ");
        let userData = {};

        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].split("=");
            if (cookie[0] === "user") {
                userData = JSON.parse(cookie[1]);
                break;
            }
        }

        return userData;
    }
}

export default Cookie;
