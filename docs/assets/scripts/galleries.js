$(document).ready(function () {
  let pictureGallery = {
    wizardPrang: ['assets/images/wizard-prang-lg.jpg'],
    skullDug2: ['assets/images/skulldug2-lg.jpg'],
    plant: ['assets/images/plant-lg.jpg'],
    maskedAvengers: ['assets/images/masked-avengers-lg.jpg'],
    deathFromAbove: ['assets/images/death-from-above-lg.jpg'],
    luchaLibre: ['assets/images/lucha-libre-lg.jpg'],
    cuchillo: ['assets/images/cuchillo1-lg.jpg'],
    jLoBiafra: ['assets/images/jLoBiafra-lg.jpg'],
    deviac: ['assets/images/deviac1-lg.jpg'],
    bx31: ['assets/images/b-x31-lg.jpg'],
    festival1: ['assets/images/festival-1-lg.jpg'],
    festival2: ['assets/images/festival-2-lg.jpg'],
    festival3: ['assets/images/festival-3-lg.jpg'],
    festival4: ['assets/images/festival-4-lg.jpg'],
    festival5: ['assets/images/festival-5-lg.jpg'],
    newAge: ['assets/images/newAge-lg.jpg'],
    badDj: ['assets/images/bad-dj-lg.jpg'],
    dubStep: ['assets/images/dub-step-lg.jpg'],
    billieHoliday: ['assets/images/billie-holiday-lg.jpg'],
    tomCruise: ['assets/images/tomcruise-lg.jpg'],
    cthulhuSubaru: ['assets/images/cthulhusubaru-lg.jpg'],
    horseUnderWater: ['assets/images/horse-under-water-lg.jpg'],
    octoArm: ['assets/images/octo-arm-lg.jpg'],
    pirateOfTheSkies: ['assets/images/pirate-of-the-skies-lg.jpg'],
    quedgeleyFlyers: ['assets/images/quedgeley-flyers-lg.jpg'],
    quedgeleySwimmers: ['assets/images/quedgeley-swimmers-lg.jpg'],
    quedgeleyFlyer2: ['assets/images/quedgeleyflyer2-lg.jpg'],
    rabbitmo: ['assets/images/rabbitmo3-lg.jpg'],
    skull: ['assets/images/skull-lg.jpg'],
    technoMan: ['assets/images/techno-man-lg.jpg'],
    hestersWay: ['assets/images/hestersWay.png'],
    stMarks: ['assets/images/stMarks.png'],
    vector1: ['assets/images/vector1.png'],
  };

  $('.thumbnail').click(function (e) {
    let clickedPicture = e.currentTarget.id;

    $('#modalTitle').html(
      `<h5 class="modal-title">${clickedPicture.toUpperCase()}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>`
    );
    $('#modalImage').html(
      `<img src="${pictureGallery[clickedPicture]}" class="img-fluid">`
    );
    console.log(clickedPicture);
  });
});
