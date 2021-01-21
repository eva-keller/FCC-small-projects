// tabs is an array of titles of each site open within the window
var Window = function(tabs) {
    this.tabs = tabs; // We keep a record of the array inside the object
  };
  
  // When you join two windows into one window
  Window.prototype.join = function (otherWindow) {
    this.tabs = this.tabs.concat(otherWindow.tabs);
    return this;
  };
  
  // When you open a new tab at the end
  Window.prototype.tabOpen = function (tab) {
    this.tabs.push('new tab'); // Let's open a new tab for now
    return this;
  };
  
  // When you close a tab
  Window.prototype.tabClose = function (index) {
  
    // Only change code below this line
  
    var tabsBeforeIndex = this.tabs.splice(0, index); // Get the tabs before the tab
    var tabsAfterIndex = this.tabs.splice(1); // Get the tabs after the tab
    /*tabsAfterIndex should take values starting from index (in this case 2) and 
    remove them from videoWindow array. As we can see that in the current state 
    ([‘Vimeo’, ‘Vine’]), videoWindow does not have index 2 so empty array is returned. 
    Final state:tabsBeforeIndex: [‘Netflix’, ‘YouTube’]
    videoWindow: [‘Vimeo’, ‘Vine’] tabsAfterIndex: [] */
    /*his way, after second line is executed on the current array [‘Vimeo’, ‘Vine’], 
    it will always omit the first value (index 0) and 
    the one with index 1 until the end, resulting in the proper array returned. */
  
    this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Join them together
  
    // Only change code above this line
  
    return this;
   };
  
  // Let's create three browser windows
  var workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Your mailbox, drive, and other work sites
  var socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Social sites
  var videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // Entertainment sites
  
  // Now perform the tab opening, closing, and other operations
  //After this part of the code is executed, our array is [‘FB’, ‘Gitter’, ‘Reddit’, ‘Twitter’, ‘Medium’]
  var finalTabs = socialWindow
    .tabOpen() // Open a new tab for cat memes After adding a ‘new tab’ to the array, 
    //our array is now [‘FB’, ‘Gitter’, ‘Reddit’, ‘Twitter’, ‘Medium’ , ‘new tab’]
    .join(videoWindow.tabClose(2)) // Close third tab in video window, 
    //should supposedly close the third window (index 2 as the count starts from 0) 
    //and return video window without the third window which is ‘Vimeo’ in this case. and join
    .join(workWindow.tabClose(1).tabOpen()); /*This part would close second tab (index 1) in 
    the workWindow [‘GMail’, ‘Inbox’, ‘Work mail’, ‘Docs’, ‘freeCodeCamp’], 
    which would be ‘Inbox’, and after that push a ‘new tab’ to the array, 
    returning [‘GMail’, ‘Inbox’, ‘Work mail’, ‘Docs’, ‘freeCodeCamp’, ‘new tab’] 
    and adding it to the main array for a complete array */
  console.log(finalTabs.tabs);