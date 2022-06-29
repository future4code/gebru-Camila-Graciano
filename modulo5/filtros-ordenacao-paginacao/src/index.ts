import app from "./app";
import { getAllUsersOrdered } from "./endpoints/getAllUsersOrdered ";
import { getUsersByName } from "./endpoints/getUsersByName";
import { getUsersByType } from './endpoints/getUsersByType';
import { getUsersByPages } from './endpoints/getUsersByPages';
import { getUsersFilterAndOrderAndPage } from "./endpoints/getUsersFilterAndOrderAndPage";
import { getAllRecipes } from "./endpoints/getAllRecipes"

app.get("/recipes", getAllRecipes)
app.get("/user", getUsersByName );
app.get("/user/fullsearch", getUsersFilterAndOrderAndPage);
app.get("/user/search", getAllUsersOrdered);
app.get("/user/page", getUsersByPages);
app.get("/user/:type", getUsersByType);