/* global jQuery */
import React, { Component } from "react";

class SelectionTool extends Component {
  render() {
    return (
      <span class="imagecrop-field-selection-tool tool-on active">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
        >
          <path d="M20 18v-14h-14v-4h-2v4h-4v2h4v14h14v4h2v-4h4v-2h-4zm-2-9h-3v-3h3v3zm-8 5v-4h4v4h-4zm4 1v3h-4v-3h4zm-5-1h-3v-4h3v4zm1-5v-3h4v3h-4zm5 1h3v4h-3v-4zm-6-4v3h-3v-3h3zm-3 9h3v3h-3v-3zm9 3v-3h3v3h-3z" />
        </svg>
      </span>
    );
  }
}

export default SelectionTool;

// jquery to handle the image field
jQuery.entwine("ImageCropSelectionTool", function($) {
  //handle the selection tool
  $(".imagecrop-field-selection-tool").entwine({
    onclick: function(e) {
      //get the proper edit form so we can have multiple image selection fields
      let target = this.parent()
        .parent()
        .find(".imagecrop-field-selection");

      //toggle crop mode
      target.cropper("setDragMode", "crop");

      //update the active icon
      $(this)
        .parent()
        .parent()
        .find(".imagecrop-field-toolbar > span")
        .each(function() {
          $(this).removeClass("active");
        });

      $(this).addClass("active");

      $(this)._super();
    },
  });
});