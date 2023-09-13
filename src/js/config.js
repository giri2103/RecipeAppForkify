// here into this file we will basically put all the variables that should be constants and should be reused across
//the project and the goal of having this file with all these varibles is that it will allow us to easily configure
// our project by simply changing some of the data that is there in the configuration file that's why it is called
// config.js ofcourse we will not put all the variables here in this file only variables that we do want here are
// the one which are responsible for kind of defining some important data or the application itself one example is
// Api url

// using uppercase in the config file like this means that the variable is never going to be changed

export const API_URL = 'https://forkify-api.herokuapp.com/api/v2/recipes/';
export const TIMEOUT_SEC = 10;
export const RES_PER_PAGE = 10;
export const KEY = '5465ae4e-ead8-40ff-b277-e42e09bbea7e';
export const MODAL_CLOSE_SEC = 2.5;
