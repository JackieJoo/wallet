import React from "react";
import { Dialog, makeStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: 20,
        overflow: "auto",
    },
    closeIcon: {
        position: "absolute",
        right: 0,
        top: 0,
        transform: "translate(17px,-17px)",
        background: theme.palette.secondary.dark,
        color: theme.customColors.white,
        padding: 10,
        borderRadius: 10,
        boxShadow: "3px -3px 10px rgba(0,0,0,0.3)",
    },
}));

const ModalManager = ({ open, close, ...props }) => {
    const classes = useStyles();

    return (
        <Dialog
            open={open}
            onClose={close}
            maxWidth={"xl"}
            BackdropProps={{
                style: {
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                },
            }}
            disableBackdropClick
            PaperProps={{
                style: {
                    overflow: "visible",
                    borderRadius: 15,
                },
            }}
        >
            <CloseIcon
                className={classes.closeIcon}
                fontSize="small"
                onClick={close}
            />

            <div className={classes.root}>{props.children}</div>
        </Dialog>
    );
};

export default ModalManager;

ModalManager.propTypes = {
    open: PropTypes.bool.isRequired,
    close: PropTypes.func.isRequired,
};
