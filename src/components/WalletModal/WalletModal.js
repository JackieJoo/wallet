import React from "react";
import { Divider, Grid, makeStyles, Typography } from "@material-ui/core";
import HelpOutlineOutlinedIcon from "@material-ui/icons/HelpOutlineOutlined";
import wallets from "../../constants/walletsConfig";
import { connectorNames } from "../../constants/connectors";
import useWallet from '../../hooks/useWallet'

const useStyles = makeStyles((theme) => ({
    root: {
        color: theme.customColors.lightBlack,
    },
    grid: {
        marginTop: 10,
        maxWidth: 300,
    },
    walletBtn: {
        justifyContent: "space-between",
        padding: "8px 20px",
        background: "rgb(239, 244, 245)",
        borderRadius: 15,
        cursor: "pointer",
        "&:hover": {
            background: "rgba(239, 244, 245,0.5)",
        },
    },
    title: {
        color: theme.palette.primary.main,
        fontWeight: 700,
        fontSize: 16,
    },
    learnText: {
        color: theme.palette.primary.main,
        marginTop: 20,
        cursor: "pointer",
        fontWeight: 700,
    },
}));

export const WalletModal = ({ chainId, isBSC }) => {
    const classes = useStyles();
    const { connect } = useWallet(chainId);

    // onError = (errTitle, errMsg) => {
    //     console.log(`WALLET_CONNECT: ${errTitle}`, errMsg);
    // }

    return (
        <div className={classes.root}>
            <Typography
                className="acmeFont"
                variant="h6"
                style={{ marginBottom: 20 }}
            >
                Connect Wallet
            </Typography>
            <Divider />
            <Grid container spacing={1} className={classes.grid}>
                {wallets.filter((i) => isBSC || i.connector !== connectorNames.bsc).map((item, index) => (
                    <Grid item xs={12} key={index}>
                        <div className={`flex ${classes.walletBtn}`} onClick={() => connect(item.connector)}>
                            <Typography className={classes.title}>{item.title}</Typography>
                            <img alt="" src={item.image} />
                        </div>
                    </Grid>
                ))}
            </Grid>
            <Typography className={`flex ${classes.learnText}`}>
                <HelpOutlineOutlinedIcon />
        &nbsp;Learn how to connect
      </Typography>
        </div>
    );
};