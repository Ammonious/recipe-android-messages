module.exports = (Franz, options) => {
  
   function getUnread() {
       let unreadElement = document.querySelectorAll('.tpEAA.yrs5ff').length;

       Franz.setBadge(unreadElement);
   }

   Franz.loop(getUnread);
};
