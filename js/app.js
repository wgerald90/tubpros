/* The TubPros LLC
*
* TODO:
* ====
*   make the navbar opaque on scroll
*   change the team images to silly on hover
*   validation handling in the contat form
*
*
* AUTHOR: Gerald Wells <gerald.endeavor@gmail.com>
*/



/* ######################## NAVBAR ####################### */
//Variables
// const nav = document.getElementById("topNav");
// const screenStart = 0;
// let startingBg = 'rgba(65, 65, 65, 1)';
//
// let siteWindowPos = screenY;
// siteWindowPos.addEventLisener('scroll', () => {
//     if (starWindowPos < 100) {
//         nav.style
//     }
//
//
// })














/* ################### TEAM ######################*/
const teamDiv = document.getElementById('team');

teamDiv.addEventListener('mouseover', (location) => {
    if (location.target.tagName == 'IMG') {
        location.target.style.padding = '20px';
        location.target.style.transform = 'rotateX(25deg)';
    }
});


teamDiv.addEventListener('mouseout', (location) => {
    if (location.target.tagName == 'IMG') {
        location.target.style.padding = '0px';
        location.target.style.transform = '';
    }
});

// loop through the array
// for (let i = 0; i < numImages; i++) {
//     let
// }
//  if ( the image is active) {
//      change the image(k) to its v;
// };

//
// image.addEventLisener('click', () => {
//     images.
// });
