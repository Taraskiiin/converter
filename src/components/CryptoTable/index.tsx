import React from "react";
import { observer, inject } from "mobx-react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import { TCoin, TCoinDiff } from "../../types";
import CurrenciesStore from "../../stores/currenciesStore";
import ConverterStore from "../../stores/converterStore";

interface ICryptoTable {
  classes: any;
  currenciesStore?: CurrenciesStore;
  converterStore?: ConverterStore;
}

const CryptoTable = inject(
  "currenciesStore",
  "converterStore"
)(
  observer(({ classes, currenciesStore, converterStore }: ICryptoTable) => {
    const items: TCoin[] = currenciesStore!.getItems;
    const diffObj: TCoinDiff = currenciesStore!.getDiffObj;
    React.useEffect(() => {
      if (currenciesStore) {
        currenciesStore.fetchCoins();
        setInterval(() => {
          currenciesStore.fetchCoins();
        }, 30 * 1000);
      }
    }, []);

    const onClickRow = (coin: TCoin) => {
      if (converterStore) {
        converterStore.setSelectedCoin(coin);
      }
    };

    return (
      <TableContainer component={Paper}>
        <Table stickyHeader className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left"></TableCell>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Full&nbsp;name</TableCell>
              <TableCell align="left">Price</TableCell>
              <TableCell align="left">
                Volume&nbsp;last&nbsp;24&nbsp;hours
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {!items.length
              ? "Loading..."
              : items.map((item) => (
                  <TableRow
                    onClick = {() => onClickRow(item)}
                    className={classes.rowCurrency}
                    hover
                    key={item.name}
                  >
                    <TableCell align="left">
                      <img
                        className={classes.currencyIcon}
                        src={item.imageUrl}
                        alt="Coin icon"
                      />
                    </TableCell>
                    <TableCell align="left">{item.name}</TableCell>
                    <TableCell align="left">{item.fullName}</TableCell>
                    <TableCell
                      className={
                        diffObj[item.name] &&
                        classes[`${diffObj[item.name]}Column`]
                      }
                      align="left"
                    >
                      ${item.price}
                    </TableCell>
                    <TableCell align="left">${item.volume24Hour}</TableCell>
                  </TableRow>
                ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  })
);

export default CryptoTable;
