function doPreviewOf(item) {
  let entrance = document.getElementById('entrance_' + item).value;
  document.getElementById('preview_' + item).innerText = entrance || "...";
}

function showTabContent(tab, contentToShow) {
  let story_builder_wizard_tabs = document.getElementById('story_builder_wizard_tabs').children;
  Array.from(story_builder_wizard_tabs).forEach(tab => {
    tab.classList.remove('shown')
  });

  tab.classList.add('shown')

  let story_builder_wizard_items = document.getElementById('story_builder_wizard_items').children;
  Array.from(story_builder_wizard_items).forEach(item => {
    item.classList.remove('shown')
  });

  document.getElementById(contentToShow).classList.add('shown');
}

function addScope(inOut) {

  let rand = parseInt(Math.random() * (1 + 100000));

  let currentEntranceState = document.getElementById(`entrance_${inOut}_scope`).innerHTML;
  let newEntranceId = `entrance_${inOut}_scope${rand}`;
  let newEntrancePlaceholer = inOut == 'in' ? 'General aspect to consider' : 'General aspect to not consider';
  let newEntrance = textEntrance(newEntranceId, `removeScope('${inOut}', '${rand}')`, newEntrancePlaceholer);
  document.getElementById(`entrance_${inOut}_scope`).innerHTML = `${currentEntranceState} ${newEntrance}`;

  let currentPreviewState = document.getElementById(`preview_${inOut}_scope`).innerHTML;
  let newPreviewId = `preview_${inOut}_scope${rand}`
  let newPreview= textPreview(newPreviewId, newPreviewId);
  document.getElementById(`preview_${inOut}_scope`).innerHTML = `${currentPreviewState} ${newPreview}`;
}

function removeScope(inOut, id) {
  document.getElementById(`entrance_${inOut}_scope${id}`).remove();
  document.getElementById(`preview_${inOut}_scope${id}`).remove();
}