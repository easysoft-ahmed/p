
import React from "react";
import AccountsSVG from "./icons/accounts.svg?react";
import HomeSVG from "./icons/home.svg?react";
import StockSVG from "./icons/stock.svg?react";
import PurchSVG from "./icons/purch.svg?react";
import SalesSVG from "./icons/sales.svg?react";
import MoneyMovementSVG from "./icons/money_move.svg?react";
import UsersSVG from "./icons/users.svg?react";
import CartSVG from "./icons/cart.svg?react";
import CartInSVG from "./icons/cartin.svg?react";
import CartOutSVG from "./icons/cartout.svg?react";
import Icon from "@ant-design/icons";

export const HomeIcon = (props) => <Icon component={ () => <HomeSVG  width="25px" height="25px" class="svg_currentColor" /> } {...props} />;
export const AccountsIcon = (props) => <Icon component={ () => <AccountsSVG  width="25px" height="25px" class="svg_currentColor" /> } {...props} />;
export const StockIcon = (props) => <Icon component={ () => <StockSVG  width="25px" height="25px" class="svg_currentColor" /> } {...props} />;
export const PurchIcon = (props) => <Icon component={ () => <PurchSVG  width="25px" height="25px" class="svg_currentColor" /> } {...props} />;
export const SalesIcon = (props) => <Icon component={ () => <SalesSVG  width="25px" height="25px" class="svg_currentColor" /> } {...props} />;
export const MoneyMovementIcon = (props) => <Icon component={ () => <MoneyMovementSVG  width="25px" height="25px" class="svg_currentColor" /> } {...props} />;
export const UsersIcon = (props) => <Icon component={ () => <UsersSVG  width="25px" height="25px" class="svg_currentColor" /> } {...props} />;
export const CartIcon = (props) => <Icon component={ () => <CartSVG  width="25px" height="25px" class="svg_currentColor" /> } {...props} />;
export const CartInIcon = (props) => <Icon component={ () => <CartInSVG  width="25px" height="25px" class="svg_currentColor" /> } {...props} />;
export const CartOutIcon = (props) => <Icon component={ () => <CartOutSVG  width="25px" height="25px" class="svg_currentColor" /> } {...props} />;


