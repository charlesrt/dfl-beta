//
// For guidance on how to add JavaScript see:
// https://prototype-kit.service.gov.uk/docs/adding-css-javascript-and-images
//

window.GOVUKPrototypeKit.documentReady(() => {
  // Add JavaScript here

  // Add AND and OR to search input on click of links
  var andLink = document.getElementById('andLink');
  var orLink = document.getElementById('orLink');

  if (andLink) {
    andLink.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent the default behavior of the link

      var input = document.getElementById('inputSearch');
      var textToAdd = ' AND '; // String to add

      input.value += textToAdd; // Append the string to the input field
      input.focus(); // Set focus back to the input field
    });
  }
  if (orLink) {
    orLink.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent the default behavior of the link

      var input = document.getElementById('inputSearch');
      var textToAdd = ' OR '; // String to add

      input.value += textToAdd; // Append the string to the input field
      input.focus(); // Set focus back to the input field
    });
  }


  // Remove filter tags on click
  const listItems = document.querySelectorAll('#filter-tags li');

    listItems.forEach((item, index) => {
        item.addEventListener('click', function(e) {
            if (e.target.classList.contains('filter__tag')) {
                e.preventDefault();
                this.remove();
                if (index > 0 && document.querySelectorAll('#filter-tags li').length === 1) {
                  document.getElementById('special-li').remove(); // Remove special-li if all but the first <li> have been removed
              }
            }
        });
    });


    // Add count to number of checkboxes checked in each fieldset
    const fieldsets = document.querySelectorAll('fieldset');
    const countParagraphs = document.querySelectorAll('[id^="filter-count"]');

    fieldsets.forEach((fieldset, index) => {
        const checkboxes = fieldset.querySelectorAll('input[type="checkbox"]');
        const countParagraph = countParagraphs[index];

        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', function() {
                const checkedCheckboxes = fieldset.querySelectorAll('input[type="checkbox"]:checked');
                if (checkedCheckboxes.length > 0) {
                    countParagraph.textContent = `${checkedCheckboxes.length} selected`;
                } else {
                    countParagraph.textContent = '';
                }
            });
        });

        // Check checkboxes on page load
        const checkedOnLoad = fieldset.querySelectorAll('input[type="checkbox"]:checked');
        if (checkedOnLoad.length > 0) {
            countParagraph.textContent = `${checkedOnLoad.length} selected`;
        } else {
            countParagraph.textContent = '';
        }
    });

})

// Nested checkboxes
var checkboxes = document.querySelectorAll('input.subOption'),
    checkall = document.getElementById('option');

for(var i=0; i<checkboxes.length; i++) {
  checkboxes[i].onclick = function() {
    var checkedCount = document.querySelectorAll('input.subOption:checked').length;

    checkall.checked = checkedCount > 0;
    checkall.indeterminate = checkedCount > 0 && checkedCount < checkboxes.length;
  }
}

checkall.onclick = function() {
  for(var i=0; i<checkboxes.length; i++) {
    checkboxes[i].checked = this.checked;
  }
}

