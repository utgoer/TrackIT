var timeLine = document.getElementById("timeline-wrap");



function createReleaseCard() {
  var submitBtn = document.getElementById("submitButton");

  var releaseName = document.getElementById("release-name").value;
  var releaseURL = document.getElementById("release-url").value;
  var releaseDescription = $('textarea#release-description').val();
  var releaseComments = $('textarea#release-comments').val();
  var versionNumber = document.getElementById("version-number").value;

  var curday = function(sp) {
    today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //As January is 0.
    var yyyy = today.getFullYear();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;
    return (mm + sp + dd + sp + yyyy);
  };
  var dateFormatted = curday('-');


  var releaseCard =
    '<div class="card release-card">' +
    '<div class="card-header" id="clickableHeader" data-toggle="modal"' +
    'data-target="#release-info-modal"' +
    'onclick="inspectReleaseCard()">' +  
    '<div class="row">' +
    '  <div class="col">' +
    '<h5 class="card-title" id="release-title">' + releaseName + '</h5>' +
    '<p class="card-text" class="text-muted">' + dateFormatted + '</p>' +
    '</div>' +
    '<div class="float-right">' +
    '<p class="card-text version-text" id="version-number">' + versionNumber + '</p>' +
    '</div>' +
    '</div>' +
    '<i class="fa fa-circle"></i>' +
    '</div>' +
    '<div class="card-block">' +
    '<p class="card-text release-description" id="release-description">' + releaseDescription + '</p>' +

    '<form>' +
    '<div class="form-group">' +
    '<label for="release-comment" class="col-form-label">Add Comment:</label>' +
    '  <textarea class="form-control" id="release-comment">' + releaseComments + '</textarea>' +
    '</div>' +
    '</form>' +
    '<div class="d-flex justify-content-around">' +
    '<button type="button resolve-btn" class="btn btn-danger">Delete</button>' +
    '<button type="button resolve-btn" class="btn btn-success">Save</button>' +
    '</div>' +

    '</div>' +
    '</div>' +
    '</div>' +
    '</div>';

  $(document).ready(function() {
    $("#card-columns").append(releaseCard);
  });
}

function inspectReleaseCard(){
    var releaseCard = document.getElementById()


}
