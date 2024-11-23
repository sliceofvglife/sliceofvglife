import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
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
                <Container fluid>
                    <Row className="justify-content-center">
                        <Col lg={6}>
                            <Navbar expand="lg">
                                <Container
                                    className={styles.navbar_container}
                                    fluid
                                >
                                    <Navbar.Brand href="/">
                                        SliceOfVGLife
                                    </Navbar.Brand>
                                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                    <Navbar.Collapse id="basic-navbar-nav">
                                        <Nav
                                            className={[
                                                styles.navbar_list,
                                                "me-auto"
                                            ].join(" ")}
                                        >
                                            <Nav.Link key="home" href="/">
                                                <FontAwesomeIcon
                                                    icon={faHome}
                                                />
                                            </Nav.Link>
                                            {[
                                                {
                                                    href: "/archive",
                                                    label: "Voir les archives",
                                                    text: "Archive"
                                                },
                                                {
                                                    href: "/random",
                                                    label: "Voir un comic aléatoire",
                                                    text: "Au hasard"
                                                },
                                                {
                                                    href: "/about",
                                                    label: "Voir la description du site",
                                                    text: "À propos"
                                                },
                                                {
                                                    href: "/feed",
                                                    label: "Voir le flux RSS",
                                                    text: "RSS"
                                                }
                                            ].map((item) => (
                                                <Nav.Link
                                                    key={item.href.substring(1)}
                                                    href={item.href}
                                                >
                                                    {item.text}
                                                </Nav.Link>
                                            ))}
                                        </Nav>
                                    </Navbar.Collapse>
                                </Container>
                            </Navbar>
                        </Col>
                    </Row>
                </Container>
            </nav>
        );
    }
}

Menu.propTypes = {};

export default connector(Menu);
