import React from 'react';
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/gamepad.svg"

import "./header.styles.scss";

export default function Header() {
    return (
        <div className="header">
            <Link to="/">
                <Logo className="logo" />
            </Link>
        </div>
    )
}
