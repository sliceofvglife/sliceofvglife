import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Dispatch } from "redux";
import { connect, ConnectedProps } from "react-redux";
import { dispatchToggleMenu } from "../redux/dispatchers";
import { getMenu } from "../redux/selectors";
import { Actions } from "../redux/actions/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import styles from "./Menu.module.scss";
import { WEBSITE_TITLE } from "@/lib/const";

const MENU_FIX_URL = process.env.NEXT_PUBLIC_MENU_FIX_URL ?? "/";

const mapStateToProps = (state: any) => ({
    menu: getMenu(state)
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => {
    return {
        toggleMenu: dispatchToggleMenu(dispatch)
    };
};

const connector = connect(mapStateToProps, mapDispatchToProps, null, {
    forwardRef: true
});

type ReduxProps = ConnectedProps<typeof connector>;

type MenuProps = ReduxProps & {
    className?: string;
};

type MenuState = {};

class Menu extends React.Component<MenuProps, MenuState> {
    static propTypes: any;

    constructor(props: any) {
        super(props);

        this._handleToggle = this._handleToggle.bind(this);
    }

    _handleToggle() {
        this.props.toggleMenu(!this.props.menu.toggled);
    }

    render() {
        const { className } = this.props;

        return (
            <nav className={[styles.menu, className || ""].join(" ")}>
                <div className="external_container">
                    <Navbar expand="lg" variant="dark">
                        <Container className={styles.navbar_container}>
                            <Navbar.Brand href={MENU_FIX_URL}>
                                {WEBSITE_TITLE}
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse
                                className={styles.navbar_collapse}
                                id="basic-navbar-nav"
                            >
                                <Nav
                                    className={[
                                        styles.navbar_list,
                                        "me-auto"
                                    ].join(" ")}
                                >
                                    <Nav.Link key="home" href={MENU_FIX_URL}>
                                        <FontAwesomeIcon icon={faHome} />
                                    </Nav.Link>
                                    {[
                                        {
                                            href: "archive",
                                            label: "Voir les archives",
                                            text: "Archive"
                                        },
                                        {
                                            href: "random",
                                            label: "Voir un comic aléatoire",
                                            text: "Au hasard"
                                        },
                                        {
                                            href: "about",
                                            label: "Voir la description du site",
                                            text: "À propos"
                                        },
                                        {
                                            href: "feed",
                                            label: "Voir le flux RSS",
                                            text: "RSS"
                                        }
                                    ].map((item) => (
                                        <Nav.Link
                                            key={item.href.substring(1)}
                                            href={`${MENU_FIX_URL}${item.href}`}
                                        >
                                            {item.text}
                                        </Nav.Link>
                                    ))}
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
            </nav>
        );
    }
}

Menu.propTypes = {};

export default connector(Menu);
