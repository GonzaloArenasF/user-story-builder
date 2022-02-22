const textEntrance = (id, onButtonClick, placeholder) => {
  return `
    <div id="${id}" class="text-entrance inline">
      <button type="button" class="circle" onclick="${onButtonClick}"> - </button>&nbsp;
      <input
        type="text"
        id="entrance_scope"
        placeholder="${placeholder}"
      />
    </div>
  `
}

const textPreview = (id, name) => {
  return `<span id="${id}" name="${name}" class="text-preview">...</span>`
}