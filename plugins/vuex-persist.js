import VuexPersistence from 'vuex-persist'
 
export default ({ store }) => {
  new VuexPersistence({
  /* your options */
  storage: window.sessionStorage,
  reducer: state => ({
    login: state.login
  })
  }).plugin(store);
}